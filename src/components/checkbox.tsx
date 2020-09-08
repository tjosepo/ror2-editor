import React, { useRef } from 'react';
import './checkbox.scss';

export default function Checkbox({checked, onChange }: {checked: boolean, onChange: Function }) {
  const checkboxRef = useRef<HTMLInputElement>(null)

  const click = () => {
    const checkbox = checkboxRef.current as HTMLInputElement;
    checkbox.click();
  }

  return (
    <div className="checkbox">
      <button
        className={checked ? "checked" : ""}
        type="button"
        onClick={(e) => click()}>
        </button>
      <input
        ref={checkboxRef}
        hidden
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e)}
      />
    </div>
  );
}