// ===================== DATA =====================
const data = {
  personalInfo: {
    name: "Arpita Jena",
    tagline: "CSIT Student & Full-Stack Developer",
    summary:
      "Hi, I'm Arpita Jena—a final-year CSIT student at GITA Autonomous College with a passion for full-stack development, data engineering, and building impactful experiences. When I'm not coding, you can find me mentoring juniors, coordinating college cultural fests, or volunteering for community service.",
    email: "jenaarpi2004@gmail.com",
    phone: "+91 8260523656",
    location: "Bhubaneswar, India",
    linkedin: "#",
    resumeLink: "Arpita_Jena_Resume.pdf",
  },
  skills: [
    {
      category: "Languages",
      items: ["Java", "Python", "SQL (PostgreSQL)", "JavaScript", "HTML/CSS"],
    },
    { category: "Frameworks", items: ["React", "Node.js"] },
    {
      category: "Developer Tools",
      items: ["Google Cloud Platform", "VS Code", "PyCharm", "IntelliJ"],
    },
    { category: "Libraries", items: ["pandas", "NumPy", "Matplotlib"] },
  ],
  projects: [
    {
      title: "Web Scraping & Sentiment Analysis",
      tech: ["Python", "PostgreSQL", "Scrapy"],
      description:
        "Pipeline to extract posts, store in PostgreSQL, and run sentiment analysis for actionable insights.",
    },
    {
      title: "Chat Application",
      tech: ["MERN", "Socket.IO", "Chakra UI"],
      description:
        "Real-time chat with auth, group/individual messaging, and live updates.",
    },
    {
      title: "Library Management System",
      tech: ["Java", "Swing", "MySQL"],
      description:
        "Desktop GUI for book catalog, user management, and transactions.",
    },
  ],
  experience: [
    {
      title: "Intern",
      company: "Hindustan Aeronautics Limited",
      period: "May–Jun 2024",
      description:
        "Built CSV-to-PostgreSQL import using Drizzle-ORM; improved migration performance.",
    },
  ],
  achievements: [
    {
      title: "Spreadsheet Apps: Excel",
      provider: "Coursera",
      date: "Aug 2024",
    },
    { title: "Google Cloud Computing", provider: "NPTEL", date: "Oct 2023" },
  ],
  education: [
    {
      institution: "GITA Autonomous College",
      degree: "B.Tech CSIT",
      period: "2021-2025",
      gpa: "8.82",
    },
    {
      institution: "Saraswati Shisu Vidya Mandir",
      degree: "CHSE",
      period: "2019-2021",
      score: "75%",
    },
    {
      institution: "Sri Aurobindo Purnanga Shiksha Kendra",
      degree: "BSE",
      period: "2018-2019",
      score: "73%",
    },
  ],
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/arpita-jena/",
    github: "https://www.linkedin.com/in/arpita-jena/",
    twitter: "#",
    instagram: "https://www.instagram.com/arpita_jena_02/",
  },
  activities: [
    {
      activity: "Volunteer – Day of Service (Bakul Foundation)",
      date: "Oct 2023",
    },
    {
      activity: "Coordinator – Drama Club & Utsah Cultural Fest",
      date: "2023–Present",
    },
    {
      activity: "Elite Member – Viral Fission (10+ events)",
      date: "2022–Present",
    },
  ],
};

// ===================== DOM POPULATION =====================
document.addEventListener("DOMContentLoaded", () => {
  populateHero();
  populateSocialLinks();
  populateAbout();
  populateSkills();
  populateProjects();
  populateExperience();
  populateAchievements();
  populateEducation();
  initScrollReveal();
  initNavHighlight();
  initContactForm();
  document.getElementById("year").textContent = new Date().getFullYear();
});

function populateHero() {
  document.getElementById("heroName").textContent = data.personalInfo.name;
  document.getElementById("heroTagline").textContent = data.personalInfo.tagline;
  document.getElementById("resumeLink").href = data.personalInfo.resumeLink;
}

function populateSocialLinks() {
  const socialContainer = document.getElementById("social-links");
  const socialIcons = [
    { platform: "linkedin", icon: "fab fa-linkedin", url: data.socialLinks.linkedin },
    { platform: "github", icon: "fab fa-github", url: data.socialLinks.github },
    { platform: "twitter", icon: "fab fa-twitter", url: data.socialLinks.twitter },
    { platform: "instagram", icon: "fab fa-instagram", url: data.socialLinks.instagram },
  ];

  socialIcons.forEach((social) => {
    const link = document.createElement("a");
    link.href = social.url;
    link.target = "_blank";
    link.setAttribute("aria-label", social.platform);
    link.innerHTML = `<i class="${social.icon}"></i>`;
    socialContainer.appendChild(link);
  });
}

function populateAbout() {
  const aboutText = document.querySelector(".about-text");
  aboutText.innerHTML = `<p>${data.personalInfo.summary}</p>`;
  
  const illustration = document.querySelector(".illustration");
  illustration.textContent = "Design & Innovation";
}

function populateSkills() {
  const skillsGrid = document.getElementById("skills-grid");
  const skillIcons = {
    Languages: "fa-code",
    Frameworks: "fa-layer-group",
    "Developer Tools": "fa-tools",
    Libraries: "fa-book",
  };

  data.skills.forEach((skill) => {
    const card = document.createElement("div");
    card.className = "skill-card";
    const iconClass = skillIcons[skill.category] || "fa-star";

    card.innerHTML = `
      <i class="fas ${iconClass}"></i>
      <h4>${skill.category}</h4>
      <p>${skill.items.join(", ")}</p>
    `;
    skillsGrid.appendChild(card);
  });
}

function populateProjects() {
  const grid = document.getElementById("projects-grid");
  data.projects.forEach((proj, index) => {
    const card = document.createElement("div");
    card.className = "project-card";

    const techBadges = proj.tech.map((t) => `<span>${t}</span>`).join("");

    card.innerHTML = `
      <div class="project-card__body">
        <h4>${proj.title}</h4>
        <div class="tech-badges">${techBadges}</div>
        <p>${proj.description}</p>
        <div class="project-actions">
          <a href="#" target="_blank" class="btn btn--primary">Demo${index + 1}</a>
          <a href="#" target="_blank" class="btn btn--outline">Code${index + 1}</a>
        </div>
      </div>
    `;

    grid.appendChild(card);
  });
}

function populateExperience() {
  const timeline = document.getElementById("experience-timeline");
  data.experience.forEach((exp) => {
    const item = document.createElement("div");
    item.className = "timeline-item";
    item.innerHTML = `
      <h4>${exp.title} – ${exp.company}</h4>
      <div class="period">${exp.period}</div>
      <p>${exp.description}</p>
    `;
    timeline.appendChild(item);
  });
}

function populateEducation() {
  const timeline = document.getElementById("education-timeline");
  data.education.forEach((edu) => {
    const item = document.createElement("div");
    item.className = "timeline-item";
    const scoreInfo = edu.gpa ? `GPA: ${edu.gpa}` : edu.score ? `Score: ${edu.score}` : "";
    
    item.innerHTML = `
      <h4>${edu.degree}</h4>
      <div class="period">${edu.institution} | ${edu.period}</div>
      ${scoreInfo ? `<p>${scoreInfo}</p>` : ""}
    `;
    timeline.appendChild(item);
  });
}

function populateAchievements() {
  const achList = document.getElementById("achievements-list");
  data.achievements.forEach((ach) => {
    const li = document.createElement("li");
    li.textContent = `${ach.title} – ${ach.provider} (${ach.date})`;
    achList.appendChild(li);
  });

  const actList = document.getElementById("activities-list");
  data.activities.forEach((act) => {
    const li = document.createElement("li");
    li.textContent = `${act.activity} (${act.date})`;
    actList.appendChild(li);
  });
}

// ===================== ScrollReveal Animations =====================
function initScrollReveal() {
  const sr = ScrollReveal({
    distance: "40px",
    duration: 800,
    easing: "ease-out",
    origin: "top",
    reset: false,
  });

  sr.reveal(".hero-content", { delay: 200 });
  sr.reveal("#about .about-text", { delay: 100 });
  sr.reveal("#about .illustration", { delay: 200 });
  sr.reveal("#skills .skill-card", { interval: 100 });
  sr.reveal("#projects .project-card", { interval: 150 });
  sr.reveal(".timeline-item", { interval: 120 });
  sr.reveal("#achievements .list li", { interval: 80 });
  sr.reveal("#contact .contact-card", { delay: 100 });
}

// ===================== Navigation Highlight =====================
function initNavHighlight() {
  const sections = [
    "home",
    "about",
    "skills",
    "projects",
    "experience",
    "achievements",
    "education",
    "contact",
  ];
  const navLinks = document.querySelectorAll(".nav-link");

  const options = {
    root: null,
    rootMargin: "0px 0px -60% 0px",
    threshold: 0,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const id = entry.target.id;
      const link = document.querySelector(`.nav-link[href='#${id}']`);
      if (entry.isIntersecting && link) {
        navLinks.forEach((l) => l.classList.remove("active"));
        link.classList.add("active");
      }
    });
  }, options);

  sections.forEach((id) => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });
}

// ===================== Contact Form =====================
function initContactForm() {
  const form = document.getElementById("contactForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const name = formData.get("name").trim();
    const email = formData.get("email").trim();
    const message = formData.get("message").trim();

    // Validation
    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    if (!isValidEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Create mailto link
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    const mailtoLink = `mailto:${data.personalInfo.email}?subject=${subject}&body=${body}`;

    // Open email client
    window.location.href = mailtoLink;

    // Show success message
    showFormSuccess();
  });
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function showFormSuccess() {
  const form = document.getElementById("contactForm");
  const originalHTML = form.innerHTML;
  
  form.innerHTML = `
    <div style="text-align: center; padding: 2rem;">
      <i class="fas fa-check-circle" style="font-size: 3rem; color: var(--color2); margin-bottom: 1rem;"></i>
      <h3>Thank you!</h3>
      <p>Your message has been sent. I'll get back to you soon!</p>
      <button type="button" class="btn btn--outline" onclick="resetContactForm()">Send Another Message</button>
    </div>
  `;
  
  // Store original form HTML for reset
  window.originalFormHTML = originalHTML;
}

function resetContactForm() {
  const form = document.getElementById("contactForm");
  form.innerHTML = window.originalFormHTML;
  initContactForm(); // Re-initialize form event listeners
}

// ===================== Additional Interactions =====================

// Add smooth scrolling for navigation links
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
  
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    });
  });
});

// Add button hover effects
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".btn");
  
  buttons.forEach((btn) => {
    btn.addEventListener("mouseenter", () => {
      btn.style.transform = "translateY(-2px)";
    });
    
    btn.addEventListener("mouseleave", () => {
      btn.style.transform = "translateY(0)";
    });
  });
});

// Add loading animation for page
window.addEventListener("load", () => {
  document.body.style.opacity = "0";
  document.body.style.transition = "opacity 0.5s ease-in-out";
  
  setTimeout(() => {
    document.body.style.opacity = "1";
  }, 100);
});