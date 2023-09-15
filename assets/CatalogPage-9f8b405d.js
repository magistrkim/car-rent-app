import{n,r as s,j as t,a as p}from"./index-adb91ceb.js";import{g as v,l as j,A as m}from"./advert-cf531bbd.js";const y=n.section`
  width: 100%;
  min-height: 100vh;
  padding: 150px 120px;
`,A=n.div`
  width: 100%;
  min-height: 100vh;
`,S=n.button`
  background-color: transparent;
  display: block;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: #0b44cd;
  text-decoration-line: underline;
  transition: color 0.3 ease-in;
  margin: 0 auto;

  &:hover,
  &:focus {
    color: #3470ff;
  }
`,w=n.h3`
  display: flex;
  justify-content: center;
  color: #3470ff;
  font-size: 16px;
  font-weight: 500;
  line-height: 24p;
`,E=()=>{const[r,i]=s.useState([]),[c,l]=s.useState(!1),[o,d]=s.useState(""),[a,f]=s.useState(1),[h,g]=s.useState(!1);s.useEffect(()=>{(async()=>{try{l(!0);const e=await v(a);d(""),i(a===1?e:x=>[...x,...e]),e.length<j&&g(!0)}catch(e){d(e.response.data)}finally{l(!1)}})()},[a]);const u=async()=>{h||f(e=>e+1)};return t.jsx(y,{children:t.jsxs(A,{children:[c&&t.jsx(p,{}),o&&t.jsx("div",{children:o}),!c&&!o&&r.length>0&&t.jsxs(t.Fragment,{children:[t.jsx(m,{data:r}),h?t.jsx(w,{children:"You have seen all the cars"}):t.jsx(S,{type:"button",onClick:u,children:"Load more"})]})]})})};export{E as default};
