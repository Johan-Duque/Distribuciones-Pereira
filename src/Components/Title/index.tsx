import type { CSSProperties } from "react";

interface Props { 
  text: string;
  type: 1 | 2 | 3 | 4 | 5 | 6;
  color?: keyof typeof EnumColors; 
  align?: "left" | "center" | "right";
  className?: string;
}

const EnumColors = {
  black: 'var(--black-color)',
  dark: 'var(--dark-color)',
  main: 'var(--main-color)',
  light: 'var(--light-color)',
  gray: 'var(--gray-color)',
  white: 'var(--white-color)',
}

function Title({ text, color, type, align, className }: Props) {

  const fontSizeMap: { [key: number]: string } = {
    1: "clamp(2.5rem, 5vw, 3.75rem)",  
    2: "clamp(2rem, 4vw, 2.5rem)",    
    3: "clamp(1.5rem, 3.5vw, 1.75rem)", 
    4: "clamp(1.25rem, 3vw, 1.5rem)",  
    5: "clamp(1rem, 2.5vw, 1.25rem)",  
    6: "clamp(0.9rem, 2vw, 1.125rem)",
  };

  const textColor = color ? EnumColors[color] : undefined;

  const baseStyles: CSSProperties = {
    fontSize: fontSizeMap[type], 
    color: textColor,
    textAlign: align,
    lineHeight: 1.2, 
  };

  const renderTitle = () => {
    switch (type) {
      case 1: return <h1 style={baseStyles} className={className}>{text}</h1>;
      case 2: return <h2 style={baseStyles} className={className}>{text}</h2>;
      case 3: return <h3 style={baseStyles} className={className}>{text}</h3>;
      case 4: return <h4 style={baseStyles} className={className}>{text}</h4>;
      case 5: return <h5 style={baseStyles} className={className}>{text}</h5>;
      case 6: return <h6 style={baseStyles} className={className}>{text}</h6>;
      default: return <h1 style={baseStyles} className={className}>{text}</h1>;
    }
  }

  return renderTitle();
}

export { Title };