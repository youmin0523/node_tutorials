import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVisitors } from '../../redux/slices/apiSlice';

const Visitors = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.apis.visitorsData);

  useEffect(() => {
    dispatch(fetchVisitors());
  }, [dispatch]);
  // console.log(state);
  return <div>Visitors</div>;
};

export default Visitors;
