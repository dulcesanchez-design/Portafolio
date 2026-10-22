/* Efectos de fondo para los ejemplos oscuros: anillo de partículas, polvo y texto que se descifra. */
(function () {
  const quiet = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const hex = h => { h = h.replace("#", ""); return [0, 2, 4].map(i => parseInt(h.substr(i, 2), 16)); };
  const mix = (a, b, t) => a.map((v, i) => Math.round(v + (b[i] - v) * t));

  function fit(c) {
    const r = c.parentElement.getBoundingClientRect(), d = Math.min(devicePixelRatio || 1, 2);
    c.width = Math.max(1, r.width * d); c.height = Math.max(1, r.height * d);
    return { w: c.width, h: c.height, d };
  }

  /* Anillo de partículas con degradado (c1 arriba a la izquierda, c2 abajo) */
  function ring(box) {
    const c = document.createElement("canvas"); box.appendChild(c);
    const g = c.getContext("2d"), c1 = hex(box.dataset.c1 || "#ff6a3d"), c2 = hex(box.dataset.c2 || "#3d6bff");
    let S = fit(c), t = 0, vis = true;
    const N = innerWidth < 700 ? 4200 : 10000;
    const P = Array.from({ length: N }, () => ({ a: Math.random() * 6.2832, k: Math.random(), s: Math.random() * 1.2 + .3, o: Math.random() * 6.2832 }));
    const mouse = { x: -1, y: -1 };
    box.addEventListener("pointermove", e => { const r = c.getBoundingClientRect(); mouse.x = (e.clientX - r.left) * S.d; mouse.y = (e.clientY - r.top) * S.d; });
    box.addEventListener("pointerleave", () => { mouse.x = mouse.y = -1; });
    new ResizeObserver(() => { S = fit(c); }).observe(box);
    new IntersectionObserver(e => { vis = e[0].isIntersecting; }).observe(box);
    function draw() {
      if (vis) {
        g.clearRect(0, 0, S.w, S.h);
        const cx = S.w / 2, cy = S.h / 2, R = Math.min(S.w, S.h) * .4;
        g.globalCompositeOperation = "lighter";
        for (const p of P) {
          const a = p.a + t * .06 * (.5 + p.s * .3);
          const wave = Math.sin(a * 5 + t + p.o) * .035 + Math.sin(a * 9 - t * 1.3) * .02 + Math.sin(a * 2 + t * .5) * .05;
          const spread = (p.k - .5) * .16 * (1 + Math.sin(a * 3 + t) * .6);
          const r = R * (1 + wave + spread);
          let x = cx + Math.cos(a) * r, y = cy + Math.sin(a) * r;
          if (mouse.x > 0) { const dx = x - mouse.x, dy = y - mouse.y, d2 = dx * dx + dy * dy, m = R * .35; if (d2 < m * m) { const f = (1 - Math.sqrt(d2) / m) * 26 * S.d; const dd = Math.sqrt(d2) || 1; x += dx / dd * f; y += dy / dd * f; } }
          const u = (Math.sin(a - 2.2) + 1) / 2; /* 0 = c1, 1 = c2 */
          const col = mix(c1, c2, u);
          g.fillStyle = `rgba(${col[0]},${col[1]},${col[2]},${.35 + p.k * .55})`;
          const z = (p.s + .5) * S.d * 1.1; g.fillRect(x, y, z, z);
        }
        g.globalCompositeOperation = "source-over";
      }
      t += .012; if (!quiet) requestAnimationFrame(draw);
    }
    draw();
  }

  /* Polvo que se junta hacia el puntero */
  function dust(box) {
    const c = document.createElement("canvas"); box.appendChild(c);
    const g = c.getContext("2d"), c1 = box.dataset.c1 || "#d9b8ff", c2 = box.dataset.c2 || c1;
    let S = fit(c), vis = true;
    const N = innerWidth < 700 ? 900 : 2600;
    const P = Array.from({ length: N }, (_, i) => ({ x: Math.random(), y: Math.random(), vx: 0, vy: 0, s: Math.random() * 1.8 + .9, c: i % 3 ? c1 : c2, h: Math.random() * 6.28 }));
    const m = { x: .5, y: .5, on: false };
    box.addEventListener("pointermove", e => { const r = c.getBoundingClientRect(); m.x = (e.clientX - r.left) / r.width; m.y = (e.clientY - r.top) / r.height; m.on = true; });
    box.addEventListener("pointerleave", () => { m.on = false; });
    new ResizeObserver(() => { S = fit(c); }).observe(box);
    new IntersectionObserver(e => { vis = e[0].isIntersecting; }).observe(box);
    let t = 0;
    function draw() {
      if (vis) {
        g.clearRect(0, 0, S.w, S.h);
        const tx = m.on ? m.x : .5 + Math.cos(t * .4) * .18, ty = m.on ? m.y : .5 + Math.sin(t * .5) * .14;
        for (const p of P) {
          const dx = tx - p.x, dy = ty - p.y, d = Math.hypot(dx, dy) + .02;
          p.vx += (dx / d) * .00006 + Math.cos(t + p.h) * .00004; p.vy += (dy / d) * .00006 + Math.sin(t * 1.1 + p.h) * .00004;
          p.vx *= .985; p.vy *= .985; p.x += p.vx; p.y += p.vy;
          if (d < .035) { p.x = Math.random(); p.y = Math.random(); p.vx = p.vy = 0; }
          g.fillStyle = p.c; g.globalAlpha = .45 + Math.min(.5, .03 / d);
          g.fillRect(p.x * S.w, p.y * S.h, p.s * S.d, p.s * S.d);
        }
        g.globalAlpha = 1;
      }
      t += .012; if (!quiet) requestAnimationFrame(draw);
    }
    draw();
  }

  /* Texto que se descifra letra por letra */
  function scramble(el) {
    const txt = el.textContent, ch = "#%&$@*+=/?<>01"; if (quiet) return;
    el.setAttribute("aria-label", txt);
    let f = 0; const total = 26;
    const id = setInterval(() => {
      f++; const done = Math.floor(txt.length * f / total);
      el.textContent = txt.split("").map((c, i) => c === " " || i < done ? c : ch[Math.random() * ch.length | 0]).join("");
      if (f >= total) { clearInterval(id); el.textContent = txt; }
    }, 42);
    el.addEventListener("pointerenter", () => { el.textContent = txt; });
  }

  $$("[data-fx=ring]").forEach(ring); $$("[data-fx=dust]").forEach(dust); $$("[data-scramble]").forEach(scramble);
})();
