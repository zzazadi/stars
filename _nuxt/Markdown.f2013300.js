import s from"./ContentSlot.e469ce63.js";import{f as o,h as f,k as u,y as m}from"./entry.72f06139.js";import"./utils.7ba81cba.js";const l=o({name:"Markdown",extends:s,setup(t){const{parent:e}=m(),{between:n,default:a}=f(),r=u(()=>typeof t.unwrap=="string"?t.unwrap.split(" "):["*"]);return{fallbackSlot:a,tags:r,between:n,parent:e}}});export{l as default};