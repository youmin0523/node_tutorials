import React from 'react';
import ModeCtrl from './ModeCtrl';
import { MdOutlineMenu } from 'react-icons/md';
import { Icons } from '../../assets/icons';
import AppbarLang from './AppbarLang';
import AppbarProfile from './AppbarProfile';
import { useDispatch } from 'react-redux';
import { setSidebarClose } from '../../redux/slices/sidebarSlice';

const Appbar = () => {
  const dispatch = useDispatch();

  return (
    // //! [Original Code] calc() 사용한 복잡한 여백 계산 (주석 처리됨)
    // <div className="dark:bg-gray-950 bg-white dark:shadow-[0_0.125rem_0.25rem_rgba(255,255,255,0.3)] shadow-[0_0.125rem_0.25rem_rgba(165,163,174,0.3)] py-3 px-6 rounded-sm dark:text-white text-gray-950 w-[calc(80%-28px)] ml-[calc(20%+14px)]">

    // //* [Modified Code] w-full 사용 (부모의 패딩에 맞춰 자동으로 채움)
    <div className="dark:bg-gray-950 bg-white dark:shadow-[0_0.125rem_0.25rem_rgba(255,255,255,0.3)] shadow-[0_0.125rem_0.25rem_rgba(165,163,174,0.3)] py-3 px-6 rounded-sm dark:text-white text-gray-950 w-full">
      <div className="appbar-content flex items-center justify-between flex-wrap">
        <div className="appbar-left flex items-center justify-start gap-x-3">
          {/* //! [Original Code] 숨겨져 있던 버튼 (hidden)
          <button type="button" className="items-center hidden">
            <MdOutlineMenu size={24} />
          </button> 
          */}

          {/* //* [Modified Code] 버튼 활성화 (flex) 및 클릭 시 사이드바 제어 액션 연결 */}
          <button
            type="button"
            className="items-center flex"
            onClick={() => dispatch(setSidebarClose())}
          >
            <MdOutlineMenu size={24} />
          </button>
          <h3 className="text-xl font-semibold">Dashbaord</h3>
        </div>
        <div className="appbar-right flex items-center flex-wrap">
          <div className="appbar-search">
            <form>
              <div className="input-group dark:bg-gray-700 bg-gray-300 rounded-xl h-11 min-w-80 flex py-1 px-3 relative">
                <span className="input-icon w-5 flex place-content-center">
                  <img src={Icons.SearchBlue} alt="search icon" />
                </span>
                <input
                  type="text"
                  placeholder="Search here ..."
                  className="input-control border-none outline-0 text-[15px] dark:bg-gray-700 bg-gray-300 px-3 dark:text-white text-gray-950 dark:placeholder-white placeholder-gray-800"
                />
              </div>
            </form>
          </div>
          <AppbarLang />

          <button className="w-8 h-8 rounded-md relative">
            <img src={Icons.NotificationOrange} alt="" className="w-6" />
            <span className="absolute rounded-full w-2 h-2 bg-red-600 top-1 right-[10px]"></span>
          </button>
          <AppbarProfile />
          <ModeCtrl />
        </div>
      </div>
    </div>
  );
};

export default Appbar;
