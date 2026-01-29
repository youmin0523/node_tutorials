import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVolumeServices } from '../../redux/slices/apiSlice';
import HeadTitle from './HeadTitle';
import { BarChart, Tooltip, Bar, Legend, ResponsiveContainer } from 'recharts';

const VolumeServices = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.apis.volumeServicesData);

  useEffect(() => {
    dispatch(fetchVolumeServices());
  }, [dispatch]);

  // console.log(state);

  const formatTooltipValue = (value) => `${value}`;

  const formatLegendValue = (value, name) => {
    const initialValue = 0;
    const totalValue = state?.reduce((accumulator, currentValue) => {
      return accumulator + currentValue[name.dataKey];
    }, initialValue);

    return (
      <span className="custom-legend-item-text-group">
        <span className="custom-legend-item-text">{value}</span>
        <span>{' ' + totalValue}</span>
      </span>
    );
  };

  return (
    <div className="block-wrap ml-[14px] mt-[14px]">
      <HeadTitle title="Volume vs Services Level" />
      <div className="w-full h-[250px] mb-5">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={state}
            margin={{
              top: 5,
              right: 5,
              left: 5,
            }}
          >
            <Legend
              iconType="circle"
              iconSize={10}
              formatter={formatLegendValue}
            />
            <Tooltip
              cursor={{ fill: 'transparent' }}
              formatter={formatTooltipValue}
            />
            <Bar
              dataKey="volume"
              stackId="a"
              fill="#0095ff"
              radius={[0, 0, 4, 4]}
              barSize={16}
            />
            <Bar
              dataKey="services"
              stackId="a"
              fill="#00e096"
              radius={[4, 4, 0, 0]}
              barSize={16}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default VolumeServices;
