document.getElementById("year").textContent=new Date().getFullYear();
const menu=document.querySelector(".menu"), nav=document.querySelector(".navlinks");
menu.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll(".navlinks a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

const dock=document.querySelector(".edit-dock"), editBtn=document.getElementById("editBtn");
editBtn.addEventListener("click",()=>dock.classList.toggle("open"));
const fields=["name","affiliation","position","email","scholar","linkedin"];
const selectors={
name:'[data-name]',affiliation:'[data-affiliation]',position:'[data-position]',email:'[data-email]'
};
function apply(){
 const name=localStorage.getItem("kum-name"), aff=localStorage.getItem("kum-aff"), pos=localStorage.getItem("kum-pos"), email=localStorage.getItem("kum-email"), scholar=localStorage.getItem("kum-scholar"), linkedin=localStorage.getItem("kum-linkedin");
 if(name){document.querySelectorAll(".brand:not(.x),footer").forEach(()=>{});document.title="Kummech | "+name+" — Research, Engineering & Innovation";document.querySelector(".footer-inner").innerHTML=document.querySelector(".footer-inner").innerHTML.replace(/Kumlachew Yeneneh/g,name)}
 if(aff) document.querySelector(".profile-card p[data-x='aff']")?.replaceChildren(document.createTextNode(aff));
 if(scholar) document.querySelectorAll('[data-profile="scholar"]').forEach(a=>{a.href=scholar;a.target="_blank";});
 if(linkedin) document.querySelectorAll('[data-profile="linkedin"]').forEach(a=>{a.href=linkedin;a.target="_blank";});
}
function load(){
 const vals={name:localStorage.getItem("kum-name")||"Kumlachew Yeneneh",affiliation:localStorage.getItem("kum-aff")||"Ethiopian Defence University",position:localStorage.getItem("kum-pos")||"Associate Researcher and Lecturer — Motor Vehicle Engineering",email:localStorage.getItem("kum-email")||"kumynnh2023@gmail.com",scholar:localStorage.getItem("kum-scholar")||"",linkedin:localStorage.getItem("kum-linkedin")||""};
 fields.forEach(k=>document.getElementById(k).value=vals[k]);
 apply();
}
document.getElementById("saveEdit").addEventListener("click",()=>{
 fields.forEach(k=>localStorage.setItem("kum-"+k,document.getElementById(k).value.trim()));
 const email=document.getElementById("email").value.trim();
 document.querySelectorAll('a[href^="mailto:"]').forEach(a=>a.href="mailto:"+email);
 const scholar=document.getElementById("scholar").value.trim(), linkedin=document.getElementById("linkedin").value.trim();
 document.querySelectorAll('[data-profile="scholar"]').forEach(a=>{if(scholar){a.href=scholar;a.target="_blank";}});
 document.querySelectorAll('[data-profile="linkedin"]').forEach(a=>{if(linkedin){a.href=linkedin;a.target="_blank";}});
 alert("Saved. Your quick edits are stored in this browser. For permanent publishing, edit index.html.");
});
document.getElementById("resetEdit").addEventListener("click",()=>{fields.forEach(k=>localStorage.removeItem("kum-"+k));location.reload()});
load();