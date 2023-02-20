import { Outlet } from 'react-router-dom'
import './style.css'
import logo from '../../assets/images/swaqly_logo.svg'

const AuthLayout = () => {
  return (
    <section className='auth'>
      <div className="container">
        <div className="auth-contint">
          <div className="auth-img">
            <img 
              src={logo} 
              alt="swaqly logo" 
              loading='lazy'
            />
          </div>

          <div className="auth-form">
            {<Outlet />}
          </div>
        </div>     
      </div>
    </section>
  )
}

export default AuthLayout