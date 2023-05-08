import Card from "./Card";
import Card1 from "./img/card1.jpg";
import Card2 from "./img/card2.png";
import Card3 from "./img/card3.png";
function Services() {
  return (
    <div className="container services">
        <h2 className="main-title text-center">USECASES</h2>
        <div className="card-cover">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-4 mb-2">
                    <Card title="Deep Tech Product Development" img={Card1} text="Develop new offerings based on tangible engineering innovation or scientific discoveries and advances" />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="Data Privacy" img={Card2} text="Managing and Enabling Data Privacy in Machine Learning Model" />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="Language Transcription and Translation" img={Card3} text="Working and providing Better Language Transcription and Translation Services" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
export default Services;
