import "./App.css";
import Slider from "react-slick";
import Ellipse from "./assets/Ellipse.svg";

function Community() {
  let settings = {
    centerMode: true,
    centerPadding: "200px",
    slidesToShow: 1,
    focusOnSelect: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "0px",
          slidesToShow: 1,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "0px",
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  };
  return (
    <div>
      <div className="community">
        <p className="communityText">Our Community Loves Sonar</p>
        <div className="communitySliderParent">
          <Slider {...settings}>
            <div className="communityBoxParent">
              <div className="communitySubParent">
                <img
                  src={Ellipse}
                  className="communityImage"
                  height={"109px"}
                  width={"109px"}
                />
                <div className="communityBox">
                  <p className="communityParah">
                    “ I love it. Would pay anything for their service and
                    support for my kid. “
                  </p>
                  <br />
                  <br />
                  <p className="quoteNameText">-Eleanor (Parent)</p>
                </div>
              </div>
            </div>
            <div className="communityBoxParent">
              <div className="communitySubParent">
                <img
                  src={Ellipse}
                  height={"109px"}
                  width={"109px"}
                  className="communityImage"
                />
                <div className="communityBox">
                  <p className="communityParah">
                    “ I love it. Would pay anything for their service and
                    support for my kid. “
                  </p>
                  <br />
                  <br />
                  <p className="quoteNameText">-Eleanor (Parent)</p>
                </div>
              </div>
            </div>
            <div className="communityBoxParent">
              <div className="communitySubParent">
                <img
                  src={Ellipse}
                  height={"109px"}
                  width={"109px"}
                  className="communityImage"
                />
                <div className="communityBox">
                  <p className="communityParah">
                    “ I love it. Would pay anything for their service and
                    support for my kid. “
                  </p>
                  <br />
                  <br />
                  <p className="quoteNameText">-Eleanor (Parent)</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Community;
