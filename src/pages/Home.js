import React, { useState, useEffect } from "react";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { useDispatch, useSelector } from "react-redux";
import {
  loginUsersStart,
  deleteUserStart,
  updateUserStart,
  imageFileNameGetStart,
} from "../Redux/actions";
import Table from "react-bootstrap/Table";
import { useAuth } from "../routeHelper/ProtectedRouter";
import { Oval } from "react-loader-spinner";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import ClearIcon from "@mui/icons-material/Clear";
import "../pages/comnStyle.css";
// import Button from "react-bootstrap/Button";
import GlobalInclude from "../globalInclude/GlobalInclude";
import BulkEdit from "./BulkEdit";
import { Label, Style } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  textAlign: "center",
};

const initialState = {
  email: "",
  password: "",
  status: "",
  image: null,
  imageName: null,
};
const ImageDataFile = {
  image: null,
};

const Home = () => {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.data);
  const [update, setUpdate] = useState();
  const [email, setEmail] = useState([]);
  const [open, setOpen] = useState(false);
  const [data, setData] = useState(initialState);
  const [images, setImages] = useState(ImageDataFile);
  const [open1, setOpen1] = React.useState(false);

  const handleOpen = (id) => {
    let chang = users.find((elem) => {
      return elem.id === id;
    });
    setData(chang);

    setOpen1(true);
  };
  const handleClose = () => setOpen1(false);

  const EditItm = (id) => {
    let newEditItem = users.find((elem) => {
      return elem.id === id;
    });
    setData(newEditItem);

    // console.log(newEditItem);
    setOpen(true);
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    if (loading == false) {
      let id = update;
      const result = users.find((item) => item.id === id);
      // console.log("item result", result);

      if (
        result.id == email.id &&
        result.email.toLowerCase() == data.email.toLowerCase() &&
        result.password.toLowerCase() == data.password.toLowerCase()
      ) {
        if (
          window.confirm(
            "are you sure that you wanted to changed that user data ?!"
          )
        ) {
          dispatch(updateUserStart({ id, data }));
          dispatch(loginUsersStart());
          if (loading == false) {
            GlobalInclude.LocalDataStore.setItem("Email", JSON.stringify(data));
          }
        }
      } else if (
        result.id == email.id &&
        result.email.toLowerCase() == data.email.toLowerCase() &&
        result.password.toLowerCase() !== data.password.toLowerCase()
      ) {
        if (
          window.confirm(
            "are you sure that you wanted to changed that user data ?!"
          )
        ) {
          // alert("log oute");
          dispatch(updateUserStart({ id, data }));
          dispatch(loginUsersStart());
          if (loading == false) {
            GlobalInclude.LocalDataStore.setItem("Email", JSON.stringify(data));
            login(null);
          }
        }
      } else if (
        result.id == email.id &&
        result.email.toLowerCase() !== data.email.toLowerCase() &&
        result.password.toLowerCase() == data.password.toLowerCase()
      ) {
        const result = users.find(
          (item) => item.email.toLowerCase() === data.email.toLowerCase()
        );
        // input email -> api
        if (result) {
          // alert("email already exists");
          // email already exists
        } else {
          if (
            window.confirm(
              "are you sure that you wanted to changed that user data ?!"
            )
          ) {
            // alert("Email update && local store email update");
            dispatch(updateUserStart({ id, data }));
            dispatch(loginUsersStart());
            if (loading == false) {
              GlobalInclude.LocalDataStore.setItem(
                "Email",
                JSON.stringify(data)
              );
            }
          }
        }
      } else if (
        result.id == email.id &&
        result.email.toLowerCase() !== data.email.toLowerCase() &&
        result.password.toLowerCase() !== data.password.toLowerCase()
      ) {
        if (
          window.confirm(
            "are you sure that you wanted to changed that user data ?!"
          )
        ) {
          // alert("log out && emaile password update");
          dispatch(updateUserStart({ id, data }));
          dispatch(loginUsersStart());
          if (loading == false) {
            GlobalInclude.LocalDataStore.setItem("Email", JSON.stringify(data));
            login(null);
          }
        }
      } else {
        alert("you cannot change another user data");
      }
    }
  };

  // ==================================== profile image==========================================================
  const onChangeImage = (e) => {
    console.log("nildip_meriya", e.target.files[0].name);
    setImages({
      ...images,
      image: e.target.files[0],
      imageName: e.target.files[0].name,
    });
    setData({ ...data, imageName: e.target.files[0].name });
  };

  const DeletProfileImage = (id) => {
    // let result = users.find((item) => item.id === id);
    // users.imageName = null;
    // dispatch(updateUserStart({ id, ...data }));
    // dispatch(updateUserStart({ id, "imageName":null }))
    // dispatch(loginUsersStart());
  };
  // ==================================== profile image==========================================================
  useEffect(() => {
    dispatch(loginUsersStart());

    const items = JSON.parse(localStorage.getItem("Email"));
    if (items) {
      setEmail(items);
    }
  }, []);

  const { user, login } = useAuth();

  const handleDelete = (id) => {
    if (window.confirm("are you sure that you wanted to delete that user  ?!"))
      if (id === email.id) {
        dispatch(deleteUserStart(id));
        login(null);
      } else {
        dispatch(deleteUserStart(id));
        // alert("you cannot change another user data");
      }
  };

  const handleRemove = (id) => {
    data.imageName = null;
    dispatch(updateUserStart({ id, data }));
    dispatch(loginUsersStart());
  };

  const validate = () => {
    const strongRegex = new RegExp(
      "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"
    );

    const passwordRegExp = new RegExp(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&\.\+\*\{\]\{\[\-,;`<>':"=^#_|\/\\])(?=.*?[A-Za-z\d@$!%*+?&\.\+\*\{\]\{\[\-,;`<>':"=^#_|\/\\]).{8,16}/
    );

    if (!strongRegex.test(data.email)) {
      alert("emaile not found");
      cancelCourse();

      return false;
    } else if (!passwordRegExp.test(data.password)) {
      cancelCourse();
      alert("emaile not found");
      return false;
    } else {
      if (loading == false) {
        handleUpdate();
      }
    }
  };

  const cancelCourse = () => {
    setData({
      email: "",
      password: "",
    });
  };
  return (
    <>
      <div className="container-fluid bg-dark">
        <div className="container">
          <h1 className="Loger-Name-Style">
            <span>
              <AdminPanelSettingsIcon />
            </span>
            &nbsp; {email.email}
          </h1>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>No</th>
                <th>Email</th>
                <th>Password</th>
                <th>Profile</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((item, index) => {
                // console.log("Screen data aaaaaaaa>", users);

                return (
                  <tr
                    className="bg-success"
                    style={{ border: "1px solid black" }}
                    key={index}
                  >
                    <td className="px-1">{index + 1}</td>
                    <td className="px-1">{item.email}</td>
                    <td className="px-1">{item.password}</td>
                    <td className="px-1 ">
                      <img
                        onClick={() => handleOpen(item.id)}
                        src={`../uploads/${item.imageName}`}
                        style={{
                          width: "20px",
                          height: "20px",
                          borderRadius: "100%",
                          overflow: "hidden",
                          border: "0px",
                        }}
                        loading="lazy"
                      />
                    </td>

                    <td className="d-flex">
                      {/* <td className="d-flex ActionStyle"> */}
                      <Oval
                        height={20}
                        width={20}
                        color="#4fa94d"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={loading}
                        ariaLabel="oval-loading"
                        secondaryColor="#4fa94d"
                        strokeWidth={2}
                        strokeWidthSecondary={2}
                      />

                      <button onClick={() => handleDelete(item.id)}>
                        <DeleteForeverIcon />
                      </button>
                      <button
                        onClick={() => EditItm(item.id) || setUpdate(item.id)}
                      >
                        <EditIcon />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
      <Modal
        open={open1}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title text-end"
            variant="h6"
            component="h2"
          >
            <div className="text-end">
              <span onClick={() => handleClose()}>
                <ClearIcon />
              </span>
            </div>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className="image_update">
              <img
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "100%",
                  overflow: "hidden",
                  border: "0px",
                  margin: "10px",
                }}
                src={`../uploads/${data.imageName}`}
              />
            </div>
            <p className="my-3"> {data.imageName}</p>
            <p className="my-3">{data.email}</p>
            <p className="my-3">{data.password}</p>

            <div>
              <Button
                className="bg-success"
                style={{ color: "white" }}
                onClick={() => handleRemove(data.id)}
              >
                <DeleteForeverIcon />
              </Button>
              <div className="d-flex">
                <label htmlFor="upload-button">
                  <span
                    className="btn-upload bg-success"
                    style={{ color: "white" }}
                  >
                    <AddPhotoAlternateIcon />
                  </span>
                </label>
                <input
                  type="file"
                  name="image"
                  id="upload-button"
                  style={{ display: "none" }}
                  onChange={onChangeImage}
                  minLength="6"
                />
              </div>
            </div>
          </Typography>
        </Box>
      </Modal>
      <div>
        <div className={open ? "overlay" : "overlay-close"}>
          <div className="container h-100">
            <div className="Setting ">
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
              <div>
                <Button
                  className="bg-success"
                  onClick={() => validate() || setOpen(false)}
                >
                  Update
                </Button>
                <Button className="bg-success" onClick={() => setOpen(false)}>
                  cancel
                </Button>
              </div>
            </div>
          </div>
        </div>
        {/* <BulkEdit/> */}
      </div>
    </>
  );
};

export default Home;
