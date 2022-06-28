import React from 'react';
import { IUserDataProps } from '../../App';

import './style.scss';

type ProfileCircle = Pick<IUserDataProps, "avatar_url">;

export const ProfileCircle: React.FC<ProfileCircle> = ({ avatar_url } ) => {
  const circleContent = avatar_url ? <img src={avatar_url} /> : <p>no photoes</p>;
  return <div className="profil-circle-wrapper">{circleContent}</div>;
};
