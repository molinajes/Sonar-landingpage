import "./App.css";
import bannerImage from "./assets/bannerImage.svg";

function Banner() {
  return (
    <div className="containerParent">
      <div className="width50percent bannerTextSection">
        <div>
          <p className="banner1stText">
            We proactively detect signs of mental health concerns in youth so
            they can get the support they need early. We intervene before things
            get serious.
          </p>
        </div>
        <div>
          <p className="banner2ndText">
            It takes on average 11 years from the first symptoms of mental
            illness to receive any sort of treatment. We cut that short by
            identifying trends in topics and phrases in youth’s online activity
            and surveys to support youth ages 13+ when they may be at risk for
            depression, anxiety, self-harm, etc. with the power of AI and help
            from our trained clinicians (with the youth’s consent, of course).
            Because youth are not alone in their journey, we notify youth’s
            support network when they’re at risk and equip them with the tools
            and recommendations they need to support youth.
          </p>
        </div>
        <div className="JoinAndDemoParent">
          <button className="joinBtn">Join Now</button>
          <button className="SeeDemoBtn">See Demo Video</button>
        </div>
      </div>
      <div className="width50percent displayFlex justifyContentCenter bannerImage">
        <img src={bannerImage} width="614px" />
      </div>
    </div>
  );
}

export default Banner;
