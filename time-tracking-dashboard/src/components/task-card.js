class TaskCard extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  get name() {
    return this.getAttribute('name');
  }

  set name(val) {
    this.setAttribute('name', val);
  }

  get time() {
    return this.getAttribute('time');
  }

  set time(val) {
    this.setAttribute('time', val);
  }

  get priorTime() {
    return this.getAttribute('prior-time');
  }

  set priorTime(val) {
    this.setAttribute('prior-time', val);
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
		return ['name', 'time', 'prior-time'];
	}

  /**
   * Render the component into the UI 
   */
  render() {
    const titleClass = this.name.split(' ').join('-').toLowerCase();
    const html  = `
      <div>
        <article class="task-card">
          <header class="card-header ${ titleClass }"></header>
          <main class="card-content">
            <header class="content-header">
              <h2 class="card-title">${ capitalizeWord(this.name) }</h2>
              <span class="card-option"></span>
            </header>
            <div class="times">
              <span class="current-time">${ this.time }hrs</span>
              <small class="prior-time">Last week - ${ this.priorTime }hrs</small>
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

        .task-card { 
          position: relative;
          max-width: 360px;
          width: 100%;
          margin-block: 2rem;
        }
        
        .card-header {
          width: 100%;
          height: calc(40px + 20px);
          background-repeat: no-repeat;
          background-position-x: 94%;
          background-position-y: 50%;
          border-start-start-radius: var(--cards-radius);
          border-start-end-radius: var(--cards-radius);
        }
        
        .card-header.${ titleClass } {
          background-color: var(--${ titleClass }-color);
          background-image: url('/src/assets/icons/icon-${ titleClass }.svg');
        }
        
        .card-content {
          position: absolute;
          top: 40px;
          width: 100%;
          padding: 2.5rem 2.2rem;
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
        
        .prior-time {
          color: var(--pale-blue);
          font-weight: 300;
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