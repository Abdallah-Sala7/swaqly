import './style.css'

const OrangeBtn = ({children, handleClick, className}) => {
  return (
    <a 
      href="#"
      onClick={handleClick}
      className={`orange-btn ${className}`}
    >
      {children}
    </a>
  )
}

export default OrangeBtn