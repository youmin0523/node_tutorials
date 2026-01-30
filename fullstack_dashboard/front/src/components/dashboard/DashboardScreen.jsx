import React from 'react';
import Sales from './Sales';
import Visitors from './Visitors';
import TotalRevenue from './TotalRevenue';
import Customers from './Customers';
import TargetReality from './TargetReality';
import TopProducts from './TopProducts';
import SalesMap from './SalesMap';
import VolumeServices from './VolumeServices';

const DashboardScreen = () => {
  // //* [Modified Code] w-full 사용 (부모의 패딩에 맞춰 자동으로 채움)
  return (
    // //! [Original Code] calc() 사용한 복잡한 여백 계산 (주석 처리됨)
    // <div className="w-[calc(80%-28px)] ml-[calc(20%+14px)] mt-[14px]">
    <div className="w-full">
      <div className="grid grid-cols-[4fr_3fr] gap-x-[14px]">
        <Sales />
        <Visitors />
      </div>
      <div className="grid grid-cols-[3fr_2fr_2fr]">
        <TotalRevenue />
        <Customers />
        <TargetReality />
        <TopProducts />
        <SalesMap />
        <VolumeServices />
      </div>
    </div>
  );
};

export default DashboardScreen;
