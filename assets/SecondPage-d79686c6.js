import{L as t,j as f}from"./index-bf32045d.js";import{n as o}from"./emotion-styled.browser.esm-d6ff7618.js";import{W as e}from"./App.styled-0592ec2e.js";const a=o.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 350px;
  width: 330px;
`,x=o.div`
  text-align: center;
`,n=o.h1`
  color: #ffffff;
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
`,s=o(t)`
  padding: 8px 16px;
  color: #ffffff; /* White text color */
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
  transition:
    color 0.3s,
    text-shadow 0.3s;
  display: block;
  &:hover,
  &:focus {
    color: #00baff; /* Blue text color on hover/focus */
    text-shadow:
      0 0 5px #00baff,
      0 0 10px #00baff,
      0 0 20px #00baff,
      0 0 40px #00baff,
      0 0 80px #00baff;
  }
`,i=()=>f.jsx(e,{children:f.jsx(a,{children:f.jsxs(x,{children:[f.jsx(n,{children:"Second Page"}),f.jsx(s,{to:"/second/5",children:"Half"})]})})});export{i as default};
