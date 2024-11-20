(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{9493:function(e,t,a){Promise.resolve().then(a.bind(a,6994)),Promise.resolve().then(a.bind(a,5042)),Promise.resolve().then(a.bind(a,3344)),Promise.resolve().then(a.bind(a,640)),Promise.resolve().then(a.bind(a,7231)),Promise.resolve().then(a.t.bind(a,5878,23))},6994:function(e,t,a){"use strict";a.d(t,{Contact:function(){return c}});var s=a(7437),l=a(2265),i=a(714),n=a(4508);let r=l.forwardRef((e,t)=>{let{className:a,type:l,...i}=e;return(0,s.jsx)("input",{type:l,className:(0,n.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",a),ref:t,...i})});r.displayName="Input";var o=a(9839);function c(){let[e,t]=(0,l.useState)({nom:"",prenom:"",email:"",Tele:"",vous:"",faculte:"",organisme:"",recherche:"",source:""}),[a,n]=(0,l.useState)(""),[c,u]=(0,l.useState)(!1),[m,h]=(0,l.useState)(!1),x=e=>{let{name:a,value:s}=e.target;t(e=>({...e,[a]:s}))},p=async t=>{t.preventDefault(),h(!0);try{(await fetch("registration.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})).ok?n("Form submitted successfully! Check your inbox."):n("Failed to submit form. You can't submit more than once.")}catch(e){console.error("Error submitting form:",e),n("An error occurred. Please try again later.")}finally{h(!1),u(!0)}};return(0,l.useEffect)(()=>{if(c){let e=setTimeout(()=>{u(!1)},9e3);return()=>clearTimeout(e)}},[c]),(0,s.jsxs)("section",{className:"content-visibility-auto py-32 px-4 md:px-8 bg-[#001f3f] relative overflow-hidden",children:[(0,s.jsx)(d,{}),(0,s.jsx)("div",{className:"max-w-3xl mx-auto relative z-10",children:(0,s.jsxs)(i.E.div,{initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8},children:[(0,s.jsx)("h2",{className:"text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-white to-blue-200",children:"Inscrivez vous"}),(0,s.jsxs)("form",{onSubmit:p,className:"space-y-8 p-8 bg-white/5 backdrop-blur-lg border-white/10 rounded-xl shadow-xl translate-y-[-2px] transition-all",children:[(0,s.jsxs)("div",{className:"grid md:grid-cols-2 gap-8",children:[(0,s.jsx)(r,{name:"nom",placeholder:"Nom",value:e.nom,onChange:x,required:!0,className:"bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12"}),(0,s.jsx)(r,{name:"prenom",placeholder:"Pr\xe9nom",value:e.prenom,onChange:x,required:!0,className:"bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12"})]}),(0,s.jsx)(r,{name:"email",type:"email",placeholder:"Adresse e-mail",value:e.email,onChange:x,required:!0,className:"bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12"}),(0,s.jsx)(r,{name:"Tele",type:"tel",placeholder:"Num\xe9ro de t\xe9l\xe9phone",value:e.Tele,onChange:x,required:!0,className:"bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12"}),(0,s.jsxs)("select",{name:"vous",value:e.vous,onChange:x,required:!0,className:"bg-white/10 border-white/20 text-white/50 placeholder:text-white/50 h-12 w-full rounded-md",children:[(0,s.jsx)("option",{value:"",children:" \xa0 Vous \xeates?"}),(0,s.jsx)("option",{value:"etudiant",className:"text-black",children:" \xa0 \xc9tudiant"}),(0,s.jsx)("option",{value:"Enseignant",className:"text-black",children:" \xa0 Enseignant"}),(0,s.jsx)("option",{value:"Entreprise",className:"text-black",children:" \xa0 Entreprise"}),(0,s.jsx)("option",{value:"Startup",className:"text-black",children:" \xa0 Startup"}),(0,s.jsx)("option",{value:"A/ONG",className:"text-black",children:" \xa0 Association / ONG"}),(0,s.jsx)("option",{value:"Autre",className:"text-black",children:" \xa0 Autre"})]}),["etudiant","Enseignant"].includes(e.vous)&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("select",{name:"faculte",value:e.faculte,onChange:x,required:!0,className:"bg-white/10 border-white/20 text-white/50 placeholder:text-white/50 h-12 w-full rounded-md",children:[(0,s.jsx)("option",{value:"",children:" \xa0 Votre Etablissement d'affiliation?"}),(0,s.jsx)("option",{value:"ESEN",className:"text-black",children:"Ecole Sup\xe9rieure de l Economie Num\xe9rique de la Manouba (ESEN)"}),(0,s.jsx)("option",{value:"ENSI",className:"text-black",children:"Ecole Nationale des Sciences de l Informatique (ENSI)"}),(0,s.jsx)("option",{value:"ISAMM",className:"text-black",children:"Institut Sup\xe9rieur des Arts Multim\xe9dia de la Manouba (ISAMM)"}),(0,s.jsx)("option",{value:"ESC",className:"text-black",children:"Ecole Sup\xe9rieure de Commerce(ESC)"}),(0,s.jsx)("option",{value:"ISCAE",className:"text-black",children:"Institut Sup\xe9rieur de Comptabilit\xe9 et d'Administration des Entreprises(ISCAE)"}),(0,s.jsx)("option",{value:"TBS",className:"text-black",children:"Tunisia Buisness school (TBS)"}),(0,s.jsx)("option",{value:"ISI",className:"text-black",children:"Institut Sup\xe9rieur d'Informatique (ISI)"}),(0,s.jsx)("option",{value:"FST",className:"text-black",children:"Math\xe9matiques, informatique, sciences et technologie de la mati\xe8re ( FST )"}),(0,s.jsx)("option",{value:"ESSECT",className:"text-black",children:"ESSECT"}),(0,s.jsx)("option",{value:"IHEC",className:"text-black",children:"Institut des Hautes Etudes Commerciales de Carthage (IHEC)"}),(0,s.jsx)("option",{value:"ISGT",className:"text-black",children:"ISG Tunis"}),(0,s.jsx)("option",{value:"FSEGT",className:"text-black",children:"Facult\xe9 des Sciences Economiques et de Gestion de Tunis (FSEGT)"}),(0,s.jsx)("option",{value:"INSAT",className:"text-black",children:" Institut National des Sciences Appliqu\xe9es et de Technologie (INSAT)"}),(0,s.jsx)("option",{value:"ISTIC",className:"text-black",children:" Institut Sup\xe9rieur des Technologies de l'Information et des Communications (ISTIC)"}),(0,s.jsx)("option",{value:"SUPCOM",className:"text-black",children:"Ecole Sup\xe9rieure des Communications de Tunis (SUPCOM)"}),(0,s.jsx)("option",{value:"ENSIT",className:"text-black",children:"ENSIT"}),(0,s.jsx)("option",{value:"autre",className:"text-black",children:"autre"}),(0,s.jsx)("option",{value:"ESSTD",className:"text-black",children:"Ecole Sup\xe9rieure des Sciences et Technologies du Design"}),(0,s.jsx)("option",{value:"ISSEPK",className:"text-black",children:"Institut Sup\xe9rieur du Sport et de l Education Physique de Ksar Sa\xefd "}),(0,s.jsx)("option",{value:"IPSI",className:"text-black",children:"Institut de Presse et des Sciences de l Information"}),(0,s.jsx)("option",{value:"FSB",className:"text-black",children:"Facult\xe9 des Sciences de Bizerte (FSB)"}),(0,s.jsx)("option",{value:"ISGB",className:"text-black",children:" Institut Sup\xe9rieur de Gestion de Bizerte (ISGB)"}),(0,s.jsx)("option",{value:"FSEGN",className:"text-black",children:"Facult\xe9 des Sciences Economiques et de Gestion de Nabeul (FSEGN)"}),(0,s.jsx)("option",{value:"FSJPST",className:"text-black",children:"Facult\xe9 des Sciences Juridiques, Politiques et Sociales de Tunis (FSJPST)"}),(0,s.jsx)("option",{value:"ISSAT",className:"text-black",children:"Institut Sup\xe9rieur des Sciences Appliqu\xe9es et de Technologie de Mateur (ISSAT)"}),(0,s.jsx)("option",{value:"EPT",className:"text-black",children:" Ecole Polytechnique de Tunisie (EPT)"}),(0,s.jsx)("option",{value:"ENICar",className:"text-black",children:"Ecole Nationale d'Ing\xe9nieurs de Carthage (ENICar)"}),(0,s.jsx)("option",{value:"ISES",className:"text-black",children:"Institut Sup\xe9rieur de l Education Sp\xe9cialis\xe9e "}),(0,s.jsx)("option",{value:"FLAH",className:"text-black",children:"Facult\xe9 des Lettres, des Arts et des Humanit\xe9s"}),(0,s.jsx)("option",{value:"ISDT",className:"text-black",children:"Institut Sup\xe9rieur de Documentation de Tunis"}),(0,s.jsx)("option",{value:"IBLV",className:"text-black",children:"Institut Bourguiba des Langues Vivantes (IBLV)"}),(0,s.jsx)("option",{value:"IPEIM",className:"text-black",children:"Institut Pr\xe9paratoire aux Eudes d'Ing\xe9nieurs El Manar (IPEIM)"}),(0,s.jsx)("option",{value:"ISSBAT",className:"text-black",children:"Institut Sup\xe9rieur des Sciences Biologiques Appliqu\xe9es de Tunis (ISSBAT)"}),(0,s.jsx)("option",{value:"ISSHT",className:"text-black",children:"Institut Sup\xe9rieur des Sciences Humaines de Tunis (ISSHT)"}),(0,s.jsx)("option",{value:"ISSIT",className:"text-black",children:"Institut Sup\xe9rieur des Sciences Infirmi\xe8res de Tunis (ISSIT)"}),(0,s.jsx)("option",{value:"ISTMT",className:"text-black",children:"Institut Sup\xe9rieur des Technologies M\xe9dicales de Tunis (ISTMT)"}),(0,s.jsx)("option",{value:"ENIT",className:"text-black",children:"Ecole Nationale d'Ing\xe9nieurs de Tunis (ENIT)"}),(0,s.jsx)("option",{value:"FSHST",className:"text-black",children:"FSHST"}),(0,s.jsx)("option",{value:"IPEIT",className:"text-black",children:"IPEIT"}),(0,s.jsx)("option",{value:"ISBAT",className:"text-black",children:"ISBAT"}),(0,s.jsx)("option",{value:"ISMT",className:"text-black",children:"ISMT"}),(0,s.jsx)("option",{value:"ISAD",className:"text-black",children:"ISAD"}),(0,s.jsx)("option",{value:"ISMPT",className:"text-black",children:"ISMPT"}),(0,s.jsx)("option",{value:"ISEAHT",className:"text-black",children:"ISEAHT"}),(0,s.jsx)("option",{value:"ISAJC",className:"text-black",children:"ISAJC"}),(0,s.jsx)("option",{value:"ENS",className:"text-black",children:"ENS"}),(0,s.jsx)("option",{value:"ISEAHZ",className:"text-black",children:"ISEAHZ"})]}),(0,s.jsxs)("select",{name:"recherche",value:e.recherche,onChange:x,required:!0,className:"bg-white/10 border-white/20 text-white/50 placeholder:text-white/50 h-12 w-full rounded-md",children:[(0,s.jsx)("option",{value:"",children:" \xa0 \xcates-vous \xe0 la recherche de :"}),(0,s.jsx)("option",{value:"stage",className:"text-black",children:"D'un stage"}),(0,s.jsx)("option",{value:"emploi",className:"text-black",children:"D'un emploi"}),(0,s.jsx)("option",{value:"apprentissage",className:"text-black",children:"D'un apprentissage"}),(0,s.jsx)("option",{value:"information",className:"text-black",children:"D'informations"})]})]}),["Entreprise","Startup","A/ONG","Autre"].includes(e.vous)&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("input",{name:"organisme",placeholder:" \xa0Votre organisme d'affiliation?",value:e.organisme,onChange:x,required:!0,className:"bg-white/10 border-white/20 text-white/50 placeholder:text-white/50 h-12 w-full rounded-md"}),(0,s.jsxs)("select",{name:"recherche",value:e.recherche,onChange:x,required:!0,className:"bg-white/10 border-white/20 text-white/50 placeholder:text-white/50 h-12 w-full rounded-md",children:[(0,s.jsx)("option",{value:"",children:" \xa0 \xcates-vous \xe0 la recherche de :"}),(0,s.jsx)("option",{value:"stager",className:"text-black",children:"De stagiaires"}),(0,s.jsx)("option",{value:"networking",className:"text-black",children:"De networking"}),(0,s.jsx)("option",{value:"partenaires",className:"text-black",children:"De partenaires"}),(0,s.jsx)("option",{value:"information",className:"text-black",children:"D'informations"})]})]}),(0,s.jsxs)("select",{name:"source",value:e.source,onChange:x,required:!0,className:"bg-white/10 border-white/20 text-white/50 placeholder:text-white/50 h-12 w-full rounded-md",children:[(0,s.jsx)("option",{value:"",className:"text-black",children:" \xa0 O\xf9 avez-vous d\xe9couvert ESENet"}),(0,s.jsx)("option",{value:"officialPage",className:"text-black",children:"Via page officielle"}),(0,s.jsx)("option",{value:"website",className:"text-black",children:"Via site web"}),(0,s.jsx)("option",{value:"email",className:"text-black",children:"Par e-mail"}),(0,s.jsx)("option",{value:"radio",className:"text-black",children:"Via radio"}),(0,s.jsx)("option",{value:"socialMedia",className:"text-black",children:"Sur les r\xe9seaux sociaux (Facebook, Instagram, LinkedIn)"}),(0,s.jsx)("option",{value:"friend",className:"text-black",children:"Par un(e) ami(e) ou un(e) coll\xe8gue"})]}),(0,s.jsxs)("button",{type:"submit",className:" w-full bg-white text-[#001f3f] hover:bg-blue-50 h-12 text-lg font-semibold rounded-lg  flex items-center justify-center gap-2 ",children:["Submit ",(0,s.jsx)(o.Z,{className:"w-5 h-5"})]})]})]})}),m&&(0,s.jsx)("div",{className:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50",children:(0,s.jsx)("div",{className:" p-6 rounded shadow-lg text-center",children:(0,s.jsx)("p",{className:"text-xl font-bold text-white ",children:"Submitting..."})})}),c&&(0,s.jsx)(i.E.div,{initial:{opacity:0,x:100},animate:{opacity:1,x:0},exit:{opacity:0,x:100},transition:{duration:.5},className:"fixed bottom-8 right-8 bg-black text-white p-4 rounded-lg shadow-lg z-50",children:(0,s.jsx)("p",{children:a})})]})}function d(){return(0,s.jsx)("div",{className:"absolute inset-0 opacity-10",children:[...Array(20)].map((e,t)=>(0,s.jsx)(i.E.div,{className:"absolute bg-blue-500",animate:{x:[0,100*Math.random(),0],y:[0,100*Math.random(),0]},transition:{duration:20,repeat:1/0,delay:.2*t},style:{width:300*Math.random()+50,height:2,left:100*Math.random()+"%",top:100*Math.random()+"%",transform:"rotate("+360*Math.random()+"deg)"}},t))})}},5042:function(e,t,a){"use strict";var s=a(7437),l=a(2265),i=a(714),n=a(3145);let r=e=>{let{value:t,label:a}=e;return(0,s.jsxs)("div",{className:"flex flex-col items-center justify-center bg-blue-500/10 rounded-lg p-3 m-2 min-w-[100px] border border-blue-500/20",children:[(0,s.jsx)("span",{className:"text-3xl font-bold text-white mb-1",children:t.toString().padStart(2,"0")}),(0,s.jsx)("span",{className:"text-xs uppercase tracking-wider text-blue-200",children:a})]})},o=()=>{let e=()=>{let e=+new Date("2024-11-27")-+new Date;return e>0?{days:Math.floor(e/864e5),hours:Math.floor(e/36e5%24),minutes:Math.floor(e/1e3/60%60),seconds:Math.floor(e/1e3%60)}:null},[t,a]=(0,l.useState)(null);return((0,l.useEffect)(()=>{let t=localStorage.getItem("timeLeft");if(t)a(JSON.parse(t));else{let t=e();t&&(a(t),localStorage.setItem("timeLeft",JSON.stringify(t)))}let s=setInterval(()=>{let t=e();t&&(a(t),localStorage.setItem("timeLeft",JSON.stringify(t)))},1100);return()=>clearInterval(s)},[]),t)?(0,s.jsxs)("div",{className:"mt-8 mb-6",children:[(0,s.jsx)("div",{className:"text-center mb-4",children:(0,s.jsx)("span",{className:"text-blue-200 text-sm uppercase tracking-wider",children:"L'\xe9v\xe9nement commence dans"})}),(0,s.jsxs)("div",{className:"flex flex-wrap justify-center gap-2",children:[(0,s.jsx)(r,{value:t.days,label:"jours"}),(0,s.jsx)(r,{value:t.hours,label:"heures"}),(0,s.jsx)(r,{value:t.minutes,label:"minutes"}),(0,s.jsx)(r,{value:t.seconds,label:"secondes"})]})]}):(0,s.jsx)("div",{className:"text-white text-xl font-bold bg-blue-500/10 backdrop-blur-sm rounded-lg p-4 mt-6",children:"L'\xe9v\xe9nement a commenc\xe9 !"})};t.default=e=>{let{className:t}=e,[a,r]=(0,l.useState)(0),c=["/gallery/501.webp","/gallery/10.webp","/gallery/9.webp"];(0,l.useEffect)(()=>{let e=setInterval(()=>{r(e=>(e+1)%c.length)},5e3);return()=>clearInterval(e)},[c.length]);let d=(0,l.useCallback)(()=>{window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})},[]);return(0,s.jsxs)("div",{className:"h-[40rem] backdrop-blur-sm bg-black relative ".concat(t||""),children:[(0,s.jsx)("div",{className:"h-full w-full overflow-hidden relative",children:c.map((e,t)=>(0,s.jsx)(i.E.div,{className:"absolute w-full h-full",initial:{opacity:0},animate:{opacity:t===a?1:0},transition:{duration:.8},children:(0,s.jsx)(n.default,{src:e,alt:"Slide ",layout:"fill",objectFit:"cover",className:"transition-opacity duration-700 ".concat(t===a?"opacity-100":"opacity-0")})},t))}),(0,s.jsxs)(i.E.div,{initial:{opacity:0,y:-80},animate:{opacity:1,y:0},transition:{duration:.6},className:"z-50 flex flex-col justify-center items-center px-4 absolute inset-0",children:[(0,s.jsxs)("p",{className:"font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4",children:[(0,s.jsx)("span",{className:"text-transparent bg-gradient-to-b bg-clip-text from-blue-900 to-blue-500",children:"ESENet Job Fair"}),(0,s.jsx)("br",{}),"Odyss\xe9e Business 4.0 ",(0,s.jsx)("br",{}),"Votre r\xe9seau, votre avenir"]}),(0,s.jsx)(o,{}),(0,s.jsxs)("button",{onClick:d,className:" px-4 py-2 backdrop-blur-sm border bg-blue-300/10 border-blue-500/20 text-white mx-auto text-center  rounded-full relative mt-4 hover:bg-blue-400/20 transition-all duration-300 hover:scale-105 ",children:[(0,s.jsx)("span",{className:"text-base",children:"Inscrivez-vous maintenant →"}),(0,s.jsx)("div",{className:"absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-blue-500 to-transparent"})]})]})]})}},3344:function(e,t,a){"use strict";a.d(t,{Speaker:function(){return r}});var s=a(7437),l=a(3145),i=a(2265);let n=[{quote:"The attention to detail and innovative features have completely transformed our workflow.",name:"Ameur Cherif",designation:"Pr\xe9sident de l'Universit\xe9 de la Manouba",src:"/speqkers/UMA.webp"},{quote:"Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",name:"Sarah Lamine",designation:"CEO Convergen",src:"/speqkers/sara.webp"},{quote:"This solution has significantly improved our team's productivity.",name:"Sofiene Hemissi",designation:"Ministre \n des Technologies de la Communication",src:"/speqkers/elwzir.webp"},{quote:"The scalability and performance have been game-changing for our organization.",name:"TakiEddine Ben Masoud",designation:"CEO de Takiacademy",src:"/speqkers/takieddine.webp"},{quote:"Highly recommend to any growing business.",name:"Mahjoub Langar",designation:"PDG Poulina Group Holding",src:"/speqkers/Mahjoub.webp"},{quote:"The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",name:"Sahar Mechri",designation:"Dir. Ex\xe9cutive Magazine Managers",src:"/speqkers/Sarahh.webp"},{quote:"The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",name:"Houda Bakir",designation:"Historiar- ODC",src:"/speqkers/mra.webp"},{quote:"The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",name:"Youssef Boufaied",designation:"Coordinateur du projet Maken TIC DCE",src:"/speqkers/sayed.webp"},{quote:"The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",name:"Abdlkerim REZGUI",designation:"CEO BI4YOU",src:"/speqkers/Abdelkerim.webp"},{quote:"The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",name:"Khaled Dridi",designation:"Directeur d'investissement Startup UGFS",src:"/speqkers/khaled.webp"},{quote:"The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",name:"Bassem Thabti",designation:"CEO VirtualDev",src:"/speqkers/VirtualDev.webp"},{quote:"The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",name:"Selma Zouaoui",designation:"Directrice G\xe9n\xe9rale STB SICAR",src:"/speqkers/salma.webp"}];function r(){let e=(0,i.useRef)(null);return(0,i.useEffect)(()=>{let t=e.current,a=null;if(t){let e=()=>{t.scrollLeft+t.offsetWidth>=t.scrollWidth?t.scrollLeft=0:t.scrollLeft+=1,a=requestAnimationFrame(e)};return a=requestAnimationFrame(e),()=>{a&&cancelAnimationFrame(a)}}},[]),(0,s.jsxs)("div",{className:"flex flex-col items-center bg-slate-50 py-14",children:[(0,s.jsx)("h1",{className:"font-bold text-4xl lg:text-5xl",children:"Intervenants de l'\xe9v\xe9nement"}),(0,s.jsx)("div",{className:"overflow-hidden relative w-full mt-8",ref:e,style:{whiteSpace:"nowrap"},children:(0,s.jsx)("div",{className:"flex w-max gap-6",children:n.map((e,t)=>{let{src:a,name:i,designation:n}=e;return(0,s.jsxs)("div",{className:"flex-shrink-0 min-w-[200px] max-w-[250px] flex flex-col items-center gap-4",children:[(0,s.jsx)("div",{className:"relative w-32 h-32 overflow-hidden rounded-full shadow-lg",children:(0,s.jsx)(l.default,{src:a,alt:i,fill:!0,style:{objectFit:"cover"},priority:!1,loading:"lazy"})}),(0,s.jsxs)("div",{className:"text-center",children:[(0,s.jsx)("p",{className:"text-lg font-semibold",children:i}),(0,s.jsx)("p",{className:"text-sm text-gray-600 whitespace-pre-line",children:n})]})]},t)})})})]})}},640:function(e,t,a){"use strict";a.d(t,{Boxes:function(){return r}});var s=a(7437),l=a(2265),i=a(714),n=a(4508);let r=l.memo(e=>{let{className:t,...a}=e,l=Array(150).fill(1),r=Array(100).fill(1),o=["--sky-700","--pink-700","--green-700","--yellow-700","--red-700","--purple-700","--blue-900","--indigo-700","--violet-700"],c=()=>o[Math.floor(Math.random()*o.length)];return(0,s.jsx)("div",{style:{transform:"translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)"},className:(0,n.cn)("absolute left-1/4 p-4 -top-1/4 flex  -translate-x-1/2 -translate-y-1/2 w-full h-full z-0 ",t),...a,children:l.map((e,t)=>(0,s.jsx)(i.E.div,{className:"w-16 h-8  border-l  border-slate-700 relative",children:r.map((e,a)=>(0,s.jsx)(i.E.div,{whileHover:{backgroundColor:"var(".concat(c(),")"),transition:{duration:0}},animate:{transition:{duration:2}},className:"w-16 h-8  border-r border-t border-slate-700 relative",children:a%2==0&&t%2==0?(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"absolute h-6 w-10 -top-[14px] -left-[22px] text-slate-700 stroke-[1px] pointer-events-none",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6v12m6-6H6"})}):null},"col"+a))},"row"+t))})})},7231:function(e,t,a){"use strict";a.d(t,{Timeline:function(){return o}});var s=a(7437),l=a(7066),i=a(4317),n=a(714),r=a(2265);let o=e=>{let{data:t}=e,a=(0,r.useRef)(null),o=(0,r.useRef)(null),[c,d]=(0,r.useState)(0);(0,r.useEffect)(()=>{a.current&&d(a.current.getBoundingClientRect().height)},[a]);let{scrollYProgress:u}=(0,l.v)({target:o,offset:["start 0%","end 100%"]}),m=(0,i.H)(u,[0,1],[0,c]),h=(0,i.H)(u,[0,.1],[0,1]);return(0,s.jsx)("div",{className:"w-full  text-white font-sans md:px-10",ref:o,children:(0,s.jsxs)("div",{ref:a,className:"relative max-w-7xl mx-auto pb-20",children:[t.map((e,t)=>(0,s.jsxs)("div",{className:"flex justify-start pt-10 md:pt-40 md:gap-10",children:[(0,s.jsxs)("div",{className:"sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full",children:[(0,s.jsx)("div",{className:"h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-[#1E2A47] flex items-center justify-center",children:(0,s.jsx)("div",{className:"h-4 w-4 rounded-full bg-[#A0AEC0] dark:bg-[#CBD5E0] border border-[#E2E8F0] dark:border-[#4A5568] p-2"})}),(0,s.jsx)("h3",{className:"hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-[#E2E8F0] dark:text-[#E2E8F0] ",children:e.title})]}),(0,s.jsxs)("div",{className:"relative pl-20 pr-4 md:pl-4 w-full",children:[(0,s.jsx)("h3",{className:"md:hidden block text-2xl mb-4 text-left font-bold text-[#E2E8F0] dark:text-[#E2E8F0]",children:e.title}),e.content]})]},t)),(0,s.jsx)("div",{style:{height:c+"px"},className:"absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-[#A0AEC0] dark:via-[#4A5568] to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]",children:(0,s.jsx)(n.E.div,{style:{height:m,opacity:h},className:"absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-[#6B46C1] via-[#4C51BF] to-transparent from-[0%] via-[10%] rounded-full"})})]})})}},4508:function(e,t,a){"use strict";a.d(t,{cn:function(){return i}});var s=a(1994),l=a(3335);function i(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,l.m6)((0,s.W)(t))}}},function(e){e.O(0,[921,971,117,744],function(){return e(e.s=9493)}),_N_E=e.O()}]);