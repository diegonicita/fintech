import React from 'react'

function CreateAccountComponent({logo, h1Title, buttonText, h1Style, divHomeDownStyle, handleClick, children}) {
  return (
    <div className="home-container">      
    <div className="home-up"></div>
    <img src={logo} alt="logo"/>
    <div className="home-middle">
      <h1 style={h1Style}> {h1Title} </h1>        
    </div>
    <div className="home-down" style={divHomeDownStyle}>
    <button onClick={handleClick}> {buttonText} </button>
        {children}
    </div>
  </div>
  )
}

export default CreateAccountComponent