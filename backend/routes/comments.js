const express = require("express");
const router = express.Router();

const commentCtrl = require("../controllers/comments");
const auth = require("../middleware/auth");

router.post("/", auth, commentCtrl.createComment);
router.get("/", auth, commentCtrl.getAllComments);
router.get("/:uuid", auth, commentCtrl.getOneComment);
router.delete("/:uuid", auth, commentCtrl.deleteComment);

module.exports = router;
