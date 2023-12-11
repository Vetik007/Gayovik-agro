import{j as e}from"./index-7919da4a.js";import{n as f}from"./emotion-styled.browser.esm-6a9a5ebc.js";import{W as i}from"./App.styled-f6c767d9.js";const x=f.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  /* padding-top: 350px; */
  /* width: 330px; */
  height: 500px;
  padding: 50px;
`,s=f.h1`
  display: flex;
  justify-content: center;
  color: #ffffff;
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
`,l=f.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  margin-top: 20px;

  /* list-style-type: disclosure-closed; */
  /* list-style-type: space-counter; */

  /* color: #ffffff;
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff; */
`,t=f.li`
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
`,a=()=>e.jsx(i,{children:e.jsxs(x,{className:"Container",children:[e.jsx(s,{children:"На цій сторінці будуть виводитись запчастини за типом"}),e.jsx(s,{children:"Також буде можливість пошуку конкретної запчастини"}),e.jsx("div",{children:e.jsxs(l,{children:[e.jsx(t,{children:"Двигун"}),e.jsx(t,{children:"Трансмісія"}),e.jsx(t,{children:"Гальма"}),e.jsx(t,{children:"Гідравліка"}),e.jsx(t,{children:"Почвообробка"}),e.jsx(t,{children:"..."})]})})]})});export{a as default};
