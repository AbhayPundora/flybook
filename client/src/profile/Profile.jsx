import { useState } from "react";
import "./profile.css";
import Setting from "../assets/settings.svg";
import Pic from "../assets/pic.png";
import Add from "../assets/add.svg";
import BookIcon from "../assets/bookIcon.svg";
import Heart from "../assets/Heart.svg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Profile = () => {
  const [bio, setBio] = useState("");
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      const res = await axios.post("http://localhost:8000/api/auth/logout");
      localStorage.removeItem("user"); //clearing localStorage
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="profile-container">
      <form className="profile vintage-card">
        <img src={Setting} alt="Settings" className="settings-icon" />
        <div className="profile-pic">
          <img src={Pic} alt="Profile pic" />
        </div>
        <span className="profile-name">Abhay Pundora</span>
        <span className="profile-email">abhaypundora17@gmail.com</span>
        <button onClick={handleLogout}>Logout</button>
        <textarea
          className="textarea vintage-textarea"
          placeholder="Write something about yourself..."
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        ></textarea>
        <div className="action vintage-action">
          <img src={Add} alt="Add" className="action-icon" />
          <Link to="/collection">
            <img src={BookIcon} alt="Collection" className="action-icon" />
          </Link>
          <img src={Heart} alt="Favorites" className="action-icon" />
        </div>
      </form>
    </div>
  );
};

export default Profile;
