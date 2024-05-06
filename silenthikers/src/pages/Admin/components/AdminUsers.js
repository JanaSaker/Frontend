import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message,setMessage] = useState('')
  const [showModal, setShowModal] = useState(false);
  const [editItem, setEditItem] = useState(null);

  //user states
  const[userName,setusername] = useState('')
  const[password, setPassword] = useState('')
  const[email, setEmail] = useState('')
  const[phoneNumber, setPhoneNumber] = useState('')

  const UserEditData = {
    userName,
    password,
    email,
    phoneNumber
  }




  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5000/users")
      .then((response) => {
        setUsers(response.data);
        console.log(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);


  const handleDelete = async (e,item) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/users/${item.id}`
      );
      console.log(response);
      setMessage('deleted Successfully')
      setUsers((prevUsers) => prevUsers.filter((u) => u.id !== item.id));
    } catch (err) {
      console.log(err);
      setMessage('failed to Delete')
    }
  };

  const handleEdit = async (item) => {
    try {
      const response = await axios.patch(
        `http://localhost:5000/users/${editItem.id}`, UserEditData
      );
      console.log(response);
      setMessage('Edited Successfully')
    } catch (err) {
      console.log(err);
      setMessage('failed to edit')
    }
  };

  const handleEditClick = (item) => {
    setEditItem(item)
    setShowModal(true);
    setusername(item.userName)
    setEmail(item.email)
    setPassword(item.password)
    setPhoneNumber(item.phoneNumber)
   };


  return (
    <>
      <div className="w-100">
        <div className="d-flex row m-0 w-100">
          <div className="d-flex p-3 w-100">
          <div className="d-flex gap-5 m-2">
              <input type="text" className="px-3" placeholder="Search" />
              <div className="d-flex flex-column">
              <p
                        className={
                          message.includes("Success")
                            ? "text-success"
                            : "text-danger"
                        }
                      >
                        {message}
                      </p>
              </div>
            </div>
          </div>
          <div className="w-100 p-0">
            <table className="table table-white mt-3 w-100">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col ">Username</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone Number</th>
                  <th scope="col">Action </th>
                </tr>
              </thead>
              {users &&
                users.map((item, index) => (
                  <tbody>
                    <tr>
                      <td className="user-id-dashboard">{index + 1}</td>
                      <td className="user-username-dashboard">
                        {item.userName}
                      </td>
                      <td className="user-email-dashboard">
                        {item.email}
                      </td>
                      <td className="user-email-dashboard">
                        {item.phoneNumber}
                      </td>
                      <td className="user-action-dashboard">
                        <i className="fa fa-trash"  onClick={(e) => {
                            handleDelete(e, item);
                          }}></i>
                            <i className="fa fa-edit p-2"  onClick={() => {
                            handleEditClick(item);
                          }}></i>
                      </td>

                    </tr>
                  </tbody>
                ))}
            </table>
          </div>
          <Modal show={showModal} onHide={() => setShowModal(false)}>
              <Modal.Header closeButton>
                <Modal.Title>Edit User</Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <label
                className="form-label"
                htmlFor="amount-of-seats"
                >
                Edit Username 
                </label>
                <div className="form-outline flex-fill mb-0">
                                <input
                                  type="text"
                                  id="amount-of-seats"
                                  className="form-control"
                                  onChange={(e) => setusername(e.target.value)}
                                  value={userName}
                                />
                                </div>
                                <div className="fw-light">You can Edit the User username</div>
                                <label
                className="form-label"
                htmlFor="amount-of-seats"
                >
                Edit user password 
                </label>
                <div className="form-outline flex-fill mb-0">
                                <input
                                  type="text"
                                  id="amount-of-seats"
                                  className="form-control"
                                  onChange={(e) => setPassword(e.target.value)}
                                  value={password}
                                />
                                </div>
                                <div className="fw-light">You can Edit the numbers of seats</div>
                                <label
                className="form-label"
                htmlFor="amount-of-seats"
                >
                edit phone number
                </label>
                <div className="form-outline flex-fill mb-0">
                                <input
                                  type="text"
                                  id="amount-of-seats"
                                  className="form-control"
                                  onChange={(e) => setPhoneNumber(e.target.value)}
                                  value={phoneNumber}
                                />
                                </div>
                                <div className="fw-light">You can Edit the user phone number</div>
                                <label
                className="form-label"
                htmlFor="amount-of-seats"
                >
                edit the user Email
                </label>
                <div className="form-outline flex-fill mb-0">
                                <input
                                  type="text"
                                  id="amount-of-seats"
                                  className="form-control"
                                  onChange={(e) => setEmail(e.target.value)}
                                  value={email}
                                />
                                </div>
                                <div className="fw-light">You can Edit the userEmail</div>
                                <div className={message.includes('Success') ? 'text-success' : 'text-danger'}>{message}</div>
                    </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={() => setShowModal(false)}>
                  Close
                </Button>
                <Button variant="success" onClick={handleEdit}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
        </div>
      </div>
    </>
  );
};

export default AdminUsers;
