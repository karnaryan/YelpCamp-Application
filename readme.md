# YelpCamp(201)

* Add landing Page
* Add campgrounds Page that lists all campgrounds

Each Campground has:

* Name
* Image


# Layout and Basic Styling(202)


* Create our header and footer partials
* Add in Bootstrap



# Creating new camgrounds(203)

* Setup new campground POST route
* Add in Body Parser
* Setup route to show form
* Add basic unstyled form

# Style the campgrounds Page

* Add a better header/title
* Make campgrounds display in grid

# Add Mongoose

* Install and configure mongoose
* Setup campground model
* Use campground model inside of our routes

# Show Page
* Review the RESTful routes we've seen so far
* Add description to our campground model
* Show db.collection.drop()
* Add a show route/template

RESTFUL ROUTES

name   url            verb   desc.
=======================================================
INDEX  /dogs          GET    Display a list of all dogs
NEW    /dogs/new      GET    Displays form to make a new dog
Create /dogs          POST   Add a new dog to DB
SHOW   /dogs/:id      GET    Shows info about one dog


# Refactor Mongoose Code
* Create a models directory
* Use module.exports 
* Require everything Correctly

   # Add seeds file
* Add a seeds.js file
* Run the seeds file every time the server starts

   # Add the comment model!
* Make our errors go away
* Display comments on campground show page

   # Create New/Create
* Discuss nested routes
* Add the comment new and create routes
* Add the new comment form


INDEX   /campgrounds
NEW     /campgrounds/new
CREATE  /campgrounds
SHOW    /campgrounds/:id

NEW     /campgrounds/:id/comments/new    GET
CREATE  /campgrounds?:id/comments        POST

# Auth pt.1 - Add User Model
* install all packages needed for auth
* define user model

## Auth Pt.2 - Register
* Configure Passport
* Add Reister routes
* Add register template

## Auth Pt.3 - Login
* Add Login Routes
* Add Login Form

# Auth Pt.4 - Logout/Navbar
* Add logout route
* Prevent user from adding a comment if not signed in
* Add links to navbar

# Auth Pt.5 - Show/Hide Links
* Show/hide auth links in navbar correctly

## Refactor the routes
* Use Express router to recognize all routes

# Users  +  Comments
* Associate users and comments
* Save author's naem to a comment automatically 


## Users + Campgrounds
* Prevent an unauthenticated user from creating a campground
* Save username+id to newly created campground 

# Editing Campgrounds
* Add Method-Override
* Add Edit Route for Campgrounds
* Add Link to Ed it Page
* Add Update Route
* Fis $set problem

# Deleting  Campgroun ds
* Add Destroy Route
* Add Delete button

# Authorization
* User can only edit his/her campgrounds
* User can only delete his/her campgrounds
* Hide/Show edit and delete buttons

# Editing Comments
* Add edit route for comments
* Add Edit button
* Add update route

    <!-- /campgrounds/:id/editz
    /campgrounds/:id/comments/:comment_id/edit -->

# Deleting Comments
* Add Destroy route
* Add Delete button

Campground Destroy Route : /campgrounds/:id
Comment Destroy Route:     /campgrounds/:id/comments/:comment_id

# Authorization Part 2: Comments
* User canmonly edit his/her comments
* User can only delete his/her comments
* Hide/Show edit and delete buttons
* Refactor middleware

# Adding in Flash
* Demo working version
* Install and configure connect-flash
* Add bootstrap alerts to header