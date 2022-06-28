import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Header } from './Containers/Header/Header';
import { SearchBar } from './Containers/SearchBar/SearchBar';
import { DEFAULT_USERNAME, DARK_MODE, LIGHT_MODE } from './constant';

import './App.scss';
import { Profile } from './Containers/Profile/Profile';

export interface IUserDataProps {
  avatar_url: string;
  name: string | null;
  url: string;
  login: string;
  bio: string | null;
  created_at: string;
  followers: number;
  following: number;
  public_repos: number;
  location: string | null;
  blog: string;
  twitter_username: string | null;
  company: string;
  html_url: string;
}
const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [errMsg, setErrMsg] = useState('');
  const [userData, setUserData] = useState<IUserDataProps | undefined>();
  const [mode, setMode] = useState<string>(DARK_MODE);

  const getAndSetProfileData = (searchValue: string) => {
    setIsLoading(true);
    axios
      .get(`${process.env.REACT_APP_API_URL}/${searchValue}`)
      .then((res) => {
        setErrMsg('');
        setUserData(res?.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        if (err?.response?.status === 404) {
          setErrMsg('No results');
          return;
        }
        setErrMsg('Oops');
      });
  };

  const handleModeChange = () => {
    if (mode === LIGHT_MODE) {
      localStorage.setItem('MODE', DARK_MODE);
      setMode(DARK_MODE);
    } else {
      localStorage.setItem('MODE', LIGHT_MODE);
      setMode(LIGHT_MODE);
    }
  };

  useEffect(() => {
    getAndSetProfileData(DEFAULT_USERNAME);
  }, []);

  useEffect(() => {
    const currentMode: string | null = localStorage.getItem('MODE');
    if (!currentMode) {
      localStorage.setItem('MODE', DARK_MODE);
    } else if (currentMode !== DARK_MODE) {
      setMode(LIGHT_MODE);
      localStorage.setItem('MODE', LIGHT_MODE);
    }
  }, []);

  return (
    <div className={`App ${mode}`}>
      <div className="content-wrapper">
        <Header mode={mode} handleModeChange={handleModeChange} />
        <SearchBar errMsg={errMsg} setSearchText={getAndSetProfileData} />
        {isLoading ? (
          <div className="loading-wrapper">
            <div className="loading">Loading...</div>
          </div>
        ) : (
          <Profile userData={userData!} />
        )}
      </div>
    </div>
  );
};

export default App;
