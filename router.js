class Router {
  constructor(node) {
    this.node = node;
  }

  start() {
    this.render();
    window.addEventListener("hashchange", () => {
      this.render();
    });
  }

  activeRoute() {
    const hash = window.location.hash;
    return hash.replace('#', '');
  }

  render() {
    this.node.innerHTML = "";
    const p = document.createElement('p');
    p.innerText = this.activeRoute();
    this.node.appendChild(p);
  }

}

module.exports = Router;
