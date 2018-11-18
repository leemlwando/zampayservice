const express = require("express");
const router = express.Router();
const home = require("./home");
const dashboard = require("./dashboard");
const passport = require("passport");
const auth = require("./auth");
const configs = require("../configs/passport");

/**
 *  / OR HOME OR INDEX
*/


router.get("/",home.get);

/**
 *  AUTHENTICATION @{login}
*/
router.get("/auth/client/login",auth.client.login.get);

/**
 *  AUTHENTICATION @{register}
*/

router.get("/auth/client/register",auth.client.register.get);


/**
 * AUTHENTICATION @{Forgot-Password}
*/

router.get("/auth/client/forgotpassword",auth.client.ForgotPassword.get);


/**
 * DASHBOARD
*/
    //@{client-home}
    router.get("/client/dashboard",dashboard.client.home.get);

    router.get("/admin/dashboard",configs.isAuthenticated,dashboard.client.home.get);

module.exports = router;