import React, { CSSProperties } from "react";
import { EnumColors } from "../../Types";

interface Props { 
  text: string;
  type: 1 | 2 | 3 | 4 | 5 | 6;
  color?: keyof typeof EnumColors; 
  align?: "left" | "center" | "right";
  className?: string;
}

function Title({ text, color, type, align, className }: Props) {

  const fontSizeMap: { [key: number]: number } = {
    1: 60,
    2: 40,
    3: 28,
    4: 25,
    5: 20,
    6: 18,
  };

  const textColor = color ? EnumColors[color] : undefined;

  const baseStyles: CSSProperties = {
    fontSize: fontSizeMap[type], 
    color: textColor,
    textAlign: align,
  };

  const HeadingTag = `h${type}`;

  return React.createElement(HeadingTag, { style: baseStyles }, text, className);
}

export { Title };