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
            <link rel="stylesheet" href="./src/components/newCourses/newCourses.css">

            <section>
            <h1> Cursos sobre manualidades y cocina </h1>

            <section class="courses">
            <div class="rectangle">
            <h3>Tecnicas de bordado con pedrería</h3>
            </div>
            </section>
            </section>
        `;
    }
}

customElements.define("new-courses", newCourses)
export default newCourses;