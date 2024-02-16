import React from "react";
import "./user.css";
import profilePic from "../../images/profilePic.jpg";
import TodayIcon from "@mui/icons-material/Today";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import DialpadIcon from "@mui/icons-material/Dialpad";
import MaleIcon from "@mui/icons-material/Male";
import BloodtypeIcon from "@mui/icons-material/Bloodtype";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { Link } from "react-router-dom";

function User() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="displayUser">
          <div className="displayUsertop">
            <img src={profilePic} alt="" className="displayUserImg" />
          </div>
          <div className="displayUserTopTitle">
            <span className="displayUserUsername">Ramayya Pattisapu</span>
            <span className="displayUserTitle">junior Software Developer</span>
          </div>
          <div className="dispalyUserBottom">
            <span className="showUserTitle">Account Details</span>
            <div className="userInfo">
              <PersonOutlineIcon className="displayUserIcon" />
              <span className="userInfoTitle">Ramayya Pattisapu</span>
            </div>
            <div className="userInfo">
              <MailOutlineIcon className="displayUserIcon" />
              <span className="userInfoTitle">ramayyapattisapu@gmail.com</span>
            </div>
            <div className="userInfo">
              <TodayIcon className="displayUserIcon" />
              <span className="userInfoTitle">21.12.1991</span>
            </div>
            <span className="showUserTitle">Contact Details</span>
            <div className="userInfo">
              <DialpadIcon className="displayUserIcon" />
              <span className="userInfoTitle">+919490364159</span>
            </div>
            <div className="userInfo">
              <MaleIcon className="displayUserIcon" />
              <span className="userInfoTitle">Male</span>
            </div>
            <div className="userInfo">
              <BloodtypeIcon className="displayUserIcon" />
              <span className="userInfoTitle">B +ve</span>
            </div>
            <div className="userInfo">
              <MyLocationIcon className="displayUserIcon" />
              <span className="userInfoTitle">
                Hyderabad | telangana | India
              </span>
            </div>
          </div>
          <div className="updateUser">
            <span className="updateUserTitle">Edit</span>
            <form className="updateUserForm">
              <div className="updateUserLeft">
                <div className="updateUserItem">
                  <label>Username</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="updateUserInput"
                  />
                </div>
                <div className="updateUserItem">
                  <label>Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="updateUserInput"
                  />
                </div>
                <div className="updateUserItem">
                  <label>Email</label>
                  <input
                    type="text"
                    placeholder="ramayyapattisapu@gmail.com"
                    className="updateUserInput"
                  />
                </div>
                <div className="updateUserItem">
                  <label>Phone Number</label>
                  <input
                    type="text"
                    placeholder="9490364159"
                    className="updateUserInput"
                  />
                </div>
                <div className="updateUserItem">
                  <label>Location</label>
                  <input
                    type="text"
                    placeholder="Hyderabad | India"
                    className="updateUserInput"
                  />
                </div>
                <div className="updateUserItem">
                  <label>Blood Group</label>
                  <input
                    type="text"
                    placeholder="B +ve"
                    className="updateUserInput"
                  />
                </div>
                <div className="updateUserItem">
                  <label>Gender</label>
                  <input
                    type="text"
                    placeholder="Male"
                    className="updateUserInput"
                  />
                </div>
              </div>
              <div className="updateUserRight">
                <div className="uploadUser">
                  <img className="updateUserAvatar" src={profilePic} alt="" />
                  <label htmlFor="file">
                    <FileUploadIcon className="updateUserIcon" />
                  </label>
                  <input type="file" id="file" style={{ display: "none" }} />
                </div>
                <button className="updateUserButton">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
