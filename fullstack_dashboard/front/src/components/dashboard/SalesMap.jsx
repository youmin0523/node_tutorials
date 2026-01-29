import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSalesMap } from '../../redux/slices/apiSlice';
import HeadTitle from './HeadTitle';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import geoJSON from '../../constants/world-50m.v1.json';
import { COLOR_MAP } from '../../constants/menuList';

const getFillColor = (fillColor) => COLOR_MAP[fillColor] || '#ececec';

const SalesMap = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.apis.salesMapData);

  useEffect(() => {
    dispatch(fetchSalesMap());
  }, [dispatch]);

  // console.log(state);

  const findByCountryId = (countryId) => {
    const matchedCountry = state?.find(
      (country) => country.country_id === countryId,
    );
    return matchedCountry ? getFillColor(matchedCountry.fill_color) : '#ececec';
  };

  return (
    <div className="block-wrap my-[14px] ml-[14px]">
      <HeadTitle title="Sales Mapping by Country" />
      <div className="map-chart">
        <ComposableMap
          projection="geoNaturalEarth1"
          projectionConfig={{
            rotate: [0, 0, 0],
            scale: 200,
          }}
        >
          <Geographies geography={geoJSON}>
            {({ geographies }) =>
              geographies.map((geo) => {
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={findByCountryId(geo.id)}
                  />
                );
              })
            }
          </Geographies>
        </ComposableMap>
      </div>
    </div>
  );
};

export default SalesMap;
