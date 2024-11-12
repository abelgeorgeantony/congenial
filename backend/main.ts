// @deno-types="npm:@types/express@4.17.15"
import express from "npm:express@4.18.2";

const app = express();

const files: { request: string; name: string; location: string }[] = [
  {
    request: "/",
    name: "app.html",
    location: "/website/app.html",
  },
  {
    request: "/authenticate",
    name: "authenticate.html",
    location: "/website/assets/html/authenticate.html",
  },
  {
    request: "/app.css",
    name: "app.css",
    location: "/website/assets/css/app.css",
  },
  {
    request: "/authenticate.css",
    name: "authenticate.css",
    location: "/website/assets/css/authenticate.css",
  },
  {
    request: "/appinit.js",
    name: "appinit.js",
    location: "/website/assets/js/appinit.js",
  },
  {
    request: "/popupwindow.js",
    name: "popupwindow.js",
    location: "/website/assets/js/popupwindow.js",
  },
  {
    request: "/authenticate.js",
    name: "authenticate.js",
    location: "/website/assets/js/authenticate.js",
  },
  {
    request: "/favicon.ico",
    name: "favicon.ico",
    location: "/website/assets/images/congenial_icons/white/favicon-96x96.png",
  },
];
// Middleware that will handle file requests
app.use((req, res, next) => {
  console.log(req.path);
  const requested = req.path;
  for (var file of files) {
    if (requested === file.request) {
      res.sendFile(file.location, { root: "../" });
      break;
    }
  }
  next();
});

app.listen(8000);
