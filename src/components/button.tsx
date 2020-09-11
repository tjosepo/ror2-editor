import React from 'react';
import './button.scss';

export default function Button({ children, onClick = () => false }: { children: React.ReactNode, onClick: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void )}) {

  return (
    <button
      className="ror-button"
      type="button"
      onClick={(e) => onClick(e)}>
      { children }
    </button>
  );
}