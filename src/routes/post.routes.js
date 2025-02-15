const {authJwt} = require('../middleware');
const controller = require('../controllers/post.controller');

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            'Access-Control-Allow-Headers',
            'x-access-token, Origin, Content-Type, Accept'
        );
        next();
    });

    app.get('/api/posts', [authJwt.verifyToken], controller.getPosts);
    app.get('/api/posts/:id', [authJwt.verifyToken], controller.getPostById);
    app.post('/api/posts', [authJwt.verifyToken, authJwt.isAdmin], controller.createPost);
    app.put('/api/posts/:id', [authJwt.verifyToken, authJwt.isAdmin], controller.updatePost);
    app.delete('/api/posts/:id', [authJwt.verifyToken, authJwt.isAdmin], controller.deletePost);
}