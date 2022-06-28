import React from 'react';

import './style.scss';

type CustomLinkProps = {
  url: string;
  title: string | null;
  className?: string;
};

export const CustomLink: React.FC<CustomLinkProps> = ({
  url,
  title,
  className,
}) => {
  return (
    <a className={className} rel="noreferrer" target="_blank" href={url}>
      {title}
    </a>
  );
};
