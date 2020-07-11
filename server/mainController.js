module.exports = {
    createPost: (req, res) =>{
        const {userId, postUrl} = req.body
        db =  req.app.get('db');

        db.create_post(userId, postUrl)
        .then(post =>res.send(200).send(post))
        .catch(err => res.status(500).send(err))
    },
    getUserPosts: (req, res) =>{
         const db = req.app.get('db');
        // console.log(req)
db.get_user_posts()
.then(post=>res.status(200).send(post))
.catch(err=>res.status(500).send(err))
    
},
getSinglePost: (req, res) =>{
    const db = req.app.get('db')
    const {id} = req.params;

    db.get_posts(id)
    .then(post=>{res.status(200).send(post)
    console.log(post)
    })
    .catch(err=>console.log(err))
}

}