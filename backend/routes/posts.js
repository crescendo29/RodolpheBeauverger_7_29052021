const express = require("express");
const router = express.Router();

const postCtrl = require("../controllers/posts");
const multer = require("../middleware/multer-config");
const auth = require("../middleware/auth");

router.post("/", auth, postCtrl.createPost);
router.get("/", auth, postCtrl.getAllPosts);
router.get("/:uuid", auth, postCtrl.getOnePost);
router.put("/:uuid", auth, postCtrl.updatePost);
router.delete("/:uuid", auth, postCtrl.deletePost);

module.exports = router;
