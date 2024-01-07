import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const AdminBookings = () => {
  const [bookings, setbookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [amountOfSeats, setAmountOfSeats] = useState('')

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5000/bookings")
      .then((response) => {
        setbookings(response.data);
        console.log(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const handleApprove = async (e, item) => {
    try {
      const response = await axios.patch(
        `http://localhost:5000/admins/approve/booking/${item.id}/hike/${item.Hike.id}`
      );
      console.log(response);
      setMessage("approved Successfully");
    } catch (err) {
      console.log(err);
      setMessage("failed to Approve");
    }
  };

  const handleReject = async (e, item) => {
    try {
      const response = await axios.patch(
        `http://localhost:5000/admins/reject/booking/${item.id}`
      );
      console.log(response);
      setMessage("Rejected Successfully");
    } catch (err) {
      console.log(err);
      setMessage("failed to Rejecet");
    }
  };

  const handleDelete = async (e, item) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/bookings/${item.id}`
      );
      console.log(response);
      setMessage("deleted Successfully");
    } catch (err) {
      console.log(err);
      setMessage("failed to Delete");
    }
  };

  const handleEditClick = (item) => {
    setEditItem(item)
    setShowModal(true);
   };

  const handleEdit = async (e,item) => {
    try {
      const response = await axios.patch(
        `http://localhost:5000/bookings/${editItem.id}`,amountOfSeats
      );
      console.log(response);
      setMessage("edited Successfully");
      setShowModal(false);
      setbookings((prevBookings) => {
        return prevBookings.map((item) =>
          item.id === editItem.id ? { ...item, amountOfSeats: amountOfSeats } : item
        );
      });
    } catch (err) {
      console.log(err);
      setMessage("failed to edit");
    }
  };

  return (
    <>
      <div className="w-100">
        <div className="d-flex row m-0 w-100">
          <div className="d-flex p-3 w-100">
            <div>
              <input type="text" className="px-3" placeholder="Search" />
            </div>
          </div>
          <div className="w-100 p-0">
            <table className="table table-white mt-3 w-100">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col ">Username</th>
                  <th scope="col">Email</th>
                  <th scope="col">Booking Id</th>
                  <th scope="col">Hike Name</th>
                  <th scope="col">amount of Seats</th>
                  <th scope="col">status</th>
                  <th scope="col">Approve/Reject Hike</th>
                  <th scope="col">Action </th>
                  <th scope="col">Console Message </th>
                </tr>
              </thead>
              {bookings &&
                bookings.map((item, index) => (
                  <tbody key={index}>
                    <tr>
                      <td className="">{index + 1}</td>
                      <td >
                        {item.User.userName}
                      </td>
                      <td className="user-email-dashboard">
                        {item.User.email}
                      </td>
                      <td className="user-balance-dashboard">{item.id}</td>
                      <td className="user-usertype-dashboard">
                        {item.Hike.hikeName}
                      </td>
                      <td className="user-usertype-dashboard">
                        {item.amountOfSeats}
                      </td>
                      <td>{item.status}</td>
                      <td>
                        <button
                          onClick={(e) => {
                            handleApprove(e, item);
                          }}
                          className="btn btn-success"
                        >
                          Approve
                        </button>
                        <button
                          onClick={(e) => {
                            handleReject(e, item);
                          }}
                          className="btn btn-danger m-1"
                        >
                          reject
                        </button>
                      </td>

                      <td className="user-action-dashboard">
                        <i
                          className="fa fa-trash"
                          onClick={(e) => {
                            handleDelete(e, item);
                          }}
                        ></i>
                        <i
                          className="fa fa-edit m-2"
                          onClick={() => handleEditClick(item)}
                        ></i>
                      </td>
                      <td
                        className={
                          message.includes("Success")
                            ? "text-success"
                            : "text-danger"
                        }
                      >
                        {message}
                      </td>
                    </tr>
                  </tbody>
                ))}

            </table>
            <Modal show={showModal} onHide={() => setShowModal(false)}>
              <Modal.Header closeButton>
                <Modal.Title>Edit Booking</Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <label
                className="form-label"
                htmlFor="amount-of-seats"
                >
                Amount Of Seats 
                </label>
                <div className="form-outline flex-fill mb-0">
                                <input
                                  type="text"
                                  id="amount-of-seats"
                                  className="form-control"
                                  onChange={(e) => setAmountOfSeats(e.target.value)}
                                />
                                </div>
                                <div className="fw-light">You can Edit the numbers of seats</div>
                                <div>{message}</div>
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
      </div>
    </>
  );
};

export default AdminBookings;
