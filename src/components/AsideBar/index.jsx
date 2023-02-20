import './style.css'

import { AccountCircleOutlined, Add, Help, HomeOutlined, KeyboardArrowDown, LogoutOutlined, Settings, ShoppingBagOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import { Link } from 'react-router-dom'

const AsideBar = () => {
  return (
    <div className='aside-contint'>
      <ul className='aside-list'>
        <li className='aside-item'>
          <Link to='/' className='aside-link'>
            <span className='aside-icon'>
              <HomeOutlined />
            </span>

            <span className='aside-text'>home</span>
          </Link>
        </li>

        <li className='aside-item'>
          <Link to='/' className='aside-link'>
            <span className='aside-icon'>
              <AccountCircleOutlined />
            </span>

            <span className='aside-text'>Profile</span>
          </Link>
        </li>

        <li className='aside-item'>
          <Link to='/' className='aside-link'>
            <span className='aside-icon'>
              <ShoppingBagOutlined />
            </span>

            <span className='aside-text'>products</span>

            <span className='aside-icon arrow-icon'>
              <KeyboardArrowDown />
            </span>
          </Link>

          <ul className='aside-sublist'>
            <li className='aside-subitem'>
              <Link to='/' className='aside-sublink'>
                <span className='aside-icon'>
                  <Add />
                </span>

                <span className='aside-text'>add product</span>
              </Link>
            </li>

            <li className='aside-subitem'>
              <Link to='/' className='aside-sublink'>
                <span className='aside-icon'>
                  <ShoppingCartOutlined />
                </span>

                <span className='aside-text'>all products</span>
              </Link>
            </li>
          </ul>
        </li>

        <li className='aside-item'>
          <Link to='/' className='aside-link'>
            <span className='aside-icon'>
              <Settings />
            </span>

            <span className='aside-text'>setting</span>
          </Link>
        </li>

        <li className='aside-item'>
          <Link to='/' className='aside-link'>
            <span className='aside-icon'>
              <Help />
            </span>

            <span className='aside-text'>help</span>
          </Link>
        </li>

        <li className='aside-item'>
          <Link to='/' className='aside-link'>
            <span className='aside-icon'>
              <LogoutOutlined />
            </span>

            <span className='aside-text'>Log out</span>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default AsideBar