'use strict';
/* =====================================================================
   0. CẤU HÌNH NỘI DUNG — sửa chữ / đổi ảnh tại các hằng số này
   ===================================================================== */
// 11 ảnh minh họa: giữ nguyên tên tệp, đặt cùng thư mục với index.html.
// Muốn đổi thứ tự / chú thích: sửa mảng này. "group" dùng cho liên kết ứng dụng.
const IMAGES = [
  {file:'1795358819075_9147406511109628068_9147406511109628068_bb20b4212c05d68844dcfe8c749617ef.jpg', title:'Vị trí tia hồng ngoại trong phổ ánh sáng (tử ngoại – nhìn thấy – hồng ngoại)'},
  {file:'1795358819078_9147406511109628068_9147406511109628068_4066c2fc320ec08e402e9d9e03ea7c92.jpg', title:'Các dải hồng ngoại: NIR, SWIR, MWIR, LWIR, FIR'},
  {file:'1795358819081_9147406511109628068_9147406511109628068_0c2415a4ff00c03ed009cef50001e683.jpg', title:'Chùm tia truyền thẳng — nền tảng của truyền dẫn dữ liệu bằng ánh sáng'},
  {file:'1795358819083_9147406511109628068_9147406511109628068_27c563d20ae0e96ac1f3e8dc03445e63.jpg', title:'Camera hồng ngoại quan sát ban đêm'},
  {file:'1795358819085_9147406511109628068_9147406511109628068_0629f48a491125ab72a5e567862eb69b.jpg', title:'Đèn hồng ngoại trị liệu — giảm đau, làm ấm vùng cổ vai'},
  {file:'1795358819087_9147406511109628068_9147406511109628068_681fd45ea92add03395f4d1432e415f7.jpg', title:'Điều khiển từ xa — LED hồng ngoại phát xung tín hiệu'},
  {file:'1795358819089_9147406511109628068_9147406511109628068_7e63093e77d91d5974ec53cc213dea53.jpg', title:'Camera nhiệt phát hiện người trong bóng tối'},
  {file:'1795358819091_9147406511109628068_9147406511109628068_1b9a7b4c20ca23609956c50db1aba7de.jpg', title:'Vật lý trị liệu & phục hồi — đèn hồng ngoại chiếu chi dưới'},
  {file:'1795358819093_9147406511109628068_9147406511109628068_c5e0948f2bc554c554fc440f8532c3ec.jpg', title:'Bếp hồng ngoại — mặt bếp tỏa nhiệt để nấu chín thức ăn'},
  {file:'1795358819095_9147406511109628068_9147406511109628068_162f03ade6b1fc12b86cf7f088104abd.jpg', title:'Ảnh nhiệt — động vật nổi bật trong đêm tối'},
  {file:'1795358819097_9147406511109628068_9147406511109628068_0b7c4b3903ed081fdbb9aae3717a14d1.jpg', title:'Camera đo thân nhiệt hàng loạt'},
  // --- 8 ảnh bổ sung (chỉ số 11–18) ---
  {file:'1795518078954_8325914631657788637_g9164734672424975481_7cac975ad6c958af5acab72ce4f3113d.jpg', title:'Camera nhiệt giám sát lò quay công nghiệp — vật nóng phát hồng ngoại mạnh (tác dụng nhiệt)'},
  {file:'1795518078978_8325914631657788637_g9164734672424975481_bd17051ea34035d956bf0b6a2fc862fc.jpg', title:'Lò nướng hồng ngoại — thanh đốt nóng đỏ bức xạ nhiệt làm chín thức ăn'},
  {file:'1795518079002_8325914631657788637_g9164734672424975481_470c3eb7c901638e41fbe24da566ca71.jpg', title:'Điều khiển từ xa hướng về Tivi — truyền lệnh bằng tia hồng ngoại'},
  {file:'1795518079050_8325914631657788637_g9164734672424975481_ca6da0f524182a65f6f5f83003c39b00.jpg', title:'Sợi cáp quang — truyền dữ liệu tốc độ cao bằng xung ánh sáng (chủ yếu hồng ngoại gần)'},
  {file:'1795518079075_8325914631657788637_g9164734672424975481_500eb6d5150a6c6ca5273ff20b4a3e73.jpg', title:'LED hồng ngoại ở đầu điều khiển phát xung tín hiệu mã hóa'},
  {file:'1795518079099_8325914631657788637_g9164734672424975481_4ebe1f17d4e75ffe1d500a425d0d1e3d.jpg', title:'Bếp hồng ngoại — mặt bếp bức xạ nhiệt trực tiếp lên nồi'},
  {file:'1795518079122_8325914631657788637_g9164734672424975481_14b459fe8cc0c74e700a3df5f1d4055b.jpg', title:'Bếp nướng hồng ngoại — nhiệt bức xạ làm chín thức ăn'},
  {file:'1795518078875_8325914631657788637_g9164734672424975481_c8dbe212d442c13d2444ca6baf89c55f.jpg', title:'Camera nhiệt (FLIR) hiển thị ảnh nhiệt từ bức xạ hồng ngoại'}
];
// 5 ứng dụng trên Slide 5: imgs = chỉ số ảnh (0–10) sẽ mở khi bấm; cx,cy = tâm thiết bị trong khung cảnh 800×500
const APPS = [
  {id:'remote', n:'01', title:'Điều khiển từ xa', desc:'LED hồng ngoại phát chuỗi xung mã hóa tới Tivi, điều hòa.', imgs:[5,13,15], cx:150, cy:230},
  {id:'stove',  n:'02', title:'Bếp điện & lò nướng', desc:'Dây điện trở/bóng hồng ngoại tỏa nhiệt mạnh để nấu chín thức ăn.', imgs:[8,16,12,17,11], cx:545, cy:410},
  {id:'comms',  n:'03', title:'Truyền thông & cáp quang', desc:'Truyền dẫn dữ liệu tốc độ cao bằng xung hồng ngoại.', imgs:[2,14,0,1], cx:450, cy:115},
  {id:'therapy',n:'04', title:'Vật lý trị liệu & phục hồi', desc:'Đèn hồng ngoại giảm đau cơ khớp, tăng lưu thông máu, làm ấm vùng điều trị.', imgs:[4,7], cx:730, cy:170},
  {id:'night',  n:'05', title:'Quan sát ban đêm', desc:'Camera hồng ngoại, kính nhìn đêm quan sát trong bóng tối hoặc sương mù.', imgs:[3,6,9,10,18], cx:340, cy:330}
];
// 5 câu hỏi trắc nghiệm (a = chỉ số đáp án đúng, bắt đầu từ 0)
const QUIZ = [
  {q:'Bước sóng của tia hồng ngoại nằm trong khoảng nào?', o:['380 nm – 760 nm','760 nm – 1 mm','1 mm – 1 m','10 nm – 400 nm'], a:1,
   e:'Hồng ngoại có λ từ 760 nm (0,76 µm) đến 1 mm (1.000 µm): dài hơn ánh sáng đỏ, ngắn hơn sóng vi ba.'},
  {q:'Tần số của tia hồng ngoại thường nằm trong khoảng nào?', o:['30 kHz – 300 MHz','1 MHz – 1 GHz','300 GHz – 430 THz','1 PHz – 30 PHz'], a:2,
   e:'Từ f = c/λ: λ ≈ 1 mm ứng với ≈ 300 GHz, λ ≈ 700 nm ứng với ≈ 430 THz. Vì vậy dải hồng ngoại là 300 GHz – 430 THz.'},
  {q:'Vật ở nhiệt độ nào thì KHÔNG phát ra tia hồng ngoại?', o:['0 °C','−273,15 °C (0 K)','37 °C','Vật nào cũng luôn phát'], a:1,
   e:'Mọi vật có nhiệt độ lớn hơn độ không tuyệt đối (−273,15 °C = 0 K) đều phát bức xạ hồng ngoại; chỉ tại 0 K mới không phát.'},
  {q:'Khi chiếu tia hồng ngoại vào một chất bán dẫn (hiện tượng quang điện trong) thì điều gì xảy ra?', o:['Điện trở tăng mạnh','Electron bị bứt hẳn ra khỏi chất bán dẫn','Giải phóng electron dẫn, điện trở giảm','Chất bán dẫn trở thành chất cách điện'], a:2,
   e:'Photon giải phóng electron liên kết thành electron dẫn chuyển động tự do trong khối bán dẫn → điện trở giảm.'},
  {q:'Tia hồng ngoại xuyên qua môi trường nào tốt, môi trường nào bị hấp thụ mạnh?', o:['Xuyên sương mù mỏng, khói bụi; bị hơi nước và CO₂ hấp thụ mạnh','Xuyên hơi nước dày; bị sương mù mỏng hấp thụ','Xuyên khí CO₂ đậm đặc; bị khói bụi hấp thụ','Không bị môi trường nào hấp thụ'], a:0,
   e:'Hồng ngoại xuyên được sương mù mỏng và khói bụi (nhờ đó camera nhìn đêm hoạt động), nhưng bị hơi nước và khí CO₂ hấp thụ mạnh.'}
];

/* =====================================================================
   1. TIỆN ÍCH CHUNG
   ===================================================================== */
const $  = (s,r=document)=>r.querySelector(s);
const $$ = (s,r=document)=>[...r.querySelectorAll(s)];
const lerp=(a,b,t)=>a+(b-a)*t, clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
const rnd=(a,b)=>a+Math.random()*(b-a);
const vn=(x,d=1)=>x.toFixed(d).replace('.',',');                 // số kiểu Việt Nam: 0,76
const STOPS=[[46,16,101],[220,38,38],[249,115,22],[250,204,21]];  // tím → đỏ → cam → vàng
function heat(v,a=1){                                              // v∈[0,1] → màu nhiệt ảnh
  v=clamp(v,0,1)*3; const i=Math.min(2,v|0), f=v-i, A=STOPS[i], B=STOPS[i+1];
  return `rgba(${(A[0]+(B[0]-A[0])*f)|0},${(A[1]+(B[1]-A[1])*f)|0},${(A[2]+(B[2]-A[2])*f)|0},${a})`;
}
// Canvas tự co giãn theo khung cha, hỗ trợ màn hình retina (giới hạn dpr=2 để giữ 60fps)
function mkCanvas(cv){
  const o={cv,ctx:cv.getContext('2d'),w:0,h:0,d:1};
  const fit=()=>{const r=cv.parentElement.getBoundingClientRect(); o.d=Math.min(window.devicePixelRatio||1,2);
    o.w=r.width; o.h=r.height; cv.width=Math.max(1,r.width*o.d); cv.height=Math.max(1,r.height*o.d);};
  new ResizeObserver(fit).observe(cv.parentElement); fit(); return o;
}
// Vòng lặp hoạt họa: chỉ chạy mô-đun của slide đang hiển thị
const anims=[], visible=new Set([0]);
function addAnim(slide,o,fn){anims.push({slide,o,fn});}
let last=performance.now();
function loop(now){
  const dt=Math.min(.05,(now-last)/1000); last=now;
  for(const a of anims){ if(!visible.has(a.slide)||a.o.w<2) continue;
    a.o.ctx.setTransform(a.o.d,0,0,a.o.d,0,0); a.fn(a.o,now,dt); }
  requestAnimationFrame(loop);
}

/* =====================================================================
   2. ĐIỀU HƯỚNG SLIDE, TOÀN MÀN HÌNH
   ===================================================================== */
const deck=$('#deck'), slides=$$('.slide'); let cur=0;
const dotsEl=$('#dots');
slides.forEach((s,i)=>{const b=document.createElement('button'); b.title=`${i+1}. ${s.dataset.title}`;
  b.onclick=()=>go(i); dotsEl.appendChild(b);});
function go(i){ i=clamp(i,0,slides.length-1); slides[i].scrollIntoView({behavior:'smooth'}); }
const io=new IntersectionObserver(es=>{
  es.forEach(e=>{const i=slides.indexOf(e.target);
    if(e.isIntersecting) visible.add(i); else visible.delete(i);
    if(e.intersectionRatio>.55){cur=i; $('#counter').textContent=`${String(i+1).padStart(2,'0')} / ${String(slides.length).padStart(2,'0')}`;
      $$('button',dotsEl).forEach((b,k)=>b.classList.toggle('on',k===i));}});
},{root:deck,threshold:[0,.05,.55]});
slides.forEach(s=>io.observe(s));
document.addEventListener('keydown',e=>{
  if($('#modal').classList.contains('open')) return;               // modal tự xử lý phím
  const t=e.target, isRange=t.matches&&t.matches('input[type=range]'), isBtn=t.matches&&t.matches('button');
  if(e.key==='f'||e.key==='F'){toggleFs();return;}
  if(isRange&&(e.key==='ArrowLeft'||e.key==='ArrowRight')) return;  // cho phép chỉnh thanh trượt bằng phím
  if(['ArrowDown','ArrowRight','PageDown'].includes(e.key)||(e.key===' '&&!isBtn)){e.preventDefault();go(cur+1);}
  else if(['ArrowUp','ArrowLeft','PageUp'].includes(e.key)){e.preventDefault();go(cur-1);}
  else if(e.key==='Home'){go(0);} else if(e.key==='End'){go(slides.length-1);}
});
$('#btnStart').onclick=()=>go(1);
function toggleFs(){ if(!document.fullscreenElement) document.documentElement.requestFullscreen?.(); else document.exitFullscreen?.(); }
$('#btnFs').onclick=toggleFs;
document.addEventListener('fullscreenchange',()=>$('#btnFs').textContent=document.fullscreenElement?'⛶ Thoát toàn màn hình':'⛶ Toàn màn hình');

/* =====================================================================
   3. QUẢN LÝ ẢNH (tự tải theo tên tệp; dự phòng: nạp thủ công)
   ===================================================================== */
const imgURL=IMAGES.map(()=>null);
function updateImgUI(){
  const n=imgURL.filter(Boolean).length; $('#imgCount').textContent=`(${n}/${IMAGES.length})`;
  $('#btnLoad').classList.toggle('warn',n<IMAGES.length); if(modalOpen) renderModal();
}
IMAGES.forEach((im,i)=>{const t=new Image(); t.onload=()=>{imgURL[i]=im.file;updateImgUI();}; t.onerror=()=>updateImgUI(); t.src=im.file;});
const hashOf=n=>(n.replace(/\.[^.]+$/,'').split('_').pop()||n).toLowerCase();
$('#btnLoad').onclick=()=>$('#fileInput').click();
$('#mLoad').onclick=()=>$('#fileInput').click();
$('#fileInput').onchange=e=>{
  const files=[...e.target.files].sort((a,b)=>a.name.localeCompare(b.name)); const left=[];
  files.forEach(f=>{const i=IMAGES.findIndex(im=>hashOf(im.file)===hashOf(f.name)); // khớp theo mã băm cuối tên tệp
    if(i>=0) imgURL[i]=URL.createObjectURL(f); else left.push(f);});
  const free=imgURL.map((u,i)=>u?-1:i).filter(i=>i>=0);               // tệp lạ tên: gán lần lượt vào ô còn trống
  left.forEach((f,k)=>{ if(free[k]!==undefined) imgURL[free[k]]=URL.createObjectURL(f); });
  e.target.value=''; updateImgUI();
};

/* ---- Modal trình chiếu ảnh ---- */
let modalOpen=false, mIdx=0;
function openModal(i,title){mIdx=clamp(i,0,IMAGES.length-1);modalOpen=true;$('#mTitle').textContent=title||'Bộ ảnh minh họa tia hồng ngoại';$('#modal').classList.add('open');renderModal();}
function closeModal(){modalOpen=false;$('#modal').classList.remove('open');}
function renderModal(){
  const im=$('#mImg'), u=imgURL[mIdx];
  im.style.display=u?'block':'none'; $('#mMissing').style.display=u?'none':'block'; if(u) im.src=u;
  $('#mCap').innerHTML=`<span>${mIdx+1}/${IMAGES.length}</span>${IMAGES[mIdx].title}`;
  const th=$('#mThumbs'); th.innerHTML='';
  IMAGES.forEach((_,i)=>{const b=document.createElement('button'); b.className=i===mIdx?'on':'';
    if(imgURL[i]) b.style.backgroundImage=`url("${imgURL[i]}")`; else b.textContent=i+1;
    b.onclick=()=>{mIdx=i;renderModal();}; th.appendChild(b); if(i===mIdx) b.scrollIntoView({block:'nearest',inline:'center'});});
}
const mStep=d=>{mIdx=(mIdx+d+IMAGES.length)%IMAGES.length;renderModal();};
$('#mPrev').onclick=()=>mStep(-1); $('#mNext').onclick=()=>mStep(1); $('#mClose').onclick=closeModal;
$('#modal').addEventListener('click',e=>{if(e.target.id==='modal')closeModal();});
document.addEventListener('keydown',e=>{ if(!modalOpen) return;
  if(e.key==='Escape')closeModal(); else if(e.key==='ArrowRight')mStep(1); else if(e.key==='ArrowLeft')mStep(-1); });

/* =====================================================================
   4. SLIDE 1 — SÓNG HÌNH SIN ĐỔI MÀU THEO PHỔ NHIỆT
   ===================================================================== */
(function(){
  const o=mkCanvas($('#cv1')), N=9;
  addAnim(0,o,(o,t)=>{const {ctx,w,h}=o; ctx.clearRect(0,0,w,h); ctx.globalCompositeOperation='source-over';
    for(let k=0;k<N;k++){
      const col=.5+.5*Math.sin(t*.0004+k*.75), y0=h*.7+(k-N/2)*h*.024, amp=h*(.07+.025*Math.sin(t*.0006+k));
      const lam=w/(1.1+k*.28), ph=t*.0005*(1+k*.18);
      for(const [lw,al] of [[9,.09],[2.2,.8]]){
        ctx.beginPath(); for(let x=0;x<=w;x+=6){const y=y0+amp*Math.sin(x/lam*6.283+ph)*(.55+.45*Math.sin(x/w*3.14));x?ctx.lineTo(x,y):ctx.moveTo(x,y);}
        ctx.strokeStyle=heat(col,al); ctx.lineWidth=lw; ctx.stroke();}
    } ctx.globalCompositeOperation='source-over';});
})();

/* =====================================================================
   5. SLIDE 2 — THANH TRƯỢT PHỔ SÓNG ĐIỆN TỪ
   ===================================================================== */
(function(){
  const o=mkCanvas($('#cv2')), C=299792458, L0=650e-9, L1=760e-9, L2=1e-3, L3=3e-3;
  // Thanh trượt chia 3 đoạn (thang lôgarit): 0–10% đỏ→760nm | 10–90% hồng ngoại | 90–100% vi ba
  const lamOf=u=>u<.1?L0*Math.pow(L1/L0,u/.1):u<.9?L1*Math.pow(L2/L1,(u-.1)/.8):L2*Math.pow(L3/L2,(u-.9)/.1);
  const uOf=l=>l<=L1?.1*Math.log(l/L0)/Math.log(L1/L0):l<=L2?.1+.8*Math.log(l/L1)/Math.log(L2/L1):.9+.1*Math.log(l/L2)/Math.log(L3/L2);
  const fLam=l=>l<1e-6?Math.round(l*1e9)+' nm':l<1e-3?vn(l*1e6,l<1e-5?2:1)+' µm':vn(l*1e3,2)+' mm';
  const fF=f=>f>=1e12?vn(f/1e12,1)+' THz':Math.round(f/1e9)+' GHz';
  const fE=e=>e>=.1?vn(e,2)+' eV':e>=1e-4?vn(e*1e3,2)+' meV':vn(e*1e6,1)+' µeV';
  const rng=$('#s2range'); let u=0, vis=1, px=70, shown='', lamTxt='';
  const mixC=(a,b,t)=>`rgb(${a.map((v,i)=>Math.round(v+(b[i]-v)*t))})`;
  [['Đỏ 650 nm',650e-9],['Ngưỡng 760 nm',760e-9],['IR gần 1 µm',1e-6],['IR nhiệt 10 µm',1e-5],['IR xa 100 µm',1e-4],['Ngưỡng 1 mm',1e-3],['Vi ba 3 mm',3e-3]].forEach(([t,l])=>{
    const b=document.createElement('button'); b.className='btn'; b.textContent=t; b.onclick=()=>{rng.value=uOf(l)*1000;upd();}; $('#s2q').appendChild(b);});
  function upd(){
    u=rng.value/1000; const l=lamOf(u), f=C/l, e=1.23984e-6/l;
    lamTxt=fLam(l); $('#s2lam').textContent=lamTxt; $('#s2f').textContent=fF(f); $('#s2e').textContent=fE(e);
    const reg=l<L1*(1-1e-9)?'vis':l<=L2*(1+1e-9)?'ir':'mw', bd=$('#s2badge');
    bd.className='badge '+reg; bd.textContent=reg==='vis'?'ÁNH SÁNG ĐỎ · NHÌN THẤY':reg==='ir'?'HỒNG NGOẠI · KHÔNG NHÌN THẤY':'SÓNG VI BA · > 1 mm'; shown=reg;
  }
  rng.oninput=upd; upd();
  addAnim(1,o,(o,t)=>{const {ctx,w,h}=o; ctx.clearRect(0,0,w,h);
    const target=70+(w*.75-70)*Math.pow(u,1.4); px+= (target-px)*.18;    // bước sóng hình vẽ giãn nở mượt
    vis+=((shown==='vis'?1:0)-vis)*.12;                                  // chuyển liền nét ↔ nét đứt
    const mid=h*.5, A=h*.2, ph=t*.0016*px*.6; // vận tốc pha ∝ λ để dễ quan sát
    const st=Math.max(1,Math.min(3,px/36));                              // bước lấy mẫu mịn => đỉnh sóng tròn, không bị nhọn
    const wave=(alpha,lw,col,dash,off)=>{ctx.beginPath();for(let x=0;x<=w+st;x+=st){const y=mid+A*Math.sin((x-ph)/px*6.283);x?ctx.lineTo(x,y):ctx.moveTo(x,y);}
      ctx.setLineDash(dash||[]);ctx.lineDashOffset=off||0;ctx.globalAlpha=alpha;ctx.strokeStyle=col;ctx.lineWidth=lw;ctx.stroke();ctx.setLineDash([]);ctx.globalAlpha=1;};
    ctx.lineCap='round';ctx.lineJoin='round';
    if(vis>.02){ctx.shadowColor='#ff2d20';ctx.shadowBlur=16;wave(vis,4.5,'#ff4b3e');ctx.shadowBlur=0;}             // đỏ liền nét
    if(vis<.98){const c=shown==='mw'?'#a5b4fc':mixC([253,186,116],[196,181,253],clamp((u-.1)/.8,0,1));            // IR: cam sáng → tím nhạt, dễ nhìn trên nền tối
      ctx.shadowColor=c;ctx.shadowBlur=14;
      wave((1-vis)*.28,14,c); wave((1-vis)*.95,4.5,c,[18,12],-t*.05);ctx.shadowBlur=0;}                           // IR/vi ba: nét đứt phát quang, dày và sáng
    // thước đo λ cố định ở góc trái (không chạy ra khỏi màn hình)
    const lw_=Math.min(px,w-80), x0=30, y=h*.5-A-34; ctx.strokeStyle='rgba(255,255,255,.85)';ctx.fillStyle='#fff';ctx.lineWidth=2;
    ctx.beginPath();ctx.moveTo(x0,y);ctx.lineTo(x0+lw_,y);ctx.moveTo(x0,y-7);ctx.lineTo(x0,y+7);ctx.moveTo(x0+lw_,y-7);ctx.lineTo(x0+lw_,y+7);ctx.stroke();
    ctx.font='700 18px "JetBrains Mono",monospace';ctx.textAlign='left';ctx.fillText('λ = '+lamTxt,x0,y-12);
    // biểu tượng mắt người
    const ex=w-60, ey=32; ctx.strokeStyle=shown==='vis'?'#fca5a5':'#64748b'; ctx.lineWidth=2; ctx.beginPath();ctx.ellipse(ex,ey,24,12,0,0,6.283);ctx.stroke();
    ctx.beginPath();ctx.arc(ex,ey,6.5,0,6.283);ctx.fillStyle=ctx.strokeStyle;ctx.fill();
    if(shown!=='vis'){ctx.beginPath();ctx.moveTo(ex-26,ey+17);ctx.lineTo(ex+26,ey-17);ctx.strokeStyle='#ef4444';ctx.stroke();}
    ctx.font='600 15px "JetBrains Mono",monospace';ctx.fillStyle='#cbd5e1';ctx.textAlign='right';ctx.fillText(shown==='vis'?'mắt thấy':'mắt KHÔNG thấy',ex+28,ey+42);
  });
})();

/* =====================================================================
   6. SLIDE 3A — BỨC XẠ NHIỆT & ĐỘ KHÔNG TUYỆT ĐỐI
   ===================================================================== */
(function(){
  const o=mkCanvas($('#cv3a')), rng=$('#tRange'), SIG=5.670374e-8;
  [['−273,15 °C (0 K)',-273.15],['Phòng 25 °C',25],['Cơ thể 37 °C',37],['Bếp điện 500 °C',500]].forEach(([t,v])=>{
    const b=document.createElement('button');b.className='btn';b.textContent=t;b.onclick=()=>{rng.value=v;upd();};$('#tPresets').appendChild(b);});
  { const b=document.createElement('button');b.className='btn';b.textContent='📷 Ví dụ thực tế';b.onclick=()=>openModal(11,'Tác dụng nhiệt — ví dụ thực tế');$('#tPresets').appendChild(b); }
  let K=298.15, I=0, parts=[], rings=[], tr=0, tp=0, lbl='';
  function upd(){
    K=Math.max(0,parseFloat(rng.value)+273.15); if(K<1e-6)K=0; const C=K-273.15;
    I=K>0?Math.pow(K/773.15,.6):0;                                       // cường độ hiển thị (nén thang để thấy rõ ở nhiệt độ thấp)
    $('#tC').textContent=K===0?'−273,15 °C · 0 K':`${vn(C,1)} °C · ${vn(K,0)} K`;
    const P=SIG*Math.pow(K,4); $('#tP').textContent=K===0?'0 W/m²':P>=1e3?vn(P/1e3,1)+' kW/m²':Math.round(P)+' W/m²';
    $('#tW').textContent=K===0?'—':vn(2897.8/K,1)+' µm';
    lbl=K===0?'0 K — ĐỘ KHÔNG TUYỆT ĐỐI':Math.abs(C-25)<1.5?'NHIỆT ĐỘ PHÒNG':Math.abs(C-37)<1.2?'CƠ THỂ NGƯỜI':C>=450?'MẶT BẾP ĐIỆN':'';
    $$('#tPresets .btn').slice(0,4).forEach((b,i)=>b.classList.toggle('on',[-273.15,25,37,500][i]===parseFloat(rng.value)));
  }
  rng.oninput=upd; upd();
  addAnim(2,o,(o,t,dt)=>{const {ctx,w,h}=o; ctx.clearRect(0,0,w,h); const cx=w/2, cy=h*.52, s=Math.min(w,h)/420;
    // nền lưới & thang nhiệt
    ctx.strokeStyle='rgba(255,255,255,.04)';ctx.lineWidth=1;for(let x=0;x<w;x+=34){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,h);ctx.stroke();}
    const R=Math.min(w,h)*.5;
    // vòng sóng nhiệt
    if(I>0){tr+=dt; const gap=.55/(.25+I*2.6); if(tr>gap){tr=0;rings.push({r:46*s});}
      tp+=dt*(25+190*I); while(tp>1){tp-=1;const a=rnd(0,6.283);parts.push({x:cx,y:cy,a,v:rnd(.6,1)*(70+330*I)*s,life:0});}}
    ctx.lineWidth=2;
    for(let i=rings.length-1;i>=0;i--){const r=rings[i];r.r+=dt*(50+280*I)*s;const al=1-r.r/R; if(al<=0){rings.splice(i,1);continue;}
      ctx.strokeStyle=heat(.35+.65*I,al*(.25+.6*I));ctx.beginPath();ctx.arc(cx,cy,r.r,0,6.283);ctx.stroke();}
    // hạt photon hồng ngoại
    ctx.fillStyle=heat(.55+.45*I);
    for(let i=parts.length-1;i>=0;i--){const p=parts[i];p.x+=Math.cos(p.a)*p.v*dt;p.y+=Math.sin(p.a)*p.v*dt;p.life+=dt;
      if(p.x<-10||p.x>w+10||p.y<-10||p.y>h+10){parts.splice(i,1);continue;}
      ctx.globalAlpha=clamp(1-p.life*.5,.15,1);ctx.beginPath();ctx.arc(p.x,p.y,(1.5+2*I)*s,0,6.283);ctx.fill();}
    ctx.globalAlpha=1;
    // vật thể mẫu
    const bw=120*s, bh=96*s, col=K===0?'#0f1a3a':heat(Math.min(1,K/773.15));
    if(I>0){const g=ctx.createRadialGradient(cx,cy,bw*.3,cx,cy,bw*(1+1.6*I));g.addColorStop(0,heat(Math.min(1,K/773.15),.55*I+.1));g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.fillRect(0,0,w,h);}
    ctx.fillStyle=col;ctx.strokeStyle=K===0?'#5b7bd5':'rgba(255,255,255,.35)';ctx.lineWidth=2;
    ctx.beginPath();ctx.roundRect(cx-bw/2,cy-bh/2,bw,bh,14*s);ctx.fill();ctx.stroke();
    if(K===0){ctx.strokeStyle='rgba(160,190,255,.6)';ctx.lineWidth=1.2;for(let i=0;i<7;i++){const x=cx-bw/2+14*s+i*bw/7.5;ctx.beginPath();ctx.moveTo(x,cy-bh/2+8*s);ctx.lineTo(x+8*s,cy-bh/2+20*s);ctx.moveTo(x+4*s,cy+bh/2-8*s);ctx.lineTo(x-4*s,cy+bh/2-20*s);ctx.stroke();}}
    ctx.textAlign='center';ctx.font=`700 ${18*Math.max(.9,s)}px "JetBrains Mono",monospace`;ctx.fillStyle=K===0?'#c7d6ff':'#14090a';
    ctx.fillText(K===0?'0 K':vn(K-273.15,0)+' °C',cx,cy+5*s);
    if(lbl){ctx.font=`600 ${16*Math.max(.95,s)}px "Be Vietnam Pro",sans-serif`;ctx.fillStyle=K===0?'#93c5fd':'#fcd34d';ctx.fillText(lbl,cx,h-16);}
    if(K===0){ctx.fillStyle='#93c5fd';ctx.font=`500 ${16*Math.max(.95,s)}px "Be Vietnam Pro",sans-serif`;ctx.fillText('Vật đứng yên — không phát ra bất kỳ bức xạ nhiệt nào',cx,28);}
  });
})();

/* =====================================================================
   7. SLIDE 3B — QUANG ĐIỆN TRONG (bán dẫn + Ohm kế)
   ===================================================================== */
(function(){
  const o=mkCanvas($('#cv3b')), sw=$('#irSwitch'); let on=false, L=0, photons=[], flashes=[], sparkT=0;
  const COLS=7, ROWS=4, N=COLS*ROWS, RMAX=200e3, RMIN=6e3;
  // mỗi electron liên kết quanh một nút mạng; "rank" quyết định thứ tự được giải phóng
  const els=[], order=[...Array(N).keys()].sort(()=>Math.random()-.5);
  for(let i=0;i<N;i++) els.push({i,c:i%COLS,r:(i/COLS)|0,x:0,y:0,vx:0,vy:0,rank:order[i],free:false,ang:rnd(0,6.283)});
  sw.onclick=()=>{on=!on;sw.classList.toggle('on',on);sw.textContent='ĐÈN IR: '+(on?'BẬT':'TẮT');sw.setAttribute('aria-pressed',on);};
  addAnim(2,o,(o,t,dt)=>{const {ctx,w,h}=o; ctx.clearRect(0,0,w,h);
    L+=((on?1:0)-L)*dt*(on?1.1:.7); L=clamp(L,0,1); if(L<.002)L=0; if(L>.998)L=1;
    const R=RMAX*Math.pow(RMIN/RMAX,L), q=Math.log(RMAX/R)/Math.log(RMAX/RMIN);
    const bx=w*.3,by=h*.46,bw=w*.52,bh=h*.46, sx=bw/(COLS+.4), sy=bh/(ROWS+.4);
    const cx=w*.74, cy=h*.2, gr=Math.min(w*.17,h*.2), yT=cy+gr*.85;
    // dây dẫn
    ctx.strokeStyle='#cbd5e1';ctx.lineWidth=3;ctx.lineJoin='round';ctx.beginPath();
    ctx.moveTo(bx+bw*.15,by);ctx.lineTo(bx+bw*.15,yT);ctx.lineTo(cx-gr*.8,yT);
    ctx.moveTo(bx+bw*.85,by);ctx.lineTo(bx+bw*.85,yT+gr*.45);ctx.lineTo(cx+gr*.8,yT+gr*.45);ctx.lineTo(cx+gr*.8,yT);ctx.stroke();
    // khối bán dẫn
    ctx.fillStyle='rgba(99,102,241,.12)';ctx.strokeStyle='rgba(165,180,252,.6)';ctx.lineWidth=2;ctx.beginPath();ctx.roundRect(bx,by,bw,bh,10);ctx.fill();ctx.stroke();
    ctx.fillStyle='#93A0B8';ctx.font='15px "JetBrains Mono",monospace';ctx.textAlign='left';ctx.fillText('Chất bán dẫn (mạng tinh thể)',bx+8,by+bh+14);
    // đèn IR
    const lx=w*.1, ly=h*.14; if(on){const g=ctx.createRadialGradient(lx,ly,2,lx,ly,w*.16);g.addColorStop(0,'rgba(220,38,38,.55)');g.addColorStop(1,'rgba(220,38,38,0)');ctx.fillStyle=g;ctx.fillRect(0,0,w*.4,h*.5);}
    ctx.fillStyle=on?'#ef4444':'#3a2a2e';ctx.strokeStyle='#94a3b8';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(lx-14,ly-22);ctx.lineTo(lx+14,ly-22);ctx.lineTo(lx+24,ly+8);ctx.lineTo(lx-24,ly+8);ctx.closePath();ctx.fill();ctx.stroke();
    ctx.beginPath();ctx.arc(lx,ly+10,10,0,3.1416);ctx.fillStyle=on?'#fecaca':'#2a1f24';ctx.fill();
    ctx.fillStyle='#93A0B8';ctx.textAlign='center';ctx.fillText('Đèn hồng ngoại',lx,ly-30);
    // photon
    if(on){sparkT+=dt;while(sparkT>.07){sparkT-=.07;const tx=bx+rnd(.1,.9)*bw,ty=by+rnd(.1,.9)*bh;photons.push({x:lx+rnd(-8,8),y:ly+14,tx,ty,p:0});}}
    for(let i=photons.length-1;i>=0;i--){const p=photons[i];p.p+=dt*1.4;if(p.p>=1){flashes.push({x:p.tx,y:p.ty,t:0});photons.splice(i,1);continue;}
      const x=lerp(p.x,p.tx,p.p),y=lerp(p.y,p.ty,p.p);ctx.strokeStyle='rgba(248,113,113,.9)';ctx.lineWidth=2;ctx.beginPath();
      for(let k=0;k<=8;k++){const f=Math.max(0,p.p-.12+k*.015),px=lerp(p.x,p.tx,f),py=lerp(p.y,p.ty,f)+Math.sin(f*40)*2.5;k?ctx.lineTo(px,py):ctx.moveTo(px,py);}ctx.stroke();
      ctx.fillStyle='#fecaca';ctx.beginPath();ctx.arc(x,y,3,0,6.283);ctx.fill();}
    for(let i=flashes.length-1;i>=0;i--){const f=flashes[i];f.t+=dt*2.5;if(f.t>1){flashes.splice(i,1);continue;}ctx.strokeStyle=`rgba(250,204,21,${1-f.t})`;ctx.lineWidth=2;ctx.beginPath();ctx.arc(f.x,f.y,4+f.t*14,0,6.283);ctx.stroke();}
    // nút mạng & electron
    let nFree=0;
    for(const e of els){const hx=bx+sx*(e.c+.7), hy=by+sy*(e.r+.7);
      ctx.fillStyle='rgba(148,163,184,.5)';ctx.beginPath();ctx.arc(hx,hy,Math.min(sx,sy)*.28,0,6.283);ctx.fill();
      ctx.fillStyle='#94a3b8';ctx.font='14px "JetBrains Mono"';ctx.textAlign='center';ctx.fillText('+',hx,hy+3.5);
      const shouldFree=e.rank<L*N-.001+(L>0?.5:0)&&L>0, was=e.free; e.free=shouldFree; if(e.free)nFree++;
      if(e.free&&!was){e.x=e.x||hx;e.vx=rnd(-1,1)*60;e.vy=rnd(-1,1)*60;}
      if(e.free){e.vx+=rnd(-1,1)*400*dt+60*dt;e.vy+=rnd(-1,1)*400*dt;const sp=Math.hypot(e.vx,e.vy),mx=110;if(sp>mx){e.vx*=mx/sp;e.vy*=mx/sp;}
        e.x+=e.vx*dt;e.y+=e.vy*dt;if(e.x<bx+6){e.x=bx+6;e.vx=Math.abs(e.vx);}if(e.x>bx+bw-6){e.x=bx+bw-6;e.vx=-Math.abs(e.vx);}if(e.y<by+6){e.y=by+6;e.vy=Math.abs(e.vy);}if(e.y>by+bh-6){e.y=by+bh-6;e.vy=-Math.abs(e.vy);}
        ctx.fillStyle='rgba(250,204,21,.25)';ctx.beginPath();ctx.arc(e.x,e.y,9,0,6.283);ctx.fill();
        ctx.fillStyle='#FACC15';ctx.beginPath();ctx.arc(e.x,e.y,4.2,0,6.283);ctx.fill();}
      else{e.ang+=dt*2;const tx=hx+Math.cos(e.ang)*9,ty=hy+Math.sin(e.ang)*9; if(e.x===0&&e.y===0){e.x=tx;e.y=ty;}
        e.x=lerp(e.x,tx,Math.min(1,dt*9));e.y=lerp(e.y,ty,Math.min(1,dt*9));
        ctx.fillStyle='#60a5fa';ctx.beginPath();ctx.arc(e.x,e.y,3.4,0,6.283);ctx.fill();}
    }
    // Ohm kế
    ctx.fillStyle='#0f172a';ctx.strokeStyle='#64748b';ctx.lineWidth=2;ctx.beginPath();ctx.roundRect(cx-gr*1.25,cy-gr*.95,gr*2.5,gr*1.8,10);ctx.fill();ctx.stroke();
    const pv={x:cx,y:cy+gr*.42}; ctx.lineWidth=7;
    const gg=ctx.createLinearGradient(cx-gr,0,cx+gr,0);gg.addColorStop(0,'#7c3aed');gg.addColorStop(.5,'#F97316');gg.addColorStop(1,'#FACC15');
    ctx.strokeStyle=gg;ctx.beginPath();ctx.arc(pv.x,pv.y,gr*.85,Math.PI*1.1,Math.PI*1.9);ctx.stroke();
    ctx.lineWidth=1.5;ctx.strokeStyle='#94a3b8';for(let k=0;k<=8;k++){const a=Math.PI*(1.1+.8*k/8);ctx.beginPath();ctx.moveTo(pv.x+Math.cos(a)*gr*.7,pv.y+Math.sin(a)*gr*.7);ctx.lineTo(pv.x+Math.cos(a)*gr*.78,pv.y+Math.sin(a)*gr*.78);ctx.stroke();}
    ctx.fillStyle='#cbd5e1';ctx.font=`${Math.max(13,gr*.2)}px "JetBrains Mono"`;ctx.textAlign='center';
    ctx.fillText('∞',cx-gr*.78,cy-gr*.2);ctx.fillText('0',cx+gr*.78,cy-gr*.2);ctx.fillText('Ω',cx,cy-gr*.42);
    const na=Math.PI*(1.1+.8*q)+Math.sin(t*.03)*.004*L*(1-L);
    ctx.strokeStyle='#ef4444';ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(pv.x-Math.cos(na)*gr*.12,pv.y-Math.sin(na)*gr*.12);ctx.lineTo(pv.x+Math.cos(na)*gr*.82,pv.y+Math.sin(na)*gr*.82);ctx.stroke();
    ctx.fillStyle='#ef4444';ctx.beginPath();ctx.arc(pv.x,pv.y,5,0,6.283);ctx.fill();
    ctx.fillStyle='#FACC15';ctx.font=`600 ${Math.max(14,gr*.22)}px "JetBrains Mono"`;ctx.fillText(R>=1e5?vn(R/1e3,0)+' kΩ':vn(R/1e3,1)+' kΩ',cx,cy+gr*.78);
    ctx.fillStyle='#cbd5e1';ctx.beginPath();ctx.arc(cx-gr*.8,yT,4,0,6.283);ctx.arc(cx+gr*.8,yT,4,0,6.283);ctx.fill();
    // cập nhật số liệu DOM
    $('#pR').textContent=(R>=1e5?vn(R/1e3,0):vn(R/1e3,1))+' kΩ'; $('#pN').textContent=`${nFree}/${N}`;
    $('#pS').textContent=L<.03?'Cách điện tương đối':L>.97?'Dẫn điện tốt':on?'Đang giải phóng e…':'Tái hợp…';
  });
})();

/* =====================================================================
   8. SLIDE 4 — SVG ĐỘNG (phản xạ/khúc xạ) & THÍ NGHIỆM XUYÊN THẤU
   ===================================================================== */
(function(){
  // Phản xạ & khúc xạ: góc tới dao động, định luật Snell n=1,5
  const st=(el,x1,y1,x2,y2)=>{el.setAttribute('x1',x1);el.setAttribute('y1',y1);el.setAttribute('x2',x2);el.setAttribute('y2',y2);};
  const rIn=$('#rIn'),rOut=$('#rOut'),fIn=$('#fIn'),fOut=$('#fOut');
  setInterval(()=>{ if(!visible.has(3)) return; const th=(28+20*Math.sin(performance.now()/900))*Math.PI/180;
    // phản xạ: mặt gương y=52, pháp tuyến x=60
    st(rIn,60-Math.sin(th)*50,52-Math.cos(th)*50,60,52); st(rOut,60,52,60+Math.sin(th)*50,52-Math.cos(th)*50);
    // khúc xạ: mặt phân cách y=35
    const t2=Math.asin(Math.sin(th)/1.5); st(fIn,60-Math.sin(th)*32,35-Math.cos(th)*32,60,35); st(fOut,60,35,60+Math.sin(t2)*32,35+Math.cos(t2)*32);
  },40);
  // Thí nghiệm xuyên thấu
  const o=mkCanvas($('#cv4'));
  const MEDIA={
    fog:  {name:'Sương mù mỏng',  T:.92, ok:true, msg:'Tín hiệu truyền qua tốt'},
    dust: {name:'Khói bụi',       T:.86, ok:true, msg:'Xuyên qua được khói bụi'},
    vapor:{name:'Hơi nước dày',   T:.03, ok:false,msg:'Bị hấp thụ mạnh bởi hơi nước'},
    co2:  {name:'Khí CO₂ đậm đặc',T:.004,ok:false,msg:'Bị hấp thụ mạnh bởi khí CO₂'}};
  let med='fog', mp=[], ph=[], sig=1, spawn=0;
  const box=()=>({x:o.w*.3,y:o.h*.14,w:o.w*.4,h:o.h*.72});
  function build(){const b=box(),n={fog:26,dust:110,vapor:150,co2:34}[med];mp=[];
    for(let i=0;i<n;i++)mp.push({x:b.x+rnd(0,b.w),y:b.y+rnd(0,b.h),r:med==='fog'?rnd(20,48):med==='vapor'?rnd(2,5):med==='co2'?7:rnd(1,2.6),vx:rnd(-8,8),vy:rnd(-8,8),a:rnd(0,6.283)});}
  Object.entries(MEDIA).forEach(([k,m])=>{const b=document.createElement('button');b.className='btn'+(k===med?' on':'');b.textContent=m.name;b.dataset.k=k;
    b.onclick=()=>{med=k;$$('#mediaBtns .btn').forEach(x=>x.classList.toggle('on',x===b));build();ph=[];};$('#mediaBtns').appendChild(b);});
  addAnim(3,o,(o,t,dt)=>{const {ctx,w,h}=o; if(!mp.length)build(); ctx.clearRect(0,0,w,h); const b=box(), m=MEDIA[med], my=h/2, s=Math.min(w/700,h/320);
    // buồng khí
    ctx.fillStyle='rgba(120,140,190,.07)';ctx.strokeStyle='rgba(165,180,252,.55)';ctx.lineWidth=2;ctx.beginPath();ctx.roundRect(b.x,b.y,b.w,b.h,10);ctx.fill();ctx.stroke();
    ctx.fillStyle='#93A0B8';ctx.font=`${16*clamp(s,1,1.7)}px "Be Vietnam Pro",sans-serif`;ctx.textAlign='center';ctx.fillText('Buồng khí: '+m.name,b.x+b.w/2,b.y+b.h+16*clamp(s,1,1.7));
    ctx.fillText('Nguồn IR',w*.095,my+h*.2);ctx.fillText('Cảm biến',w*.905,my+h*.2);
    // hạt môi trường
    ctx.save();ctx.beginPath();ctx.rect(b.x,b.y,b.w,b.h);ctx.clip();
    for(const p of mp){p.x+=p.vx*dt;p.y+=p.vy*dt;p.a+=dt*.5;if(p.x<b.x)p.x=b.x+b.w;if(p.x>b.x+b.w)p.x=b.x;if(p.y<b.y)p.y=b.y+b.h;if(p.y>b.y+b.h)p.y=b.y;
      if(med==='fog'){const g=ctx.createRadialGradient(p.x,p.y,0,p.x,p.y,p.r);g.addColorStop(0,'rgba(226,232,240,.22)');g.addColorStop(1,'rgba(226,232,240,0)');ctx.fillStyle=g;ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,6.283);ctx.fill();}
      else if(med==='dust'){ctx.fillStyle='rgba(180,140,100,.75)';ctx.fillRect(p.x,p.y,p.r*1.6,p.r*1.6);}
      else if(med==='vapor'){ctx.fillStyle='rgba(125,211,252,.5)';ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,6.283);ctx.fill();}
      else{const dx=Math.cos(p.a)*8,dy=Math.sin(p.a)*8;ctx.fillStyle='#94a3b8';ctx.beginPath();ctx.arc(p.x,p.y,5,0,6.283);ctx.fill();ctx.fillStyle='#ef4444';ctx.beginPath();ctx.arc(p.x+dx,p.y+dy,3.5,0,6.283);ctx.arc(p.x-dx,p.y-dy,3.5,0,6.283);ctx.fill();}}
    ctx.restore();
    // chùm tia: độ trong suốt giảm theo hàm mũ trong buồng
    const lf=-b.w/Math.log(Math.max(m.T,1e-4));
    const g=ctx.createLinearGradient(w*.16,0,w*.84,0);g.addColorStop(0,heat(.85,.9));g.addColorStop((b.x-w*.16)/(w*.68),heat(.85,.9));
    for(let k=1;k<=8;k++){const f=k/8;g.addColorStop((b.x+b.w*f-w*.16)/(w*.68),heat(.85,.9*Math.exp(-b.w*f/lf)));}
    g.addColorStop(1,heat(.85,.9*m.T));
    ctx.strokeStyle=g;ctx.lineCap='round';ctx.lineWidth=10*s;ctx.globalAlpha=.25;ctx.beginPath();ctx.moveTo(w*.16,my);ctx.lineTo(w*.84,my);ctx.stroke();
    ctx.globalAlpha=1;ctx.lineWidth=3*s;ctx.stroke();
    // photon chuyển động
    spawn+=dt*70;while(spawn>1){spawn-=1;ph.push({x:w*.16,y:my+rnd(-3,3)*s});}
    const v=360*s*(w/700);
    for(let i=ph.length-1;i>=0;i--){const p=ph[i];p.x+=v*dt;
      if(p.x>b.x&&p.x<b.x+b.w){ if(Math.random()<dt*v/lf){ctx.fillStyle='rgba(250,204,21,.9)';ctx.beginPath();ctx.arc(p.x,p.y,6*s,0,6.283);ctx.fill();ph.splice(i,1);continue;}
        if(m.ok)p.y+=rnd(-1.2,1.2)*s;}
      if(p.x>w*.84){ph.splice(i,1);continue;}
      ctx.fillStyle='#FACC15';ctx.beginPath();ctx.arc(p.x,p.y,2.6*s,0,6.283);ctx.fill();}
    // nguồn phát & cảm biến
    ctx.fillStyle='#1e293b';ctx.strokeStyle='#64748b';ctx.beginPath();ctx.roundRect(w*.03,my-24*s,w*.13,48*s,8);ctx.fill();ctx.stroke();
    const eg=ctx.createRadialGradient(w*.16,my,0,w*.16,my,26*s);eg.addColorStop(0,'rgba(250,204,21,.9)');eg.addColorStop(1,'rgba(220,38,38,0)');ctx.fillStyle=eg;ctx.beginPath();ctx.arc(w*.16,my,26*s,0,6.283);ctx.fill();
    ctx.fillStyle='#1e293b';ctx.beginPath();ctx.roundRect(w*.84,my-30*s,w*.13,60*s,8);ctx.fill();ctx.stroke();
    sig+=(m.T-sig)*dt*2.2; const good=sig>.5, lc=good?'#22C55E':'#EF4444';
    ctx.fillStyle=lc;ctx.shadowColor=lc;ctx.shadowBlur=20;ctx.beginPath();ctx.arc(w*.905,my-8*s,9*s,0,6.283);ctx.fill();ctx.shadowBlur=0;
    ctx.fillStyle='#0f172a';ctx.fillRect(w*.865,my+10*s,w*.08,9*s);ctx.fillStyle=heat(.4+.6*sig);ctx.fillRect(w*.865,my+10*s,w*.08*sig,9*s);
    const el=$('#s4msg'); el.textContent=m.msg; el.className=m.ok?'g':'r'; $('#s4sig').textContent='I/I₀ ≈ '+Math.round(sig*100)+'%';
  });
})();

/* =====================================================================
   9. SLIDE 5 — KÍNH NHÌN ĐÊM (clip-path) + CÁC THIẾT BỊ ỨNG DỤNG
   ===================================================================== */
(function(){
  /* Khung cảnh vẽ bằng SVG 800×500. Hàm scene(mode) vẽ CÙNG một hình học 2 lần:
     mode 'd' = căn phòng tối mờ; mode 't' = ảnh nhiệt rực rỡ (chỉ lộ ra trong vòng tròn ống kính).
     Mỗi hình có giá trị "heat" 0→1 (tím→vàng) — sửa số này để đổi độ nóng của thiết bị. */
  function scene(m){
    const T=m==='t', f=h=>T?heat(h):`rgba(130,150,190,${(.05+.1*h).toFixed(3)})`, ln=T?'rgba(255,255,255,.16)':'rgba(148,163,184,.2)';
    const R=(x,y,w,h,k,rx=0,x2='')=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${f(k)}" stroke="${ln}" ${x2}/>`;
    const E=(x,y,rx,ry,k,x2='')=>`<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" fill="${f(k)}" ${x2}/>`;
    const Cc=(x,y,r,k,x2='')=>`<circle cx="${x}" cy="${y}" r="${r}" fill="${f(k)}" ${x2}/>`;
    const halo=(x,y,rx,ry,k)=>T?`<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" fill="url(#hg${Math.round(k*10)})"/>`:'';
    const tag=(x,y,s)=>T?`<text x="${x}" y="${y}" text-anchor="middle" font-size="13" font-weight="700" fill="#fff" stroke="#000" stroke-width="3" paint-order="stroke" font-family="Be Vietnam Pro,sans-serif">${s}</text>`:'';
    let defs='';if(T)for(const k of [6,8,9]) defs+=`<radialGradient id="hg${k}"><stop offset="0" stop-color="${heat(k/10,.65)}"/><stop offset="1" stop-color="${heat(k/10,0)}"/></radialGradient>`;
    const bg=T?`<linearGradient id="wall" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${heat(.13)}"/><stop offset="1" stop-color="${heat(.07)}"/></linearGradient>`:'';
    return `<svg viewBox="0 0 800 500" preserveAspectRatio="none"><defs>${defs}${bg}<filter id="${m}blur"><feGaussianBlur stdDeviation="${T?1.6:.4}"/></filter></defs>
    <rect width="800" height="500" fill="${T?'url(#wall)':'#070a12'}"/>
    <rect y="372" width="800" height="128" fill="${f(.03)}"/>
    <g filter="url(#${m}blur)">
      ${halo(730,215,120,120,8)}${halo(545,330,190,140,8)}${halo(150,330,60,70,6)}
      <!-- TV + tủ (liên kết nhóm Điều khiển từ xa) -->
      ${R(20,262,300,34,.15,4)}${R(150,236,40,28,.2)}${R(45,80,250,156,.3,8)}${R(55,90,230,134,.2,4,'class="tvs"')}${Cc(170,229,3,.65)}
      <!-- Remote -->
      ${R(118,305,54,168,.32,12)}${Cc(145,314,5,.8,'class="rled"')}${Cc(145,346,10,.9,'class="rbtn"')}
      ${[378,402,426,450].map(y=>[130,145,160].map(x=>Cc(x,y,5,.42)).join('')).join('')}
      <!-- Bếp điện & lò nướng -->
      ${R(450,378,200,100,.35,8)}${R(468,398,164,58,.9,6)}${R(468,386,164,6,.3)}${R(450,352,200,28,.5,4)}${E(505,350,36,8,1)}${E(596,350,36,8,.95)}
      ${R(488,300,60,50,.7,6)}${R(482,296,72,8,.6,3)}
      <!-- Cáp quang & bộ định tuyến -->
      <path d="M330,150 C400,50 480,200 560,100" fill="none" stroke="${f(.45)}" stroke-width="9" stroke-linecap="round"/>
      ${R(305,138,44,30,.55,4)}${R(556,84,44,30,.5,4)}${Cc(316,153,3,.9)}${Cc(578,99,3,.9)}
      <!-- Đèn trị liệu -->
      ${R(726,150,8,322,.3)}${E(730,474,46,8,.28)}${R(698,38,64,40,.5,6)}${E(730,82,46,24,.95)}
      ${T?`<polygon points="702,95 758,95 800,218 660,218" fill="${heat(.8,.38)}"/>`:''}
      ${E(730,222,66,26,.62)}${E(730,258,40,16,.58)}
      <!-- Camera đêm + người -->
      ${R(360,190,14,40,.4)}${R(330,226,112,50,.5,16)}${Cc(442,251,23,.6)}${Cc(442,251,11,1,'class="clens"')}
      ${[0,1,2,3,4,5].map(i=>Cc(442+Math.cos(i*1.047)*17,251+Math.sin(i*1.047)*17,2.4,.95)).join('')}
      ${Cc(290,336,19,.78)}${R(262,358,56,92,.62,22)}${R(268,446,18,28,.5)}${R(294,446,18,28,.5)}
    </g>
    ${tag(150,492,'Remote')}${tag(170,72,'Tivi')}${tag(550,490,'Bếp điện / lò nướng')}${tag(450,40,'Cáp quang')}${tag(730,30,'Đèn trị liệu')}${tag(345,172,'Camera IR')}${tag(290,308,'36,6 °C')}
    </svg>`;
  }
  const dark=$('#darkLayer'), therm=$('#thermalLayer'); dark.innerHTML=scene('d'); therm.insertAdjacentHTML('afterbegin',scene('t'));
  // lớp bắt sự kiện (trong suốt) cho từng thiết bị
  const hit=$('#hitSvg'); const HR={remote:[[10,70,310,235],[110,300,70,175]],stove:[[445,295,210,185]],comms:[[300,45,310,140]],therapy:[[650,30,140,260]],night:[[240,185,215,290]]};
  let hh=''; for(const a of APPS) for(const [x,y,w,h] of HR[a.id]) hh+=`<rect class="hit" data-app="${a.id}" x="${x}" y="${y}" width="${w}" height="${h}"/>`;
  hh+=`<circle class="hit" data-act="remote" cx="145" cy="346" r="15"/>`; hit.innerHTML=hh;

  // Khung cảnh luôn giữ đúng tỉ lệ 8:5
  const wrap=$('#sceneWrap'), scene_=$('#scene'); let SW=1,SH=1;
  const fit=()=>{const r=wrap.getBoundingClientRect(); const w=Math.min(r.width,r.height*1.6); SW=w; SH=w/1.6; scene_.style.width=SW+'px'; scene_.style.height=SH+'px';};
  new ResizeObserver(fit).observe(wrap); fit();

  // Ống kính: theo chuột; khi không có chuột thì lướt tự động / bay tới thiết bị đang rê chuột ở danh sách
  const lens=$('#lens'); let lx=0,ly=0,tx=0,ty=0,ptr=false,focus=null,lensR=0;
  scene_.addEventListener('pointermove',e=>{const r=scene_.getBoundingClientRect();tx=e.clientX-r.left;ty=e.clientY-r.top;ptr=true;});
  scene_.addEventListener('pointerleave',()=>ptr=false);
  scene_.addEventListener('pointerdown',e=>{const r=scene_.getBoundingClientRect();tx=e.clientX-r.left;ty=e.clientY-r.top;ptr=true;});
  hit.addEventListener('click',e=>{const t=e.target; if(t.dataset.act==='remote'){pressRemote();return;} const a=APPS.find(x=>x.id===t.dataset.app); if(a)openApp(a);});
  function openApp(a){openModal(a.imgs[0],a.title+' — ảnh minh họa');}

  // Danh sách ứng dụng bên phải
  const list=$('#apps');
  APPS.forEach(a=>{const b=document.createElement('button');b.className='app';b.innerHTML=`<em>${a.n}</em><span><b>${a.title}</b><small>${a.desc}</small></span>`;
    b.onclick=()=>openApp(a); b.onmouseenter=()=>focus=a; b.onmouseleave=()=>focus=null; list.appendChild(b);});
  const gb=document.createElement('button');gb.className='gallery-btn';gb.textContent=`▶ Xem bộ ảnh minh họa (${IMAGES.length} ảnh)`;gb.onclick=()=>openModal(0);list.appendChild(gb);

  // Điều khiển từ xa: bấm nút nguồn → chuỗi xung IR tới Tivi
  const cv=mkCanvas($('#cv5')); let bursts=[], tvOn=false, tvTimer=0;
  function pressRemote(){bursts.push({t0:performance.now()}); clearTimeout(tvTimer); tvTimer=setTimeout(()=>{tvOn=!tvOn;
    $$('.tvs').forEach((el,i)=>{if(!el.dataset.f)el.dataset.f=el.getAttribute('fill');el.setAttribute('fill',tvOn?(i?'rgba(250,204,21,.9)':'rgba(150,200,255,.3)'):el.dataset.f);});},650);}
  const bez=(p,s)=>{const u=1-p;return {x:u*u*u*330+3*u*u*p*400+3*u*p*p*480+p*p*p*560,y:u*u*u*150+3*u*u*p*50+3*u*p*p*200+p*p*p*100};};

  addAnim(4,cv,(o,t,dt)=>{
    // 1) cập nhật ống kính
    if(ptr){} else if(focus){tx=focus.cx*SW/800;ty=focus.cy*SH/500;} else {tx=SW*(.5+.38*Math.sin(t*.00033));ty=SH*(.5+.33*Math.sin(t*.00051+1));}
    lx+=(tx-lx)*(ptr?.5:.07); ly+=(ty-ly)*(ptr?.5:.07); lensR+=((SW*(ptr?.14:.13))-lensR)*.15;
    therm.style.clipPath=`circle(${lensR}px at ${lx}px ${ly}px)`;
    lens.style.width=lens.style.height=lensR*2+'px'; lens.style.transform=`translate(${lx-lensR}px,${ly-lensR}px)`;
    // 2) hiệu ứng nhiệt vẽ trên canvas (chỉ thấy qua ống kính)
    const {ctx,w,h}=o, k=w/800, tm=t/1000; ctx.clearRect(0,0,w,h); ctx.save(); ctx.scale(k,h/500); ctx.lineCap='round';
    // xung IR của remote
    const now=performance.now(); let led=false;
    for(let i=bursts.length-1;i>=0;i--){const b=bursts[i],e=(now-b.t0)/1000; if(e>1.8){bursts.splice(i,1);continue;}
      for(let n=0;n<7;n++){const p=(e-n*.14)/.4; if(p<0||p>1)continue; led=true; const x=lerp(145,170,p),y=lerp(310,232,p),ang=Math.atan2(232-310,170-145);
        for(let r=1;r<=3;r++){ctx.strokeStyle=heat(.95,(1-p)*.9);ctx.lineWidth=2.5;ctx.beginPath();ctx.arc(x,y,6*r,ang-.5,ang+.5);ctx.stroke();}}}
    if(led){ctx.fillStyle='rgba(250,204,21,.8)';ctx.beginPath();ctx.arc(145,314,12,0,6.283);ctx.fill();}
    // xung dữ liệu chạy trong cáp quang
    for(let i=0;i<9;i++){const p=((tm*.45+i/9)%1),a=bez(p),c=bez(Math.min(1,p+.03));ctx.strokeStyle=heat(.95);ctx.lineWidth=5;ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(c.x,c.y);ctx.stroke();}
    // hơi nóng từ bếp
    for(const bx of [505,596]) for(let i=0;i<3;i++){ctx.strokeStyle=heat(.9,.5);ctx.lineWidth=3;ctx.beginPath();
      for(let y=0;y<60;y+=3){const px=bx-14+i*14+Math.sin(y*.18-tm*5+i)*4,py=340-y;y?ctx.lineTo(px,py):ctx.moveTo(px,py);}ctx.stroke();}
    // tia hồng ngoại từ đèn trị liệu
    for(let i=0;i<7;i++){const x0=704+i*10,off=(tm*40+i*9)%30;ctx.strokeStyle=heat(.92,.6);ctx.lineWidth=2.4;ctx.setLineDash([10,8]);ctx.lineDashOffset=-off;
      ctx.beginPath();ctx.moveTo(x0,100);ctx.quadraticCurveTo(x0+Math.sin(tm*3+i)*6,160,x0+(i-3)*5,205);ctx.stroke();ctx.setLineDash([]);}
    // camera quét + khung đo thân nhiệt
    const sw=Math.sin(tm*1.4)*.22; ctx.fillStyle=`rgba(250,204,21,${.22+.1*Math.sin(tm*5)})`;ctx.beginPath();ctx.moveTo(442,251);ctx.lineTo(442-190,251+90+sw*260);ctx.lineTo(442-150,251+220+sw*130);ctx.closePath();ctx.fill();
    ctx.strokeStyle=heat(1,.5+.5*Math.sin(tm*6)>.5?.95:.4);ctx.lineWidth=2;ctx.strokeRect(256,314,70,160);
    ctx.restore();
  });
})();

/* =====================================================================
   10. SLIDE 6 — QUIZ 5 CÂU
   ===================================================================== */
(function(){
  const box=$('#quiz'); let qi=0, score=0, answered=false;
  function render(){
    if(qi>=QUIZ.length){ const msg=score===5?'Xuất sắc! Bạn nắm vững kiến thức về tia hồng ngoại.':score>=3?'Khá tốt! Ôn lại các câu sai để hoàn thiện nhé.':'Cố gắng thêm — hãy xem lại các slide trước.';
      box.innerHTML=`<div class="result"><div class="kicker">KẾT QUẢ</div><div class="big">${score}/${QUIZ.length}</div><p>${msg}</p><button class="next show" id="again">↻ Làm lại</button></div>`; $('#again').onclick=()=>{qi=0;score=0;render();}; return;}
    const q=QUIZ[qi]; answered=false;
    box.innerHTML=`<div class="qprog">${QUIZ.map((_,i)=>`<i class="${i<qi?'done':''}"></i>`).join('')}<span>Câu ${qi+1}/${QUIZ.length}</span></div>
      <div class="qtext">${q.q}</div><div class="opts">${q.o.map((t,i)=>`<button class="opt" data-i="${i}"><b>${'ABCD'[i]}</b><span>${t}</span></button>`).join('')}</div>
      <div class="expl" id="expl"></div><div class="qfoot"><span class="score">Điểm: ${score}</span><button class="next" id="nx">${qi===QUIZ.length-1?'Xem kết quả →':'Câu tiếp theo →'}</button></div>`;
    $$('.opt',box).forEach(b=>b.onclick=()=>{ if(answered)return; answered=true; const i=+b.dataset.i, ok=i===q.a; if(ok)score++;
      $$('.opt',box).forEach((x,k)=>{x.disabled=true; if(k===q.a)x.classList.add('right'); else if(k===i)x.classList.add('wrong');});
      const ex=$('#expl'); ex.innerHTML=`<b>${ok?'✔ Chính xác!':'✘ Chưa đúng.'}</b> ${q.e}`; ex.classList.add('show'); $('#nx').classList.add('show'); $('.score',box).textContent='Điểm: '+score;});
    $('#nx').onclick=()=>{qi++;render();};
  }
  render();
})();

requestAnimationFrame(loop);
go(0);
