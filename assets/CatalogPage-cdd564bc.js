import{n,c as r,r as s,j as t,a as m}from"./index-e50ba741.js";import{g as v,l as j,A as y}from"./advert-568d3f41.js";const A=n.section`
  width: 100%;
  min-height: 100vh;
  padding: 150px 120px;
`,S=n.div`
  width: 100%;
  min-height: 100vh;
`,w=n.button`
  background-color: transparent;
  display: block;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: ${r.mainAccentColor};
  text-decoration-line: underline;
  transition: color 0.3 ease-in;
  margin: 0 auto;

  &:hover,
  &:focus {
    color: ${r.secondaryAccentColor};
  }
`,C=n.h3`
  display: flex;
  justify-content: center;
  color: ${r.mainAccentColor};
  font-size: 16px;
  font-weight: 500;
  line-height: 24p;
`,b=()=>{const[i,c]=s.useState([]),[l,d]=s.useState(!1),[o,h]=s.useState(""),[a,u]=s.useState(1),[g,f]=s.useState(!1);s.useEffect(()=>{(async()=>{try{d(!0);const e=await v(a);h(""),c(a===1?e:p=>[...p,...e]),e.length<j&&f(!0)}catch(e){h(e.response.data)}finally{d(!1)}})()},[a]);const x=async()=>{g||u(e=>e+1)};return t.jsx(A,{children:t.jsxs(S,{children:[l&&t.jsx(m,{}),o&&t.jsx("div",{children:o}),!l&&!o&&i.length>0&&t.jsxs(t.Fragment,{children:[t.jsx(y,{data:i}),g?t.jsx(C,{children:"You have seen all the cars"}):t.jsx(w,{type:"button",onClick:x,children:"Load more"})]})]})})};export{b as default};
