import React from 'react';

import './style.scss';

type GitHubInfoProps = {
  title: string;
  count: number;
};

export const GitHubInfoItem: React.FC<GitHubInfoProps> = ({ title, count }) => {
  return (
    <div className="info-item-wrapper">
      <p className="item-title">{title}</p>
      <p className="item-count">{count}</p>
    </div>
  );
};
