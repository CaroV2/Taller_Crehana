class newCourses extends HTMLElement {

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
        console.log("pinto cursitos bb")
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="styles.css">
            <h1> Cursos </h1>
        `;
    }
}

customElements.define("new-courses", newCourses)
export default newCourses;