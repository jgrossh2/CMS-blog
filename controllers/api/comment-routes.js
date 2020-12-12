const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    Comment.findAll()
    .then(dbCommentData => {
        res.json(dbCommentData)
        res.render('post-info')
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/', withAuth, (req, res) => {
    Comment.create({
        comment_text: req.body.body,
        user_id: req.session.user_id,
        post_id: req.body.postId
    })
    .then(dbCommentData => {
    res.json(dbCommentData)
    res.render('post-info')
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;