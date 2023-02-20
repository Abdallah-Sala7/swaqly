import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';

import './main.css'

import {Home, RootLayout, AuthPage, PassLyout, ForgotPass, ResetPass} from './pages';
import { Login, Register } from './components';

const router = createBrowserRouter([
  {
    path:'/',
    element: <RootLayout />,
    children:[
      {index:true, element:<Home /> },
    ]
  },
  {
    path:'auth', 
    element: <AuthPage />,
    children:[
      {index:true, element: <Login /> },
      {path:'login', element: <Login /> },
      {path:'register', element: <Register /> },
    ]
  },
  {
    path:'password',
    element: <PassLyout />,
    children:[
      {index:true, element: <ForgotPass /> },
      {path:'forgot', element: <ForgotPass /> },
      {path:'reset', element: <ResetPass /> },
    ]
  },
  {
    path:'*',
    element: <div>404</div>
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);