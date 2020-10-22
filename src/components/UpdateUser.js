import React, { useState } from "react";


const UpdateUser = ({ user, updateUser, deleteUser }) => {
  const [userInfo, setUserInfo] = useState({
    username: user.username,
    phonenumber: user.phonenumber,
    email: user.email,
    password: "",
    first_name: user.first_name,
    last_name: user.last_name,
  });

  const handleSubmit = (e) => {
    if (userInfo.password != 0) {
      e.preventDefault();
      console.log(userInfo);
      updateUser(userInfo, user.id);
      toggle();
    }
  };
 
  const handleChange = (e) => {
    console.log(e.target.value);
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleDelete = () => {
    deleteUser(user.id);
    toggle();
  };


  if (Object.keys(user).length != 0 && Object.keys(userInfo).length == 0) {
    setUserInfo(user);
  }

  return (
    <div>
          <form>
            <label for="first name">First Name</label>
                <input
                    type="text"
                    name="first_name"
                    value={userInfo.first_name}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                  <label for="last name">Last Name</label>
                  <input
                    type="text"
                    name="last_name"
                    value={userInfo.last_name}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                  <label for="username">Username</label>
                  <input
                    type="text"
                    name="username"
                    value={userInfo.username}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                  <label for="phone number">Phone Number</label>
                  <input
                    type="tel"
                    name="phonenumber"
                    value={userInfo.phonenumber}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
              <label for="email">Email</label>
              <input
                type="email"
                name="email"
                value={userInfo.email}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
              {userInfo.password == 0 ? (
                <p style={{ color: "red" }}>
                  Please insert a new password or type your old password
                </p>
              ) : null}
              <label for="password">Password</label>
              <input
                type="password"
                name="password"
                value={userInfo.password}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
          </form>
        <footer>
          <button color="primary" onClick={handleSubmit}>
            Update
          </button>
          <button color="secondary">
            Cancel
          </button>
          <button
            color="danger"
            onClick={handleDelete}
            style={{ width: "100%" }}
          >
            DELETE USER
          </button>
        </footer>
    </div>
  );
};

export default UpdateUser;