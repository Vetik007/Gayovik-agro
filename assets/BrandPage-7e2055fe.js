import{L as x,j as f}from"./index-28e4714d.js";import{n as t}from"./emotion-styled.browser.esm-443d034e.js";import{W as a}from"./App.styled-7b13b868.js";const n=t.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  /* padding-top: 350px; */
  /* width: 330px; */
  height: 500px;
  padding: 50px;
`,s=t.h1`
  display: flex;
  justify-content: center;
  color: #ffffff;
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
`;t(x)`
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
`;const i=t.ul`
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
`,p=()=>f.jsx(a,{children:f.jsxs(n,{className:"Container",children:[f.jsx(s,{children:"На цій сторінці будє виводитись каталог брендів"}),f.jsx(s,{children:"з можливістю пошуку запчастин за брендом"}),f.jsx("div",{children:f.jsxs(i,{children:[f.jsx(e,{children:"Avia"}),f.jsx(e,{children:"Claas"}),f.jsx(e,{children:"Gates"}),f.jsx(e,{children:"INA"}),f.jsx(e,{children:"Kuhn"}),f.jsx(e,{children:"Lemken"}),f.jsx(e,{children:"SKF"}),f.jsx(e,{children:"Timken"}),f.jsx(e,{children:"..."})]})})]})});export{p as default};
