import React, { ReactNode } from 'react';
import { CustomLink } from '../CustomLink/CustomLink';
import { IUserDataProps } from '../../App';

import './style.scss';

type ProfileLinkItemProps = Pick<IUserDataProps, 'url'> & {
  title: string | null;
  icon: ReactNode;
};

export const ProfileLinkItem: React.FC<ProfileLinkItemProps> = ({
  url,
  title,
  icon,
}) => {
  const profileItemTitle = title ? title : 'Not available';
  const profileItem = url ? (
    <CustomLink url={url} title={profileItemTitle} />
  ) : (
    <p className="profile-item-title">{profileItemTitle}</p>
  );
  return (
    <div className={`link-item-wrapper ${!url && !title ? 'disabled' : ''}`}>
      {icon}
      {profileItem}
    </div>
  );
};
