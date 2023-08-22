import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { loginUsersStart, createUserStart } from "../Redux/actions";
import { motion } from "framer-motion";
import "../pages/pageStyle.css";
import Button from "react-bootstrap/Button";

import { useNavigate } from "react-router-dom";

const initialState = {
  email: "",
  password: "",
   imageName: null,
};

const CreateAccount = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.data);
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
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&\.\+\*\{\]\{\[\-,;`<>':"=^#_|\/\\])(?=.*?[A-Za-z\d@$!%*+?&\.\+\*\{\]\{\[\-,;`<>':"=^#_|\/\\]).{8,16}/
    );

    if (!strongRegex.test(data.email)) {
      setState(!state);
      cancelCourse();
      alert("invalid email");
      return false;
    } else if (!passwordRegExp.test(data.password)) {
      setState(!state);
      cancelCourse();
      alert("invalid password");
      return false;
    } else {
      if (loading == false) {
        const result = users.find(
          (item) => item.email.toUpperCase() === data.email.toUpperCase()
        );
        if (result) {
          cancelCourse();
          alert("ur acount is alrdy exist");
        } else {
          dispatch(createUserStart(data));

          cancelCourse();
          navigate("/");
        }
      }
    }
  };

  const cancelCourse = () => {
    setData({
      email: "",
      password: "",
    });
  };

  // let Navigate = useNavigate();

  return (
    <div className=" text-center m-0 p-0">
      <div style={{ position: "relative" }}>
        <img style={{ width: "100%" }} src={require("../img/Splash.avif")} />
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "0",
            right: "0",
            backgroundColor: "transparent",
            width: "90%",
            margin: "auto",
          }}
        >
          <div className="row">
            <div className="col-md-6  objct-Center">
              <h1 className="h1-style p-5">
                welcome.. please Create your Account....
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
                  />{" "}
                  <br />
                  <input
                    className="my-3"
                    placeholder="password"
                    value={data.password}
                    name="password"
                    onChange={handleChange}
                  />
                  <br />
                  <div className="CreateAccount-Buttone-Style">
                    <Button className="my-3 ms-5" onClick={() => validate()}>
                      CreateAccount
                    </Button>
                    <p
                      className="my-3 ms-1"
                      style={{ color: "gold" }}
                      onClick={() => navigate("/")}
                    >
                      Login?
                    </p>
                    <br />
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

export default CreateAccount;
