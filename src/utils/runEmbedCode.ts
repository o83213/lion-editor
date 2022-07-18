const setHTMLWithScript = (container: HTMLElement, embedCode: string) => {
  container.innerHTML = embedCode;
  console.log(container);
  const scripts = container.querySelectorAll("script");
  console.log(scripts);
  for (let script of scripts) {
    runScript(script);
  }
};
const runScript = (script: HTMLScriptElement) => {
  const newScript = document.createElement("script");
  newScript.innerHTML = script.innerHTML;
  const src = script.getAttribute("src");
  if (src) {
    newScript.setAttribute("src", src);
  }
  document.head.appendChild(newScript);
  document.head.removeChild(newScript);
};
export { setHTMLWithScript };
