import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTargetReality } from '../../redux/slices/apiSlice';
import HeadTitle from './HeadTitle';
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { TARGET_REALITY_LISTS } from '../../constants/menuList';

const formatTooltipValue = (value) => `${value} Sales`;

const TargetReality = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.apis.targetRealityData);

  useEffect(() => {
    dispatch(fetchTargetReality());
  }, [dispatch]);

  // console.log(state);
  return (
    <div className="block-wrap mt-[14px] ml-[14px]">
      <HeadTitle title="Target vs Reality" />
      <div className="bar-chart w-full h-[180px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={state}
            margin={{
              top: 5,
              right: 5,
              left: 5,
              bottom: 5,
            }}
          >
            <XAxis
              dataKey="month"
              tickSize={0}
              axisLine={false}
              tick={({ payload, x, y, dy }) => (
                <text
                  x={x}
                  y={y + 25}
                  dy={dy}
                  textAnchor="middle"
                  fill="#7b91b0"
                  fontSize={14}
                >
                  {payload.value}
                </text>
              )}
            />
            <Tooltip
              cursor={{ fill: 'transparent' }}
              formatter={formatTooltipValue}
            />
            <Bar
              dataKey="reality"
              fill="#4ab58e"
              activeBar={false}
              isAnimationActive={false}
              radius={[4, 4, 0, 0]}
              barSize={16}
            />
            <Bar
              dataKey="target"
              fill="#ffcf00"
              activeBar={false}
              isAnimationActive={false}
              radius={[4, 4, 0, 0]}
              barSize={18}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="block-foot">
        <div className="legend-info mt-4">
          {TARGET_REALITY_LISTS.map((item, index) => (
            <div key={index} className="mt-4 flex items-center justify-between">
              <div className="flex items-center gap-x-2.5">
                <div
                  className={`w-10 h-10 rounded-sm flex place-content-center ${index === 0 ? 'bg-[#e2fff3]' : 'bg-[#fff4de]'}`}
                >
                  <img src={item.icon} alt={item.title} className="w-6" />
                </div>
                <div>
                  <h4 className="text-xs text-[#151d48] dark:text-gray-300">
                    {item.title}
                  </h4>
                  <p className="text-[10px] text-[#a5aea3] dark:text-gray-500">
                    {item.subtitle}
                  </p>
                </div>
              </div>
              <div>
                <p
                  className={`font-semibold dark:text-gray-300 ${
                    index === 0 ? 'text-[#00e096]' : 'text-[#ffa412]'
                  }`}
                >
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TargetReality;
