import { useContext } from 'react'
import logo from '../../images/logo.png'

import { Link } from 'react-router-dom'
import UserContext from '../utils/UserContext'

const Title = () => (
    <>
       <img className='h-28 p-2' alt='logo' src={logo}/>
    </>
 )
 
 const Header = () => {
 
   const {user} = useContext(UserContext)

    return(
       <>
       <div className='flex justify-between bg-pink-50 shadow-lg sm:bg-blue-50' >
          <Title/>
       <div className='nav-items'>
          <ul className='flex py-10'>
            <Link to='/'>
             <li className='px-2'>Home</li>
             </Link>
             <Link to='/about'>
             <li className='px-2'>About Us</li>
             </Link>
             <Link to='/contact'>
             <li className='px-2'>Contact US</li>
             </Link>
             <li className='px-2'>Cart</li>
             <Link to='/instamart'>
             <li className='px-2'>Instamart</li>
             </Link>
          </ul>
          </div>
          <h2 className=' p-10 font-bold text-red-500'>{user.name}</h2>
          
          </div>
       </>
    )
 }

 export default Header;