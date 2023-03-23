import './style.css'

const OrangeBtn = ({children, handleClick, className, isLoading}) => {
  return (
    <button
      onClick={handleClick}
      className={`orange-btn ${className}`}
      disabled={isLoading}
    >
      {children}
    </button>
  )
}

export default OrangeBtn