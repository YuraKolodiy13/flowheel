import React from 'react'
import './Button.scss'

interface IButtonProps {
  title: string,
  color: string,
  doAction: () => void,
  type?: "button" | "submit" | "reset" | undefined,
  disabled?: boolean
}

const Button: React.FC<IButtonProps> = ({title, color, doAction, type, disabled}) => {
  return (
    <button type={type} className={`button ${color}`} onClick={doAction} disabled={disabled}>
      <span>{title}</span>
    </button>
  )
};

export default Button;