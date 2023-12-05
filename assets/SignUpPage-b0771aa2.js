import{s as t,n as i,c as s,j as e}from"./index-2b0060e1.js";const c=t.div`
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
`,l=t.div`
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
`,d=t.div`
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
`,m=t.div`
  height: 100%;
  position: absolute;
  top: 0;
  transition: all 0.6s ease-in-out;

  transform: translateX(100%);

  left: 0;
  width: 50%;
  z-index: 2;
`,g=t.h2`
  font-weight: 300;
  margin: 0;
  margin-bottom: 1.25rem;
`,p=t.a`
  color: #333;
  font-size: 0.9rem;
  margin: 1.5rem 0;
  text-decoration: none;
`,h=t.form`
  background-color: #e9e9e9;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 3rem;
  height: 100%;
  text-align: center;
`,r=t.input`
  background-color: #fff;
  border: none;
  padding: 0.9rem 0.9rem;
  margin: 0.5rem 0;
  width: 100%;
`,a=t.button`
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

  ${n=>n.formButton&&`
    margin-top: 1.5rem;
  `}
`,u=t.div`
  height: 100%;
  left: 50%;
  overflow: hidden;
  position: absolute;
  top: 0;
  transition: transform 0.6s ease-in-out;
  width: 50%;
  z-index: 100;

  transform: translateX(-100%);
`,x=t.div`
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
`,f=t.div`
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
`,b=t.div`
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
`;i`
  ${s`
    0%, 49.99% {
      opacity: 0;
      z-index: 1;
    }

    50%, 100% {
      opacity: 1;
      z-index: 5;
    }
  `}
`;const o=({isSignUp:n})=>e.jsxs(h,{children:[e.jsx(g,{children:n?"Sign Up":"Sign In"}),n&&e.jsx(r,{type:"text",placeholder:"User"}),e.jsx(r,{type:"email",placeholder:"Email"}),e.jsx(r,{type:"password",placeholder:"Password"}),!n&&e.jsx(p,{href:"#",className:"link",children:"Forgot your password?"}),e.jsx(a,{type:"submit",className:"btn",children:n?"Sign Up":"Sign In"})]}),v=()=>e.jsx(c,{children:e.jsxs(l,{children:[e.jsx(d,{className:"container--signup",children:e.jsx(o,{isSignUp:!0})}),e.jsx(m,{className:"container--signin",children:e.jsx(o,{})}),e.jsx(u,{className:"container__overlay",children:e.jsxs(x,{children:[e.jsx(f,{className:"overlay--left",children:e.jsx(a,{className:"btn",id:"signIn",children:"Sign In"})}),e.jsx(b,{className:"overlay--right",children:e.jsx(a,{className:"btn",id:"signUp",children:"Sign Up"})})]})})]})});export{v as default};
