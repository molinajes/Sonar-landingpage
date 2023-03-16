import "./App.css";
import SignIcon from "./assets/Sign Up.svg";
import PulseIcon from "./assets/Pulse Check.svg";
import NotificationIcon from "./assets/Notification.svg";

function HowWork() {
  return (
    <div>
      <div>
        <p className="SonarText">How Sonar Works</p>
        <div className="howWorkChildParent">
          <div className="workBoxParent">
            <img src={SignIcon} height="304px" width={"313px"} />
            <div className="commanHeight47">
              <p className="FirstText">Begin your journey by signing up</p>
              <p className="workBoxText">
                Youth, parents, and schools{" "}
                <span className="workBoxTextBold">
                  {" "}
                  can register to become a member of the Sonar community.
                </span>
              </p>
              <p className="workBoxText">
                Youth have the{" "}
                <span className="workBoxTextBold">
                  {" "}
                  power to choose the people they want in their support network
                </span>{" "}
                (friends, parents, teachers, etc.) and{" "}
                <span className="workBoxTextBold">
                  can choose whether or not to share their online activity with
                  us.
                </span>
              </p>
            </div>
            <div className=" displayFlex">
              <button className="getStartBtn">Get Started</button>
              <button className="SeeDemoBtn2">See Demo Video</button>
            </div>
          </div>

          <div className="workBoxParent">
            <img src={PulseIcon} height="304px" width={"313px"} />
            <div className="commanHeight47">
              <p className="FirstText">
                Our AI analyzes search keywords and online posts
              </p>
              <p className="workBoxTextBold">This is not a surveillance app!</p>
              <p className="workBoxText">
                To identify if a youth is at risk for a mental health crisis and
                support them, our{" "}
                <span className="workBoxTextBold">
                  AI only looks at words used in youth’s online posts, comments,
                  and search history
                </span>{" "}
                if they decide to share their online accounts with us.
              </p>
              <p className="workBoxText">(No, we won’t go through your DMs!)</p>
            </div>
            <div className=" displayFlex">
              <button className="getStartBtn">See Data Privacy</button>
            </div>
          </div>
          <div className="workBoxParent">
            <img src={NotificationIcon} height="304px" width={"313px"} />
            <div className="commanHeight47">
              <p className="FirstText">
                Youth’s community is here to support them
              </p>
              <p className="workBoxText">
                If our AI finds a youth is at risk, our{" "}
                <span className="workBoxTextBold">
                  trained clinicians confirm if immediate support is needed,
                  give evidence-based recommendations, and send the report to
                  the youth’s appropriate support network{" "}
                </span>{" "}
                showing posts and keywords that were flagged as a risk (nothing
                else will be shared!).
              </p>
              <p className="workBoxText">Have more questions?</p>
            </div>
            <div className=" displayFlex">
              <button className="getStartBtn">Visit FAQs</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowWork;
