import React from 'react'
import * as S from './styles';

function Button({handleClick, name, children}) {  
  return (
    <S.Button name={name} onClick={(e) => {if (typeof handleClick === 'function') handleClick(e)}}> {children} </S.Button>
  )
}

export default Button