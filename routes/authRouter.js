const express = require("express");
const router = express.Router();
const controller = require("../controllers/authController");


router.get("/login", controller.showLogin);
router.get("/register", controller.showRegister);
router.get('/logout', controller.logout);

router.post("/register", controller.register);
router.post("/login", controller.login);


router.use(controller.isLoggedIn);
router.get("/", controller.showIndex);
router.get("/profile", controller.showProfile);

module.exports = router;
