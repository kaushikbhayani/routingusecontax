import React, { useEffect, useState } from "react";
import "./CommonStyleSheet.css";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import {
  ImageFileNameDeletStart,
  ImageFileNamePostStart,
  ImageFileNameUpdateStart,
  imageFileNameGetStart,
  uploadimgStart,
} from "../Redux/actions";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import ClearIcon from "@mui/icons-material/Clear";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useAuth } from "../routeHelper/ProtectedRouter";

const ImageFileData = {
  heading: "",
  discount: "",
  imageName: "",
};

const ImageDataFile = {
  images: null,
  imagesName: null,
};

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

const OfferScreen = () => {
  const dispatch = useDispatch();
  const { users, images, loading } = useSelector((state) => state.data);
  const { user, login } = useAuth();

  const [imageFileData, setImageFileData] = useState(ImageFileData);

  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [imageFile, setImageFile] = useState(ImageDataFile);

  console.log("images responce >>>", images);

  // =======  upload delete crud ========>start

  const handleOpen = (id) => {
    let chang = images.find((elem) => {
      return elem.id === id;
    });
    setImageFileData(chang);
    setOpen1(true);
  };

  // const handleOpen2 = (id) => {
  //   setOpen1(true);
  // };

  const handleRemove = (id) => {
    imageFileData.imageName = null;
    dispatch(ImageFileNameUpdateStart({ id, imageFileData }));
    dispatch(imageFileNameGetStart());
  };

  const handleClose = () => setOpen1(false);

  const handleChange = (e) => {
    setImageFileData({ ...imageFileData, [e.target.name]: e.target.value });
  };

  const onChangeImage = (e) => {
    // console.log(e.target.files[0].name);
    setImageFile({
      ...imageFile,
      images: e.target.files[0],
      imagesName: e.target.files[0].name,
    });

    setImageFileData({ ...imageFileData, imageName: e.target.files[0].name });
  };

  // ========upload=img======>

  const HandleUploadimage = () => {
    console.log(imageFile);
    console.log("..............fsdfsdfsdfsfssdf..........", imageFile);
    dispatch(uploadimgStart(imageFile));
    dispatch(ImageFileNamePostStart(imageFileData));
  };

  // ========upload=img======>

  useEffect(() => {
    dispatch(imageFileNameGetStart());
  }, []);
  // ======= upload delete crud ========>end

  const handleDelete = (id) => {
    dispatch(ImageFileNameDeletStart(id));
    dispatch(imageFileNameGetStart());
  };
  const handleUpdate = (id) => {
    dispatch(uploadimgStart(imageFile));
    dispatch(ImageFileNameUpdateStart({ id, imageFileData }));
    dispatch(imageFileNameGetStart());
  };

  return (
    <div className="container text-center">
      {user ? (
        <Button
          className="bg-success my-5"
          style={{ color: "white" }}
          onClick={() => setOpen2(true)}
        >
          Add-Item
        </Button>
      ) : null}
      <div className="row">
        {images &&
          images.map((item, index) => {
            return (
              <div className="col-md-6">
                <div className="box-1" style={{ border: "1px solid black" }}>
                  <div className="img-box" onClick={() => handleOpen(item.id)}>
                    <img src={`uploads/${item.imageName}`} />
                  </div>
                  <div className="detail-box">
                    <h5>{item.heading}</h5>
                    <h6>
                      <span>{item.discount}</span>"Off"
                    </h6>
                    {user ? (
                      <Button
                        className="bg-success"
                        style={{ color: "white" }}
                        onClick={() => handleDelete(item.id)}
                      >
                        Delete-Item
                      </Button>
                    ) : null}
                  </div>
                </div>
              </div>
            );
          })}
      </div>

      {user ? (
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
                <img src={`uploads/${imageFileData.imageName}`} />
              </div>

              <div>
                <Button className="bg-success" style={{ color: "white" }}>
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
                    id="upload-button"
                    style={{ display: "none" }}
                    onChange={onChangeImage}
                  />
                </div>
              </div>
              <input
                className="my-3"
                placeholder="heading"
                value={imageFileData.heading}
                name="heading"
                onChange={handleChange}
              />
              <br />
              <input
                className="my-3"
                placeholder="discount"
                value={imageFileData.discount}
                name="discount"
                onChange={handleChange}
              />
              <br />
              <Button
                className="bg-success"
                style={{ color: "white" }}
                onClick={() => handleUpdate(imageFileData.id)}
              >
                Updat-All
              </Button>
              <br />
              <br />
              <Button
                className="bg-success"
                style={{ color: "white" }}
                onClick={() => handleRemove(imageFileData.id)}
              >
                Delete-All
              </Button>
              <br />
            </Typography>
          </Box>
        </Modal>
      ) : null}
      <div>
        {/* ==========create item============> */}
        {user ? (
          <Modal
            open={open2}
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
                  <span onClick={() => setOpen2(false)}>
                    <ClearIcon />
                  </span>
                </div>
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <div className="image_update">
                  {/* <img src={`uploads/${imageFileData.imagesName}`} /> */}
                </div>

                <div>
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
                      name="images"
                      id="upload-button"
                      style={{ display: "none" }}
                      onChange={onChangeImage}
                    />
                  </div>
                </div>
                <input
                  className="my-3"
                  placeholder="heading"
                  value={imageFileData.heading}
                  name="heading"
                  onChange={handleChange}
                />
                <br />
                <input
                  className="my-3"
                  placeholder="discount"
                  value={imageFileData.discount}
                  name="discount"
                  onChange={handleChange}
                />
                <br />
                <Button
                  className="bg-success"
                  style={{ color: "white" }}
                  onClick={() => HandleUploadimage()}
                >
                  Create-item
                </Button>
                <br />
                <br />

                <Button
                  className="bg-success"
                  style={{ color: "white" }}
                  // onClick={() => handleRemove(imageFileData.id)}
                >
                  Delete-All
                </Button>
                <br />
              </Typography>
            </Box>
          </Modal>
        ) : null}
      </div>
    </div>
  );
};

export default OfferScreen;
