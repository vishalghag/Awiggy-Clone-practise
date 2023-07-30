import { IMG_CDN_URL } from '../constant';
const RestuarentCard = ({name, cloudinaryImageId,cuisines,lastMileTravelString}) => {

    return(
       <>
          <div className=' w-56 p-2 m-2 shadow-lg bg-pink-50'>
             <img src={`${IMG_CDN_URL}${cloudinaryImageId}`} alt='lo'/>
             <h2 className=' font-bold text-xl'>{name}</h2>
             <h3>{cuisines.join(", ")}</h3>
             <h4>{lastMileTravelString} minutes</h4>
          </div>
       </>
    )
 }

 export default RestuarentCard