import { useState } from 'react';
import { Link } from 'react-router-dom';
import { VisibilityOffOutlined, VisibilityOutlined } from '@mui/icons-material';

import './style.css'

const Register = () => {
  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')
  const [nameValue, setNameValue] = useState('')
  const [numberValue, setNumberValue] = useState('')
  const [addressValue, setAddressValue] = useState('')
  const [confirmPassValue, setConfirmPassValue] = useState('')
  const [showPass, setShowPass] = useState(false)
  const [showConfPass, setShowConfPass] = useState(false)

  return (
    <div className="auth-form-contint">
      <h1 className="auth-title">
        register
      </h1>

      <p className="auth-desc">
        Add your details to sign up
      </p>

      <form action="" method="post">
        <div className="form-group">
          <label htmlFor="name">Name</label>

          <input 
            type="text"  
            id='name'
            required
            placeholder='abdallah'
            className='form-control'
            value={nameValue}
            onChange={(e) => setNameValue(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>

          <input 
            type="email"  
            id='email'
            required
            placeholder='abdallah@gmail.com'
            className='form-control'
            value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="mob-number">Mobile number</label>

          <input 
            type={"tel"} 
            id='mob-number'
            required
            placeholder='+20 102 507 7437'
            className='form-control'
            value={numberValue}
            onChange={(e) => setNumberValue(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">Address</label>

          <input 
            type={"text"} 
            id='address'
            required
            placeholder='+20 102 507 7437'
            className='form-control'
            value={addressValue}
            onChange={(e) => setAddressValue(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>

          <div className="pass-contint">
            <input 
              type={showPass ? "text" : "password"}  
              id='password'
              className='form-control pass-input'
              value={passwordValue}
              onChange={(e) => setPasswordValue(e.target.value)}
            />

            <span className="show-pass" role={"button"} onClick={() => setShowPass(!showPass)}>
              {showPass ? <VisibilityOutlined /> : <VisibilityOffOutlined />}
            </span>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="confirm-pass">Confirm password</label>

          <div className="pass-contint">
            <input 
              type={showConfPass ? "text" : "password"}  
              id='confirm-pass'
              className='form-control pass-input'
              value={confirmPassValue}
              onChange={(e) => setConfirmPassValue(e.target.value)}
            />

            <span className="show-pass" role={"button"} onClick={() => setShowConfPass(!showConfPass)}>
              {showConfPass ? <VisibilityOutlined /> : <VisibilityOffOutlined />}
            </span>
          </div>
        </div>

        <div className="form-action">
          <a href="#" type='submit'>
            sign up
          </a>
        </div>      
      </form>

      <div className="login-info">
        <p className='login-desc'>
          Already have an account? <Link to={"/auth/login"}>Login</Link> 
        </p>
      </div>
    </div>
  )
}

export default Register