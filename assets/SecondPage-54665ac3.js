import{L as o,j as f}from"./index-b5fe3b42.js";import{n as t}from"./emotion-styled.browser.esm-20f95cc8.js";import{W as s}from"./App.styled-bc9f8134.js";const x=t.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  /* padding-top: 350px; */
  /* width: 330px; */
  height: 500px;
  padding: 50px;
`,a=t.h1`
  display: flex;
  justify-content: center;
  color: #ffffff;
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
`;t(o)`
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
`;const n=t.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  margin-top: 20px;
`,e=t.li`
  font-size: 20px;
  list-style-type: disclosure-closed;
  color: black;
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;

  cursor: pointer;
`,r=()=>f.jsx(s,{children:f.jsxs(x,{className:"Container",children:[f.jsx(a,{children:"На цій сторінці будє виводитись каталог всіх запчастин"}),f.jsx(a,{children:"Також буде можливість пошуку запчастин за маркою техніки"}),f.jsx("div",{children:f.jsxs(n,{children:[f.jsx(e,{children:"John Deere"}),f.jsx(e,{children:"Claas"}),f.jsx(e,{children:"Case IH"}),f.jsx(e,{children:"New Holland"}),f.jsx(e,{children:"Fendt"}),f.jsx(e,{children:"..."})]})})]})});export{r as default};
