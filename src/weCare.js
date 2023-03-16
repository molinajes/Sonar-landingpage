import "./App.css";
import ChatIcon from "./assets/Chat icon.svg";
import SupportIcon from "./assets/Support icon.svg";
import Magnifying from "./assets/Magnifying glass icon.svg";
import UserIcon from "./assets/User Icon.svg";

function WeCare() {
  return (
    <div>
      <div>
        <p className="whyWeCareText">Why We Care</p>
      </div>
      <div className="WeCareChildParent">
        <div className="weCareSubParent">
          <img src={ChatIcon} className="weCareImage" />
          <div className="weCareBox">
            <p className="weCareParah">
              <span className="percentageText">82%</span> of youth believe we
              should{" "}
              <span className="weCareEndText">
                talk more openly about mental health issues.
              </span>
            </p>
          </div>
        </div>

        <div className="weCareSubParent">
          <img src={SupportIcon} className="weCareImage" />
          <div className="weCareBox">
            <p className="weCareParah">
              <span className="percentageText">80%</span>of youth who show signs
              of mental illness{" "}
              <span className="weCareEndText">
                do not receive any support or treatment.
              </span>
            </p>
          </div>
        </div>

        <div className="weCareSubParent">
          <img src={Magnifying} className="weCareImage" />
          <div className="weCareBox">
            <p className="weCareParah">
              <span className="percentageText">20%</span> of diagnosable mental
              illnesses in youth are{" "}
              <span className="weCareEndText">being identified.</span>
            </p>
          </div>
        </div>

        <div className="weCareSubParent">
          <img src={UserIcon} className="weCareImage" />
          <div className="weCareBox">
            <p className="weCareParah">
              <span className="percentageText">75%</span> of mental health
              problems are{" "}
              <span className="weCareEndText">established by age 24.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeCare;
