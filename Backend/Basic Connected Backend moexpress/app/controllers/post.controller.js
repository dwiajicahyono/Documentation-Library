const db = require('../models');

const Post = db.posts;

exports.findAll = (req, res) => {
  Post.find()
    .then((result) => {
      res.send(result);
    }).catch((err) => {
      res.status(500).send({
        message: err.message || 'some eror while retrieving data',
      });
    });
};

exports.create = (req, res) => {
  const post = new Post({
    title: req.body.title,
    body: req.body.body,
    published: req.body.published ? req.body.published : false,
  });
  post.save(post)
    .then((result) => {
      res.send(result);
    }).catch((err) => {
      res.status(409).send({
        message: err.message || 'some eror while create post',
      });
    });
};

exports.findOne = (req, res) => {
  const { id } = req.params;

  Post.findById(id).then((result) => {
    res.send(result);
  }).catch((err) => {
    res.status(409).send({
      message: err.message || 'some eror while showpost',
    });
  });
};

exports.update = (req, res) => {
  const { id } = req.params;

  Post.findByIdAndUpdate(id, req.body).then((result) => {
    if (!result) {
      res.status(404).send({
        message: 'No post found',
      });
    }
    res.send({
      message: 'Update was successful',
    });
  }).catch((err) => {
    res.status(409).send({
      message: err.message || 'some eror while update post',
    });
  });
};

exports.delete = (req, res) => {
  const { id } = req.params;

  Post.findByIdAndRemove(id).then((result) => {
    if (!result) {
      res.status(404).send({
        message: 'No post found',
      });
    }
    res.send({
      message: 'Post was deleted successfully !',
    });
  }).catch((err) => {
    res.status(409).send({
      message: err.message || 'some eror while delete post',
    });
  });
};
