class TaskCard extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  get title() {
    return this.getAttribute('title');
  }

  set title(val) {
    this.setAttribute('title', val);
  }

  get currentTime() {
    return this.getAttribute('current-time');
  }

  set currentTime(val) {
    this.setAttribute('current-time', val);
  }

  get previousTime() {
    return this.getAttribute('previous-time');
  }

  set previousTime(val) {
    this.setAttribute('previous-time', val);
  }

  /**
	 * Runs each time the element is appended to or moved in the DOM
   * Here is recommeded adding event listeners
	 */
  connectedCallback() {
    this.render();
  }

  /**
	 * Runs when the element is removed from the DOM or moved using something like
   * Element.append() method.
   * Remove here the event listeners
	 */
  disconnectedCallback() {
    console.log('disconnected', this);
  }

  /**
   * Runs when the value of an attribute is changed on the component
   * @param {String} name     The attribute name
   * @param {String} oldValue The old attribute value
   * @param {String} newValue The new attribute value
   */
  attributeChangedCallback(name, oldValue, newValue) {
    this.render();
  }

  /**
	 * Create a list of attributes to observe
	 * @return  {Array} The attributes to observe
	 */
	static get observedAttributes() {
		return ['title', 'current-time', 'previous-time'];
	}

  /**
   * Render the component into the UI 
   */
  render() {
    const logoTask = this.title.split(' ').join('-').toLowerCase();
    // TODO: replace text content based on timeframe in small tag with class 'prior-time'
    const html  = `
      <div class="component-box">
        <article class="task-card">
          <header class="card-header"></header>
          <main class="card-content">
            <header class="content-header">
              <h2 class="card-title">${ this.title }</h2>
              <span class="card-option"></span>
            </header>
            <div class="times">
              <span class="current-time">${ this.currentTime }hrs</span>
              <small class="previous-time">Last week - ${ this.previousTime }hrs</small>
            </div>
          </main>
        </article>
      </div>
    `;
    const style = `
      <style>
        *,
        ::after,
        ::before {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        .component-box { height: inherit }

        .task-card { 
          position: relative;
          min-width: 280px;
          width: 100%;
          height: inherit;
          background-color: var(--${ logoTask }-color);
          border-radius: var(--cards-radius);
        }

        .card-header {
          width: 100%;
          height: 40px;
          background-image: url('/src/assets/icons/icon-${ logoTask }.svg');
          background-repeat: no-repeat;
          background-position-x: 92%;
          background-position-y: 24%;
        }
        
        .card-content {
          width: 100%;
          height: calc(100% - 40px);
          padding: 2.5rem 2.2rem;
          display: flex;
          flex-direction: column;
          background-color: var(--dark-blue);
          border-radius: var(--cards-radius);
        }
        .card-content:active {
          background-color: hsl(236, 41%, 34%);
          cursor: pointer;
        }
        .card-content:hover { cursor: pointer }
        
        .content-header {
          display: flex;
          justify-content: space-between;
        }

        .card-title { 
          font-size: 1.8rem;
          font-weight: var(--bold-font-weight);
        }
        
        .card-option {
          width: 2.4rem;
          height: 2.4rem;
          mask: url('/src/assets/icons/icon-ellipsis.svg');
          mask-repeat: no-repeat;
          mask-position: center;
          background: var(--pale-blue);
          cursor: pointer;
        }
        .card-option:hover { background: var(--font-color) }
        
        .times {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        
        .current-time {
          font-size: 3.2rem;
          font-weight: 300;
        }
        
        .previous-time {
          color: var(--pale-blue);
          font-weight: 300;
        }

        @media (width >= 920px){
          .times {
            flex-direction: column;
            align-items: flex-start;
            justify-content: space-evenly;
            flex: 1;
          }

          .current-time { font-size: 6.2rem }
        }
      </style>
    `;

    this.shadow.innerHTML = style + html;
  }
}

customElements.define('task-card', TaskCard);

/**
 * 
 * @param {String} word 
 * @returns Word with the initial letter in uppercase
 */
const capitalizeWord = ( word ) => word.charAt(0).toUpperCase() + word.slice(1);