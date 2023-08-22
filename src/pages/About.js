import React, { useState, useEffect } from "react";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { useDispatch, useSelector } from "react-redux";
import {
  loginUsersStart,
  uploadimgStart,
  createUserStart,
  updateUserStart,
  imageFileNameGetStart,
} from "../Redux/actions";

import Table from "react-bootstrap/Table";
import { useAuth } from "../routeHelper/ProtectedRouter";
import { Oval } from "react-loader-spinner";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import "../pages/comnStyle.css";
import Button from "react-bootstrap/Button";
import GlobalInclude from "../globalInclude/GlobalInclude";
import { LinearProgress } from "@mui/material";
import Tst from "./Tst";
import { json } from "react-router-dom";

import TopHeader from "../NaveComponent/TopHeader";

const ImageDataFile = {
  image: null,
  imageName: null,
};

const initialState = {
  email: "",
  password: "",
  imageName: "",
};
const About = () => {
  const dispatch = useDispatch();
  const { users, images } = useSelector((state) => state.data);

  console.log("ppppppppppppppppppp>>>", images);

  // const handleChange = (e) => {
  //   setData({ ...data, [e.target.name]: e.target.value });
  // };

  useEffect(() => {
    dispatch(imageFileNameGetStart());
    dispatch(loginUsersStart());

    // dispatch(imageUsersStart());
  }, []);

  // =========uplod img==========

  // const onChangeImage = (e) => {
  //   // console.log(e.target.files[0].name);
  //   setImagess({
  //     ...imagess,
  //     image: e.target.files[0],
  //     imageName: e.target.files[0].name,
  //   });
  //   setData({ ...data, imageName: e.target.files[0].name });
  // };

  // const hello = () => {
  //   console.log(imagess);
  //   console.log("........................", data);
  //   // dispatch(uploadimgStart(imagess));
  //   dispatch(createUserStart(data));
  // };

  // const deletImg = (id) => {
  //   window.confirm("are you sure that you wanted to delete that user  ?!");
  //   dispatch(updateUserStart({ id, imageName: null }));
  //   dispatch(loginUsersStart());
  //   // dispatch(deleteimgStart(id));
  // };

  // alert("you cannot change another user data");

  return (
    <>
      <div className="bg-dark">
        <TopHeader />
      </div>

      {/* {images.map((item, index) => {
          return (
            
              <p style={{ color: "black" }}>{index}</p>
        
          );
        })} */}
    </>
  );
};

export default About;
