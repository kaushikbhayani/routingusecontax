import axios from "axios";
import { Image } from "react-bootstrap";

export const loginUsersApi = async () =>
  await axios.get("http://localhost:8000/users");

export const createUserApi = async (user) =>
  await axios.post("http://localhost:8000/users", user);

export const deleteUserApi = async (userId) =>
  await axios.delete(`http://localhost:8000/users/${userId}`);

export const updateUserApi = async (userId, userInfo) =>
  await axios.put(`http://localhost:8000/users/${userId}`, userInfo);

// =========>Node Api for FIle Store
export const createimgApi = async (formData) =>
  await axios.post("http://localhost:8080/api/uploadfile", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

// ================*===================*======================*===================*=================*============

// =======image file name get api
export const startImgFileNameGetApi = async () =>
  await axios.get("http://localhost:8000/images");

// =======  image file name post api
export const createImgFileNameApi = async (formDataFileName) =>
  await axios.post("http://localhost:8000/images", formDataFileName);

// =========> image file name delet api
export const deleteImgFileNameApi = async (formDataFileId) =>
  await axios.delete(`http://localhost:8000/images/${formDataFileId}`);

export const updatImagDetaileApi = async (
  formDataFileId,
  formDataFileNameUpdate
) =>
  await axios.put(
    `http://localhost:8000/images/${formDataFileId}`,
    formDataFileNameUpdate
  );

// ================*===================*======================*===================*=================*============
