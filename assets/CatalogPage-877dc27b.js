import{n,c as r,r as s,j as t,a as m}from"./index-b2423703.js";import{g as j,l as v,F as y,A}from"./advert-77ab504d.js";const S=n.section`
  width: 100%;
  min-height: 100vh;
  padding: 150px 120px;
`,w=n.div`
  width: 100%;
  min-height: 100vh;
`,C=n.button`
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
`,L=n.h3`
  display: flex;
  justify-content: center;
  color: ${r.mainAccentColor};
  font-size: 16px;
  font-weight: 500;
  line-height: 24p;
`,k=()=>{const[i,c]=s.useState([]),[l,d]=s.useState(!1),[o,h]=s.useState(""),[a,u]=s.useState(1),[g,x]=s.useState(!1);s.useEffect(()=>{(async()=>{try{d(!0);const e=await j(a);h(""),c(a===1?e:p=>[...p,...e]),e.length<v&&x(!0)}catch(e){h(e.response.data)}finally{d(!1)}})()},[a]);const f=async()=>{g||u(e=>e+1)};return t.jsx(S,{children:t.jsxs(w,{children:[t.jsx(y,{}),l&&t.jsx(m,{}),o&&t.jsx("div",{children:o}),!l&&!o&&i.length>0&&t.jsxs(t.Fragment,{children:[t.jsx(A,{data:i}),g?t.jsx(L,{children:"You have seen all the cars"}):t.jsx(C,{type:"button",onClick:f,children:"Load more"})]})]})})};export{k as default};
