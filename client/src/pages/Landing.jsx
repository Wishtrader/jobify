import Wrapper from '../assets/wrappers/LandingPage';
import main from '../assets/images/main.svg';
import logo from '../assets/images/logo.svg';
import {Link} from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt='Jobify' className='logo'/>
      </nav>
      <div className="container page">
        <div className="info">
          <h1>job <span>tracking</span> app</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aperiam delectus doloremque error et ex
            expedita impedit incidunt maxime nemo nesciunt nisi nulla officiis perspiciatis, possimus reprehenderit
            sequi sit tempora?
          </p>
          <Link to='/register' className='btn register-link'>Register</Link>
          <Link to='/login' className='btn'>Login / Demo user</Link>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  );
};

export default Landing;