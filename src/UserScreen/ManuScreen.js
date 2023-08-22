import React, { useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "./CommonStyleSheet.css";

const ManuScreen = () => {
  const [state, setstate] = useState();
  const butger1 = {
    animate0: {
      x: 0,
      y: 0,

      scale: 1,
    },
    animate1: {
      x: 0,
      y: 0,

      scale: 0,
    },
    animate2: {
      x: 0,
      y: 0,

      scale: 1,
    },
    animate3: {
      x: 0,
      y: 0,

      scale: 0,
    },
    animate4: {
      x: 0,
      y: 0,

      scale: 0,
    },
  };
  const butger2 = {
    animate0: {
      x: 0,
      y: 0,

      scale: 1,
    },
    animate1: {
      x: -441,

      scale: 1,
    },
    animate2: {
      x: 0,
      y: 0,

      scale: 0,
    },
    animate3: {
      x: 0,
      y: 0,

      scale: 0,
    },
    animate4: {
      x: 0,
      y: 0,

      scale: 0,
    },
  };

  const butger3 = {
    animate0: {
      x: 0,
      y: 0,

      scale: 1,
    },
    animate1: {
      x: 0,
      y: 0,

      scale: 0,
    },
    animate2: {
      x: 0,
      y: 0,

      scale: 0,
    },
    animate3: {
      x: 0,
      y: 0,

      scale: 0,
    },
    animate4: {
      x: 0,
      y: 0,

      scale: 0,
    },
  };
  const butger4 = {
    animate0: {
      x: 0,
      y: 0,

      scale: 1,
    },
    animate1: { scale: 0 },
    animate2: {
      x: 0,
      y: 0,

      scale: 0,
    },
    animate3: {
      y: -444,

      scale: 1,
    },
    animate4: {
      y: 444,

      scale: 0,
    },
  };
  const butger5 = {
    animate0: {
      x: 0,
      y: 0,

      scale: 1,
    },
    animate1: { scale: 0 },
    animate2: {
      x: 0,
      y: 0,

      scale: 0,
    },
    animate3: {
      x: 0,
      y: 0,

      scale: 0,
    },
    animate4: {
      y: -444,
      x: -441,

      scale: 1,
    },
  };
  const butger6 = {
    animate0: {
      x: 0,
      y: 0,

      scale: 1,
    },
    animate1: { x: 0, y: 0, scale: 0 },
    animate2: { x: -444, y: -444, scale: 1 },
    animate3: {
      x: 0,
      y: 0,

      scale: 0,
    },
    animate4: {
      x: 0,
      y: 0,

      scale: 0,
    },
  };

  const butger7 = {
    animate0: {
      x: 0,
      y: 0,

      scale: 1,
    },
    animate1: { x: 880, y: -887, scale: 1 },
    animate2: {
      x: 0,
      y: 0,

      scale: 0,
    },
    animate3: {
      x: 0,
      y: 0,

      scale: 0,
    },
    animate4: {
      x: 0,
      y: 0,

      scale: 0,
    },
  };
  const butger8 = {
    animate0: {
      x: 0,
      y: 0,

      scale: 1,
    },
    animate1: { y: -887, scale: 1 },
    animate2: {
      x: 0,
      y: 0,

      scale: 0,
    },
    animate3: {
      x: 0,
      y: 0,

      scale: 0,
    },
    animate4: {
      x: 0,
      y: 0,

      scale: 0,
    },
  };
  const butger9 = {
    animate0: {
      x: 0,
      y: 0,

      scale: 1,
    },
    animate1: { scale: 0 },
    animate2: {
      scale: 0,
    },
    animate3: {
      x: -441,
      y: -887,

      scale: 1,
    },
    animate4: {
      x: 0,
      y: 0,

      scale: 0,
    },
  };

  const controls = useAnimationControls();

  return (
    <>
      <section class="food_section layout_padding-bottom">
        <div class="container text-center">
          <div class="heading_container heading_center">
            <h2>Our Menu</h2>
          </div>
          <ul class="filters_menu">
            <li onClick={() => controls.start("animate0")}>All</li>
            <li onClick={() => controls.start("animate1")}>Burger</li>
            <li onClick={() => controls.start("animate2")}>Pizza</li>
            <li onClick={() => controls.start("animate3")}>Pasta</li>
            <li onClick={() => controls.start("animate4")}>Fries</li>
          </ul>

          <div>
            <div class="filters-content">
              <div class="row grid">
                <motion.div
                  class="col-sm-6 col-lg-4 all pizza"
                  variants={butger1}
                  animate={controls}
                  transition={{ duration: 0.5 }}
                >
                  <div class="box">
                    <div>
                      <div class="img-box">
                        <img src={require("../images/f1.png")} />
                      </div>
                      <div class="detail-box">
                        <h5>Delicious Pizza</h5>
                        <p>
                          Veniam debitis quaerat officiis quasi cupiditate quo,
                          quisquam velit, magnam voluptatem repellendus sed
                          eaque
                        </p>
                        <div class="options">
                          <h6>$20</h6>
                          <motion.a whileTap={{ scale: 1.5 }}>
                            <AddShoppingCartIcon />
                          </motion.a>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  class="col-sm-6 col-lg-4 all burger"
                  variants={butger2}
                  animate={controls}
                  transition={{ duration: 0.5 }}
                >
                  <div class="box">
                    <div>
                      <div class="img-box">
                        <img src={require("../images/f2.png")} />
                      </div>
                      <div class="detail-box">
                        <h5>Delicious Burger</h5>
                        <p>
                          Veniam debitis quaerat officiis quasi cupiditate quo,
                          quisquam velit, magnam voluptatem repellendus sed
                          eaque
                        </p>
                        <div class="options">
                          <h6>$15</h6>
                          <motion.a whileTap={{ scale: 1.5 }}>
                            <AddShoppingCartIcon />
                          </motion.a>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  class="col-sm-6 col-lg-4 all pizza"
                  variants={butger3}
                  animate={controls}
                  transition={{ duration: 0.5 }}
                >
                  <div class="box">
                    <div>
                      <div class="img-box">
                        <img src={require("../images/f3.png")} />
                      </div>
                      <div class="detail-box">
                        <h5>Delicious Pizza</h5>
                        <p>
                          Veniam debitis quaerat officiis quasi cupiditate quo,
                          quisquam velit, magnam voluptatem repellendus sed
                          eaque
                        </p>
                        <div class="options">
                          <h6>$17</h6>
                          <motion.a whileTap={{ scale: 1.5 }}>
                            {" "}
                            <AddShoppingCartIcon />
                          </motion.a>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  class="col-sm-6 col-lg-4 all pasta"
                  variants={butger4}
                  animate={controls}
                  transition={{ duration: 0.5 }}
                >
                  <div class="box">
                    <div>
                      <div class="img-box">
                        <img src={require("../images/f4.png")} />
                      </div>
                      <div class="detail-box">
                        <h5>Delicious Pasta</h5>
                        <p>
                          Veniam debitis quaerat officiis quasi cupiditate quo,
                          quisquam velit, magnam voluptatem repellendus sed
                          eaque
                        </p>
                        <div class="options">
                          <h6>$18</h6>
                          <motion.a whileTap={{ scale: 1.5 }}>
                            <AddShoppingCartIcon />
                          </motion.a>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  class="col-sm-6 col-lg-4 all fries"
                  variants={butger5}
                  animate={controls}
                  transition={{ duration: 0.5 }}
                >
                  <div class="box">
                    <div>
                      <div class="img-box">
                        <img src={require("../images/f5.png")} />
                      </div>
                      <div class="detail-box">
                        <h5>French Fries</h5>
                        <p>
                          Veniam debitis quaerat officiis quasi cupiditate quo,
                          quisquam velit, magnam voluptatem repellendus sed
                          eaque
                        </p>
                        <div class="options">
                          <h6>$10</h6>
                          <motion.a whileTap={{ scale: 1.5 }}>
                            <AddShoppingCartIcon />
                          </motion.a>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  class="col-sm-6 col-lg-4 all pizza"
                  variants={butger6}
                  animate={controls}
                  transition={{ duration: 0.5 }}
                >
                  <div class="box">
                    <div>
                      <div class="img-box">
                        <img src={require("../images/f6.png")} />
                      </div>
                      <div class="detail-box">
                        <h5>Delicious Pizza</h5>
                        <p>
                          Veniam debitis quaerat officiis quasi cupiditate quo,
                          quisquam velit, magnam voluptatem repellendus sed
                          eaque
                        </p>
                        <div class="options">
                          <h6>$15</h6>
                          <motion.a whileTap={{ scale: 1.5 }}>
                            <AddShoppingCartIcon />
                          </motion.a>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  class="col-sm-6 col-lg-4 all burger"
                  variants={butger7}
                  animate={controls}
                  transition={{ duration: 0.5 }}
                >
                  <div class="box">
                    <div>
                      <div class="img-box">
                        <img src={require("../images/f7.png")} />
                      </div>
                      <div class="detail-box">
                        <h5>Tasty Burger</h5>
                        <p>
                          Veniam debitis quaerat officiis quasi cupiditate quo,
                          quisquam velit, magnam voluptatem repellendus sed
                          eaque
                        </p>
                        <div class="options">
                          <h6>$12</h6>
                          <motion.a whileTap={{ scale: 1.5 }}>
                            <AddShoppingCartIcon />
                          </motion.a>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  class="col-sm-6 col-lg-4 all burger"
                  variants={butger8}
                  animate={controls}
                  transition={{ duration: 0.5 }}
                >
                  <div class="box">
                    <div>
                      <div class="img-box">
                        <img src={require("../images/f8.png")} />
                      </div>
                      <div class="detail-box">
                        <h5>Tasty Burger</h5>
                        <p>
                          Veniam debitis quaerat officiis quasi cupiditate quo,
                          quisquam velit, magnam voluptatem repellendus sed
                          eaque
                        </p>
                        <div class="options">
                          <h6>$14</h6>
                          <motion.a whileTap={{ scale: 1.5 }}>
                            <AddShoppingCartIcon />
                          </motion.a>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  class="col-sm-6 col-lg-4 all pasta"
                  variants={butger9}
                  animate={controls}
                  transition={{ duration: 0.5 }}
                >
                  <div class="box">
                    <div>
                      <div class="img-box">
                        <img src={require("../images/f9.png")} />
                      </div>
                      <div class="detail-box">
                        <h5>Delicious Pasta</h5>
                        <p>
                          Veniam debitis quaerat officiis quasi cupiditate quo,
                          quisquam velit, magnam voluptatem repellendus sed
                          eaque
                        </p>
                        <div class="options">
                          <h6>$10</h6>
                          <motion.a whileTap={{ scale: 1.5 }}>
                            <AddShoppingCartIcon />
                          </motion.a>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
            <div class="btn-box my-4">
              <a onClick={() => alert("hello")}>View More</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ManuScreen;
