// import styled from 'styled-components';

// import harvester3x from './../../images/harvester@3x.jpg';
// // import desktop2x from './../../images/default-desktop-2x.jpg';
// // import tablet1x from './../../images/default-tablet-1x.jpg';
// // import tablet2x from './../../images/default-tablet-2x.jpg';
// // import mobile1x from './../../images/default-mobile-1x.jpg';
// // import mobile2x from './../../images/default-mobile-2x.jpg';

// export const Title = styled.h1`
//   color: black;
//   text-shadow:
//     0 0 5px #00baff,
//     0 0 10px #00baff,
//     0 0 20px #00baff,
//     0 0 40px #00baff,
//     0 0 80px #00baff;
// `;

// export const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;

//   height: 812px;
//   width: 375px;
//   &::-webkit-scrollbar {
//     display: none;
//   }

//   max-width: 374px; /* Максимальная ширина для отзывчивости (320px - 375px) */
//   margin: 0 auto;
//   width: 100%;

//   background-position: right center;
//   background-repeat: no-repeat;
//   background-size: cover;

//   @media screen and (min-width: 768px) {
//     /* Ширина для экранов от 768px до 1439px */
//     min-width: 768px; /* Адаптивная ширина */
//     min-height: 1024px;
//   }

//   @media screen and (min-width: 1440px) {
//     /* Ширина для экранов 1440px и более */
//     max-width: 1440px; /* Максимальная ширина */
//     min-height: 800px;
//     width: 100%;
//     background-image: url(${harvester3x});

//     /* Занимать всю доступную ширину */
//   }
// `;

// export const WrapperForm = styled.div`
//   /* padding-top: 90px; */
//   @media screen and (min-width: 768px) {
//     /* padding-top: 140px; */
//   }
//   @media screen and (min-width: 1440px) {
//     /* padding-top: 150px; */
//   }
// `;

// export const WrapperPassword = styled.div`
//   position: relative;
//   width: 100%;
// `;

// export const WrapperMessange = styled.div`
//   position: relative;
// `;

// export const StatisticsWrapper = styled.div`
//   position: absolute;
//   left: 37%;
//   top: 70%;
//   @media screen and (min-width: 768px) {
//     left: 40%;
//     top: 70%;
//   }
//   @media screen and (min-width: 1440px) {
//     left: 45%;
//     top: 50%;
//   }
// `;

// ==================================================

// import styled, { keyframes, css } from 'styled-components';

// export const Container = styled.div`
//   background-color: #e9e9e9;
//   border-radius: 0.7rem;
//   box-shadow:
//     0 0.9rem 1.7rem rgba(0, 0, 0, 0.25),
//     0 0.7rem 0.7rem rgba(0, 0, 0, 0.22);
//   height: 420px;
//   max-width: 758px;
//   overflow: hidden;
//   position: relative;
//   width: 100%;

//   display: grid;
//   place-items: center;
//   align-items: center;
//   background: url('https://res.cloudinary.com/dci1eujqw/image/upload/v1616769558/Codepen/waldemar-brandt-aThdSdgx0YM-unsplash_cnq4sb.jpg');
//   background-attachment: fixed;
//   background-position: center;
//   background-repeat: no-repeat;
//   background-size: cover;

//   transform: translateX(${(props) => (props.rightPanelActive ? '100%' : '0')});
//   ${({ rightPanelActive }) =>
//     rightPanelActive &&
//     css`
//       right: 0;
//     `}/* transform: translateX(${(props) =>
//     props.rightPanelActive ? '100%' : '0'}); */
// `;

// export const FormTitle = styled.h2`
//   font-weight: 300;
//   margin: 0;
//   margin-bottom: 1.25rem;
// `;

// export const Link = styled.a`
//   color: #333;
//   font-size: 0.9rem;
//   margin: 1.5rem 0;
//   text-decoration: none;
// `;

// export const Form = styled.form`
//   background-color: #e9e9e9;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-direction: column;
//   padding: 0 3rem;
//   height: 100%;
//   text-align: center;
// `;

// export const Input = styled.input`
//   background-color: #fff;
//   border: none;
//   padding: 0.9rem 0.9rem;
//   margin: 0.5rem 0;
//   width: 100%;
// `;

// export const Button = styled.button`
//   background-color: #0367a6;
//   background-image: linear-gradient(90deg, #0367a6 0%, #008997 74%);
//   border-radius: 20px;
//   border: 1px solid #0367a6;
//   color: #e9e9e9;
//   cursor: pointer;
//   font-size: 0.8rem;
//   font-weight: bold;
//   letter-spacing: 0.1rem;
//   padding: 0.9rem 4rem;
//   text-transform: uppercase;
//   transition: transform 80ms ease-in;

//   &:active {
//     transform: scale(0.95);
//   }

//   &:focus {
//     outline: none;
//   }

//   ${(props) =>
//     props.formButton &&
//     `
//     margin-top: 1.5rem;
//   `}
// `;

// export const OverlayContainer = styled.div`
//   height: 100%;
//   left: 50%;
//   overflow: hidden;
//   position: absolute;
//   top: 0;
//   transition: transform 0.6s ease-in-out;
//   width: 50%;
//   z-index: 100;

//   transform: translateX(${(props) => (props.rightPanelActive ? '100%' : '0')});
//   ${({ rightPanelActive }) =>
//     rightPanelActive &&
//     css`
//       right: 0;
//     `}/* transform: translateX(${(props) =>
//     props.rightPanelActive ? '-100%' : '0'}); */
// `;

// export const Overlay = styled.div`
//   background-color: #008997;
//   background: url('https://res.cloudinary.com/dci1eujqw/image/upload/v1616769558/Codepen/waldemar-brandt-aThdSdgx0YM-unsplash_cnq4sb.jpg');
//   background-attachment: fixed;
//   background-position: center;
//   background-repeat: no-repeat;
//   background-size: cover;
//   height: 100%;
//   left: -100%;
//   position: relative;
//   transform: translateX(0);
//   transition: transform 0.6s ease-in-out;
//   width: 200%;
// `;

// export const OverlayPanel = styled.div`
//   align-items: center;
//   display: flex;
//   flex-direction: column;
//   height: 100%;
//   justify-content: center;
//   position: absolute;
//   text-align: center;
//   top: 0;
//   transform: translateX(0);
//   transition: transform 0.6s ease-in-out;
//   width: 50%;

//   ${({ left }) =>
//     left &&
//     css`
//       transform: translateX(-20%);
//     `}
//   ${({ right }) =>
//     right &&
//     css`
//       right: 0;
//       transform: translateX(0);
//     `} /*
//   ${(props) =>
//     props.left &&
//     `
//     transform: translateX(-20%);
//   `}

//   ${(props) =>
//     props.right &&
//     `
//     right: 0;
//     transform: translateX(0);
//   `} */
// `;

// // export const show = keyframes`
// //   0%, 49.99% {
// //     opacity: 0;
// //     z-index: 1;
// //   }

// //   50%, 100% {
// //     opacity: 1;
// //     z-index: 5;
// //   }
// // `;

// export const show = css`
//   ${keyframes`
//     0%, 49.99% {
//       opacity: 0;
//       z-index: 1;
//     }

//     50%, 100% {
//       opacity: 1;
//       z-index: 5;
//     }
//   `}
// `;

// export const SignUpContainer = styled.div`
//   left: 0;
//   opacity: 0;
//   width: 50%;
//   z-index: 1;

//   ${(props) =>
//     props.rightPanelActive &&
//     `
//     animation: ${show} 0.6s;
//     opacity: 1;
//     transform: translateX(100%);
//     z-index: 5;
//   `}
// `;

// export const SignInContainer = styled.div`
//   left: 0;
//   width: 50%;
//   z-index: 2;

//   ${(props) =>
//     props.rightPanelActive &&
//     `
//     transform: translateX(100%);
//   `}
// `;

/* ======================================= */

import styled, { keyframes, css } from 'styled-components';

export const Cont = styled.div`
  align-items: center;
  background-color: var(--white);
  background: url('https://res.cloudinary.com/dci1eujqw/image/upload/v1616769558/Codepen/waldemar-brandt-aThdSdgx0YM-unsplash_cnq4sb.jpg');
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: grid;
  height: 100vh;
  place-items: center;
`;

export const Container = styled.div`
  background-color: #e9e9e9;
  border-radius: 0.7rem;
  box-shadow:
    0 0.9rem 1.7rem rgba(0, 0, 0, 0.25),
    0 0.7rem 0.7rem rgba(0, 0, 0, 0.22);
  height: 420px;
  max-width: 758px;
  overflow: hidden;
  position: relative;
  width: 100%;

  /* transform: translateX(100%); */
`;

export const SignUpContainer = styled.div`
  height: 100%;
  position: absolute;
  top: 0;
  transition: all 0.6s ease-in-out;

  animation: show 0.6s;
  opacity: 1;
  transform: translateX(100%);
  z-index: 5;

  left: 0;
  opacity: 0;
  width: 50%;
  z-index: 1;
`;

export const SignInContainer = styled.div`
  height: 100%;
  position: absolute;
  top: 0;
  transition: all 0.6s ease-in-out;

  transform: translateX(100%);

  left: 0;
  width: 50%;
  z-index: 2;
`;

export const FormTitle = styled.h2`
  font-weight: 300;
  margin: 0;
  margin-bottom: 1.25rem;
`;

export const Link = styled.a`
  color: #333;
  font-size: 0.9rem;
  margin: 1.5rem 0;
  text-decoration: none;
`;

export const Form = styled.form`
  background-color: #e9e9e9;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 3rem;
  height: 100%;
  text-align: center;
`;

export const Input = styled.input`
  background-color: #fff;
  border: none;
  padding: 0.9rem 0.9rem;
  margin: 0.5rem 0;
  width: 100%;
`;

export const Button = styled.button`
  background-color: #0367a6;
  background-image: linear-gradient(90deg, #0367a6 0%, #008997 74%);
  border-radius: 20px;
  border: 1px solid #0367a6;
  color: #e9e9e9;
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: bold;
  letter-spacing: 0.1rem;
  padding: 0.9rem 4rem;
  text-transform: uppercase;
  transition: transform 80ms ease-in;

  &:active {
    transform: scale(0.95);
  }

  &:focus {
    outline: none;
  }

  ${(props) =>
    props.formButton &&
    `
    margin-top: 1.5rem;
  `}
`;

export const OverlayContainer = styled.div`
  height: 100%;
  left: 50%;
  overflow: hidden;
  position: absolute;
  top: 0;
  transition: transform 0.6s ease-in-out;
  width: 50%;
  z-index: 100;

  transform: translateX(-100%);
`;

export const Overlay = styled.div`
  background-color: #008997;
  background: url('https://res.cloudinary.com/dci1eujqw/image/upload/v1616769558/Codepen/waldemar-brandt-aThdSdgx0YM-unsplash_cnq4sb.jpg');
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  left: -100%;
  position: relative;
  transform: translateX(50%);
  transition: transform 0.6s ease-in-out;
  width: 200%;
`;

export const OverlayLeftPanel = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  position: absolute;
  text-align: center;
  top: 0;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
  width: 50%;

  /* transform: translateX(-20%); */
`;

export const OverlayRightPanel = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  position: absolute;
  text-align: center;
  top: 0;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
  width: 50%;

  right: 0;
  transform: translateX(0);
`;

// export const show = keyframes`
//   0%, 49.99% {
//     opacity: 0;
//     z-index: 1;
//   }

//   50%, 100% {
//     opacity: 1;
//     z-index: 5;
//   }
// `;

export const show = css`
  ${keyframes`
    0%, 49.99% {
      opacity: 0;
      z-index: 1;
    }

    50%, 100% {
      opacity: 1;
      z-index: 5;
    }
  `}
`;
