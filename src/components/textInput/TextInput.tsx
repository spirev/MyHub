import './TextInput.css';

interface TextInputSpecs extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  className?: string;
}

function TextInput({ placeholder, className = '' }: TextInputSpecs) {
  const defaultClass = "styled-textInput";

  return (
    <input
      type="text"
      placeholder={placeholder}
      className={`${defaultClass} ${className}`}
    />
  );
}

export default TextInput;
