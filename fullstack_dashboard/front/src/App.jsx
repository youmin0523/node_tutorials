import './App.css';
import Appbar from './components/baseLayout/Appbar';
import Sidebar from './components/baseLayout/Sidebar';
import DashboardScreen from './components/dashboard/DashboardScreen';

import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setSidebarOpen, setSidebarClose } from './redux/slices/sidebarSlice';

const App = () => {
  const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen);

  //* [Modified Code] useDispatch 및 액션 함수 추가
  const dispatch = useDispatch();

  //* [Modified Code] 화면 너비에 따른 사이드바 반응형 처리 (1024px 기준)
  useEffect(() => {
    // 1. 초기 로드 시 화면 크기 체크
    // 1024px 이하이면 사이드바를 숨김 (이미 숨겨져 있으면 변화 없음)
    if (window.innerWidth <= 1024) {
      dispatch(setSidebarOpen());
    }

    // 2. 창 크기 변경 감지 (breakpoint: 1024px)
    const mediaQuery = window.matchMedia('(max-width: 1024px)');

    const handleTabletChange = (e) => {
      if (e.matches) {
        // 1024px 이하로 진입 시 -> 사이드바 숨김 (Go In)
        dispatch(setSidebarOpen());
      } else {
        // 1024px 초과로 진입 시 -> 사이드바 보임
        dispatch(setSidebarClose());
      }
    };

    // 이벤트 리스너 등록
    mediaQuery.addEventListener('change', handleTabletChange);

    // 클린업 함수
    return () => {
      mediaQuery.removeEventListener('change', handleTabletChange);
    };
  }, [dispatch]);

  return (
    <div className="App w-screen flex items-center justify-center flex-col dark:bg-[#212121] dark:text-white">
      <div className="page-wrapper min-h-screen flex w-full">
        <Sidebar />
        {/* //! [Original Code] 기존 정적 레이아웃 (주석 처리됨)
        <div className="content-wrapper w-full"> 
          <Appbar />
          <DashboardScreen />
        </div> 
        */}

        {/* //* [Modified Code] Redux 상태에 따라 너비/여백이 동적으로 변하는 반응형 레이아웃
            padding-[14px] 설정으로 인해 내부 자식들(Appbar, DashboardScreen)은 별도 마진 없이도 14px 간격이 유지됨. */}
        <div
          className={`content-wrapper transition-all duration-300 ease-in-out p-[14px] flex flex-col gap-y-[14px] ${
            !isSidebarOpen ? 'ml-[20%] w-[80%]' : 'ml-0 w-full'
          }`}
        >
          <Appbar />
          <DashboardScreen />
        </div>
      </div>
    </div>
  );
};

export default App;
