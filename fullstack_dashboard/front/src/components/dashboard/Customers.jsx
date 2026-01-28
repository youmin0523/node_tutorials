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

const Customers = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.apis.customerData);

  useEffect(() => {
    dispatch(fetchCustomer());
  }, [dispatch]);

  // console.log(state);

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
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="last_month"
              stroke="#0095ff"
              fill="#0095ff"
            />
            <Area
              type="monotone"
              dataKey="this_month"
              stroke="#07e098"
              fill="#07e098"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Customers;
