import App from "./App";
import './back.css'
function Home({ user }) {
  if (user) {
    return (
      <h1><App /></h1>
    );
  } else {
    return (
      <div className="body-back">
        <div className="yog">
          <div class="portfolio-description">
            <div className="content">
              <div>
                <h2 className="text-info">Serenity Strength  <br /><span>& ZenFit Yoga </span></h2>
              </div>
              <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                  molestiae quas vel sint commodi repudiandae consequuntur te aliquam</p>
              </div>
            </div>
            <div class="portfolio-social-icons">
              <a href="face.com"><i class="bi bi-facebook"></i></a>
              <a href="linkin.com"><i class="bi bi-linkedin"></i></a>
              <a href="telegram.com"><i class="bi bi-telegram"></i></a>
              <a href="instergram.com"><i class="bi bi-instagram"></i></a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
