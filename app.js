var express               = require("express"),
    app                   = express(),
    bodyParser            = require("body-parser"),
    mongoose              = require("mongoose"),
    methodOverride        = require("method-override"),
    flash                 = require("connect-flash"),
    passport              = require("passport"),
    LocalStrategy         = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose"), 
    Campground            = require("./models/campground"),
    User                  = require("./models/user"),
    Comment               = require("./models/comment"),
    seedDB                = require("./seeds")
 
//requiring routes 
var indexRoutes      = require("./routes/index")
    campgroundRoutes = require("./routes/campgrounds"),
    commentRoutes    = require("./routes/comments"),
        

//seedDB();  //seed the database
mongoose.connect("mongodb://localhost/yelp_camp_v11"); 
app.use(express.static("public")); 
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine","ejs");
app.use(methodOverride("_method"));
app.use(flash()); 

//PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: "Once again,Welcome to the world of arkarn04",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser()); 
passport.deserializeUser(User.deserializeUser()); 

//a kind of middleware: whatever fn we call here will be provided on every route
app.use(function(req,res,next){
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
});

app.use(indexRoutes);
app.use("/campgrounds",campgroundRoutes);
app.use("/campgrounds/:id/comments",commentRoutes);


app.listen(3000,function(){
    console.log("The YelpCamp Server has Started!");
});