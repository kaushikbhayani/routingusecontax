import Carousel from "react-bootstrap/Carousel";
import "./CommonStyleSheet.css";
const ClientCarousel = () => {
  return (
    <>
    
      <div className="my-5 container text-center">
        <h2 className="client-HeadingStyle">What Says Our Customers</h2>

        <Carousel indicators={false} interval={null}>
          <Carousel.Item>
            <div className="ObjectStyle ">
              <div className="div-3">
                <div className="row">
                  <div className="div-chld col-md-6">
                    <div className=" text-start p-4 Detaile-Div">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam
                      </p>
                      <h6>Mike Hamell</h6>
                      <p>magna aliqua</p>
                    </div>
                  </div>

                  <div className="div-chld col-md-6">
                    <div className=" text-start p-4 Detaile-Div">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam
                      </p>
                      <h6>Mike Hamell</h6>
                      <p>magna aliqua</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="row"
                style={{
                  color: "white",
                }}
              >
                <div className="col-md-6">
                  <div className="mx-5">
                    <div className="tringle"></div>
                    <div className="img-1-div">
                      <img
                        className="imageStyle"
                        src={require("../images/client1.jpg")}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mx-5">
                    <div className="tringle"></div>
                    <div className="img-1-div">
                      <img
                        className="imageStyle"
                        src={require("../images/client2.jpg")}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="ObjectStyle ">
              <div className="div-3">
                <div className="row">
                  <div className="div-chld col-md-6">
                    <div className=" text-start p-4 Detaile-Div">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam
                      </p>
                      <h6>Mike Hamell</h6>
                      <p>magna aliqua</p>
                    </div>
                  </div>

                  <div className="div-chld col-md-6">
                    <div className=" text-start p-4 Detaile-Div">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam
                      </p>
                      <h6>Mike Hamell</h6>
                      <p>magna aliqua</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="row"
                style={{
                  color: "white",
                }}
              >
                <div className="col-md-6">
                  <div className="mx-5">
                    <div className="tringle"></div>
                    <div className="img-1-div">
                      <img
                        className="imageStyle"
                        src={require("../images/client1.jpg")}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mx-5">
                    <div className="tringle"></div>
                    <div className="img-1-div">
                      <img
                        className="imageStyle"
                        src={require("../images/client2.jpg")}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="ObjectStyle ">
              <div className="div-3">
                <div className="row">
                  <div className="div-chld col-md-6">
                    <div className=" text-start p-4 Detaile-Div">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam
                      </p>
                      <h6>Mike Hamell</h6>
                      <p>magna aliqua</p>
                    </div>
                  </div>

                  <div className="div-chld col-md-6">
                    <div className="  text-start p-4 Detaile-Div">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam
                      </p>
                      <h6>Mike Hamell</h6>
                      <p>magna aliqua</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="row"
                style={{
                  color: "white",
                }}
              >
                <div className="col-md-6">
                  <div className="mx-5">
                    <div className="tringle"></div>
                    <div className="img-1-div">
                      <img
                        className="imageStyle"
                        src={require("../images/client1.jpg")}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mx-5">
                    <div className="tringle"></div>
                    <div className="img-1-div">
                      <img
                        className="imageStyle"
                        src={require("../images/client2.jpg")}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default ClientCarousel;
