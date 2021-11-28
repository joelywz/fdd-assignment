class Header extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
      <header>
        <nav>
          <a href="homepage.html" id="nav-logo">
            <div>
              <img src="assets/images/logo-white.png" alt="" width="45" />
            </div>
            <div>TAEKWONDO <span>CLUB</span></div>
          </a>
          <ul>            
            <li class="dropdown">Club Info
              <div class="dropdown-nav">
                <a href="etiquette.html">Etiquette</a>
                <a href="mission.html">Mission</a>
                <a href="vision.html">Vision</a>
                <a href="taekwondo.html">What is Taekwondo?</a>
              </div>
            </li>
            <li class="dropdown">Gallery
              <div class="dropdown-nav">
                <a href="christmasparty2019.html">Christmas Party 2019</a>
                <a href="farewell.html">Farewell Party</a>
                <a href="friendlymatch.html">Friendly Match</a>
                <a href="intinilaifriendlymatch.html">Inti Nilai Friendly Match</a>
                <a href="socialgatherings.html">Social Gathering</a>
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
                <a href="instructor.html">Instructors</a>
                <a href="commitee.html">Commitee</a>
                <a href="contactus.html">Contact Us</a>
                <a href="joinus.html">Join Us</a>
                <a href="testimonial.html">Testimonial</a>
              </div>
            </li>
            <li><a href="faq.html">FAQ</a></li>
          </ul>
        </nav>
      </header>
    `;
  }
}
class Footer extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
      <footer>
        <div class="row">
          <div class="copyright-container-left">
            <div class="links">
              <p>
                <a href="homepage.html">Home</a> |
                <a href="contactus.html">Contact Us</a> |
                <a href="faq.html">FAQ</a>
              </p>
            </div>
            <div>
              <div class="location">
                <img src="assets/images/footer/icon-location.png" alt="" />
                <p>Asia Pacific University of Technology &amp; Innovation (APU)</p>
              </div>
               <p>Copyright © 2021 APU Taekwondo Club. All rights reserved.</p>
            </div>
          </div>
          <div class="copyright-container-right">
            <img src="assets/images/logo-white.png" alt="" width="80" />
            <form id="newsletter-form"action="none" onsubmit="">
              <div class="input-container">
                <input id="newsletter-input" type="email" placeholder="Enter your email"></input>
                <button>
                  <img src="assets/images/footer/icon-email.png" alt=""/>
                </button>
              </div>
            </form>
            <div class="social-links">
              <a href="https://www.facebook.com/APUTaekwondoClub/">
                <img src="assets/images/footer/icon-facebook.png" alt=""/>
              </a>
              <a href="https://www.instagram.com/aputaekwondofamily">
                <img src="assets/images/footer/icon-instagram.png" alt=""/>
              </a>
            </div>
          </div>
        </div>
      </footer>
    `;

    const form = document.getElementById('newsletter-form');
    const input = document.getElementById('newsletter-input');
    form.onsubmit = (event) => {
      event.preventDefault();
      window.alert('Subscribed to newsletter.');
      input.value = '';
    };
  }
}

customElements.define('header-template', Header);
customElements.define('footer-template', Footer);
