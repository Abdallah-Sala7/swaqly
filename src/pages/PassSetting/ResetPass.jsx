import { VisibilityOffOutlined, VisibilityOutlined } from '@mui/icons-material'
import { useState } from 'react'

const ResetPass = () => {
  const [confirmPassValue, setConfirmPassValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')
  const [showPass, setShowPass] = useState(false)
  const [showConfPass, setShowConfPass] = useState(false)
  return (
    <div className='auth-form-contint'>
      <h1 className="auth-title">
        New password
      </h1>
        
      <form action="" method="post">
        <div className="form-group">
          <label htmlFor="password">password</label>

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
            login
          </a>
        </div>
      </form>
    </div>
  )
}

export default ResetPass