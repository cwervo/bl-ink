customElements.define('bl-ink',
class extends HTMLElement {
    constructor() {
        super();
        // let template = document.getElementById('mar-quee');
        let template = document.createElement('template');
        // CSS taken from: https://stackoverflow.com/a/44805879
        template.innerHTML = `
        <style>
            .blink-element {
                animation: blink;
                animation-timing-function: var(--marquee-animation-timing-function, linear);
                animation-duration: var(--marquee-animation-duration, 0.5s);
                animation-iteration-count: var(--marquee-animation-iteration-count, infinite);
                animation-direction: var(--blink-animation-direction, alternate);
            }
            @keyframes blink {
                0% { opacity: 0 }
                100% { opacity: 1 }
            }
        </style>
        <span class="blink-element">
            ${this.innerHTML || "EXAMPLE TEXT"}
        </span>
        `;
        let templateContent = template.content;
        console.log(this.innerHTML)

        const shadowRoot = this.attachShadow({mode: 'open'})
            .appendChild(templateContent.cloneNode(true));
    }
})
