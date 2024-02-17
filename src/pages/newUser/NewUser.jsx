import React from "react";
import "./newUser.css";

function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" placeholder="Ramayya" />
        </div>
        <div className="newUserItem">
          <label>Fullname</label>
          <input type="text" placeholder="Ramayya Pattisapu" />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="ramayyapattisapu@gmail.com" />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="password" placeholder="John" />
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input type="text" placeholder="1234567890" />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder="Hyderabad | India" />
        </div>
        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Date Of Birth</label>
          <input type="text" placeholder="21.12.1991" />
        </div>
        <div className="newUserItem">
          <label>Active</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newUserButton">Create</button>
      </form>
    </div>
  );
}

export default NewUser;
