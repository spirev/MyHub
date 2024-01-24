import "./Button.css";

interface ButtonSpecs {
  children: string;
  className?: string;
  onClick: () => void;
}

function Button({ children, className = '', onClick }: ButtonSpecs) {
  const defaultClass = "styled-button";
  return (
    <button
      className={`${defaultClass} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;