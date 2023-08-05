import {Link, useRouteError} from "react-router-dom";
import Wrapper from "../assets/wrappers/ErrorPage";
import img from '../assets/images/not-found.svg';

const Error = () => {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt="not found"/>
          <h2>Ohh! page not found</h2>
          <p>we can't seem to find the page you are looking for</p>
          <Link to='/dashboard'>back home</Link>
        </div>
      </Wrapper>
    )
  }

  return (
    <div>
      <h1>Error Page</h1>
      <Link to='/'>Back to Home</Link>
    </div>
  );
};

export default Error;