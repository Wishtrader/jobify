import {Link} from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import {FormRow, Logo} from "../components";

const Register = () => {
  return (
    <Wrapper>
      <form className='form'>
        <Logo />
        <h4>Register</h4>
        <FormRow type='text' name='name' defaultValue='John' labelText='first name' />
        <FormRow type='text' name='lastName' defaultValue='Smith' labelText='last name' />
        <FormRow type='text' name='location' defaultValue='Earth' labelText='location' />
        <FormRow type='email' name='email' defaultValue='john@gmail.com' labelText='email' />
        <FormRow type='password' name='password' defaultValue='john123' labelText='password' />
        <button type='submit' className='btn btn-block' >submit</button>
        <p>
          Already member?
          <Link to='/login' className='member-btn' >Login</Link>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;