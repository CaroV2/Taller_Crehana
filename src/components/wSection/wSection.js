class WSection extends HTMLElement {

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
        console.log("pinto primerita sesión")
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="src/components/wSection/wSection.css">
            <section class="w-section">
            <div class="welcome">
                <p> Hola, <strong>Carolina</strong>, ¡Qué bueno verte! </p>
            </div>

            <section class="containers">
            <div class="column">
            <div class="continue">
                <img src="https://crehana-public-catalog.imgix.net/images/courses/promo-images/34189713/ae24521d.jpg?auto=format&h=350&crop=faces&dpr=2&fit=crop&dpr=2" width="632.74" height="419.43">
            </div>
            </div>

            <div class="column">
            <div class="last-project">
                <h3>Tu último proyecto</h3>
                <div class="rectangle2">
                <img src="https://static.vecteezy.com/system/resources/previews/021/815/786/original/transparent-square-icon-background-png.png">
                <div class="text">
                <p>Empieza tu proyecto del curso:</p>
                <p1>Dibujo Anatómico para Ilustración Digital</p1>
                <button>Iniciar proyecto</button>
                </div>
                </div>
            </div>

            <div class="courses">
                <h3 id ="ctext">Tus cursos</h3>
                <div class="rectangle">
                <img src="https://crehana-public-catalog.imgix.net/images/courses/promo-images/4961831f/3771832d.png?auto=format&w=170&h=112&crop=faces&dpr=2&fit=crop&dpr=1">
                <div class="text">
                <p>Empieza tu proyecto del curso:</p>
                <p1>Creación y conceptualización de series animadas</p1>
                </div>
                </div>
            </div>
            </div>
            </section>
            </section>
        `;
    }
}

customElements.define("w-section", WSection)
export default WSection;