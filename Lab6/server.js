const Koa = require('koa'),
    bodyParser = require("koa-bodyparser");

const HomeRouter = require("./routes/home.router");

const PostRouter = require("./routes/post.router");

//This will execute the mongo db related file
require('./dal');



//Creating the Koa Application
const app = new Koa();

//Registering the bodyParser ---
app.use(bodyParser());
// Get the request from the body and convert it to the as applicable and make it available for us (Convert to the actual type)
/*Ex : In this case we are going to ude JSON in the body , so this body parser will understand the body is in JSON
by looking at the content type header (content type header indicate what type of value are in the body )

**Header looks like something like this**
Our header value is Content-Type = application/json

Stuff that inside the app.use() is called as middleware. That;s mean bodyParser is called as middleware

 */

//Following are middleware routes , they are registering along with the allowed routes.
/*
allowed methods -> Methods that are allowed in particular routes
Ex: In the HomeRouter we are having get and post routes

 */

//Middleware Routes
/*app.use(HomeRouter.routes)
    .use(HomeRouter.allowedMethods());*/

//Middleware Routes

app.use(PostRouter.routes)
    .use(PostRouter.allowedMethods());





app.use(ctx => {
    ctx.body = 'Hello';
});
app.listen(3000);
console.log('Application is running on port 3000');