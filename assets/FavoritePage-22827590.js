import{n as l,r as i,j as e}from"./index-96a2780c.js";import{P as c,A as m,a as u,u as p,F as v}from"./advert-f1562ff2.js";const h=l.section`
  width: 100%;
  min-height: 100vh;
  padding: 150px 120px;
`,f=l.div`
  width: 100%;
  min-height: 100vh;
`,x=l.ul`
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
`,g=()=>{const[t,a]=i.useState([]);return i.useEffect(()=>{(()=>{try{const r=u();a(r)}catch(r){console.error(r)}})()},[]),e.jsx(x,{children:t.map(s=>e.jsx("li",{data:s,children:e.jsx(m,{data:s,reload:!0},t.id)},`${s.id}`))})};g.propTypes={data:c.arrayOf(c.shape({id:c.number.isRequired}))};const y=()=>{const[t,a]=i.useState(()=>JSON.parse(localStorage.getItem("adverts"))??[]);return i.useEffect(()=>{t.length===0?localStorage.removeItem("adverts"):localStorage.setItem("adverts",JSON.stringify(t))},[t]),[t,async r=>{if(t.some(o=>o.id===r))try{await p(r,{favorite:!1}),a(n=>n.filter(d=>d.id!==r))}catch{throw new Error("Something went wrong... Please try again later.")}else try{const n=await p(r,{favorite:!0});a(d=>[n,...d])}catch{throw new Error("Something went wrong... Please try again later.")}}]},F=()=>{const[t,a]=y();return e.jsx(h,{children:e.jsxs(f,{children:[e.jsx(v,{onSubmit:()=>{}}),t.length?e.jsx(g,{toggleFavorites:a}):e.jsxs("div",{children:[e.jsx("span",{children:"Your favorites list is empty. "}),e.jsx("a",{to:"/rental",children:"Add some cars"})]})]})})};export{F as default};
