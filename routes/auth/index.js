module.exports = {
    client:{
        register:{
                get:(req,res,next)=>res.render("client/auth/register/index")
            },
        login:{
            get:(req,res,next)=>res.render("client/auth/login/index")
        },
        ForgotPassword:{
            get:(req,res,next)=>res.render("client/auth/forgot-password/index")
        }
    },
    admin:{}
}