# Express 101

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

Now if go to terminal and run "npm start" then the project will run. ("npm run ..." will be for "dev" and others command.). Project's basic structure is ready. Now setup express application.

### Setup Express Application

To install express, run the following command.

```
npm i express
```

We will write down the Node version we are using in the "package.json" file. How to check node version?

```
node -v
```

In "package.json" file, write down the Node version at the end like the below:

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
