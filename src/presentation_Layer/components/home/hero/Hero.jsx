
import { useDispatch, useSelector } from 'react-redux';
import './Hero.scss';

import { useEffect } from 'react';
import { addToNum, fetchChannels, increment } from '../../../../infrastructure_Layer/redux/slices/userSlice';

export default function Hero() {
  const { userProfile } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

useEffect(()=>{
  dispatch(fetchChannels())
},[dispatch])


  return (
    <div className="hero">
      <section className="hero-content">
        <h2 className="sr-only">Promoted Content</h2>
        <p className="subtitle">No fees.</p>
        <p className="subtitle">No minimum deposit.</p>
        <p className="subtitle">High interest rates.</p>
        <p className="text">Open a savings account with Argent Bank today!</p>
      </section>
    </div>
  );
}
