function openNewPopupWindow(/*src, */ srcdoc = null) {
  const iframe = document.createElement("iframe");
  //iframe.src = src;
  if (srcdoc != null) {
    iframe.srcdoc = srcdoc;
  }
  document.getElementById("ui-container").appendChild(iframe);
}
