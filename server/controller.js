const bcrypt = require('bcrypt')

module.exports = {
    register: async(req, res) => {
      
            //What does the function need to run properly?
            const {username, email, password} = req.body,
                  db = req.app.get('db');
    const profilePicture = `https://robohash.org/${username}`
            //Does a user with this email already exist?
            const foundUser = await db.check_user({username});
            if(foundUser[0]){
                return res.status(400).send('Username already in use')
            }
    
            //Hashing the users password
            let salt = bcrypt.genSaltSync(10),
                hash = bcrypt.hashSync(password, salt);
    
            //Registering the user, and sending the session client-side
            const newUser = await db.register_user({username, email, password: hash, profilePicture});
            req.session.user = newUser[0];
            res.status(201).send(req.session.user);
    },

    
    login: async(req, res) => {
        //What does this function need to run properly?
        const {username, password} = req.body,
              db = req.app.get('db');
//console.log(req)
        //Checks if user is already in the database, based on username
        const foundUser = await db.check_user({username});
        if(!foundUser[0]){
           
            return res.status(400).send('Username not found');
        }
         //Compare the passwords to make they match
         const authenticated = bcrypt.compareSync(password, foundUser[0].password);
         if(!authenticated){
            
             return res.status(401).send('Password is incorrect')
         }
 //Set user on session, send it client-side
        delete foundUser[0].password;
         req.session.user = foundUser[0];
         res.status(202).send(req.session.user);
    },
    logout: (req, res) => {
        //logout clears out the session of user data
        //console.log(req.session.user, "req.session controller")
        req.session.destroy();
        res.sendStatus(200);
    },
    logMeIn: async(req, res) =>{
const db = req.app.get('db')
if(req.session.user){
console.log(req.session.user.user_id,"logMeIN controller")
const me = await db.get_user_id(req.session.user.user_id)
   res.status(200).send(me[0])
}
    }

}

