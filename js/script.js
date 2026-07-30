const header=document.getElementById("siteHeader");
const menuButton=document.getElementById("menuButton");
const mobileNav=document.getElementById("mobileNav");
document.getElementById("year").textContent=new Date().getFullYear();

const setHeader=()=>header.classList.toggle("scrolled",window.scrollY>24);
setHeader();window.addEventListener("scroll",setHeader,{passive:true});

menuButton.addEventListener("click",()=>{
  const open=mobileNav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded",String(open));
  menuButton.setAttribute("aria-label",open?"Close navigation":"Open navigation");
});
mobileNav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{
  mobileNav.classList.remove("open");menuButton.setAttribute("aria-expanded","false");
}));

const reduced=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const reveal=document.querySelectorAll(".reveal");
if(reduced){reveal.forEach(el=>el.classList.add("visible"))}
else{
 const io=new IntersectionObserver(entries=>entries.forEach(entry=>{
   if(entry.isIntersecting){entry.target.classList.add("visible");io.unobserve(entry.target)}
 }),{threshold:.12,rootMargin:"0px 0px -45px"});
 reveal.forEach(el=>io.observe(el));
}

const counters=document.querySelectorAll("[data-count]");
const countObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{
 if(!entry.isIntersecting)return;
 const el=entry.target,target=Number(el.dataset.count),suffix=el.dataset.suffix||"";
 if(reduced){el.textContent=target.toLocaleString("en-IN")+suffix}
 else{
   const start=performance.now(),duration=1300;
   const tick=now=>{
     const p=Math.min((now-start)/duration,1),e=1-Math.pow(1-p,3);
     el.textContent=Math.round(target*e).toLocaleString("en-IN")+suffix;
     if(p<1)requestAnimationFrame(tick);
   };requestAnimationFrame(tick);
 }
 countObserver.unobserve(el);
}),{threshold:.45});
counters.forEach(el=>countObserver.observe(el));

if(!reduced && matchMedia("(pointer:fine)").matches){
 document.querySelectorAll(".magnetic").forEach(el=>{
   el.addEventListener("mousemove",e=>{
     const r=el.getBoundingClientRect();
     el.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.08}px,${(e.clientY-r.top-r.height/2)*.12}px)`;
   });
   el.addEventListener("mouseleave",()=>el.style.transform="translate(0,0)");
 });
}