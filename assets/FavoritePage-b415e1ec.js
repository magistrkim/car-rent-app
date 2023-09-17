import{n as a,c as i,L as u,r as c,j as e}from"./index-6fd80dfe.js";import{P as g,A as m,a as x,u as p,F as v}from"./advert-24ad6579.js";const f="/car-rent-app/assets/favorite-37fd50b7.jpg",w=a.section`
  width: 100%;
  min-height: 100vh;
  padding: 150px 120px;
`,y=a.div`
  width: 100%;
  min-height: 100vh;
`,S=a.div`
  width: 100%;
  min-height: 100vh;
  background-image: url('${f}');
  background-repeat: no-repeat;
  background-size: cover;
  padding: 80px;
`,b=a.h3`
  max-width: 500px;
  color: ${i.textSecondLightColor};
  font-size: 56px;
  font-weight: 600;
  line-height: 58px;
  margin-bottom: 60px;
`,j=a(u)`
  display: inline-block;
  font-weight: 600;
  line-height: 20px;
  font-size: 14px;
  padding: 14px 44px;
  background-color: ${i.mainAccentColor};
  color: ${i.textLightColor};
  border-radius: 12px;
  margin-bottom: 120px;
  transition: background-color 0.3 ease-in;

  &:hover,
  &:focus {
    background-color: ${i.secondaryAccentColor};
  }
`,F=a.ul`
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
`,h=()=>{const[t,o]=c.useState([]);return c.useEffect(()=>{(()=>{try{const r=x();o(r)}catch(r){console.error(r)}})()},[]),e.jsx(F,{children:t.map(s=>e.jsx("li",{data:s,children:e.jsx(m,{data:s,reload:!0},t.id)},`${s.id}`))})};h.propTypes={data:g.arrayOf(g.shape({id:g.number.isRequired}))};const A=()=>{const[t,o]=c.useState(()=>JSON.parse(localStorage.getItem("adverts"))??[]);return c.useEffect(()=>{t.length===0?localStorage.removeItem("adverts"):localStorage.setItem("adverts",JSON.stringify(t))},[t]),[t,async r=>{if(t.some(n=>n.id===r))try{await p(r,{favorite:!1}),o(d=>d.filter(l=>l.id!==r))}catch{throw new Error("Something went wrong... Please try again later.")}else try{const d=await p(r,{favorite:!0});o(l=>[d,...l])}catch{throw new Error("Something went wrong... Please try again later.")}}]},C=()=>{const[t,o]=A();return e.jsx(w,{children:e.jsxs(y,{children:[e.jsx(v,{onSubmit:()=>{}}),t.length?e.jsx(h,{toggleFavorites:o}):e.jsxs(S,{children:[e.jsx(b,{children:"Your favorites list is empty. "}),e.jsx(j,{to:"/catalog",children:"CARS"})]})]})})};export{C as default};
