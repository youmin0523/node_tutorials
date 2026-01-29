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
  return (
    <div className="w-[calc(80%-28px)] ml-[calc(20%+14px)] mt-[14px]">
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
