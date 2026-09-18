const revealObserver=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>revealObserver.observe(el));
const progress=document.querySelector('.progress');window.addEventListener('scroll',()=>{const h=document.documentElement.scrollHeight-innerHeight;progress.style.width=(scrollY/h*100)+'%'},{passive:true});
const repoBox=document.getElementById('github-projects');
fetch('https://api.github.com/users/AashiKumari15/repos?sort=updated&per_page=6')
.then(r=>r.json()).then(repos=>{
 if(!Array.isArray(repos)) throw new Error();
 const publicRepos=repos.filter(r=>!r.fork).slice(0,4);
 const allRepos=publicRepos.length?publicRepos:repos.slice(0,4);
 repoBox.innerHTML=allRepos.map(r=>`<a class="github-card" href="${r.html_url}" target="_blank" rel="noopener"><h4>${r.name}</h4><p>${r.description||'Public GitHub repository by Aashi Kumari.'}</p><div class="repo-meta"><span>● ${r.language||'Code'}</span><span>★ <b>${r.stargazers_count}</b></span><span>⑂ <b>${r.forks_count}</b></span></div></a>`).join('');
}).catch(()=>{repoBox.innerHTML='<a class="github-card" href="https://github.com/AashiKumari15?tab=repositories" target="_blank" rel="noopener"><h4>View AashiKumari15 repositories ↗</h4><p>Open GitHub to explore the latest public repositories.</p><div class="repo-meta"><span>GitHub</span></div></a>'});
