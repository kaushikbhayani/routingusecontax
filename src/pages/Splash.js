import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUsersStart, createUserStart } from "../Redux/actions";
import { motion } from "framer-motion";
import "../pages/pageStyle.css";
import Button from "react-bootstrap/Button";
import { useAuth } from "../routeHelper/ProtectedRouter";
import GlobalInclude from "../globalInclude/GlobalInclude";
import { useNavigate } from "react-router-dom";

const initialState = {
  email: "",
  password: "",
  imageName: "",
};

const Splash = () => {
  const { user, login, loading } = useAuth();

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.data);
  useEffect(() => {
    dispatch(loginUsersStart());
  }, []);
  const [state, setState] = useState();
  const [data, setData] = useState(initialState);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const strongRegex = new RegExp(
      "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"
    );

    const passwordRegExp = new RegExp(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&\.\+\*\{\]\{\[\-,;`<>':"=^#_|\/\\])(?=.*?[A-Za-z\d@$!%*+?&\.\+\*\{\]\{\[\-,;`<>':"=^#_|\/\\]).{8,}/
    );

    if (!strongRegex.test(data.email)) {
      alert("invalid email");
      setState(!state);
      cancelCourse();
      return false;
    } else if (!passwordRegExp.test(data.password)) {
      alert("invalid Password");
      setState(!state);
      cancelCourse();
      return false;
    } else {
      const result = users.find(
        (item) =>
          item.email.toLowerCase() === data.email.toLowerCase() &&
          item.password === data.password
      );

      cancelCourse();
      if (result) {
        GlobalInclude.LocalDataStore.setItem("Email", JSON.stringify(result));
        login(true);
      } else {
        alert("invalid login");
      }
    }
  };

  /////////////////////////////////////////////////////////

  const cancelCourse = () => {
    setData({
      email: "",
      password: "",
    });
  };

  return (
    <div className="container-fluid text-center m-0 p-0">
      <div style={{ position: "relative" }}>
        <img style={{ width: "100%" }} src={require("../img/Splash.avif")} />
        <div
          style={{
            position: "absolute",
            border: "1px solid white",
            top: "0px",
            backgroundColor: "transparent",
            width: "100%",
            height: "100%",
          }}
        >
          <div className="row row-RowStyle">
            <div className="col-md-6  objct-Center">
              <h1 className="h1-style p-5">
                welcome To Splash Screen please Login....
              </h1>
            </div>
            <div className="col-md-6 m-0 p-0">
              <motion.div
                animate={{
                  x: state
                    ? [0, 10, -10, 0, 10, -10, 0]
                    : [0, -10, 10, 0, -10, 10, 0],
                }}
                transition={{ duration: 0.1 }}
              >
                <div style={{ padding: "15vw" }}>
                  <input
                    className="my-3"
                    placeholder="username"
                    value={data.email}
                    name="email"
                    onChange={handleChange}
                  />
                  <br />
                  <input
                    className="my-3"
                    placeholder="password"
                    value={data.password}
                    name="password"
                    onChange={handleChange}
                  />
                  <br />
                  <div className="Login-Buttone-Style">
                    <Button className="my-3 me-4" onClick={() => validate()}>
                      Login
                    </Button>
                    <p
                      className="my-3 me-2"
                      style={{ color: "gold" }}
                      onClick={() => navigate("/createAccount")}
                    >
                      Create Acount?
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Splash;
