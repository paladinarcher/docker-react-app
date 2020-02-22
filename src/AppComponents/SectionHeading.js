import React from 'react';

function SectionHeading() {
  return (
    <div className="sectionHeading">
  <link rel="stylesheet" type="text/css" href="../../mainCss.css"></link>
  <header className="header some-top-padding">
    <div className="row va-flex usa-grid usa-grid-full trim-bot-margin move-it-down" id="va-header-logo-menu">
      <div className="va-header-logo-wrapper">
        <a href="/" className="va-header-logo">
          <img src="./DevLevelLogoAndWordsWhite.5.25.png" alt="Go to VA.gov" className="dev-lev-logo"/>
        </a>
      </div>
      <div id="login-root" className="vet-toolbar full-width">
        <div className="thousand-width">
          <div className="profile-nav-container float-right">
            <div className="profile-nav relative-position">
              <div className="va-dropdown move-btn1"><button
                  className="va-btn-withicon va-dropdown-trigger va-btn-withicon va-dropdown-trigger back-color"
                  aria-controls="search-menu" aria-expanded="false"><span><svg focusable="false" role="presentation"
                      height="7" pointer-events="none" viewBox="0 0 216 146" width="15">
                      <path fill="#fff"
                        d="M172.77 123.025L144.825 95.08c6.735-9.722 10.104-20.56 10.104-32.508 0-7.767-1.51-15.195-4.527-22.283-3.014-7.09-7.088-13.2-12.22-18.336s-11.243-9.207-18.33-12.22c-7.09-3.016-14.52-4.523-22.286-4.523-7.768 0-15.196 1.508-22.284 4.523-7.09 3.014-13.2 7.088-18.332 12.22-5.132 5.134-9.206 11.245-12.22 18.333-3.015 7.088-4.522 14.515-4.522 22.282 0 7.766 1.507 15.192 4.522 22.282 3.014 7.088 7.088 13.197 12.22 18.33 5.134 5.134 11.245 9.207 18.333 12.222 7.09 3.015 14.516 4.522 22.283 4.522 11.95 0 22.786-3.37 32.51-10.105l27.943 27.863c1.955 2.064 4.397 3.096 7.332 3.096 2.824 0 5.27-1.03 7.332-3.096 2.064-2.063 3.096-4.508 3.096-7.332 0-2.877-1.002-5.322-3.013-7.33zm-49.413-34.668C116.214 95.5 107.62 99.07 97.57 99.07c-10.048 0-18.643-3.57-25.786-10.713C64.64 81.214 61.07 72.62 61.07 62.57c0-10.047 3.572-18.643 10.714-25.785C78.926 29.642 87.522 26.07 97.57 26.07c10.048 0 18.643 3.573 25.787 10.715 7.143 7.142 10.715 15.738 10.715 25.786 0 10.05-3.573 18.647-10.715 25.79z">
                      </path>
                    </svg>Search</span></button>
                <div className="va-dropdown-panel" id="search-menu" hidden="">
                  <form accept-charset="UTF-8" action="https://www.va.gov/search/" id="search" method="get"><label
                      for="query" className="usa-sr-only">Search:</label>
                  </form>
                </div>
              </div>
              <div className="va-dropdown move-btn2"><button className="va-btn-withicon va-dropdown-trigger back-color" aria-controls="help-menu"
                  aria-expanded="false"><span><svg focusable="false" role="presentation" height="9" pointer-events="none"
                      viewBox="0 0 62 63" width="15">
                      <path fill="#fff" fill-rule="evenodd"
                        d="M36 50.57v-7.713c0-.375-.12-.683-.362-.924-.24-.24-.55-.362-.924-.362H27c-.375 0-.683.122-.924.363-.24.24-.362.55-.362.924v7.714c0 .376.12.684.362.926.24.24.55.36.924.36h7.714c.375 0 .683-.12.924-.36.24-.242.362-.55.362-.925zm10.286-27c0-2.356-.744-4.54-2.23-6.548a15.216 15.216 0 0 0-5.565-4.66c-2.222-1.1-4.5-1.648-6.83-1.648-6.508 0-11.477 2.853-14.906 8.558-.4.643-.294 1.206.322 1.688l5.303 4.018c.187.16.44.24.763.24.428 0 .763-.16 1.004-.48 1.42-1.823 2.572-3.055 3.456-3.698.91-.643 2.062-.964 3.455-.964 1.286 0 2.43.348 3.435 1.045S36 22.608 36 23.49c0 1.02-.268 1.836-.804 2.452-.535.616-1.446 1.22-2.732 1.808-1.687.75-3.234 1.908-4.64 3.475-1.407 1.567-2.11 3.248-2.11 5.043v1.446c0 .375.12.683.362.924.24.24.55.362.924.362h7.714c.375 0 .683-.12.924-.362.24-.24.362-.55.362-.924 0-.51.288-1.172.864-1.99a6.785 6.785 0 0 1 2.19-1.987 59.662 59.662 0 0 0 1.968-1.145c.456-.282 1.072-.75 1.85-1.407.775-.656 1.37-1.3 1.786-1.928.416-.63.79-1.44 1.125-2.43.335-.992.503-2.077.503-3.256zm15.428 7.716c0 5.598-1.38 10.76-4.138 15.49-2.76 4.726-6.502 8.47-11.23 11.228-4.728 2.76-9.89 4.14-15.49 4.14-5.597 0-10.76-1.38-15.488-4.14-4.727-2.758-8.47-6.502-11.23-11.23C1.378 42.048 0 36.885 0 31.287c0-5.6 1.38-10.76 4.138-15.49 2.76-4.727 6.503-8.47 11.23-11.23C20.096 1.81 25.258.43 30.858.43c5.597 0 10.76 1.378 15.488 4.137 4.728 2.76 8.47 6.502 11.23 11.23 2.76 4.728 4.138 9.89 4.138 15.49z">
                      </path>
                    </svg>Contact us</span></button>
              </div>
              <div className="sign-in-nav move-btn3">
                <div className="sign-in-links"><button className="sign-in-link back-color">Sign in</button></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <svg className="the-line" height="10" width="1000">
      <line x1="0" y1="5" x2="1000" y2="5" className="white-line"/>
    </svg>
    <div className="usa-grid usa-grid-full some-padding">
      <div id="menu-rule" className="usa-one-whole"></div>
      <div id="mega-menu" className="full-width">
        <div className="login-container">
          <div className="row va-flex">
            <div id="vetnav" role="navigation">
              <div className="full-width">
                <ul id="vetnav-menu" className="full-width">
                  <li className="inline add-margin"><button aria-expanded="false" aria-controls="vetnav-va-benefits-and-health-care"
                      className="vetnav-level1 back-color">VA Benefits and Health Care</button>
                    <div id="vetnav-va-benefits-and-health-care" className="vetnav-panel" hidden=""></div>
                  </li>
                  <li className="inline add-margin"><button aria-expanded="false" aria-controls="vetnav-about-va" className="vetnav-level1 back-color">About
                      VA</button>
                    <div id="vetnav-about-va" className="vetnav-panel" hidden=""></div>
                  </li>
                  <li className="inline add-margin"><a href="https://www.va.gov/find-locations" className="vetnav-level1 back-color">Find a VA Location</a>
                    <div id="vetnav-find-a-va-location" className="vetnav-panel" hidden=""></div>
                  </li>
                </ul>
                <div className="full-width"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
    </div>
  );
}

export default SectionHeading;