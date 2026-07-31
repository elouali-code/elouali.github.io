/* ============================================
   THEME TOGGLE (Dark/Light)
   ============================================ */
(function() {
	// Apply saved theme immediately (before paint)
	const saved = localStorage.getItem('portfolio-theme');
	if (saved) {
		document.documentElement.setAttribute('data-theme', saved);
	}

	document.addEventListener('DOMContentLoaded', function() {
		const btn = document.getElementById('theme-toggle-btn');
		if (!btn) return;

		btn.addEventListener('click', function() {
			const current = document.documentElement.getAttribute('data-theme');
			const next = current === 'light' ? 'dark' : 'light';
			document.documentElement.setAttribute('data-theme', next);
			localStorage.setItem('portfolio-theme', next);
		});
	});
})();

/* ============================================
   PAGE TRANSITIONS
   ============================================ */
(function() {
	document.addEventListener('DOMContentLoaded', function() {
		// Create overlay element
		const overlay = document.createElement('div');
		overlay.className = 'page-transition-overlay';
		document.body.appendChild(overlay);

		// Intercept internal link clicks for smooth transitions
		document.addEventListener('click', function(e) {
			const link = e.target.closest('a');
			if (!link) return;
			
			const href = link.getAttribute('href');
			if (!href) return;
			
			// Skip external links, anchors, downloads, new tabs
			if (link.target === '_blank' || 
				link.hasAttribute('download') ||
				href.startsWith('http') || 
				href.startsWith('mailto:') || 
				href.startsWith('tel:') ||
				href.startsWith('#') ||
				href.endsWith('.pdf')) return;

			e.preventDefault();
			overlay.classList.add('active');
			
			setTimeout(function() {
				window.location.href = href;
			}, 300);
		});
	});
})();

/* ============================================
   ANIMATED COUNTER (Stats)
   ============================================ */
(function() {
	document.addEventListener('DOMContentLoaded', function() {
		const counters = document.querySelectorAll('.stat-number');
		if (!counters.length) return;

		const animateCounter = function(el) {
			const target = parseInt(el.getAttribute('data-target'), 10);
			const suffix = el.getAttribute('data-suffix') || '';
			const duration = 2000;
			const start = 0;
			const startTime = performance.now();

			function update(currentTime) {
				const elapsed = currentTime - startTime;
				const progress = Math.min(elapsed / duration, 1);
				
				// Ease out cubic
				const eased = 1 - Math.pow(1 - progress, 3);
				const current = Math.round(start + (target - start) * eased);
				
				el.textContent = current + suffix;
				
				if (progress < 1) {
					requestAnimationFrame(update);
				}
			}
			
			requestAnimationFrame(update);
		};

		const observer = new IntersectionObserver(function(entries) {
			entries.forEach(function(entry) {
				if (entry.isIntersecting) {
					animateCounter(entry.target);
					observer.unobserve(entry.target);
				}
			});
		}, { threshold: 0.3 });

		counters.forEach(function(counter) { observer.observe(counter); });
	});
})();
