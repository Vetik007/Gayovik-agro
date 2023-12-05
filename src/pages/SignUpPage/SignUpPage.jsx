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

// import AuthForm from '../../components/AuthForm/AuthForm';
// import AuthFormButton from '../../components/AuthFormButtons/AuthFormButtons';

// import AuthFormLink from '../../components/AuthFormLink/AuthFormLink';

// import { Container, WrapperForm, Title } from './SignUpPages.styled';

// import { register } from '../../redux/Authorization/operations';

// const SignUpPage = () => {
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

//   return (
// <Container>
//   <Title>Hi SignUpPage</Title>
//   <WrapperForm>
//     <AuthForm
//       nameIsShown={true}
//       handleSubmit={handleSubmit}
//       toglePassword={toglePassword}
//       passwordInput={passwordInput}
//       isPassword={isPassword}
//     >
//       <AuthFormButton text="Sign Up" type="submit" />
//       <AuthFormLink
//         text="Already have an account?"
//         textLink="Sign In"
//         to="/signin"
//       />
//     </AuthForm>

//     <AuthForm
//       nameIsShown={true}
//       handleSubmit={handleSubmit}
//       toglePassword={toglePassword}
//       passwordInput={passwordInput}
//       isPassword={isPassword}
//     >
//       <AuthFormButton text="Sign Up" type="submit" />
//       <AuthFormLink
//         text="Already have an account?"
//         textLink="Sign In"
//         to="/signin"
//       />
//     </AuthForm>

//     <OverlayContainer>
//       <Overlay>
//         <div class="overlay__panel overlay--left">
//           <button class="btn" id="signIn">
//             Sign In
//           </button>
//         </div>
//         <div class="overlay__panel overlay--right">
//           <button class="btn" id="signUp">
//             Sign Up
//           </button>
//         </div>
//       </=>
//     </div>
//   </WrapperForm>
// </Container>
//   );
// };

// export default SignUpPage;

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
//   OverlayPanel,
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
//   const [rightPanelActive, setRightPanelActive] = useState(false);

//   return (
//     <Container rightPanelActive={true}>
//       <SignUpContainer rightPanelActive={true} className="container--signup">
//         <AuthForm isSignUp />
//       </SignUpContainer>

//       <SignInContainer rightPanelActive={false} className="container--signin">
//         <AuthForm />
//       </SignInContainer>

//       <OverlayContainer
//         rightPanelActive={rightPanelActive}
//         className="container__overlay"
//       >
//         <Overlay>
//           <OverlayPanel left className="overlay--left">
//             <Button
//               onClick={() => setRightPanelActive(false)}
//               className="btn"
//               id="signIn"
//             >
//               Sign In
//             </Button>
//           </OverlayPanel>
//           <OverlayPanel right className="overlay--right">
//             <Button
//               onClick={() => setRightPanelActive(true)}
//               className="btn"
//               id="signUp"
//             >
//               Sign Up
//             </Button>
//           </OverlayPanel>
//         </Overlay>
//       </OverlayContainer>
//     </Container>
//   );
// };

// export default SignUpPage;

// ===============================================================

// import { useState } from 'react';

import {
  Form,
  FormTitle,
  Input,
  Link,
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
} from './SignUpPages.styled';

const AuthForm = ({ isSignUp }) => (
  <Form>
    <FormTitle>{isSignUp ? 'Sign Up' : 'Sign In'}</FormTitle>
    {isSignUp && <Input type="text" placeholder="User" />}
    <Input type="email" placeholder="Email" />
    <Input type="password" placeholder="Password" />
    {!isSignUp && (
      <Link href="#" className="link">
        Forgot your password?
      </Link>
    )}
    <Button type="submit" className="btn">
      {isSignUp ? 'Sign Up' : 'Sign In'}
    </Button>
  </Form>
);

const SignUpPage = () => {
  //   const [rightPanelActive, setRightPanelActive] = useState(false);

  return (
    <Cont>
      <Container>
        <SignUpContainer className="container--signup">
          <AuthForm isSignUp />
        </SignUpContainer>

        <SignInContainer className="container--signin">
          <AuthForm />
        </SignInContainer>

        <OverlayContainer className="container__overlay">
          <Overlay>
            <OverlayLeftPanel className="overlay--left">
              <Button className="btn" id="signIn">
                Sign In
              </Button>
            </OverlayLeftPanel>
            <OverlayRightPanel className="overlay--right">
              <Button className="btn" id="signUp">
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
