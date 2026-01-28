import React from 'react';
import HeadTitle from './HeadTitle';
import { Icons } from '../../assets/icons';
import { SALES_LISTS } from '../../constants/menuList';

const Sales = () => {
  return (
    <div className="block-wrap">
      <div className="flex items-baseline justify-between flex-wrap">
        <HeadTitle title="Today's Sales" />
        <div className="block-head-export">
          <button className="flex items-center gap-x-[6px] h-8 border border-solid border-gray-500 rounded-lg py-[2px] px-2 font-semibold">
            <img
              src={Icons.ExportDark}
              alt="Export icon"
              className="invert-[1] brightness-[100%]"
            />
            <span className="text">Export</span>
          </button>
        </div>
      </div>

      <div className="cards grid grid-cols-4 gap-4 mt-6">
        {SALES_LISTS.map((item, index) => (
          <div
            key={index}
            className="rounded-md py-4 px-[18px] border border-gray-500"
          >
            <div className="rounded-full w-11 h-11 flex items-center justify-center border dark:border-gray-500 border-grayy-950">
              <img
                src={item.src}
                alt={item.title}
                className="w-6 invert-0 brightness-0 dark:brightness-[100%]"
              />
            </div>
            <div className="font-bold text-lg mt-3 mb-1">{item.value}</div>
            <p className="font-semibold mt-3">{item.title}</p>
            <span className="text-[12px] font-normal mt-2">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sales;
