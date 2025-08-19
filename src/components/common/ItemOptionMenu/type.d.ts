import React, { RefObject } from "react";

export interface ItemOptionType {
  text: string;
  icon?: React.ReactHTMLElement;
  onClick: React.MouseEventHandler;
  className?: string;
  ref?: RefObject<HTMLButtonElement>;
}
