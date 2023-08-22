import React, { useState } from "react";
import "./CommonStyleSheet.css";

const initialState = {
  name: "",
  number: "",
  email: "",
  persons: "",
  Date: "",
};

const BookTableScreen = () => {
  const [data, setData] = useState(initialState);

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const Hello = () => {
    console.log("================>", data);
    localStorage.setItem("data", JSON.stringify(data));
    setData(ClereData)
  };

const ClereData = {
  name: "",
  number: "",
  email: "",
  persons: "",
  Date: "",
}


  return (
    <>
      <section class="book_section ">
        <div class="container">
          <div class="heading_container my-4">
            <h2>Book A Table</h2>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="form_container">
                <div className="form-group">
                  <div>
                    <input
                      className="mt-0"
                      type="email"
                      id="xyz"
                      name="name"
                      value={data.name}
                      onChange={changeHandler}
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <input
                      type="name"
                      id="xyz"
                      name="number"
                      value={data.number}
                      onChange={changeHandler}
                      placeholder="Enter your number"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      id="xyz"
                      name="email"
                      value={data.email}
                      onChange={changeHandler}
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <select
                      name="persons"
                      class=" nice-select wide HowMany"
                      onChange={changeHandler}
                      value={data.persons}
                    >
                      <option selected>How many persons?</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                  </div>
                  <div>
                    <input  value={data.Date} name="Date" onChange={changeHandler} type="date" />
                  </div>
                  <div class="btn_box">
                    <button onClick={() => Hello()}>Book Now</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="map_container h-100">
                <div class="mapouter h-100">
                  <div class="gmap_canvas" style={{ height: "77%" }}>
                    <iframe
                      className=""
                      width="100%"
                      height="100%"
                      id="gmap_canvas"
                      src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=k&z=11&ie=UTF8&iwloc=&output=embed"
                      frameborder="0"
                      // scrolling="no"
                      marginheight="0"
                      marginwidth="0"
                    ></iframe>
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookTableScreen;
