import React from "react";
import FormInput from "../form-input/FormInput";
import "./sign-in.scss";
import CustomButton from "../custom-button/CustomButton";

class Signin extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="Email"
            required
          />
          <FormInput
            name="password"
            type="password"
            handleChange={this.handleChange}
            value={this.state.password}
            label="Password"
            required
          />
          <CustomButton type="submit">Sign In</CustomButton>
          {/* <button type="submit">Sign In</button>
          <button>Sign In with Google</button> */}
        </form>
      </div>
    );
  }
}

export default Signin;
