
  const burger = document.getElementById('burger');
  const links = document.querySelector('nav.links');
  const closeMenu = () => {
    if (!burger || !links) return;
    links.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
    burger.setAttribute('aria-label', 'Ouvrir le menu');
  };

  if (burger && links) {
    burger.addEventListener('click', () => {
      const open = !links.classList.contains('is-open');
      links.classList.toggle('is-open', open);
      burger.setAttribute('aria-expanded', String(open));
      burger.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
    });
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      if (window.innerWidth <= 920) closeMenu();
    }));
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && links.classList.contains('is-open')) closeMenu();
    });
    window.addEventListener('resize', () => {
      if (window.innerWidth > 920) closeMenu();
    });
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  // ---- mots rotatifs du titre (WhatsApp / Facebook / Instagram) ----
  const rotateWords = document.querySelectorAll('.rotate-word');
  if (rotateWords.length > 1) {
    let activeIndex = [...rotateWords].findIndex(w => w.classList.contains('is-active'));
    if (activeIndex === -1) activeIndex = 0;

    setInterval(() => {
      const current = rotateWords[activeIndex];
      const nextIndex = (activeIndex + 1) % rotateWords.length;
      const next = rotateWords[nextIndex];

      current.classList.add('is-leaving');
      current.classList.remove('is-active');

      next.classList.add('is-active');

      setTimeout(() => { current.classList.remove('is-leaving'); }, 450);

      activeIndex = nextIndex;
    }, 2200);
  }

  const form = document.getElementById('contactForm');
  const msg = document.getElementById('formMsg');
  const submitBtn = form.querySelector('button[type="submit"]');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    submitBtn.disabled = true;
    const originalLabel = submitBtn.textContent;
    submitBtn.textContent = 'Envoi en cours...';

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        msg.textContent = 'Merci — votre message a bien été envoyé. Je vous réponds sous 24 heures.';
        msg.style.color = 'var(--orange-deep)';
        form.reset();
      } else {
        msg.textContent = "Une erreur s'est produite. Merci de réessayer ou de m'écrire directement sur WhatsApp.";
        msg.style.color = '#C0392B';
      }
    } catch (err) {
      msg.textContent = "Connexion impossible. Merci de réessayer ou de m'écrire directement sur WhatsApp.";
      msg.style.color = '#C0392B';
    }

    msg.classList.add('show');
    submitBtn.disabled = false;
    submitBtn.textContent = originalLabel;
  });
