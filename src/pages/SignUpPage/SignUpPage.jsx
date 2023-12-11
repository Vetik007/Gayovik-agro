// import {
//     Title
// } from "./SignUpPages.styled"

// const SignUpPage = () => {

//     return (
//         <>

//             <Title >Hi SignUpPage</Title>

//         </>
//     );

// };

// export default SignUpPage;

// ============================================

// import { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

import AuthForm from '../../components/AuthForm/AuthForm';
import AuthFormButton from '../../components/AuthFormButtons/AuthFormButtons';

import AuthFormLink from '../../components/AuthFormLink/AuthFormLink';

// import { Container, WrapperForm, Title } from './SignUpPages.styled';

// import { register } from '../../redux/Authorization/operations';

import {
  // Form,
  // FormTitle,
  // Input,
  // Link,
  Button,
  SignUpContainer,
  Container,
  SignInContainer,
  OverlayContainer,
  Overlay,
  //   OverlayPanel,
  OverlayLeftPanel,
  OverlayRightPanel,
  Cont,
  Title,
  //   WrapperForm,
} from './SignUpPages.styled';

const SignUpPage = () => {
  //   const [isPassword, setIsPassword] = useState(false);
  //   const [passwordInput, setPasswordInput] = useState('password');

  //   const dispatch = useDispatch();
  //   const navigate = useNavigate();
  //   const bodyData = useSelector((state) => state.auth.bodyData);

  //   const handleSubmit = async (values) => {
  //     console.log(values);

  // try {
  //   const response = await dispatch(
  //     register({
  //       name: values.name,
  //       email: values.email,
  //       password: values.password,
  //     }),
  //   );
  //   if (response.error) {
  //     toast.error('Email already exists. Please use a different email');
  //   } else {
  //     action.resetForm();
  //     if (
  //       bodyData.bodyData === null ||
  //       Object.keys(bodyData.bodyData).length === 0
  //     ) {
  //       navigate('/params');
  //     } else {
  //       navigate('/diary');
  //     }
  //   }
  // } catch (error) {
  //   console.error('Server error:', error);
  //   toast.error('Server Error: Something went wrong');
  //     }
  //   };

  //   const toglePassword = () => {
  //     setIsPassword((prevstate) => {
  //       return !prevstate;
  //     });
  //     setPasswordInput((prevstate) => {
  //       if (prevstate === 'password') {
  //         return 'text';
  //       }
  //       if (prevstate === 'text') {
  //         return 'password';
  //       }
  //     });
  //   };

  return (
    <Cont className="Cont">
      <Title>Hi SignUpPage</Title>
      <Container className="Container">
        <SignUpContainer className="SignUpContainer">
          <AuthForm
            nameIsShown={false}
            // handleSubmit={handleSubmit}
            // toglePassword={toglePassword}
            // passwordInput={passwordInput}
            // isPassword={isPassword}
          >
            <AuthFormButton text="Sign Up" type="submit" />
            <AuthFormLink
              text="Already have an account?"
              textLink="Sign In"
              to="/signin"
            />
          </AuthForm>
        </SignUpContainer>

        <SignInContainer className="SignInContainer">
          <AuthForm
            nameIsShown={true}
            // handleSubmit={handleSubmit}
            // toglePassword={toglePassword}
            // passwordInput={passwordInput}
            // isPassword={isPassword}
          >
            <AuthFormButton
              text="Реєстрація"
              type="submit"
              className="AuthFormButton"
            />
            {/* <AuthFormLink
              text="Already have an account?"
              textLink="Sign In"
              to="/signin"
            /> */}
          </AuthForm>
        </SignInContainer>

        <OverlayContainer className="container__overlay">
          <Overlay className="Overlay">
            <OverlayLeftPanel className="overlay--left">
              <Button className="button-signIn" id="signIn">
                Вхід
              </Button>
            </OverlayLeftPanel>
            <OverlayRightPanel className="overlay--right">
              <Button className="button-signUp" id="signUp">
                Sign Up
              </Button>
            </OverlayRightPanel>
          </Overlay>
        </OverlayContainer>
      </Container>
    </Cont>
  );
};

export default SignUpPage;

{
  /* ================================================= */
}

// import { useState } from 'react';

// import {
//   Form,
//   FormTitle,
//   Input,
//   Link,
//   Button,
//   SignUpContainer,
//   Container,
//   SignInContainer,
//   OverlayContainer,
//   Overlay,
//   //   OverlayPanel,
//   OverlayLeftPanel,
//   OverlayRightPanel,
//   Cont,
// } from './SignUpPages.styled';

// const AuthForm = ({ isSignUp }) => (
//   <Form>
//     <FormTitle>{isSignUp ? 'Sign Up' : 'Sign In'}</FormTitle>
//     {isSignUp && <Input type="text" placeholder="User" />}
//     <Input type="email" placeholder="Email" />
//     <Input type="password" placeholder="Password" />
//     {!isSignUp && (
//       <Link href="#" className="link">
//         Forgot your password?
//       </Link>
//     )}
//     <Button type="submit" className="btn">
//       {isSignUp ? 'Sign Up' : 'Sign In'}
//     </Button>
//   </Form>
// );

// const SignUpPage = () => {
//   //   const [rightPanelActive, setRightPanelActive] = useState(false);

//   return (
//     <Cont>
//       <Container>
//         <SignUpContainer className="container--signup">
//           <AuthForm isSignUp />
//         </SignUpContainer>

//         <SignInContainer className="container--signin">
//           <AuthForm />
//         </SignInContainer>

//         <OverlayContainer className="container__overlay">
//           <Overlay>
//             <OverlayLeftPanel className="overlay--left">
//               <Button className="btn" id="signIn">
//                 Sign In
//               </Button>
//             </OverlayLeftPanel>
//             <OverlayRightPanel className="overlay--right">
//               <Button className="btn" id="signUp">
//                 Sign Up
//               </Button>
//             </OverlayRightPanel>
//           </Overlay>
//         </OverlayContainer>
//       </Container>
//     </Cont>
//   );
// };

// export default SignUpPage;
