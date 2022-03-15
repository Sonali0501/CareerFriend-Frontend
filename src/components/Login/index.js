import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login } from '../../actionCreators';
import { PrimaryButton } from '../Button';
import './Login.scss';

const Login = ({ login, err }) => {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const handleLogin = (e) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password
    }
    login(data);
  }

  return (
    <form className="login" onSubmit={(e) => handleLogin(e)}>
      <p className="heading">Login</p>
      <hr style={{ width: '100%' }} />
      <input className="input" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input className="input" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      {err ? <p className="errorMsg">{err}</p> : null}
      <PrimaryButton text="Submit" />
    </form>
  );
}

// const mapStateToProps = (state) => {
//   return { user: state.user }
// }

export default connect(null, { login })(Login);