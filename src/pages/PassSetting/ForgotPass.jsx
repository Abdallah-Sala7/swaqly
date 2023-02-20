import { useState } from 'react'

const ForgotPass = () => {
  const [emailValue, setEmailValue] = useState('')

  return (
    <div className='auth-form-contint'>
      <h1 className="auth-title">
        Forgot password
      </h1>
        
      <form action="" method="post">
        <p className="auth-desc">
          Please enter your email to receive a link to create a new password via email
        </p>
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

        <div className="form-action">
          <a href="#" type='submit'>
            send  
          </a>
        </div>
      </form>
    </div>
  )
}

export default ForgotPass