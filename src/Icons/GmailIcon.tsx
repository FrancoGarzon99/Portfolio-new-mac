import React from "react";

import {IconsProps} from "../types";

const GmailIcon: React.FC<IconsProps> = () => {
  return (
    <svg fill="none" height="40" viewBox="0 0 40 40" width="40" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 0C8.954 0 0 8.954 0 20s8.954 20 20 20 20-8.954 20-20S31.046 0 20 0zm9.01 11.111l-9.017 7.13-9.312-7.13h18.33zm.928 17.778H9.753V14.122l9.305 7.057c.249.191.618.287.916.287.304 0 .569-.1.821-.3l9.143-7.273v14.996z"
        fill="#2D3748"
      />
    </svg>
  );
};

export default GmailIcon;
