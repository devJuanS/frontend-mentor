customElements.define(
  'footer-frontend-mentor',
  class extends HTMLElement {
    constructor() {
      super();

      const html = `
      <footer class="footer">
        <div class="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
          Coded by <a href="https://github.com/devJuanS" target="_blank">devJuanS</a>.
        </div>
      </footer>
    `;

      const style = `
      <style>
        .footer {
          position: fixed;
          bottom: 0;
          height: 2em;
          width: 100vw;
          display: flex;
          align-items: center;
          justify-content: center;
          color: hsla(0, 0%, 100%, 0.7);
          font-size: calc(11rem / 16);
          background-color: hsla(235, 18%, 26%, 0.9);
          border-radius: 10px 10px 0 0;
        }

        .attribution {
          text-align: center;
        }

        .attribution a {
          color: hsl(228, 54%, 76%);
        }
      </style>
    `;

      this.innerHTML = style + html;
    }
  }
);
