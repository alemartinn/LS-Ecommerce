import { useSelector } from "react-redux";
import "../styles/HIW.css"
import YoutubeEmbed from "../components/YoutubeEmbed";

function HIW() {

  const { bcgColor, fontColor, thirdColor, fourthColor, fivethColor } = useSelector(state => state.color)
  return (
    <main className="hiw-main" style={{ backgroundColor: bcgColor }}>
      <div className="hiw-content">

        <div className="hiw-guide"
          style={{ backgroundColor: fivethColor }}>

          <div className="container">
            <h2>Healthy eating made easy</h2>
            <div className="flex">
              <div>
                <img src="https://mindfulchef-images-production.imgix.net/homepage/how-it-works/hiw-salmon-recipe-hi-res.jpg?auto=format&crop=focalpoint&fit=crop&q=50&w=214&h=160&dpr=1"></img>
                <h4>Choose recipes</h4>
                <p>Build your first box of 2-5 recipes. Choose from 1-4 people boxes</p>
              </div>

              <div>
                <img src="https://mindfulchef-images-production.imgix.net/homepage/how-it-works/hiw-delivery-hi-res.jpg?auto=format&crop=focalpoint&fit=crop&q=50&w=214&h=160&dpr=1" />
                <h4>Pick your first delivery</h4>
                <p>Pre-portioned, ethically sourced ingredients, delivered for free</p>
              </div>

              <div>
                <img src="https://mindfulchef-images-production.imgix.net/homepage/how-it-works/hiw-enjoy-box-hi-res.jpg?auto=format&crop=focalpoint&fit=crop&q=50&w=214&h=160&dpr=1" />
                <h4>Enjoy</h4>
                <p>Easy to follow recipes with meals on the table in as little as 10 mins</p>
              </div>
            </div>
          </div>
        </div>

        <div className="hiw-promo">
          <p className="hiw-text"
            style={{ color: fontColor }} >Mobile App Promo</p>
          <YoutubeEmbed embedId="gerCrRW7t5s" />
        </div>
        <div className="hiw-benefits"
          style={{ backgroundColor: fourthColor }}>
          <p className="hiw-text"
            style={{ color: fontColor }} >Benefits</p>
        </div>
        <div className="hiw-faq"
          style={{ backgroundColor: fourthColor }}>
          <p className="hiw-text"
            style={{ color: fontColor }} >FAQ</p>
        </div>
      </div>
    </main>
  )
}


export default HIW