import React, { RefObject } from "react";

export interface ItemOptionMenuProps {
  text: string;
  icon?: React.ReactHTMLElement;
  onClick: React.MouseEventHandler;
  className?: string;
  ref?: RefObject<HTMLButtonElement>;
}
