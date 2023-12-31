class Footer extends HTMLElement {

    static get customElements() {
        return [];
    }

    constructor() {
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback() {
        this.render()
    }

    
    attributeChangedCallback(propName, _, newValue) {
        this[propName] = newValue;
        this.render();
    }

    render() {
        console.log("pinto piecito")
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="styles.css">
            <h1> Pie de página </h1>
            `
    }
}

customElements.define("my-footer", Footer)
export default Footer;