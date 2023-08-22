import React from "react";
import "./CommonStyleSheet.css";
import Carousel from "react-bootstrap/Carousel";
import TopHeader from "../NaveComponent/TopHeader";
import OfferScreen from "./OfferScreen";
import ClientCarousel from "./ClientCarousel";
import DetaileScreen from "./DetaileScreen";
import ManuScreen from "./ManuScreen";
import BookTableScreen from "./BookTableScreen";

const HomeScreen = () => {
  return (
    <>
      <section className="Hdr mt-0">
        <TopHeader />
      </section>
      <section className=" slider_section  bg_style dddd ">
        <Carousel
          controls={false}
          style={{
            height: "100%",
            width: "100%",
          }}
        >
          <Carousel.Item className="carousel-item" interval={1000}>
            <div class="container">
              <div class="row">
                <div class="col-md-9 col-lg-7">
                  <div class="detail-box">
                    <h1 style={{ color: "white" }}>Fast Food Restaurant</h1>
                    <p style={{ color: "white" }}>
                      Doloremque, itaque aperiam facilis rerum, commodi,
                      temporibus sapiente ad <br /> mollitia laborum quam
                      quisquam esse error unde. Tempora ex doloremque, labore,{" "}
                      <br /> sunt repellat dolore, iste magni quos nihil ducimus
                      libero ipsam.
                    </p>
                    <div className="btn-box ">
                      {/* <a href="" class="btn-1">
                        Read more
                      </a>
                      <a href="" class="btn-2">
                        Get A Quote
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <div class="container">
              <div class="row">
                <div class="col-md-9 col-lg-7">
                  <div class="detail-box">
                    <h1 style={{ color: "white" }}>Fast Food Restaurant</h1>
                    <p style={{ color: "white" }}>
                      Doloremque, itaque aperiam facilis rerum, commodi,
                      temporibus sapiente ad <br /> mollitia laborum quam
                      quisquam esse error unde. Tempora ex doloremque, labore,{" "}
                      <br /> sunt repellat dolore, iste magni quos nihil ducimus
                      libero ipsam.
                    </p>
                    <div className="btn-box "></div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div class="container">
              <div class="row">
                <div class="col-md-9 col-lg-7">
                  <div class="detail-box">
                    <h1 style={{ color: "white" }}>Fast Food Restaurant</h1>
                    <p style={{ color: "white" }}>
                      Doloremque, itaque aperiam facilis rerum, commodi,
                      temporibus sapiente ad <br /> mollitia laborum quam
                      quisquam esse error unde. Tempora ex doloremque, labore,{" "}
                      <br /> sunt repellat dolore, iste magni quos nihil ducimus
                      libero ipsam.
                    </p>
                    <div className="btn-box "></div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </section>
      <OfferScreen />
      <ManuScreen />
      <DetaileScreen />
      <BookTableScreen />
      <ClientCarousel />
    </>
  );
};

export default HomeScreen;
