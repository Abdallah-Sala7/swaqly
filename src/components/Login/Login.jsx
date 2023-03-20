import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FacebookOutlined, Google } from '@mui/icons-material';

import './style.css'
import PassInput from '../PassInput';
import OrangeBtn from '../Button/OrangeBtn';

const Login = () => {
  const [emailValue, setEmailValue] = useState('')
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    navigate('/')
  }

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
            required
            placeholder='ex@gmail.com'
            className='form-control costum-input'
            value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>

          <PassInput id={'password'} />
        </div>

        <div className="form-action">
          <OrangeBtn
            type='submit'
            handleClick={handleLogin}
          >
            login
          </OrangeBtn>
        </div>

        <Link to='/auth/forgot-password' className='forget-link'>
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