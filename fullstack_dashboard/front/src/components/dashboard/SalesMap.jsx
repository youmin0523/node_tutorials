import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSalesMap } from '../../redux/slices/apiSlice';
import HeadTitle from './HeadTitle';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import geoJSON from '../../constants/world-50m.v1.json';

const SalesMap = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.apis.salesMapData);

  useEffect(() => {
    dispatch(fetchSalesMap());
  }, [dispatch]);

  // console.log(state);

  return (
    <div className="block-wrap my-[14px] ml-[14px]">
      <HeadTitle title="Sales Mapping by Country" />
      <div className="map-chart">
        <ComposableMap
          projection="geoAzimuthalEqualArea"
          projectionConfig={{
            rotate: [-10.0, -53.0, 0],
            scale: 200,
          }}
        >
          <Geographies geography={geoJSON}>
            {({ geographies }) =>
              geographies.map((geo) => {
                return <Geography key={geo.rsmKey} geography={geo} />;
              })
            }
          </Geographies>
        </ComposableMap>
      </div>
    </div>
  );
};

export default SalesMap;
