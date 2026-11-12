/* Public portfolio content. Replace contact placeholders before publishing. */
const PROFILE = {
  email: '', // e.g. 'hello@example.com' (leave blank until ready)
  github: '', // e.g. 'https://github.com/your-username'
  linkedin: '' // e.g. 'https://www.linkedin.com/in/your-profile/'
};
const translations = {
  ko: {
    skip:'본문으로 이동',navAbout:'Overview',navResearch:'Research',navSkills:'Technology',navOutputs:'Publications & IP',navContact:'Contact',
    heroEyebrow:'BIOMEDICAL RESEARCH · PORTFOLIO',heroTitle:'생물학적 발견을<br><em>치료 가능성</em>으로.',heroDesc:'핵산 치료제와 골관절염 연구를 중심으로, 분자 수준의 가설을 실험적 근거로 연결하는 바이오의약품 연구자입니다.',explore:'연구 살펴보기',contactMe:'연락하기',scroll:'스크롤하여 더 알아보기',
    aboutTitle:'연구 소개<span class="accent">.</span>',aboutLead:'기초 생물학적 질문에서 출발해, 실험 모델 구축과 효능 검증을 거쳐 치료 전략의 가능성을 탐색합니다.',aboutBody:'세포 기반 기능 평가, 분자생물학적 분석, 동물 질환 모델, 데이터 해석 및 과학 문서 작성에 걸친 연구 경험을 보유하고 있습니다. 연구의 재현성과 명확한 근거 제시를 중요하게 생각합니다.',fact1:'핵산 치료제 연구',fact2:'질환 모델 기반 평가',fact3:'중개 연구 및 데이터 분석',
    researchTitle:'연구 프로젝트<span class="accent">.</span>',researchIntro:'공개 가능한 범위에서 정리한 주요 연구 분야와 담당 업무입니다.',p1cat:'핵산 기반 치료제',p1title:'Antisense Oligonucleotide Research',p1desc:'miRNA 표적 ASO의 세포 수준 활성 및 질환 관련 표현형을 평가하고, 실험 데이터를 기반으로 치료 가능성을 탐색했습니다.',p2cat:'저분자 후보물질 평가',p2title:'Signaling Pathway Modulation',p2desc:'신호전달 경로 조절 후보물질의 세포 기반 활성을 reporter assay, 유전자 발현 및 단백질 분석으로 평가했습니다.',p3cat:'올리고뉴클레오타이드 플랫폼',p3title:'RNA-Targeting Platform Evaluation',p3desc:'올리고뉴클레오타이드의 설계 변수에 따른 표적 억제 활성을 비교하고, 구조–활성 관계를 평가했습니다.',p4cat:'골관절염 중개 연구',p4title:'Osteoarthritis Disease Models',p4desc:'연골세포 및 골관절염 모델에서 질환 관련 분자 지표와 표현형을 분석하고 실험 설계 및 효능 평가에 참여했습니다.',
    skillsTitle:'연구 기술<span class="accent">.</span>',skillsIntro:'실험 수행부터 데이터 해석 및 과학적 커뮤니케이션까지.',s1title:'세포 및 분자생물학',s2title:'기능 및 표현형 분석',s3title:'비임상 연구',s4title:'연구 문서 및 커뮤니케이션',
    outputsTitle:'논문 및 지식재산<span class="accent">.</span>',outputsIntro:'공개된 서지 정보만 추가할 수 있도록 구성한 영역입니다.',pubTitle:'학술 논문',pubDesc:'공개된 논문의 제목, 학술지, 연도, DOI를 이곳에 추가하세요.',ipTitle:'특허 및 IP',ipDesc:'공개된 특허의 명칭, 공개번호, 기여 내용을 이곳에 추가하세요.',verify:'공개 정보 확인 후 업데이트',
    contactTitle:'새로운 연구의<br><em>연결을 기다립니다.</em>',contactDesc:'연구 협업 및 전문적인 교류에 관한 문의를 환영합니다.',emailLabel:'이메일 주소 설정하기',githubLabel:'프로필 링크 설정하기',linkedinLabel:'프로필 링크 설정하기',rights:'All rights reserved.',backTop:'맨 위로 ↑'
  },
  en: {
    skip:'Skip to content',navAbout:'Overview',navResearch:'Research',navSkills:'Technology',navOutputs:'Publications & IP',navContact:'Contact',
    heroEyebrow:'BIOMEDICAL RESEARCH · PORTFOLIO',heroTitle:'From biological<br>discovery to <em>therapeutic potential.</em>',heroDesc:'A biomedical R&D researcher connecting molecular hypotheses with experimental evidence, with a focus on nucleic acid therapeutics and osteoarthritis.',explore:'Explore Research',contactMe:'Get in Touch',scroll:'SCROLL TO EXPLORE',
    aboutTitle:'About Me<span class="accent">.</span>',aboutLead:'I investigate therapeutic possibilities by connecting biological questions, experimental models, and evidence-driven efficacy assessment.',aboutBody:'My research experience spans cell-based functional assays, molecular biology, disease models, data interpretation, and scientific documentation. I value reproducibility and rigorous communication of evidence.',fact1:'Nucleic acid therapeutics',fact2:'Disease-model evaluation',fact3:'Translational R&D & analysis',
    researchTitle:'Selected Research<span class="accent">.</span>',researchIntro:'A high-level overview of research areas and contributions suitable for public sharing.',p1cat:'Nucleic Acid Therapeutics',p1title:'Antisense Oligonucleotide Research',p1desc:'Evaluated cellular activity and disease-associated phenotypes of miRNA-targeting ASOs to investigate therapeutic potential.',p2cat:'Small-Molecule Evaluation',p2title:'Signaling Pathway Modulation',p2desc:'Assessed cell-based activity of pathway-modulating candidates using reporter assays, gene expression, and protein analysis.',p3cat:'Oligonucleotide Platform',p3title:'RNA-Targeting Platform Evaluation',p3desc:'Compared target inhibition across oligonucleotide design variables and evaluated structure–activity relationships.',p4cat:'Osteoarthritis Research',p4title:'Osteoarthritis Disease Models',p4desc:'Contributed to experimental design and efficacy assessment through molecular and phenotypic analyses in chondrocyte and osteoarthritis models.',
    skillsTitle:'Expertise<span class="accent">.</span>',skillsIntro:'From experimental execution to data interpretation and scientific communication.',s1title:'Cell & Molecular Biology',s2title:'Functional & Phenotypic Assays',s3title:'Preclinical Research',s4title:'Research Communication',
    outputsTitle:'Publications & IP<span class="accent">.</span>',outputsIntro:'This section is reserved for verified, publicly available records.',pubTitle:'Publications',pubDesc:'Add published article titles, journal names, years, and DOI links here.',ipTitle:'Patents & IP',ipDesc:'Add published patent titles, publication numbers, and your contribution here.',verify:'To be updated after public verification',
    contactTitle:'Let’s connect<br>through <em>research.</em>',contactDesc:'Open to scientific exchange and research collaborations.',emailLabel:'Add email address',githubLabel:'Add profile URL',linkedinLabel:'Add profile URL',rights:'All rights reserved.',backTop:'Back to top ↑'
  }
};
let currentLanguage = localStorage.getItem('portfolio-lang') === 'en' ? 'en' : 'ko';
function setLanguage(lang){
  currentLanguage=lang;localStorage.setItem('portfolio-lang',lang);document.documentElement.lang=lang;
  document.querySelectorAll('[data-i18n]').forEach(el=>{const key=el.dataset.i18n;if(translations[lang][key]!==undefined)el.textContent=translations[lang][key]});
  document.querySelectorAll('[data-i18n-html]').forEach(el=>{const key=el.dataset.i18nHtml;if(translations[lang][key]!==undefined)el.innerHTML=translations[lang][key]});
  document.getElementById('lang-toggle').innerHTML=lang==='ko'?'EN <span aria-hidden="true">↗</span>':'한국어 <span aria-hidden="true">↗</span>';
  document.querySelector('.menu-toggle').setAttribute('aria-label',lang==='ko'?'메뉴 열기':'Open menu');
  updateContact();
}
function updateContact(){
  const t=translations[currentLanguage];
  const email=document.getElementById('email-link');
  if(PROFILE.email){email.href='mailto:'+PROFILE.email;email.querySelector('strong').textContent=PROFILE.email}else{email.removeAttribute('href');email.querySelector('strong').textContent=t.emailLabel}
  for(const key of ['github','linkedin']){
    const el=document.getElementById(key+'-link');
    if(PROFILE[key]){el.href=PROFILE[key];el.querySelector('strong').textContent=PROFILE[key].replace(/^https?:\/\//,'').replace(/\/$/,'')}
    else{el.removeAttribute('href');el.querySelector('strong').textContent=t[key+'Label']}
  }
}
document.getElementById('lang-toggle').addEventListener('click',()=>setLanguage(currentLanguage==='ko'?'en':'ko'));
const menu=document.querySelector('.menu-toggle');const navLinks=document.getElementById('nav-links');
menu.addEventListener('click',()=>{const open=navLinks.classList.toggle('open');menu.setAttribute('aria-expanded',String(open))});
navLinks.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{navLinks.classList.remove('open');menu.setAttribute('aria-expanded','false')}));
document.getElementById('year').textContent=new Date().getFullYear();
if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}})},{threshold:.08});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el))}else{document.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible'))}
setLanguage(currentLanguage);

// Highlight the section currently visible in the viewport.
const sectionNavLinks = Array.from(document.querySelectorAll('.nav-links a[href^="#"]'));
function highlightCurrentSection() {
  const ids = ['about', 'research', 'skills', 'outputs', 'contact'];
  let active = '';
  const marker = window.scrollY + Math.min(window.innerHeight * 0.34, 240) + 88;
  for (const id of ids) {
    const section = document.getElementById(id);
    if (section && section.offsetTop <= marker) active = id;
  }
  sectionNavLinks.forEach(link => {
    const selected = link.getAttribute('href') === '#' + active;
    link.classList.toggle('is-active', selected);
    if (selected) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
}
window.addEventListener('scroll', highlightCurrentSection, { passive: true });
window.addEventListener('resize', highlightCurrentSection);
window.addEventListener('hashchange', highlightCurrentSection);
highlightCurrentSection();
