
import { useDispatch, useSelector } from 'react-redux';
import './Hero.scss';
import {
  decrement,
  increment,
  addToNum,
  fetchChannels,
} from '../../../../application_Layer/redux/slices/userSlice';
import { useEffect } from 'react';

export default function Hero() {
  const { userProfile } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  console.log('dispatch: ', dispatch(increment()).type);
  console.log('userProfile: ', userProfile);
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
        <button onClick={() => dispatch(increment())}>{userProfile.id}</button>
        <button onClick={() => dispatch(addToNum('cli@gmail.fr'))}>
          {userProfile.email || 'email'}
        </button>
        
      </section>
    </div>
  );
}
