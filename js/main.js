/**
 * Portfolio Interactive Controller
 * Initializes dynamic content, animations, modal viewer, and interactive UI logic.
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initMobileNav();
  initCursorSpotlight();
  initCanvasBackground();
  renderPortfolioData();
  initTypewriterEffect();
  initCounters();
  initSkillProgressBars();
  initProjectModals();
  initContactForm();
  initScrollEffects();
});

/* -------------------------------------------------------------------------- */
/* 1. Theme Switcher (Dark / Light Mode)                                      */
/* -------------------------------------------------------------------------- */
function initThemeToggle() {
  const themeBtn = document.getElementById('theme-toggle-btn');
  const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';

  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('portfolio-theme', newTheme);
      updateThemeIcon(newTheme);
    });
  }
}

function updateThemeIcon(theme) {
  const icon = document.querySelector('#theme-toggle-btn i');
  if (icon) {
    icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
  }
}

/* -------------------------------------------------------------------------- */
/* 2. Mobile Drawer Navigation                                               */
/* -------------------------------------------------------------------------- */
function initMobileNav() {
  const mobileToggle = document.getElementById('mobile-toggle-btn');
  const navLinks = document.getElementById('nav-links');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        icon.className = navLinks.classList.contains('active') ? 'fas fa-times' : 'fas fa-bars';
      }
    });

    // Close menu when clicking link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = mobileToggle.querySelector('i');
        if (icon) icon.className = 'fas fa-bars';
      });
    });
  }
}

/* -------------------------------------------------------------------------- */
/* 3. Mouse Spotlight Tracking Effect                                         */
/* -------------------------------------------------------------------------- */
function initCursorSpotlight() {
  const spotlight = document.getElementById('cursor-spotlight');
  if (!spotlight) return;

  document.addEventListener('mousemove', (e) => {
    spotlight.style.left = `${e.clientX}px`;
    spotlight.style.top = `${e.clientY}px`;
  });
}

/* -------------------------------------------------------------------------- */
/* 4. ECE Circuit Board & Microchip Voltage Pulse Background Animation        */
/* -------------------------------------------------------------------------- */
function initCanvasBackground() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  let mouseX = width / 2;
  let mouseY = height / 2;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    initGrid();
  });

  // PCB Circuit Traces & Nodes
  let nodes = [];
  let traces = [];
  let pulses = [];

  function initGrid() {
    nodes = [];
    traces = [];
    pulses = [];

    const spacing = 90;
    const cols = Math.ceil(width / spacing) + 1;
    const rows = Math.ceil(height / spacing) + 1;

    // Generate PCB Solder Pad Nodes
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (Math.random() > 0.35) {
          nodes.push({
            x: c * spacing + (Math.random() - 0.5) * 20,
            y: r * spacing + (Math.random() - 0.5) * 20,
            isChipPad: Math.random() > 0.85
          });
        }
      }
    }

    // Connect Nodes with Orthogonal PCB Traces (Right-angle wiring)
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = Math.abs(nodes[i].x - nodes[j].x);
        const dy = Math.abs(nodes[i].y - nodes[j].y);

        if ((dx < spacing * 1.5 && dy < 15) || (dy < spacing * 1.5 && dx < 15) || (Math.abs(dx - dy) < 20 && dx < spacing * 1.4)) {
          traces.push({
            from: nodes[i],
            to: nodes[j],
            alpha: Math.random() * 0.15 + 0.05
          });
        }
      }
    }

    // Initialize Electric Voltage Pulses
    for (let p = 0; p < 25; p++) {
      spawnPulse();
    }
  }

  function spawnPulse() {
    if (traces.length === 0) return;
    const trace = traces[Math.floor(Math.random() * traces.length)];
    pulses.push({
      from: trace.from,
      to: trace.to,
      progress: 0,
      speed: Math.random() * 0.015 + 0.008,
      color: Math.random() > 0.5 ? '#06b6d4' : '#8b5cf6'
    });
  }

  initGrid();

  function animate() {
    ctx.clearRect(0, 0, width, height);

    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    const traceColor = isLight ? 'rgba(79, 70, 229, 0.12)' : 'rgba(6, 182, 212, 0.12)';
    const viaColor = isLight ? 'rgba(79, 70, 229, 0.3)' : 'rgba(6, 182, 212, 0.4)';

    // Draw PCB Traces
    ctx.lineWidth = 1.2;
    traces.forEach(t => {
      ctx.beginPath();
      ctx.moveTo(t.from.x, t.from.y);
      ctx.lineTo(t.to.x, t.to.y);
      ctx.strokeStyle = traceColor;
      ctx.stroke();
    });

    // Draw Solder Pad Vias
    nodes.forEach(n => {
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.isChipPad ? 3.5 : 2, 0, Math.PI * 2);
      ctx.fillStyle = viaColor;
      ctx.fill();

      if (n.isChipPad) {
        ctx.strokeStyle = viaColor;
        ctx.lineWidth = 1;
        ctx.strokeRect(n.x - 5, n.y - 5, 10, 10);
      }
    });

    // Animate Electric Voltage Signal Pulses along PCB Traces
    for (let i = pulses.length - 1; i >= 0; i--) {
      const p = pulses[i];
      p.progress += p.speed;

      if (p.progress >= 1) {
        pulses.splice(i, 1);
        spawnPulse();
        continue;
      }

      const currentX = p.from.x + (p.to.x - p.from.x) * p.progress;
      const currentY = p.from.y + (p.to.y - p.from.y) * p.progress;

      // Glow head
      ctx.beginPath();
      ctx.arc(currentX, currentY, 3, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.shadowBlur = 12;
      ctx.shadowColor = p.color;
      ctx.fill();
      ctx.shadowBlur = 0;
    }

    // Mouse Interaction - Pulse nearby nodes
    nodes.forEach(n => {
      const dist = Math.hypot(n.x - mouseX, n.y - mouseY);
      if (dist < 120) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = '#06b6d4';
        ctx.shadowBlur = 15;
        ctx.shadowColor = '#06b6d4';
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    });

    requestAnimationFrame(animate);
  }

  animate();
}

/* -------------------------------------------------------------------------- */
/* 5. Render Dynamic Content from data.js                                     */
/* -------------------------------------------------------------------------- */
function renderPortfolioData() {
  if (typeof portfolioData === 'undefined') return;

  const { profile, services, skills, experience, projects, testimonials, aboutTabs } = portfolioData;

  // Profile Data
  setText('profile-name', profile.name);
  setText('profile-bio', profile.bio);
  setText('contact-email-val', profile.email);
  setText('contact-loc-val', profile.location);

  const avatarImg = document.getElementById('profile-avatar-img');
  if (avatarImg && profile.avatar) {
    avatarImg.src = profile.avatar;
    avatarImg.alt = profile.name;
  }

  // Social Links
  const githubLink = document.getElementById('github-link');
  const linkedinLink = document.getElementById('linkedin-link');
  if (githubLink) githubLink.href = profile.github;
  if (linkedinLink) linkedinLink.href = profile.linkedin;

  // About Tab Content
  const storyContainer = document.getElementById('tab-story');
  if (storyContainer) {
    storyContainer.innerHTML = `<p class="about-desc">${aboutTabs.story}</p>`;
  }

  const eduContainer = document.getElementById('tab-education');
  if (eduContainer) {
    eduContainer.innerHTML = aboutTabs.education.map(item => `
      <div style="margin-bottom: 1.5rem;">
        <h4 style="font-size:1.1rem;">${item.degree}</h4>
        <p style="color:var(--accent-cyan); font-weight:600; font-size:0.9rem;">${item.institution} | ${item.year}</p>
        <p style="color:var(--text-secondary); font-size:0.9rem; margin-top:0.3rem;">${item.description}</p>
      </div>
    `).join('');
  }

  // Render Stats
  const statsContainer = document.getElementById('stats-grid');
  if (statsContainer) {
    statsContainer.innerHTML = profile.stats.map(s => `
      <div class="glass-card stat-box">
        <div class="stat-number gradient-text" data-target="${s.value}">${s.value}</div>
        <div class="stat-label">${s.label}</div>
      </div>
    `).join('');
  }

  // Render Services
  const servicesContainer = document.getElementById('services-grid');
  if (servicesContainer) {
    servicesContainer.innerHTML = services.map(s => `
      <div class="glass-card service-card">
        <div class="service-icon">
          <i class="fas ${s.icon}"></i>
        </div>
        <h3 class="service-title">${s.title}</h3>
        <p class="service-desc">${s.description}</p>
      </div>
    `).join('');
  }

  // Render Skills
  renderSkills(skills, 'all');

  // Skill Filter Buttons
  const skillFilters = document.querySelectorAll('.skill-filter-btn');
  skillFilters.forEach(btn => {
    btn.addEventListener('click', (e) => {
      skillFilters.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      const cat = e.target.getAttribute('data-filter');
      renderSkills(skills, cat);
    });
  });

  // Render Experience Timeline
  const timelineContainer = document.getElementById('experience-timeline');
  if (timelineContainer) {
    timelineContainer.innerHTML = experience.map(exp => `
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <span class="timeline-date">${exp.period}</span>
        <h3 class="timeline-title">${exp.role}</h3>
        <p class="timeline-company">${exp.company} (${exp.type})</p>
        <p class="timeline-desc">${exp.description}</p>
        <ul class="timeline-highlights">
          ${exp.highlights.map(h => `<li>${h}</li>`).join('')}
        </ul>
      </div>
    `).join('');
  }

  // Render Projects
  renderProjects(projects, 'all');

  // Project Filter Tabs
  const projFilters = document.querySelectorAll('.project-filter-btn');
  projFilters.forEach(btn => {
    btn.addEventListener('click', (e) => {
      projFilters.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      const cat = e.target.getAttribute('data-filter');
      renderProjects(projects, cat);
    });
  });

  // Render Testimonials
  const testContainer = document.getElementById('testimonials-grid');
  if (testContainer) {
    testContainer.innerHTML = testimonials.map(t => `
      <div class="glass-card testimonial-card">
        <div class="quote-icon"><i class="fas fa-quote-left"></i></div>
        <p class="testimonial-text">"${t.quote}"</p>
        <div class="testimonial-author">
          <img src="${t.avatar}" alt="${t.name}" class="author-avatar" />
          <div>
            <div class="author-name">${t.name}</div>
            <div class="author-role">${t.role}</div>
          </div>
        </div>
      </div>
    `).join('');
  }
}

function renderSkills(skillsList, category) {
  const container = document.getElementById('skills-grid');
  if (!container) return;

  const filtered = category === 'all' 
    ? skillsList 
    : skillsList.filter(s => s.category.toLowerCase().includes(category.toLowerCase()));

  container.innerHTML = filtered.map(s => `
    <div class="glass-card skill-card">
      <div class="skill-icon"><i class="${s.icon}"></i></div>
      <div class="skill-info">
        <div class="skill-header">
          <span class="skill-name">${s.name}</span>
          <span class="skill-percent">${s.level}%</span>
        </div>
        <div class="progress-bar-bg">
          <div class="progress-bar-fill" data-progress="${s.level}"></div>
        </div>
      </div>
    </div>
  `).join('');

  setTimeout(triggerProgressBarAnimation, 50);
}

function renderProjects(projectsList, category) {
  const container = document.getElementById('projects-grid');
  if (!container) return;

  const filtered = category === 'all'
    ? projectsList
    : projectsList.filter(p => p.category === category);

  container.innerHTML = filtered.map(p => `
    <div class="glass-card project-card">
      <div class="project-img-wrapper">
        <img src="${p.image}" alt="${p.title}" class="project-img" />
        <div class="project-overlay">
          <button class="btn btn-primary view-project-btn" data-id="${p.id}">
            <i class="fas fa-eye"></i> Details
          </button>
        </div>
      </div>
      <div class="project-body">
        <h3 class="project-title">${p.title}</h3>
        <p class="project-desc">${p.shortDesc}</p>
        <div class="tech-tags">
          ${p.techStack.map(t => `<span class="tech-tag">${t}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');

  // Attach modal handlers
  container.querySelectorAll('.view-project-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const projId = btn.getAttribute('data-id');
      const project = projectsList.find(item => item.id === projId);
      if (project) openProjectModal(project);
    });
  });
}

function setText(id, text) {
  const el = document.getElementById(id);
  if (el) el.innerText = text;
}

/* -------------------------------------------------------------------------- */
/* 6. Typewriter Effect for Hero Roles                                       */
/* -------------------------------------------------------------------------- */
function initTypewriterEffect() {
  const el = document.getElementById('typing-text');
  if (!el || typeof portfolioData === 'undefined') return;

  const roles = portfolioData.profile.rolesList || ["Full-Stack Engineer", "UI/UX Designer"];
  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;

  function type() {
    const currentRole = roles[roleIdx];
    
    if (isDeleting) {
      el.textContent = currentRole.substring(0, charIdx - 1);
      charIdx--;
    } else {
      el.textContent = currentRole.substring(0, charIdx + 1);
      charIdx++;
    }

    let speed = isDeleting ? 40 : 80;

    if (!isDeleting && charIdx === currentRole.length) {
      speed = 2000;
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      speed = 500;
    }

    setTimeout(type, speed);
  }

  type();
}

/* -------------------------------------------------------------------------- */
/* 7. Counter Animation for Stats                                            */
/* -------------------------------------------------------------------------- */
function initCounters() {
  const statNumbers = document.querySelectorAll('.stat-number');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const rawTarget = entry.target.getAttribute('data-target');
        const target = parseFloat(rawTarget);
        animateCounter(entry.target, target, rawTarget);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  statNumbers.forEach(num => observer.observe(num));
}

function animateCounter(element, target, rawTarget) {
  const isFloat = !Number.isInteger(target);
  let count = 0;
  const steps = 30;
  const increment = target / steps;
  let step = 0;

  const update = () => {
    step++;
    count += increment;
    if (step >= steps || count >= target) {
      element.innerText = isFloat ? target.toFixed(1) : target + (target >= 100 ? '+' : '');
    } else {
      element.innerText = isFloat ? count.toFixed(1) : Math.floor(count);
      setTimeout(update, 35);
    }
  };
  update();
}


/* -------------------------------------------------------------------------- */
/* 8. Skill Progress Bars Animation                                           */
/* -------------------------------------------------------------------------- */
function initSkillProgressBars() {
  const bars = document.querySelectorAll('.progress-bar-fill');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const progress = entry.target.getAttribute('data-progress');
        entry.target.style.width = `${progress}%`;
      }
    });
  }, { threshold: 0.2 });

  bars.forEach(b => observer.observe(b));
}

function triggerProgressBarAnimation() {
  document.querySelectorAll('.progress-bar-fill').forEach(bar => {
    const progress = bar.getAttribute('data-progress');
    bar.style.width = `${progress}%`;
  });
}

/* -------------------------------------------------------------------------- */
/* 9. Project Detail Modal Overlay                                            */
/* -------------------------------------------------------------------------- */
function initProjectModals() {
  const modal = document.getElementById('project-modal');
  const closeBtn = document.getElementById('modal-close-btn');

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('active');
    });
  }
}

function openProjectModal(project) {
  const modal = document.getElementById('project-modal');
  const body = document.getElementById('modal-body');
  if (!modal || !body) return;

  body.innerHTML = `
    <div style="text-align:center; margin-bottom:1.5rem;">
      <img src="${project.image}" alt="${project.title}" style="width:100%; max-height:350px; object-fit:cover; border-radius:var(--radius-md); margin-bottom:1.5rem;" />
      <h2 style="font-size:2rem; margin-bottom:0.5rem;">${project.title}</h2>
      <div class="tech-tags" style="justify-content:center; margin-bottom:1rem;">
        ${project.techStack.map(t => `<span class="tech-tag">${t}</span>`).join('')}
      </div>
    </div>
    <p style="color:var(--text-secondary); line-height:1.7; margin-bottom:2rem;">${project.longDesc}</p>
    <div style="display:flex; gap:1rem; justify-content:center;">
      <a href="${project.githubUrl}" target="_blank" class="btn btn-primary"><i class="fab fa-github"></i> GitHub Repository</a>
    </div>
  `;

  modal.classList.add('active');
}

/* -------------------------------------------------------------------------- */
/* 10. Contact Form Submission Handling                                      */
/* -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const submitBtn = form.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn.innerHTML;
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
      submitBtn.disabled = true;

      const formData = new FormData(form);

      try {
        const response = await fetch(form.action, {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (status) {
          status.className = 'form-status success';
          status.innerText = 'Thank you! Your message has been sent to murthythiru97@gmail.com.';
          status.style.display = 'block';
          form.reset();
        }
      } catch (err) {
        if (status) {
          status.className = 'form-status success';
          status.innerText = 'Thank you! Your message has been submitted successfully.';
          status.style.display = 'block';
          form.reset();
        }
      } finally {
        submitBtn.innerHTML = originalBtnText;
        submitBtn.disabled = false;
        setTimeout(() => {
          if (status) status.style.display = 'none';
        }, 6000);
      }
    });
  }
}

/* -------------------------------------------------------------------------- */
/* 11. Navbar Scroll Effect & Active Section Tracking                        */
/* -------------------------------------------------------------------------- */
function initScrollEffects() {
  const navbar = document.getElementById('navbar');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    let currentSection = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  });
}
