class Header extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
      <header>
        <nav>
          <div id="nav-logo">
            <div>
              <img src="assets/images/logo-white.png" alt="logo" width="45" />
            </div>
            <div>TAEKWONDO <span>CLUB</span></div>
          </div>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Etiquette</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </nav>
      </header>
    `;
  }
}

customElements.define('header-template', Header);
