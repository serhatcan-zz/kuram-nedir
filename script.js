
// Active tab highlight
const tabs = [...document.querySelectorAll('.tab')];
const sections = [...document.querySelectorAll('section.section')];
function setActive(){
  let active = sections[0].id;
  const offset = 110;
  for(const s of sections){
    const r = s.getBoundingClientRect();
    if(r.top - offset <= 0) active = s.id;
  }
  tabs.forEach(t=>{
    t.classList.toggle('active', t.getAttribute('href').slice(1) === active);
  });
}
setActive();
addEventListener('scroll', setActive, {passive:true});
