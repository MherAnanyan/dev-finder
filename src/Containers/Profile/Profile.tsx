import React from 'react';
import { ProfileCircle } from '../../Components/ProfilCircle/ProfileCircle';
import { GitHubInfoItem } from '../../Components/GitHubInfoItem/GitHubInfoItem';
import {
  IconTwitter,
  IconCompany,
  IconLocation,
  IconWebsite,
} from '../../resources/icons';
import './style.scss';
import { ProfileLinkItem } from '../../Components/ProfilLinkItem/ProfileLinkItem';
import { IUserDataProps } from '../../App';
import { CustomLink } from '../../Components/CustomLink/CustomLink';
import { GitHubUrl } from '../../constant';

type ProfileProps = {
  userData: IUserDataProps;
};

type OptionProps = {
  weekday?: 'long' | 'short' | 'narrow' | undefined;
  year?: 'numeric' | '2-digit' | undefined;
  month?: 'numeric' | '2-digit' | 'long' | 'short' | 'narrow' | undefined;
  day?: 'numeric' | '2-digit' | undefined;
};
const options: OptionProps = {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
};

export const Profile: React.FC<ProfileProps> = ({ userData }) => {
  const {
    avatar_url,
    name,
    html_url,
    login,
    bio,
    created_at,
    followers,
    following,
    public_repos,
    location,
    blog,
    twitter_username,
    company,
  } = userData;
  const userBio = bio || 'This profil has no Bio';
  const loginWithSymbol = `@${login}`;
  const companyName = company
    ? company.replace(/\./g, '').replace(/@/g, '')
    : 'github';
  console.log('companyName', company, companyName);
  const companyUrl = `${GitHubUrl}/${companyName}`;
  const accountNameOrLogin = name || login?.toString().split('@').join('');
  const profilCreatedData = new Date(created_at)
    .toLocaleDateString('en-GB', options)
    ?.toString()
    .split('-')
    .join('');
  return (
    <div className="profil-wrapper">
      <ProfileCircle avatar_url={avatar_url} />
      <div className="profil-right-side">
        <div className="profil-info">
          <div className="main-info">
            <div>
              <h2>{accountNameOrLogin}</h2>
              <CustomLink
                className="login-link"
                title={loginWithSymbol}
                url={html_url}
              />
            </div>
            <p className={`${!bio ? 'disabled' : ''}`}>{userBio}</p>
          </div>
          <p>Joined {profilCreatedData}</p>
        </div>
        <div className="GitHub-info-wrapper">
          <GitHubInfoItem title="Repos" count={public_repos} />
          <GitHubInfoItem title="Followers" count={followers} />
          <GitHubInfoItem title="following" count={following} />
        </div>
        <div className="profil-links-wrapper">
          <div className="profil-links">
            <ProfileLinkItem title={location} url="" icon={<IconLocation />} />
            <ProfileLinkItem title={blog} url={blog} icon={<IconWebsite />} />
          </div>
          <div className="profil-links">
            <ProfileLinkItem
              title={twitter_username}
              url={twitter_username || ''}
              icon={<IconTwitter />}
            />
            <ProfileLinkItem
              title={company}
              url={companyUrl}
              icon={<IconCompany />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
