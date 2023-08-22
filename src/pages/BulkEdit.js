import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loginUsersStart,
  deleteUserStart,
  updateUserStart,
} from "../Redux/actions";
import Table from "react-bootstrap/Table";
import { useAuth } from "../routeHelper/ProtectedRouter";
import { Oval } from "react-loader-spinner";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import "../pages/comnStyle.css";
import Button from "react-bootstrap/Button";
import GlobalInclude from "../globalInclude/GlobalInclude";
import { color } from "framer-motion";

const initialState = {
  email: "",
  password: "",
  status: "",
};

const BulkEdit = () => {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.data);
  const [update, setUpdate] = useState();
  const [email, setEmail] = useState([]);
  const [show, setShow] = useState(initialState);

  const [data, setData] = useState(initialState);

//   const handleChange = (e) => {
//     setData({ ...data, [e.target.name]: e.target.value });
//     console.log(data)
//   };

  useEffect(() => {
    dispatch(loginUsersStart());
    dispatch(loginUsersStart());
    const items = JSON.parse(localStorage.getItem("Email"));
    if (items) {
      setEmail(items);
    }
  }, []);
 const  hello =()=>{
    console.log(show)
 }

 const onChange = (e) => {
    const html = e.target.innerHTML;
    setShow(html);
  };

  return (
    <>
      <div className="container-fluid overlayBulk bg-danger">
        <div
          className="d-flex d-flexBulk"
          style={{ border: "1px solid black" }}
        >
          <div className="bg-success">
            <h3 style={{ color: "white" }}>Login Name.....{email.email}</h3>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Email</th>
                  <th>Password</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                {users.map((item, index) => {
                  return (
                    <tr
                      className="bg-success"
                      style={{ border: "1px solid black" }}
                      key={index}
                    >
                      <td className="px-1">{index + 1}</td>
                      <td className="px-1">
                        <p contenteditable="true" onChange={onChange} >{item.email}</p>
                      </td>
                      <td className="px-1">
                      <p contenteditable="true" onInput={onChange}>{item.password}</p>
                      </td>

                      <td>
                        <button>
                          <DeleteForeverIcon />
                        </button>
                        <button onClick={() => setUpdate(item.id)}>
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
        <button onClick={()=>hello()}>click test</button>
      </div>
    </>
  );
};

export default BulkEdit;
