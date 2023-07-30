import React, { lazy, Suspense, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import { createBrowserRouter,Outlet,RouterProvider } from 'react-router-dom';
import About from './components/About';
import ErrorPage from './components/ErrorPage';
import Contact from './components/Contact';
import ResturantMenu from './components/ResturantMenu';
import Profile from './components/Profile';
import ShimmerHotelCardUI from './components/ShimmerHotelCardUI';
import UserContext from './utils/UserContext';
// import Instamart from './components/Instamart';
const Instamart = lazy(() => import('./components/Instamart'))

const AppLayout = () => {

  const [user,setUser] = useState({
    name:"Vishal Ghag",
    email:"vishalghag@gmail.com"
  })

  return (
    <>
    <UserContext.Provider value={{
      user:user,
      setUser:setUser
    }}>
      <Header />
      <Outlet/>
      <Footer />
      </UserContext.Provider>
      {/* {console.log(ResturentList())} */}
    </>
  )
}

const AppRouter = createBrowserRouter([
  {
    path:'/',
    element: <AppLayout/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:'/',
        element:<Body/>
      },
      {
        path:'/about',
        element:<About/>,
        children:[
          {
          path:'profile',
          element:<Profile/>
        }
      ]
      },
      {
        path:'/contact',
        element:<Contact/>
      },
      {
        path:'/resturant/:id',
        element:<ResturantMenu/>
      },
      {
        path:'/instamart',
        element: <Suspense fallback={<ShimmerHotelCardUI/>}><Instamart/></Suspense> 
      }
    ]
  },

])

///resturant/681346

const root = ReactDOM.createRoot(document.querySelector('#root'));
//    root.render(heading);
root.render(<RouterProvider router={AppRouter}/>);