import React from 'react';
import "./Button.css";

interface ButtonSpecs extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  className?: string;
  disable?: boolean;
}

function Button({ children, className = '', disable, ...props }: React.PropsWithChildren<ButtonSpecs>) {
  const defaultClass = "styled-button";
  return (
    <button
      className={`${defaultClass} ${className} ${disable}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;