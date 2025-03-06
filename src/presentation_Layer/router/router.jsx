import { createBrowserRouter } from 'react-router-dom';

import HomeBody from './../components/home/HomeBody';
import Home from '../pages/Home';
import UserBody from '../components/user/UserBody';
import User from '../pages/User';
import SignIn from '../pages/SignIn';
import SignInBody from '../components/signIn/signInBody';


export const router = createBrowserRouter([
  // /
  {
    path: '/',
    element: <Home />,
    children: [
      { index: true, element: <HomeBody /> },
      {
        // /home
        path: 'home',
        element: <HomeBody />,
      },
    ],
  },
  //sign-in
  {
    path: 'login',
    element: <SignIn />,
    children: [{ index: true, element: <SignInBody/> }],
  },
  // /user
  {
    path: 'profile',
    element: <User />,
    children: [{ index: true, element: <UserBody /> }],
  },
  //notFount page
  {
    path: '*',
    element: <home />,
    // children: [{ path: 'home', element: <></>, children: [] }],
  },
]);
