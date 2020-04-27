import React from 'react';
import { auth, signInWithGoogle } from '../firebase/firebase.utils';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    console.log('handleSubmit', this.state);

    try {
      await auth.signInWithEmailAndPassword(email, password);
      console.log('e + p', email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.log(error);
    }
  };

  onChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <input
            name="email"
            type="email"
            onChange={this.onChange}
            value={this.state.email}
            label="email"
            required
          />
          <input
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.onChange}
            label="password"
            required
          />
          <div className="buttons">
            <button type="submit">Sign In</button>
            <button onClick={signInWithGoogle}>Sign in with Google</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
