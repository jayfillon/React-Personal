import React from "react";

import './social-media.styles.scss';

const SocialMedia = ({ className, linkUrl }) => (
    <li>
      <a href={linkUrl}>
        <i className={className}></i>
      </a>
    </li>
);

export default SocialMedia;
