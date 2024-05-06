import { useState } from "react";
import "../Admin/admin.css";
import { Link } from "react-router-dom";
import logo from "../../components/navbar/21.png";
import AdminBookings from "./components/AdminBookings";
import AdminUsers from "./components/AdminUsers";
import AdminHikes from "./components/AdminHikes";
import AdminImages from "./components/AdminImages";
import { useLogOut } from "../../hooks/useLogOut";

const Admin = () => {
  const [selectedTab, setSelectedTab] = useState("hikes");
  const { logout } = useLogOut()

  const handleLogout = () => {
    logout()
  }

  return (
    <div className="admin-body w-100 vh-100 d-flex">
      <div className="admin-dashboard h-100 d-flex flex-column gap-2">
        <img src={logo} alt="" className="pb-5" />
        <div className="d-flex flex-column align-items-center gap-4">
        <Link
          className="d-flex align-items-center text-decoration-none"
          onClick={() => setSelectedTab("hikes")}
        >

          <h4 className="mt-3 h5 text-white"><span className="fa fa-mountain"></span>   Hikes</h4>
        </Link>
        <Link
          className="d-flex align-items-center text-decoration-none"
          onClick={() => setSelectedTab("images")}
        >
          <h4 className="mt-3 h5  text-white"><span className="fa fa-image"></span>   Images</h4>
        </Link>
        <Link
          className="d-flex align-items-center text-decoration-none"
          onClick={() => setSelectedTab("users")}
        >
          <h4 className="mt-3 h5 text-white"><span className="fa fa-user"></span>   Users</h4>
        </Link>
        <Link
          className="d-flex align-items-center text-decoration-none"
          onClick={() => setSelectedTab("Bookings")}
        >
          <h4 className="mt-3 h5 text-white"><span className="fa fa-book"></span>   Bookings</h4>
        </Link>
        <Link className="nav-link">
        <h4 onClick={handleLogout} className="mt-3 h5 text-white "><span className="fa fa-sign-out"></span>   LogOut</h4>
        </Link>
      </div>
      </div>
      <div>
        {selectedTab === "Bookings" && <AdminBookings />}
        {selectedTab === "users" && <AdminUsers />}
        {selectedTab === "hikes" && <AdminHikes />}
        {selectedTab === "images" && <AdminImages />}
        </div>
    </div>
  );
};

export default Admin;
