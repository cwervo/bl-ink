customElements.define('bl-ink',
class extends HTMLElement {
    constructor() {
        super();
        let template = document.createElement('template');
        template.innerHTML = `
        <style>
            .blink-element {
                animation: blink;
                animation-timing-function: var(--blink-animation-timing-function, linear);
                animation-duration: var(--blink-animation-duration, 0.5s);
                animation-iteration-count: var(--blink-animation-iteration-count, infinite);
                animation-direction: var(--blink-animation-direction, alternate);
            }
            @keyframes blink {
                0% { opacity: 0 }
                100% { opacity: 1 }
            }
        </style>
        <span class="blink-element">
            ${this.innerHTML || ""}
        </span>
        `;
        let templateContent = template.content;
        console.log(this.innerHTML)

        const shadowRoot = this.attachShadow({mode: 'open'})
            .appendChild(templateContent.cloneNode(true));
    }
})
