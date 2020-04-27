import React from 'react';

import { auth, createUserProfileDocument } from '../firebase/firebase.utils';

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("password don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      // await to finish
      await createUserProfileDocument(user, { displayName });

      // when it finishes set state empty
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } catch (error) {
      console.log(error);
    }
  };

  onChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have a account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.onChange}
            label="Display Name"
            required
          />
          <label>email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.onChange}
            label="Email"
            required
          />
          <label>password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.onChange}
            label="Password"
            required
          />
          <label>confirm password</label>
          <input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.onChange}
            label="Confirm Password"
            required
          />
          <button type="submit">SIGN UP</button>
        </form>
      </div>
    );
  }
}

export default SignUp;
