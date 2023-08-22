const express = require("express");
const app = express();
const multer = require("multer");
const cors = require("cors");
app.use(
  cors({
    origin: "*",
  })
);
// setup multer for file upload
//Configuration for Multer
const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public");
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    cb(null, `uploads/${file.originalname}`);
  },
});

const upload = multer({ storage: multerStorage, });

app.use(express.json());
// serving front end build files
app.use(express.static(__dirname + "/../"));

// route for file upload
app.post("/api/uploadfile", upload.single("images"), (req, res, next) => {
  console.log(req.file.originalname + " file successfully uploaded !!");
  // store in db
  res.sendStatus(200);
});

// app.get("/api/uploadfile",(req, res) => {
//     res.json({"images":[]});
// });

// app.listen(3001, () => console.log("Listening on port 3001"));
app.listen(8080, () => console.log("listening on port 8080"))

// onFileUpload = () => {
//     const formData = new FormData();
//     formData.append("myFile", this.state.selectedFile);

//     console.log(this.state.selectedFile);
//     axios.post("http://localhost:3000/api/uploadfile", formData, {
//       headers: {
//         "content-type": "multipart/form-data",
//       },
//     }); //I need to change this line
//   };
