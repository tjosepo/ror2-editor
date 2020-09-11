import React from 'react';
import './button.scss';

interface Props {
  children?: React.ReactNode, 
  style?: React.CSSProperties, 
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export default function Button({ children, style, onClick = () => false }: Props) {

  return (
    <button
      style={style}
      className="ror-button"
      type="button"
      onClick={(e) => onClick(e)}>
      { children }
    </button>
  );
}