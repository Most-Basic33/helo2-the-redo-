module.exports = {
    createPost: (req, res) =>{
        const {userId, postUrl, content, title} = req.body,
        db =  req.app.get('db');

        db.create_post(userId, title, postUrl, content)
        .then(post =>res.sendStatus(200))
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
    .then(post=>res.status(200).send(post))
    .catch(err=>console.log(err))
},
deletePost: (req, res) =>{
    const {id} = req.params,
    db = req.app.get('db')
    console.log(id, "controller ID")
    db.delete_post(id)
    .then(()=>res.sendStatus(200))
    .catch(err=> res.status(500).send(err))
}
}