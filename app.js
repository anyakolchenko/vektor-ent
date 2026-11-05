let DATA=null, state={screen:"home",subject:null,mode:null,questions:[],index:0,answers:{},started:0,limitSec:0,timer:null,score:null};
const app=document.getElementById("app");
const S=()=>DATA.subjects;

async function boot(){
  DATA=await fetch("./data.json").then(r=>r.json());
  if("serviceWorker" in navigator) navigator.serviceWorker.register("./sw.js").catch(()=>{});
  showHome();
}
function esc(s){return String(s??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#039;"}[m]))}
function shuffle(a){a=[...a];for(let i=a.length-1;i>0;i--){let j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
function pick(arr,n){return shuffle(arr).slice(0,n)}
function showHome(){
  stopTimer();state={...state,screen:"home",subject:null,mode:null,questions:[],index:0,answers:{},score:null};
  app.innerHTML=`<div class="container"><section class="hero"><div class="pill">ЕНТ 2026 • 5 предметов</div><h1>Готовься как на настоящем ЕНТ</h1><p class="muted">Большая база по обязательным предметам и профилям «Биология + Химия». Внутри — одиночные, контекстные, соответствия и задания с несколькими ответами.</p><div class="actions"><button class="primary" onclick="startExam()">🚀 Пробное тестирование ЕНТ</button><button class="secondary" onclick="showStats()">📊 Статистика</button></div></section>
  <h2 class="section-title">Предметы</h2><div class="grid">${Object.entries(S()).map(([k,v])=>`<div class="card subject"><div><div class="icon">${v.icon}</div><h3>${v.name}</h3><div class="count">${v.count}+ заданий в базе</div></div><button class="secondary" onclick="startSubject('${k}')">Открыть предмет →</button></div>`).join("")}</div>
  <div class="notice">ℹ️ В базе сохранены задания из предоставленного тобой файла как отдельный источник. Остальные задания помечены как авторские тренировочные.</div></div>`;
}
function startSubject(subject){
  const bank=DATA.banks[subject];
  state={...state,screen:"quiz",subject,mode:"practice",questions:pick(bank,20),index:0,answers:{},started:Date.now(),limitSec:0,score:null};
  renderQuiz();
}
function startExam(){
  const take=(s,n,types=null)=>{
    let b=DATA.banks[s];
    if(types) return pick(b.filter(x=>types.includes(x.type)),n);
    return pick(b,n);
  };
  const profTypes=["single","context","matching","multi"];
  let q=[
    ...take("mathlit",10,["single"]),
    ...take("reading",10,["single"]),
    ...take("history",20,["single"]),
    ...take("biology",25,["single"]),...take("biology",5,["context"]),...take("biology",5,["matching"]),...take("biology",5,["multi"]),
    ...take("chemistry",25,["single"]),...take("chemistry",5,["context"]),...take("chemistry",5,["matching"]),...take("chemistry",5,["multi"])
  ];
  state={...state,screen:"quiz",subject:"exam",mode:"exam",questions:q,index:0,answers:{},started:Date.now(),limitSec:240*60,score:null};
  startTimer();renderQuiz();
}
function startTimer(){
  stopTimer();state.timer=setInterval(()=>{if(state.limitSec<=0){finishQuiz();return}state.limitSec--;updateTimer()},1000)
}
function stopTimer(){if(state.timer){clearInterval(state.timer);state.timer=null}}
function updateTimer(){const e=document.getElementById("timer");if(e){let m=Math.floor(state.limitSec/60),s=state.limitSec%60;e.textContent=`${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}`}}
function typeLabel(q){return q.type==="single"?"Один правильный ответ":q.type==="multi"?"Один или несколько правильных ответов":q.type==="matching"?"Установление соответствия":"Контекстное задание"}
function renderQuiz(){
  const q=state.questions[state.index]; if(!q)return finishQuiz();
  const chosen=state.answers[q.id]||[];
  const exam=state.mode==="exam";
  app.innerHTML=`<div class="container"><div class="quiz-head"><div><button class="ghost" onclick="${exam?'confirmExit()':'showHome()'}">← Назад</button></div><div>${exam?`<span class="pill">ПРОБНОЕ ЕНТ</span> <span class="timer" id="timer"></span>`:`<span class="pill">${esc(S()[state.subject].name)}</span>`}</div></div>
  <div class="progress"><div style="width:${((state.index+1)/state.questions.length)*100}%"></div></div>
  <div class="card qcard ${q.source?.startsWith('Реальный')?'real':''}"><div class="type">${state.index+1} / ${state.questions.length} • ${typeLabel(q)}${q.source?.startsWith('Реальный')?' • реальный пробник':''}</div>${q.context?`<div class="notice">${esc(q.context)}</div>`:""}<div class="qtext">${esc(q.question)}</div>
  <div>${q.options.map(o=>`<button class="option ${chosen.includes(o.id)?'selected':''}" onclick="choose('${q.id}','${o.id}')"><span class="letter">${o.id}</span><span>${esc(o.text)}</span></button>`).join("")}</div>
  <div class="toolbar"><button class="secondary" onclick="prevQ()" ${state.index===0?'disabled':''}>← Предыдущий</button><span class="muted">${exam?'':'20 вопросов в текущей тренировке'}</span><button class="primary" onclick="${state.index===state.questions.length-1?'finishQuiz()':'nextQ()'}">${state.index===state.questions.length-1?'Завершить':'Далее →'}</button></div></div></div>`;
  if(exam)updateTimer();
}
function choose(qid,oid){
  const q=state.questions[state.index];let cur=state.answers[qid]||[];
  if(q.type==="multi"){cur=cur.includes(oid)?cur.filter(x=>x!==oid):[...cur,oid];}
  else cur=[oid];
  state.answers[qid]=cur;renderQuiz();
}
function nextQ(){if(state.index<state.questions.length-1){state.index++;renderQuiz()}}
function prevQ(){if(state.index>0){state.index--;renderQuiz()}}
function confirmExit(){if(confirm("Выйти из пробного тестирования? Текущий результат не будет сохранён."))showHome()}
function calc(){
  let score=0,max=0,by={};
  for(const q of state.questions){
    const a=state.answers[q.id]||[], correct=q.answer||[];
    let pts=0, cap=(q.type==="matching"||q.type==="multi")?2:1;
    max+=cap;
    if(q.type==="multi"){
      if(a.length && a.every(x=>correct.includes(x)) && correct.every(x=>a.includes(x)))pts=2;
      else if(a.length && a.every(x=>correct.includes(x)))pts=1;
    }else if(a.length===correct.length && a.every(x=>correct.includes(x)))pts=cap;
    score+=pts;by[q.subject]=(by[q.subject]||0)+pts;
  }
  return {score,max,by};
}
function finishQuiz(){
  stopTimer();let r=calc();state.score=r;
  if(state.mode==="exam"){let h=JSON.parse(localStorage.getItem("vector_exam_history")||"[]");h.unshift({date:new Date().toISOString(),score:r.score,max:r.max,by:r.by});localStorage.setItem("vector_exam_history",JSON.stringify(h.slice(0,30)))}
  renderResult();
}
function renderResult(){
  const r=state.score;
  app.innerHTML=`<div class="container"><section class="hero"><div class="pill">${state.mode==="exam"?"ПРОБНОЕ ЕНТ":"ТРЕНИРОВКА"}</div><h1>${r.score} / ${r.max}</h1><p class="muted">${state.mode==="exam"?"Тест завершён. Состав: 120 заданий, 240 минут.":"Тренировочная серия завершена."}</p></section>
  <div class="stats"><div class="card"><div class="muted">Баллы</div><div class="big">${r.score}</div></div><div class="card"><div class="muted">Максимум</div><div class="big">${r.max}</div></div><div class="card"><div class="muted">Правильность</div><div class="big">${Math.round(r.score/r.max*100)}%</div></div></div>
  <h2 class="section-title">По предметам</h2><div class="grid">${Object.entries(r.by).map(([k,v])=>`<div class="card"><b>${S()[k]?.name||k}</b><div class="big">${v}</div></div>`).join("")}</div>
  <div class="actions"><button class="primary" onclick="${state.mode==="exam"?'startExam()':`startSubject('${state.subject}')`}">🔄 Пройти ещё раз</button><button class="secondary" onclick="showHome()">На главную</button></div></div>`;
}
function showStats(){
  stopTimer();let h=JSON.parse(localStorage.getItem("vector_exam_history")||"[]");
  app.innerHTML=`<div class="container"><button class="ghost" onclick="showHome()">← На главную</button><section class="hero"><h1>Статистика</h1><p class="muted">История последних пробных ЕНТ хранится на этом устройстве.</p></section>
  ${h.length?`<div class="card"><table class="table"><tr><th>Дата</th><th>Баллы</th></tr>${h.map(x=>`<tr><td>${new Date(x.date).toLocaleString('ru-RU')}</td><td><b>${x.score}/${x.max}</b></td></tr>`).join("")}</table></div><div class="actions"><button class="danger" onclick="localStorage.removeItem('vector_exam_history');showStats()">Очистить историю</button></div>`:`<div class="notice">Пока нет завершённых пробных тестов.</div>`}</div>`;
}
boot();
