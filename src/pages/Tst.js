// import React, { Component } from "react";
// import { Link, Redirect } from "react-router-dom";
// import axios from "axios";

// class Tst extends Component {
//   state = {
//     name: "",
//     email: "",
//     password: "",
//     password2: "",
//     errors: null,
//     image: null,
//     imageName: null,
//   };

//   onChangeImage = async (e) => {
//     console.log(e.target.files[0].name);
//     await this.setState({
//       ...this.state,
//       image: e.target.files[0],
//       imageName: e.target.files[0].name,
//     });
//   };

//   onSubmit = async (e) => {
//     e.preventDefault();
//     this.setState({
//       errors: null,
//     });
//     if (this.state.password !== this.state.password2) {
//       this.setState({
//         errors: "Password and Confirm Password Are Invalid",
//       });
//     } else {
//       try {
//         const config = {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         };
//         let fd = new FormData();
//         fd.append("image", this.state.image);
//         const newUser = {
//           email: this.state.email,
//           password: this.state.password,
//           name: this.state.name,
//           image: fd,
//         };
//         console.log(this.state.image);
//         const body = newUser;
//         const res = await axios.post("api/addUser", body, config);

//         console.log(res.data);
//       } catch (error) {
//         console.log(error.message);
//       }
//     }
//   };

//   Alert = () => {
//     if (this.state.errors != null) {
//       return <p className="alert alert-danger">{this.state.errors}</p>;
//     }
//     return null;
//   };

//   render() {
//     return (
//       <div>
//         <h1 className="large text-primary">Sign Up</h1>
//         <p className="lead">
//           <i className="fa fa-user" /> Create Your Account
//         </p>

//         <form
//           className="form"
//           onSubmit={(e) => this.onSubmit(e)}
//           encType="multipart/form-data"
//         >
//           <div className="form-group">
//             <input
//               type="file"
//               name="image"
//               onChange={(e) => this.onChangeImage(e)}
//               minLength="6"
//             />
//           </div>

//           <input type="submit" className="btn btn-primary" value="Tst" />
//         </form>
//         <p className="my-1">
//           Already have an account? <Link to="login">Sign In</Link>
//         </p>
//         {this.Alert()}
//       </div>
//     );
//   }
// }

// export default Tst;
// import React, { useState } from "react";

// function App() {
//     const [file, setFile] = useState();
//     function handleChange(e) {
//         console.log(e.target.files);
//         setFile(URL.createObjectURL(e.target.files[0]));
//     }

//     return (
//         <div className="App">
//             <h2>Add Image:</h2>
//             <input type="file" onChange={handleChange} />
//             <img src={file} />

//         </div>

//     );
// }

// export default App;