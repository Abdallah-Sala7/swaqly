import { Outlet } from 'react-router-dom'
import './style.css'

const PassLyout = () => {
  return (
    <section>
      <div className="container">
        <div className="pass-layout">
          {<Outlet />}
        </div>
      </div>
    </section>
  )
}

export default PassLyout