import React from "react";

interface ApplicationAction {
  name: string;
  link: string;
  isExternal?: boolean;
}

export interface Application {
  id: string;
  icon: string;
  name: string;
  label?: string;
  description?: string;
  actions: ApplicationAction[];
  component: React.FC<any>;
}
export interface IconsContact {
  id: string;
  link: string;
  iconComponent: React.FC<any>;
  isExternal?: boolean;
}

export interface IconsProps {
  h?: string | number;
  w?: string | number;
}
