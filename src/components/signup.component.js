import React, { Component } from "react";
export default class SignUp extends Component {
  handleSubmit = async (e) => {
    e.preventDefault();

    const userID = e.target.elements.userID.value;
    const username = e.target.elements.username.value;
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    try {
      const response = await fetch(
        "https://mongodb-node-app.onrender.com/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userID, username, email, password }),
        }
      );

      const data = await response.json();
      console.log("Registration successful!", data);
      alert(data.error)
      e.target.reset();
      // You can redirect or perform any other action here after successful registration.
    } catch (error) {
      console.error("Error registering:", error);
      alert(error.error)
      e.target.reset();
      // Display an error message to the user
    }
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label>User ID</label>
          <input
            type="text"
            className="form-control"
            placeholder="User ID"
            name="userID"
          />
        </div>
        <div className="mb-3">
          <label>User Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="User Name"
            name="username"
          />
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            name="email"

          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            name="password"

          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </form>
    );
  }
}
