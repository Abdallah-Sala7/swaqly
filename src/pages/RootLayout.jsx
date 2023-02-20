import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import {Navbar, AsideBar} from '../components'

const RootLayout = () => {  
  const {aside} = useSelector(state => state.app)
  
  return (
    <>
      <Navbar />
      <main>
        <div className={`main-layout ${aside && 'active'}`}>
          <aside className="aside-bar">
            <AsideBar />
          </aside>

          <div className="main-content">
            <Outlet />
          </div>
        </div>
      </main>
    </>
  )
}

export default RootLayout