import { ReactNode } from 'react';
import './VerticalContainer.css';

interface VerticalContainerSpecs {
  children: ReactNode;
  className?: string;
}

function VerticalContainer({children, className = ''}: VerticalContainerSpecs) {
  const defaultClass = "vertical-container";
  return (
    <div className={`${defaultClass} ${className}`}>
      {children}
    </div>
  );
}

export default VerticalContainer;