function initApp() {
  addCSSFile("app.css");
  //alert("page loaded");
}

async function addCSSFile(name) {
  const style = document.createElement("link");
  style.href = "/" + name; //Requests the CSS file too
  style.type = "text/css";
  style.rel = "stylesheet";
  document.head.append(style);
}
async function addJSFile(name) {
  const script = document.createElement("script");
  script.src = "/" + name; //Requests the JS file too
  script.type = "text/javascript";
  document.head.append(style);
}
