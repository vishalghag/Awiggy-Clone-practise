import errorImg from '../../images/errorImg.jpg'
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {

    const {status, statusText} = useRouteError();

    // console.log(error)

    return (
        <>
          <div style={{backgroundImage: `url(${errorImg})`}}>
            <h1>Page not found</h1>
            <h2>{` ${statusText} : ${status} error`}</h2>
          </div>
        </>
      );      
}

export default ErrorPage;