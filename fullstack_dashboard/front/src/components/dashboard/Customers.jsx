import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCustomer } from '../../redux/slices/apiSlice';
import HeadTitle from './HeadTitle';
import {
  AreaChart,
  Area,
  Legend,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';

const formatTooltipValue = (value, name) => {
  return `${value.replace('_', ' ')} : ${name}`;
};

const CustomTooltipContent = ({ payload }) => {
  if (!payload || !payload.length) return null;
  return (
    <div className="custom-recharts-tooltip">
      <p className="recharts-tooltip-label">{payload[0].payload?.month}</p>
      <ul className="recharts-tooltip-item-list">
        {payload?.map((item, index) => {
          return (
            <li key={index}>{formatTooltipValue(item.name, item.value)}</li>
          );
        })}
      </ul>
    </div>
  );
};

const Customers = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.apis.customerData);

  useEffect(() => {
    dispatch(fetchCustomer());
  }, [dispatch]);

  // console.log(state);
  const formatLegendValue = (value, name) => {
    const initialValue = 0;
    const totalValue = state?.reduce((accumulator, currentValue) => {
      return accumulator + currentValue[name.dataKey];
    }, initialValue);

    return (
      <span className="custom-legend-item-text-group">
        <span className="custom-legend-item-text">
          {value.replace('_', ' ')} {/* last_month -> last month */}
        </span>
        <span>{' ' + totalValue}</span>
      </span>
    );
  };

  return (
    <div className="block-wrap mt-[14px] ml-[14px]">
      <div className="block-head">
        <HeadTitle title="Customer Satisfaction" />
      </div>
      <div className="w-full h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={state}
            margin={{
              top: 10,
              right: 0,
              left: 0,
              bottom: 0,
            }}
          >
            <Tooltip content={<CustomTooltipContent />} />
            <Legend formatter={formatLegendValue} />

            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0095ff" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#0095ff" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#07e098" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#07e098" stopOpacity={0} />
              </linearGradient>
            </defs>

            <Area
              type="monotone"
              dataKey="last_month"
              stroke="#0095ff"
              fill="url(#colorUv)"
            />
            <Area
              type="monotone"
              dataKey="this_month"
              stroke="#07e098"
              fill="url(#colorPv)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Customers;
