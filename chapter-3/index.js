import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom'
import Home from './Home';

const heading1 = (
  <h2 className='welcome-heading'> Welcome to Trio-Mask</h2>
);
const HeaderComponent = () => {

    const logoIconAddress = 'https://mir-s3-cdn-cf.behance.net/projects/404/f2fe11167275405.Y3JvcCwxNDc1LDExNTQsMjYyLDE3MQ.jpg';
    const userIconAddress = 'https://cdn.onlinewebfonts.com/svg/img_184513.png';
    return (
      <>
       <div className='header-class'>
        <div className='header-left'>
          <img src={logoIconAddress} className='logo-icon-class'/>
          {heading1}
        </div>

        <div className='header-middle'>
           <input className='input' type='text' placeholder='Search here...' />
           <ul className='list-items'>
            <li><Link to='/Home'> Home</Link> </li>
            <li> Contact</li>
            <li> About</li>
           </ul>
        </div>
        <div className='header-right'>
           
           <img src={userIconAddress} className='user-icon-class'/>
        </div>
       </div>
       <div className='content'>
        Main Content
       </div>
       <div className='footer-class'>
          This is footer component
       </div>
      </> 
    );
}

const router = createBrowserRouter([{
   path: '/',
   element: <HeaderComponent />,
},
{
   path: '/Home',
   element: <Home />
}]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);