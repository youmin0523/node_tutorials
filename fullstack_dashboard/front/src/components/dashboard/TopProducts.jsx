import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTopProducts } from '../../redux/slices/apiSlice';
import HeadTitle from './HeadTitle';

const TopProducts = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.apis.topProductsData);

  useEffect(() => {
    dispatch(fetchTopProducts());
  }, [dispatch]);

  // console.log(state);

  const ths = ['#', 'Name', 'Popularity', 'Sales'];

  return (
    <div className="block-wrap my-[14px]">
      <HeadTitle title="Top Products" />
      <div className="tbl-products">
        <table className="w-full border-collapse min-w-[500px]">
          <thead>
            <tr>
              {ths.map((th, index) => (
                <th
                  key={index}
                  className="py-3 px-4 border-b text-gray-950 dark:text-gray-300 font-normal text-left border-[#f0f9ff]"
                >
                  {th}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {state?.map((item, index) => {
              return (
                <tr key={index}>
                  <td className="py-3 px-4 text-sm">{index + 1}</td>
                  <td className="py-3 px-4 text-sm">{item.name}</td>
                  <td className="py-3 px-4 text-sm">
                    <div className="min-w-[180px] h-[5px] rounded-full overflow-hidden relative bg-[#c3d3e2]">
                      <div
                        className="bg-[#0095ff] absolute left-0 top-0 rounded-full h-full"
                        style={{ width: `${item.papularitypercent}%` }}
                      ></div>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm">
                    <div className="bg-[#f0f9ff] text-[#0095ff] border border-[#0095ff] rounded-md min-w-[45px] h-6 inline-flex items-center justify-center text-xs">
                      {`${item.salespercent}%`}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopProducts;
