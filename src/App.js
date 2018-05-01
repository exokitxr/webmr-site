import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" id="page-top" itemScope itemType="http://schema.org/ItemPage">
        <meta itemProp="additionalType" content="http://schema.org/WebPage" />
        <nav className="siteNav" id="main-nav" itemScope itemType="http://schema.org/SiteNavigationElement">
          <div className="container">
            <a className="navbar-brand js-scroll-trigger" href="#page-top">Exokit Home</a>
            <div className="navOptions" id="navbarResponsive">
              <ul className="navList">
                <li className="navItem" itemProp="name">
                  <meta itemProp="description" content="Install Exokit" />
                  <meta itemProp="potentialAction" content="https://exokitbrowser.com#install" />
                  <a className="nav-link js-scroll-trigger" href="#install" itemProp="url">Install</a>
                </li>
                <li className="navItem" itemProp="name">
                  <meta itemProp="description" content="Documentation and FAQ" />
                  <a className="nav-link" href="//docs.webmr.io" itemProp="url">Docs</a>
                </li>
                <li className="navItem" itemProp="name">
                  <meta itemProp="description" content="GitHub Repository" />
                  <a className="nav-link" href="https://github.com/webmixedreality/exokit" itemProp="url">Github</a>
                </li>
                <li className="navItem" itemProp="name">
                  <meta itemProp="description" content="Twitch Channel" />
                  <a className="nav-link" href="https://www.twitch.tv/avaer" itemProp="url">Twitch</a>
                </li>
                <li className="navItem badgeItem" itemProp="name">
                  <meta itemProp="description" content="Join Our Slack" />
                  <a className="slack-badge nav-link" href="https://exoslack.now.sh" itemProp="url">Join the Slack</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <section className="titleSection" id="exokit-header" itemScope itemType="http://schema.org/WebPageElement">
          <div id="particles-js"></div>
          <h1 itemProp="description">
            <span>E<span className="xo-pink">x</span><span className="xo-orange">o</span>kit is a brand new, fast, post-screen era web browser.</span>
          </h1>
          <div className="startLinks" id="titleStartLinks">
            <a className="getStarted" href="//docs.webmr.io" itemProp="potentialAction">Get Started</a>
            <a className="getStarted invert" href="https://github.com/webmixedreality/exokit" itemProp="potentialAction">GitHub</a>
          </div>
          <a href="#hero" className="js-scroll-trigger"><div className="more"></div></a>
        </section>

        <section className="hero main" id="hero" itemScope itemType="http://schema.org/WebPageElement">
          <meta itemProp="name" content="Exokit Runs on Magic Leap" />
          <div className="heroText">
            <div className="heroTagline">
              <h1 itemProp="description">Build and experience AR websites today</h1>
            </div>
          </div>
          <div className="heroImage" itemScope itemType="http://schema.org/ImageObject">
            <meta itemProp="name" content="Magic Leap Runs Exokit" />
            <meta itemProp="url" content="https://exokitbrowser.com/images/ml-lightwear.jpg" />
          </div>
        </section>

        <section className="supporting" id="mlSection" itemScope itemType="http://schema.org/WebPageElement">
          <div className="supportingTitle" itemProp="name"><h2>Magic Leap — or legacy VR.<br/>Or your grandpa’s 2D screens.</h2></div>
          <div itemProp="description">
            <p className="supportingDetails" itemScope itemType="http://schema.org/WebPageElement">
              Under the hood, everything is plain OpenGL, so Exokit plays nicely with Windows, Linux, macOS, iOS, Android, and even Magic Leap.
            </p>
            <p className="">It supports all the standard browser APIs and accepts keyboard, mouse, and mixed-reality input.</p>
          </div>
        </section>

        <section className="intro main" id="speed" itemScope itemType="http://schema.org/VideoObject">
          <meta itemProp="description" content="Demo of Exokit running zeovr.io at over 60 fps" />
          <meta itemProp="thumbnailUrl" content="https://exokitbrowser.com/images/zeo_thumb.png" />
          <meta itemProp="uploadDate" content="2018-04-15" />
          <meta itemProp="name" content="Zeo (Minecraft Clone) on Exokit" />
          <meta itemProp="url" content="https://exokitbrowser.com/video/zeo_xo.mp4" />
          <div className="introImage">
            <div className="vidWrapper">
              <video id="zeo" playsInline muted loop>
                <source src="/assets/video/zeo_xo.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
              </video>
              <div className="videoOverlay" id="zeoOverlay"></div>
            </div>
          </div>
          <div className="introText">
            <div className="introTagline">
              <h1>E<span className="xo-pink">x</span><span className="xo-orange">o</span>kit is built for speed</h1>
            </div>
          </div>
        </section>

        <section className="supporting introSupporting" id="fpsSection" itemScope itemType="http://schema.org/WebPageElement">
          <div className="supportingTitle" itemProp="description"><h2>A browser for the post-2D world</h2></div>
          <div className="triptych">
              <div>
                <h4 className="xo-pink">Experiences</h4>
                <span>Exokit uses native code for high-performance rendering. The rest is pure JavaScript.</span>
              </div>
            <div>
              <h4 className="xo-pink">Experimentation</h4>
              <span>Exokit is totally open-source, and unlike other browsers, isn't held back by the need to support legacy APIs.</span>
            </div>
            <div>
              <h4 className="xo-pink">Evolution</h4>
              <span>The end result is a browser that can move as quickly as the web does, and that can be changed by editing a .js file.</span>
            </div>
          </div>
        </section>

        <section className="detail main" itemScope itemType="http://schema.org/WebPageElement">
          <div className="detailText">
            <div className="detailTagline">
              <h1>JS + HTML<br/>=<br/>AR Websites</h1>
            </div>
          </div>
          <div className="detailImage"></div>
        </section>

        <section className="supporting detailSupporting" id="install" itemScope itemType="http://schema.org/WebPageElement">
          <div className="supportingTitle"><h2>Install with npm.<br/>Build mixed reality websites with JS.</h2></div>
          <pre id="installCode"><span></span>npm install -g exokit</pre>
          <p className="margin60">With Exokit, you can code robust AR and VR experiences using your favorite flavor of JavaScript, just like you code a website.</p>
          <div className="startLinks">
            <a className="getStarted" href="//docs.webmr.io">Get Started</a>
            <a className="getStarted invert" href="https://github.com/webmixedreality/exokit">GitHub</a>
          </div>
        </section>

        <footer itemScope itemType="http://schema.org/WebPageElement" id="footer">
          &#169; Copyright 2018 WebMR
        </footer>

        {/* <!-- Bootstrap core JavaScript --> */}
        <script src="/assets/vendor/jquery/jquery.min.js"></script>
        <script src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

        {/* <!-- Plugin JavaScript --> */}
        <script src="/assets/vendor/jquery-easing/jquery.easing.min.js"></script>

        {/* <!-- Custom scripts for this template --> */}
        <script src="/assets/js/new-age_4_16.min.js"></script>
        <script src="/assets/js/ui_4_15.js"></script>
        <script src="/assets/vendor/particles.min.js"></script>
        <script>{`
          const particlesConfig = {
            "particles": {
              "number": {
                "value": 200,
                "density": {
                  "enable": true,
                  "value_area": 300
                }
              },
              "color": {
                "value": "#dd6f84"
              },
              "shape": {
                "type": "circle",
                "stroke": {
                  "width": 0,
                  "color": "#000000"
                },
                "polygon": {
                  "nb_sides": 5
                },
                "image": {
                  "src": "img/github.svg",
                  "width": 100,
                  "height": 100
                }
              },
              "opacity": {
                "value": 0,
                "random": true,
                "anim": {
                  "enable": false,
                  "speed": 1,
                  "opacity_min": 0.1,
                  "sync": false
                }
              },
              "size": {
                "value": 6,
                "random": true,
                "anim": {
                  "enable": false,
                  "speed": 40,
                  "size_min": 0.1,
                  "sync": false
                }
              },
              "line_linked": {
                "enable": false,
                "distance": 496,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 2
              },
              "move": {
                "enable": true,
                "speed": 6,
                "direction": "bottom",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                  "enable": false,
                  "rotateX": 600,
                  "rotateY": 1200
                }
              }
            },
            "interactivity": {
              "detect_on": "canvas",
              "events": {
                "onhover": {
                  "enable": true,
                  "mode": "bubble"
                },
                "onclick": {
                  "enable": false,
                  "mode": "repulse"
                },
                "resize": true
              },
              "modes": {
                "grab": {
                  "distance": 400,
                  "line_linked": {
                    "opacity": 0.5
                  }
                },
                "bubble": {
                  "distance": 80,
                  "size": 6,
                  "duration": 0.3,
                  "opacity": 0.6,
                  "speed": 3
                },
                "repulse": {
                  "distance": 63.73689410115041,
                  "duration": 0.4
                },
                "push": {
                  "particles_nb": 4
                },
                "remove": {
                  "particles_nb": 2
                }
              }
            },
            "retina_detect": false
          };
          if (window.innerWidth >= 768) {
            particlesJS('particles-js', particlesConfig);
          }
        `}</script>
      </div>
    );
  }
}

export default App;
