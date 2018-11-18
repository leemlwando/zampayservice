module.exports = (req,res,next)=>{
    console.log(req.isAuthenticated())
    res.render("client/dashboard/index")
}