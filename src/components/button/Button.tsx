import "./Button.css";

interface ButtonSpecs {
  children: string;
  className?: string;
}

function Button({children, className}: ButtonSpecs) {
  const defaultClass = "styled-button";
  return(
    <button className={`${defaultClass} ${className}`}>{children}</button>
  );
}

export default Button;