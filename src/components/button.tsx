import React from "react";
import "./button.scss";

type Props = Pick<
  React.HTMLProps<HTMLButtonElement>,
  "children" | "style" | "onClick" | "className"
>;

export default function Button(props: Props): React.JSX.Element {
  const { children, style, onClick, className } = props;

  return (
    <button
      type="button"
      style={style}
      className={`ror2-button ${className || ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
