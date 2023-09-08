class Header extends HTMLElement {

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
        console.log("pinto cabecita")
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./src/components/header/header.css">

            <section class="banner">
            <div class="logo">
                <img src="https://storage.builderall.com//franquias/2/7222696/editor-html/10493480.png" width="87" height="20">
            </div>

            <div class="icon">
                <img src="https://www.latinamericancoalition.org/wp-content/uploads/2021/11/birrete.png" width="24" height="24">
                <img src="https://redcatstudios.net/wp-content/uploads/2014/10/WordPress-Shopping-Carts-Miami.png" width="24" height="24">
                <img src="https://www.citypng.com/public/uploads/small/116389850303ufdx83go2mmx7wz9iodbnh27afxknnf9bofncviac8z2n9w4rwksenu7mwokevjmznxdga1dt7xhiquhtxbvjjjdrqb3pt5rhuk.png" width="24" height="24">
                <img src="https://www.montessoriivyleague.com/wp-content/uploads/2018/10/smiley-face-volunteer-icon-300x300.png" width="32" height="32">
            </div>
            </section>
        `;
    }
}

customElements.define("my-header", Header)
export default Header;