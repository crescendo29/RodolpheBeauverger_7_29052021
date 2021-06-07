const { sequelize, User, Post, Comment } = require("../models");

exports.createComment = async (req, res, next) => {
  const { userUuid, postUuid, comm } = req.body;

  try {
    const user = await User.findOne({ where: { uuid: userUuid } });
    const post = await Post.findOne({ where: { uuid: postUuid } });
    console.log(post);
    const comment = await Comment.create({ comm, userId: user.id, postId: post.id });

    return res.json(comment);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};
exports.getAllComments = async (req, res, next) => {
  try {
    const comments = await Comment.findAll({});

    return res.json(comments);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Something went wrong!" });
  }
};
exports.getOneComment = async (req, res, next) => {
  const uuid = req.params.uuid;
  try {
    const comment = await Comment.findOne({
      where: { uuid },
      include: "post",
    });

    return res.json(comment);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong!" });
  }
};

exports.deleteComment = async (req, res, next) => {
  const uuid = req.params.uuid;
  try {
    const comment = await Comment.findOne({ where: { uuid } });

    await comment.destroy();

    return res.json({ message: "post effacé !" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
};
