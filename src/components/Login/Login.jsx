import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FacebookOutlined, Google, VisibilityOffOutlined, VisibilityOutlined } from '@mui/icons-material';

import './style.css'

const Login = () => {
  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')
  const [showPass, setShowPass] = useState(false)

  return (
    <div className="auth-form-contint">
      <h1 className="auth-title">
        login
      </h1>

      <form action="" method="post">
        <div className="form-group">
          <label htmlFor="email">Email</label>

          <input 
            type="text"  
            id='email'
            placeholder='ex@gmail.com'
            className='form-control'
            value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>

          <div className="pass-contint">
            <input 
              type={showPass ? "text" : "password"}  
              id='password'
              placeholder='ex@gmail.com'
              className='form-control pass-input'
              value={passwordValue}
              onChange={(e) => setPasswordValue(e.target.value)}
            />

            <span className="show-pass" role={"button"} onClick={() => setShowPass(!showPass)}>
              {showPass ? <VisibilityOutlined /> : <VisibilityOffOutlined />}
            </span>
          </div>
        </div>

        <div className="form-action">
          <a href="#" type='submit'>
            login
          </a>
        </div>

        <Link to='/forget-pass' className='forget-link'>
          Forget password ?
        </Link>        
      </form>

      <div className="or-line">
        <span>or</span>
        <hr />
      </div>

      <div className="social-login">
        <a href="#" className='social-login-btn google'>
          <Google />

          <span>login with google</span>
        </a>

        <a href="#" className='social-login-btn facebook'>
          <FacebookOutlined />

          <span>login with facebook</span>
        </a>
      </div>

      <div className="login-info">
        <p className='login-desc'>
          By continuing, you agree to accept our Privacy Policy & Terms of Service.
        </p>

        <p className='login-desc'>
          Don't have an account? <Link to={"/auth/register"}>Sign up</Link> 
        </p>
      </div>
    </div>
  )
}

export default Login