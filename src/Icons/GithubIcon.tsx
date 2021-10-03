import React from "react";

import {IconsProps} from "../types";

const GithubIcon: React.FC<IconsProps> = () => {
  return (
    <svg fill="none" height="40" viewBox="0 0 40 40" width="40" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19.998.197C8.932.22-.022 9.297 0 20.472c.018 9.452 6.512 17.633 15.643 19.705a.835.835 0 001.015-.823v-4.587a.839.839 0 00-.834-.843h-1.67c-2.084 0-3.506-1.995-4.754-3.755l-.384-.537c.562.317 1.099.677 1.607 1.076a5.639 5.639 0 003.427 1.518 2.305 2.305 0 002.596-1.981c.025-.178.029-.358.012-.537v-.588a.842.842 0 00-.606-.811C11.421 26.985 8.31 23.48 8.31 19.59a8.036 8.036 0 012.38-5.583.85.85 0 00.158-.941 4.763 4.763 0 01.245-4.299 8.217 8.217 0 013.06 2.172.83.83 0 00.928.248 14.37 14.37 0 019.839 0 .83.83 0 00.922-.248A8.217 8.217 0 0128.9 8.766c.761 1.31.852 2.909.245 4.298a.85.85 0 00.159.941 8.035 8.035 0 012.38 5.585c0 4.085-3.454 7.742-8.403 8.894a.844.844 0 00-.551 1.216 7.305 7.305 0 01.606 3.381v6.273a.84.84 0 001.015.823c10.797-2.45 17.582-13.276 15.156-24.18C37.456 6.775 29.357.216 19.998.197z"
        fill="#2D3748"
      />
    </svg>
  );
};

export default GithubIcon;