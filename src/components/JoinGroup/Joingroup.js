import React, { useState } from 'react';
import Styles from "./joingroup.module.css"
import { useNavigate   } from 'react-router-dom';

const Email = "shlokn123@gmail.com", Password = "123";

const Joingroup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Email:', email);
    console.log('Password:', password);
    if(email === Email && password === Password){
      navigate(`/shlok`);
    }
    else{
      navigate(`/join`);
    }
  };

  return (
    <div className={Styles.login_form_container}>
      <form className={Styles.login_form} onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className={Styles.form_group}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={Styles.form_group}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className={Styles.button} type="submit">Login</button>
      </form>
    </div>
  );
};

export default Joingroup;
