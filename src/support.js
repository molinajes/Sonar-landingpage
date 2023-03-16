import "./App.css";
import SupportYouth from "./assets/Youth.svg";
import SupportSchools from "./assets/Schools.svg";
import ParentsGuardians from "./assets/ParentsGuardians.svg";

function Support() {
  return (
    <div>
      <div>
        <p className="whyWeCareText">Supporting Our Sonar Community</p>
        <p className="support-text">
          We help each member of the Sonar community proactively identify,
          measure, and support youth mental health.
        </p>
      </div>

      <div>
        <div className="supportParent displayFlex justifyContentCenter">
          <img src={SupportYouth} height="340px" width="340px" />
          <img src={ParentsGuardians} height="340px" width="340px" />
          <img src={SupportSchools} height="340px" width="340px" />
        </div>
      </div>
    </div>
  );
}

export default Support;
