import React from "react";

export interface ItemOptionType {
  text: string;
  icon?: React.ReactHTMLElement;
  onClick: React.MouseEventHandler;
}
