import React from "react";
import "./button.scss";

type Props = Pick<
  React.HTMLProps<HTMLButtonElement>,
  "children" | "style" | "onClick"
>;

export default function Button(props: Props): React.JSX.Element {
  const { children, style, onClick } = props;

  return (
    <button
      type="button"
      style={style}
      className="ror2-button"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
