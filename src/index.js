import * as components from "./components/index.js";

class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <my-header></my-header>
            <w-section></w-section>
            <my-recomendation></my-recomendation>
            <new-courses></new-courses>
            <my-footer></my-footer>
        `
    }
}

customElements.define("app-container", AppContainer);