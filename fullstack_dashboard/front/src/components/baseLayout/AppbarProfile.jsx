import React from 'react';
import { Images } from '../../assets/images';
import { Icons } from '../../assets/icons';

const AppbarProfile = () => {
  return (
    <div className="appbar-profile profile-dropdown ml-6 cursor-pointer">
      <div className="drop-info flex items-center gap-x-4">
        <div className="drop-info-img w-11 h-11 overflow-hidden rounded-full">
          <img
            src={Images.ProfileImage}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="drop-info-text">
          <div className="info-text-group flex flex-col min-w-20 leading-4 justify-center mt-2">
            <span className="font-semibold text-ellipsis overflow-hidden whitespace-normal">
              Marshall
            </span>
            <span className="text-sm text-gray-400">Admin</span>
          </div>
        </div>
        <img
          src={Icons.ChevronDownDark}
          alt=""
          className="w-5 h-5 dark:invert-[1] dark:brightness-[100%]"
        />
      </div>
    </div>
  );
};

export default AppbarProfile;
