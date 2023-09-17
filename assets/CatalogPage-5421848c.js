import{n as r,c as l,j as e,r as s,a as y}from"./index-96a2780c.js";import{P as c,A as v,g as A,l as S,F as w}from"./advert-f1562ff2.js";const b=r.section`
  width: 100%;
  min-height: 100vh;
  padding: 150px 120px;
`,L=r.div`
  width: 100%;
  min-height: 100vh;
`,C=r.button`
  background-color: transparent;
  display: block;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: ${l.mainAccentColor};
  text-decoration-line: underline;
  transition: color 0.3 ease-in;
  margin: 0 auto;

  &:hover,
  &:focus {
    color: ${l.secondaryAccentColor};
  }
`,E=r.h3`
  display: flex;
  justify-content: center;
  color: ${l.mainAccentColor};
  font-size: 16px;
  font-weight: 500;
  line-height: 24p;
`,P=r.ul`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-columns: 1fr;
  column-gap: 29px;
  row-gap: 50px;
  margin-bottom: 100px;

  @media screen and (min-width: 1180px) {
    grid-template-columns: repeat(4, 1fr);
  }
`,m=({data:a})=>e.jsx(P,{children:a.map(n=>e.jsx(v,{data:n,reload:!1},`${n.id}`))});m.propTypes={data:c.arrayOf(c.shape({id:c.number.isRequired})).isRequired};const F=()=>{const[a,n]=s.useState([]),[d,p]=s.useState(!1),[o,u]=s.useState(""),[i,g]=s.useState(1),[h,x]=s.useState(!1);s.useEffect(()=>{(async()=>{try{p(!0);const t=await A(i);u(""),n(i===1?t:j=>[...j,...t]),t.length<S&&x(!0)}catch(t){u(t.response.data)}finally{p(!1)}})()},[i]);const f=async()=>{h||g(t=>t+1)};return e.jsx(b,{children:e.jsxs(L,{children:[e.jsx(w,{onSubmit:()=>{}}),d&&e.jsx(y,{}),o&&e.jsx("div",{children:o}),!d&&!o&&a.length>0&&e.jsxs(e.Fragment,{children:[e.jsx(m,{data:a}),h?e.jsx(E,{children:"You have seen all the cars"}):e.jsx(C,{type:"button",onClick:f,children:"Load more"})]})]})})};export{F as default};
