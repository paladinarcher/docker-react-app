import React from 'react';

function sectionHeading() {
  return (
<div>
<a className="usa-skipnav" href="#main-content">Skip to main content</a>
<div className="usa-overlay"></div>
<header className="usa-header usa-header--basic">
  <div className="usa-nav-container">
    <div className="usa-navbar">
  <div className="usa-logo" id="basic-logo">
    <em className="usa-logo__text"><a href="/" title="Home" aria-label="Home">Developer Level stock site</a></em>
  </div>
  <button className="usa-menu-btn">Menu</button>
</div>
<nav aria-label="Primary navigation" className="usa-nav">
      <button className="usa-nav__close"><img src="/public/logo192.png" alt="close"/></button>
<ul className="usa-nav__primary usa-accordion"><li className="usa-nav__primary-item">
    <button className="usa-accordion__button usa-nav__link  usa-current" aria-expanded="false" aria-controls="basic-nav-section-one"><span>Current section</span></button>
    <ul id="basic-nav-section-one" className="usa-nav__submenu"><li className="usa-nav__submenu-item">
              <a href="#">Navigation link</a>
            </li><li className="usa-nav__submenu-item">
              <a href="#">Navigation link</a>
            </li><li className="usa-nav__submenu-item">
              <a href="#">Navigation link</a>
            </li></ul></li><li className="usa-nav__primary-item">
    <button className="usa-accordion__button usa-nav__link" aria-expanded="false" aria-controls="basic-nav-section-two"><span>Section</span></button>
    <ul id="basic-nav-section-two" className="usa-nav__submenu"><li className="usa-nav__submenu-item">
              <a href="#">Navigation link</a>
            </li><li className="usa-nav__submenu-item">
              <a href="#">Navigation link</a>
            </li><li className="usa-nav__submenu-item">
              <a href="#">Navigation link</a>
            </li></ul></li><li className="usa-nav__primary-item">
    <a className="usa-nav__link" href="javascript:void(0)"><span>Simple link</span></a>
    </li></ul><form className="usa-search usa-search--small ">
  <div role="search">
    <label className="usa-sr-only" for="basic-search-field-small">Search small</label>
    <input className="usa-input" id="basic-search-field-small" type="search" name="search"/>
    <button className="usa-button" type="submit"><span className="usa-sr-only">Search</span></button>
  </div>
</form>
</nav>
  </div>
</header>
<main id="main-content"></main>
</div>
  );
}

export default sectionHeading;