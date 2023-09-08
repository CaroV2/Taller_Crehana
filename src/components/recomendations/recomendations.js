class Recomendations extends HTMLElement {

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
        console.log("pinto recomendacionitas")
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="styles.css">
            
            <section class="rbody">
            <div class="r-text">
                <p>Recomendaciones</p>
                <p>Comunidad</p>
                <p>Actividad</p>
            </div>
            
            <h1>Conoce nuestras academias</h1>

            <section class="recomendation">
            <div class="academia">
            <h3>Academia de Excel</h3>
            <p>3 RUTAS DE APRENDIZAJE</p>
            <div class = "image">
            <img id="second" src="https://crehana-public-catalog.imgix.net/images/landing_academy/content-landing/808dea74/4998bf19.png?auto=format&w=160&h=160&dpr=2&fit=crop&dpr=1">
            </div>
            </div>

            <div class="academia">
            <h3>Academia de Aprendizaje de usuario</h3>
            <p>3 RUTAS DE APRENDIZAJE</p>
            <div class = "image">
            <img src="https://crehana-public-catalog.imgix.net/images/landing_academy/content-landing/e946d355/702ff581.png?auto=format&w=160&h=160&dpr=2&fit=crop&dpr=2">
            </div>
            </div>

            <div class="academia">
            <h3>Academia de Inteligencia Emocional</h3>
            <p>6 RUTAS DE APRENDIZAJE</p>
            <div class = "image">
            <img src="https://crehana-public-catalog.imgix.net/images/landing_academy/content-landing/17d3986e/dec3a530.png?auto=format&w=160&h=160&dpr=2&fit=crop&dpr=1">
            </div>
            </div>

            <div class="academia">
            <h3>Academia de Wellnes</h3>
            <p>5 RUTAS DE APRENDIZAJE</p>
            <div class = "image">
            <img id="second" src="https://crehana-public-catalog.imgix.net/images/landing_academy/content-landing/fdf5065f/d1c506a7.png?auto=format&w=160&h=160&dpr=2&fit=crop&dpr=1">
            </div>
            </div>
            </section>
            </section>
        `;
    }
}

customElements.define("my-recomendation", Recomendations)
export default Recomendations;