function initApp() {
  addCSSFile("app.css");
  if (userIsAuthenticated() === false) {
    window.location.replace("authenticate");
  }
  /*const darkModeEnabled =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  console.log(darkModeEnabled);*/
}
function userIsAuthenticated() {
  return false;
}

async function sendGetRequest(requestquery, callback = null) {
  const req = new XMLHttpRequest();
  req.open("GET", requestquery, true);
  req.responseType = "document";
  req.send();

  req.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log(req.responseXML);
      if (callback != null) {
        callback(req.responseXML.body);
      }
    }
  };
}
async function addCSSFile(name) {
  const style = document.createElement("link");
  style.href = name; //Requests the CSS file too
  style.type = "text/css";
  style.rel = "stylesheet";
  document.head.append(style);
}
async function addJSFile(name) {
  const script = document.createElement("script");
  script.src = name; //Requests the JS file too
  script.type = "text/javascript";
  document.head.append(script);
}
