const createEditor = (hostElementId) => {
  const hostElement = document.getElementById(hostElementId);
  const container = document.createElement("div");
  container.classList.add("container");
  hostElement.append(container);
};
export { createEditor };
