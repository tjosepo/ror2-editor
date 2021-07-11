import "./button.scss";

interface Props extends React.ButtonHTMLAttributes<any> {}

export default function Button(props: Props) {
  return (
    <button
      {...props}
      className={`ror2-button ${props.className ?? ""}`.trim()}
    >
      {props.children}
    </button>
  );
}
