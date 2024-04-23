# Express 101

## Table of Contents

- [Create A Fresh Project](#create-a-fresh-project)
- [Explore Express Methods](#explore-express-methods)
- [Explore Application Object](#explore-application-object)
- [Understand Request](#understand-request)
- [Understand Response](#understand-response)
- [Middleware Pipeline](#middleware-pipeline)

## Create A Fresh Project

Go to your terminal and run the following command.

```
npm init -y

```

After that, create an "index.js" file in root directory. Go to the "package.json" file and update "script" section like the below:

```
"scripts": {
    "start": "node index.js"
  },
```

Now if go to terminal and run "npm start" then the project will run. Note that "run" prefixer is not required for "npm start" and "npm test" but it's required for "dev" and others command. Project's basic structure is ready. Now setup express application.

### Setup Express Application

To install express, run the following command.

```
npm i express
```

We will write down the Node version we are using in the "package.json" file. How to check node version?

```
node -v
```

In "package.json" file, write down the Node version like the below:

```
"engines": {
    "node": "20.11.0"
  }
```

Now go to "index.js" file and setup express application.

1. Import express (old style and this is called common js module system).

```
const express = require("express");
// import express from "express"; (new style and this is called ecmascript module system)
```

2. Create the desire application using express function call.

```
const app = express();
```

3. Now we need to listen this application.

```
app.listen(4000, () => {
  console.log("Server is listening on PORT 4000");
});
```

Our application is ready.
Full code of 'index.js' file

```
const express = require("express");

const app = express();

app.listen(4000, () => {
  console.log("Server is listening on PORT 4000");
});
```

### Send HTML to Browser

If you change any code, restart the server must (as we not yet use "nodemon")

1. Handle route ( app.get(route, controller) )

```
// index.js

app.get("/", (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>NodeJS 101 Course</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 16px;
        }
        .container {
          width: 50%;
          margin: 2rem auto;
          padding: 2rem;
          background: #dddeee;
        }
        .text{
            margin-top: 0.5rem
        }
      </style>
    </head>
    <body class="container">
      <h1>Hello NodeJS, You are Really Awesome!</h1>
      <p class="text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, mollitia!
        Numquam, ipsa, velit voluptatibus reiciendis totam excepturi molestiae
        nesciunt ullam quae soluta modi quo, pariatur aperiam perspiciatis quasi
        dolore nam.
      </p>
    </body>
  </html>
  `);
});
```

### Understand The Pipeline

![Pipeline_Image](./img/image_one.png)

Every route needs a handler function. Handler function's signature is -

```
// It could be an arrow function.

function handler(req, res, next) {
  // read request object
  // process request
  // response back the result
}
```

### Install Nodemon

```
npm i -D nodemon
```

--save-dev ( sort form is '-D' )

This is not a dependency of the project, it is developer dependency. That's why we use "-D" for developer dependency. It'll save as dev dependency. When the production build is done, dev dependencies will be removed to reduce the file size. There will only be application dependencies required.

Add a new script inside package.json file ( "dev" is added ).

```
"scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  },
```

Now we must write in terminal "npm run dev" not "npm dev". Now no need to restart the server if you change any code.

### Handle Multiple Routes

```
// index.js

app.get('/', (req,res)=>{
  res.send(`<h1>I am Home Route</h1>`)
})

app.get('/about', (req,res)=>{
  res.send(`<h1>I am About Route</h1>`)
})

app.get('/help', (req,res)=>{
  res.send(`<h1>I am Help Route</h1>`)
})
```

### Send HTML File

Create a file named 'pages' in the root directory and create a folder named 'index.html' inside it.

```
// pages/index.html

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>HTML Coming from File</title>
  </head>
  <body>
    <h1>HTML Coming from File</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci
      nesciunt cumque sint quam quae repellat perferendis, aliquam accusamus
      voluptates exercitationem aperiam molestiae a, itaque natus quaerat
      mollitia tenetur repudiandae!
    </p>
  </body>
</html>
```

To send this HTML file, go to 'index.js' file and import 'fs' module.

```
const fs = require("fs");

app.get("/htmlfile", (req, res) => {
  fs.readFile("./pages/index.html", (err, data) => {
    if (err) {
      console.log("Error ", err);
      res.send(`<h1>Something Went Wrong</h1>`);
    } else {
      res.write(data);
      res.end();
    }
  });
});
```

By doing this, our first module is completed successfully.

## Explore Express Methods

### Important Express Methods:

- express.json()
- express.Router()
- express.static()
- express.urlencoded()

Read [express methods](https://expressjs.com/en/5x/api.html#express) documentation to gain details knowledge.

![Express_Methods](./img/express_methods.png)

## Explore Application Object

### Important Application Object:

- app.get()
- app.post()
- app.put()
- app.delete()
- app.listen()
- app.use()
- app.route()

Read [express application](https://expressjs.com/en/5x/api.html#app) documentation to gain details knowledge.

![Express_Application](./img/express_application.png)

## Understand Request

### Important Request Object:

Properties

- req.body
- req.cookies (It's needed to work with authentication.)
- req.params (It's important for dynamic routing.)
- req.query
- req.hostname
- req.ip
- req.method

Methods

- req.accepts()
- req.get()

Read [express request object](https://expressjs.com/en/5x/api.html#req) documentation to gain details knowledge.

![Express_Request_Object](./img/request_object.png)

## Understand Response

### Important Response Object

Methods

- res.append()
- res.attachment()
- res.cookie()
- res.download()
- res.json()
- res.jsonp()
- res.send()
- res.redirect()
- res.render()
- res.get()
- res.set()
- res.send()
- res.sendFile()
- res.status()
- res.sendStatus()
- res.format()
- res.end()

Read [express request object](https://expressjs.com/en/5x/api.html#res) documentation to gain details knowledge.

![Express_Request_Object](./img/response_object.png)

## Middleware Pipeline

Another important concept like request and response is middleware. With its help we do the most important things. We can use middleware anywhere. If we are only working with request and response, we can do almost all the task.

##### Then why do we use Middleware?

When we say we need a separate handler for each task, it means that we will have some tasks that are very common and the tasks we need to do for each request. In this case if we can use middleware then we can complete these repetitive tasks in a specific place, but if we don't use middleware we have to write duplicate codes continuously.

![Middleware_Pipeline](./img/middleware.png)
