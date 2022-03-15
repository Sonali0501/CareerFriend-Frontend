import React, { useState } from 'react';
import { PrimaryButton } from '../Button';
import { connect } from 'react-redux';
import { signup } from '../../actionCreators';
import './Signup.scss';

const SignupForm = ({ type, err, signup }) => {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [password, setPassword] = useState()
    const [cnfPassword, setCnfPassword] = useState()
    const [error, setError] = useState()

    const handleSignup = (e) => {
        e.preventDefault();
        if(cnfPassword !== password) {
            setError('Confirm Password should be same as Password')
        } else {
            setError(null)
            const data = {
                type: type,
                name: name,
                email: email,
                phone: phone,
                password: password
            }
            signup(data);
        }
    }

    return (
        <form className="signupform" onSubmit={(e) => handleSignup(e)}>
            <p className="heading">Sign up</p>
            <hr style={{ width: '100%' }} />
            <input className="input" type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
            <input className="input" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input className="input" type="tel" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} required />
            <input className="input" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <input className="input" type="password" placeholder="Confirm Password" value={cnfPassword} onChange={(e) => setCnfPassword(e.target.value)} required />
            {error ? <p className="errorMsg">{error}</p> : err ? <p className="errorMsg">{err}</p> : null}
            <PrimaryButton text="Submit" />
        </form>
    )
}

export default connect(null, { signup })(SignupForm);