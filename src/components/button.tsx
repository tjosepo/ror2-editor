import React from "react";
import "./button.scss";

interface Props extends React.ButtonHTMLAttributes<any> {
  children?: React.ReactNode;
}

export default function Button({ children, style, onClick }: Props) {
  return (
    <button
      style={style}
      className="ror2-button"
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
