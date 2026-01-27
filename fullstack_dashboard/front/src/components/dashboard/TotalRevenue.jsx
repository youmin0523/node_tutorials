import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRevenue } from '../../redux/slices/apiSlice';
import { useEffect } from 'react';

const TotalRevenue = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.apis.revenueData);

  useEffect(() => {
    dispatch(fetchRevenue());
  }, [dispatch]);
  console.log(state);

  return <div>TotalRevenue</div>;
};

export default TotalRevenue;
