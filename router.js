class Router {
  constructor(node, routes) {
    this.node = node;
    this.routes = routes;
  }

  start() {
    this.render();
    window.addEventListener("hashchange", () => {
      this.render();
    });
  }

  activeRoute() {
    const hash = window.location.hash.replace('#', '');
    return this.routes[hash];
  }

  render() {
    this.node.innerHTML = "";
    const component = this.activeRoute();
    if (component) {
      this.node.appendChild(component.render());
    }
  }

}

module.exports = Router;
