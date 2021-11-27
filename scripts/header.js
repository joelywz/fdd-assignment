class Header extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
      <header>
        <nav>
          <a href="homepage.html" id="nav-logo">
            <div>
              <img src="assets/images/logo-white.png" alt="logo" width="45" />
            </div>
            <div>TAEKWONDO <span>CLUB</span></div>
          </a>
          <ul>
            <li><a href="etiquette.html">Etiquette</a></li>
            <li class="dropdown">Gallery
              <div class="dropdown-nav">
                <a href="christmasparty2019.html">Christmas Party 2019</a>
                <a href="farewell.html">Farewell Party</a>
                <a href="friendlymatch.html">Friendly Match</a>
                <a href="intinilaifriendlymatch.html">Inti Nilai Friendly Match</a>
                <a href="videos.html">Videos</a>
              </div>
            </li>
            <li class="dropdown">Timetable
              <div class="dropdown-nav">
                <a href="timetable(November).html">November</a>
              </div>
            </li>
            <li class="dropdown">Shop
              <div class="dropdown-nav">
                <a href="merchandise.html">Merchandise</a>
                <a href="gear.html">Gear</a>
                <a href="uniform.html">Uniform</a>
              </div>
            </li>
            <li class="dropdown">Team
              <div class="dropdown-nav">
                <a href="#">About Us</a>
                <a href="#">Contact Us</a>
                <a href="joinus.html">Join Us</a>
              </div>
            </li>
            <li><a href="faq.html">FAQ</a></li>
          </ul>
        </nav>
      </header>
    `;
  }
}

customElements.define('header-template', Header);
