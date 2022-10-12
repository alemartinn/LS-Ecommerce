import { useState, useEffect } from 'react'
import { useSelector } from "react-redux";
import { Link as LinkRouter } from "react-router-dom";
import Card from '../components/Card.js'

import "../styles/Home.css"

function Home() {
  const [isOpen, setIsOpen] = useState(false)
  const closeModal = () => setIsOpen(false)
  const { bcgColor, fontColor, thirdColor, light } = useSelector(state => state.color)
  const themeColor = useSelector(state => state.color)
  useEffect(() => {
    const pSections = document.querySelectorAll("section");
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.4
    };
    const observer = new IntersectionObserver(function (entries, observer) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          entry.target.classList.remove("focused");
          return;
        } else {
          entry.target.classList.add("focused");
        }
      });
    }, options);
    pSections.forEach(pSection => {
      observer.observe(pSection);
    });
  }, [])
  return (
    <main className="home-main" style={{ backgroundColor: bcgColor }}>
      <div className="home-content">
        <div className="hero"
          style={light ? { backgroundBlendMode: 'lighten' } : { backgroundBlendMode: 'darken' }}>
          <div className="hero-content">
            <h1 className="hero-title" style={{ color: 'white' }}>
              Healthy eating don't have to be a struggle.
            </h1>
            <LinkRouter to="/recipes"
              className="home-banner-link"
              style={{ backgroundColor: thirdColor, color: fontColor }}
            >Check recipes</LinkRouter>
          </div>
        </div>
        <div>
          <section className="home-section" style={{ color: fontColor }}>
            <div className="home-container home-section-text">
              <h2 className="home-section-title">Good health and well-being go hand in hand.</h2>
              <div className="row home-section-content">
                <div className="col">
                  <p>
                    Every recipe in this site is reviewed by qualified nutritionists with your health and fitness goals in mind. No more counting calories, carbs or protein intake, we've got you covered.
                  </p>
                </div>
                <div className="col">
                  <p>Meals you can cook yourself!
                    Our community bring you dishes that bridge the gap between functional meal-prep and the best dine-in experience.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="home-section home-section--inverse" style={{ color: fontColor }}>
            <div className="home-container">
              <article>
                <div className="row home-section-content">
                  <div className="col">
                    <div className="home-section-img">
                      <img src="https://hercircle.in/hcm/EngageImage/59B2B04F-5578-4AB7-84D2-A36E42FF0103/D/F20C30EE-3DD8-4AD9-B376-FEE68340C6F8.jpg" alt="nature photo" />
                    </div>
                  </div>
                  <div className="col home-section-text" style={{ backgroundColor: thirdColor }}>
                    <h2 className="home-section-title">Free up your time</h2>
                    <p>
                      Thinking about the ideal meal is time-consuming. We carefully keep our website delivering only the best, top quality and balanced recipes, with an outstanding food shipping system, so you can get back to the things that matter.
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </section>
          <section className="home-section home-section--inverse" style={{ color: fontColor }}>
            <div className="home-container">
              <article>
                <div className="row home-section-content">
                  <div className="col">
                    <div className="home-section-img">
                      <img src="https://previews.123rf.com/images/seralexvi/seralexvi1509/seralexvi150900112/45360755-fruits-and-vegetables-concept-fresh-food.jpg" alt="nature photo" />
                    </div>
                  </div>
                  <div className="col home-section-text" style={{ backgroundColor: thirdColor }} >
                    <h2 className="home-section-title">Always fresh</h2>
                    <p>Our ingredients are sourced directly from farm and market. Packed, chilled and delivered to you the next day.</p>
                  </div>
                </div>
              </article>
            </div>
          </section>
          <section className="home-section home-section--inverse" style={{ color: fontColor }}>
            <div className="home-container">
              <article>
                <div className="row home-section-content">
                  <div className="col">
                    <div className="home-section-img">
                      <img src="https://mhplastics.com/wp-content/uploads/2019/09/02L.jpg" alt="nature photo" />
                    </div>
                  </div>
                  <div className="col home-section-text" style={{ backgroundColor: thirdColor }}>
                    <h2 className="home-section-title">Zero to landfill</h2>
                    <p>
                      All our packaging is recyclable or re-useable and we operate a no-waste policy in our store.
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </section>
        </div>
        <div className="home-cards-container">

          <Card />
        </div>
      </div>
    </main>
  )
}
export default Home