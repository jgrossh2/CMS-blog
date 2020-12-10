const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');

router.get('/', (res, req) => {
    Post.findAll({
        where: {
            user_id: req.session.user_id
        },
        attributes: [
            
        ]
    })
})