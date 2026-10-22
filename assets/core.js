/* Motor compartido de los ejemplos: agenda, botones demo, secciones y módulos especiales. */
(function () {
  const EJ = window.EJEMPLO || { giro: "nutricion", n: 1, total: 3 };
  const N = Object.assign({}, (window.GIROS || {})[EJ.giro], window.NEGOCIO || {});
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const money = n => "$" + n.toLocaleString("es-MX");
  const DIAS = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
  const DIAS_C = ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"];
  const MESES = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
  const cap = s => s[0].toUpperCase() + s.slice(1);
  const DULCE_WA = "525585637134";

  /* ---------- iconos ---------- */
  const I = {
    wa: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.5 0-3-.4-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.200Zm4.500-6.100c-.2-.1-1.500-.7-1.700-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.200-.3.200-.5.100a6.700 6.700 0 0 1-3.300-2.900c-.2-.4.200-.4.700-1.300.1-.2 0-.3 0-.4l-.8-1.800c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.300 3 3 0 0 0-.9 2.200c0 1.300.9 2.500 1 2.700.1.200 1.800 2.800 4.400 3.900 1.600.7 2.200.7 3 .6.500-.1 1.500-.6 1.700-1.200.2-.6.2-1.100.1-1.200l-.4-.2Z"/></svg>',
    ig: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17.200" cy="6.800" r="1.200" fill="currentColor"/></svg>',
    fb: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M13.500 21v-8h2.700l.4-3.200h-3.100V7.800c0-.9.300-1.500 1.600-1.500h1.700V3.400c-.3 0-1.300-.1-2.400-.1-2.400 0-4 1.500-4 4.100v2.400H7.700V13h2.700v8h3.100Z"/></svg>',
    tt: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M16.600 3h-3.100v11.500a2.600 2.600 0 1 1-2.600-2.600c.3 0 .5 0 .8.1V8.800a5.700 5.700 0 1 0 4.900 5.700V9a7 7 0 0 0 4 1.300V7.200a4 4 0 0 1-4-4.200Z"/></svg>',
    pin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7Zm0 9.500A2.500 2.500 0 1 1 12 6.500a2.500 2.500 0 0 1 0 5Z"/></svg>',
    cal: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="3" fill="none" stroke="currentColor" stroke-width="2"/><path d="M3 10h18M8 3v4M16 3v4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    phone: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M6.600 10.800a15 15 0 0 0 6.600 6.600l2.200-2.200a1 1 0 0 1 1-.2c1.100.4 2.300.6 3.600.6a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.500a1 1 0 0 1 1 1c0 1.300.2 2.500.6 3.600a1 1 0 0 1-.2 1l-2.300 2.200Z"/></svg>'
  };
  window.DSD_ICONS = I;

  /* ---------- formas para botones ---------- */
  const FORMAS = {
    tooth: { ty: "36%", svg: '<path d="M30 8C14 8 6 22 10 40c3 15 8 22 10 38 1 12 7 16 12 10 6-8 8-22 18-22s12 14 18 22c5 6 11 2 12-10 2-16 7-23 10-38 4-18-4-32-20-32-8 0-14 6-20 6S38 8 30 8Z"/>' },
    paw: { ty: "69%", svg: '<ellipse cx="20" cy="42" rx="9" ry="12" transform="rotate(-22 20 42)"/><ellipse cx="39" cy="24" rx="9" ry="13" transform="rotate(-8 39 24)"/><ellipse cx="61" cy="24" rx="9" ry="13" transform="rotate(8 61 24)"/><ellipse cx="80" cy="42" rx="9" ry="12" transform="rotate(22 80 42)"/><path d="M50 50C32 50 20 64 22 78c2 12 16 12 28 8 12 4 26 4 28-8 2-14-10-28-28-28Z"/>' },
    brain: { ty: "50%", svg: '<path d="M50 14c-8-6-20-4-24 4-10 0-16 10-12 18-6 6-4 18 4 22 0 10 10 18 20 16 4 8 12 10 12 10s8-2 12-10c10 2 20-6 20-16 8-4 10-16 4-22 4-8-2-18-12-18-4-8-16-10-24-4Z"/><path d="M50 16v68M30 38c6 0 10 4 10 10M70 38c-6 0-10 4-10 10M32 64c6-2 10 0 12 4M68 64c-6-2-10 0-12 4" fill="none" stroke="#fff" stroke-opacity=".28" stroke-width="2.500" stroke-linecap="round"/>' },
    leaf: { ty: "52%", svg: '<path d="M50 5C82 20 94 52 72 78 62 90 50 94 50 94S38 90 28 78C6 52 18 20 50 5Z"/><path d="M50 94V30" fill="none" stroke="#fff" stroke-opacity=".28" stroke-width="2.500" stroke-linecap="round"/>' },
    heart: { ty: "46%", svg: '<path d="M50 90C20 68 6 50 6 32 6 18 17 8 30 8c8 0 16 4 20 12 4-8 12-12 20-12 13 0 24 10 24 24 0 18-14 36-44 58Z"/>' }
  };
  $$("[data-forma]").forEach(b => {
    const f = FORMAS[b.dataset.forma]; if (!f) return;
    b.classList.add("forma");
    b.style.setProperty("--ty", f.ty);
    const label = b.innerHTML;
    b.innerHTML = '<svg viewBox="0 0 100 100" aria-hidden="true" fill="currentColor">' + f.svg + "</svg><span>" + label + "</span>";
  });

  /* ---------- aviso emergente de demostración ---------- */
  let toastEl, toastT;
  function toast(msg) {
    if (!toastEl) { toastEl = document.createElement("div"); toastEl.className = "dsd-toast"; toastEl.setAttribute("role", "status"); document.body.appendChild(toastEl); }
    toastEl.textContent = msg; toastEl.classList.add("on");
    clearTimeout(toastT); toastT = setTimeout(() => toastEl.classList.remove("on"), 3200);
  }
  document.addEventListener("click", e => {
    const d = e.target.closest("[data-demo]");
    if (d) { e.preventDefault(); toast(d.dataset.demo); }
  });
  const DEMO = {
    wa: "Demo: aquí se abriría el WhatsApp del negocio.",
    ig: "Demo: aquí se abriría su Instagram.",
    fb: "Demo: aquí se abriría su Facebook.",
    tt: "Demo: aquí se abriría su TikTok.",
    llamar: "Demo: aquí se marcaría el teléfono del negocio."
  };
  $$("[data-red]").forEach(a => { a.setAttribute("data-demo", DEMO[a.dataset.red] || "Demo"); a.setAttribute("href", "#"); });

  /* ---------- texto suelto desde la configuración ---------- */
  $$("[data-n]").forEach(e => { e.textContent = N[e.dataset.n] || ""; });
  document.title = (N.nombre || "Ejemplo") + (N.giro ? ", " + N.giro.toLowerCase() : "");

  /* ---------- secciones ---------- */
  const R = {
    servicios(el) {
      el.classList.add("servicios-lista");
      el.innerHTML = N.servicios.map((s, i) =>
        `<li style="--i:${i}"><span class="n">${s.nombre}</span><span class="d">${s.detalle}</span><span class="p">${money(s.precio)}<small>${s.duracion}</small></span></li>`).join("");
    },
    pasos(el) {
      el.classList.add("pasos-lista");
      el.innerHTML = N.pasos.map(p => `<li><h3>${p.t}</h3><p>${p.d}</p></li>`).join("");
    },
    resenas(el) {
      el.classList.add("resenas-lista");
      el.innerHTML = N.resenas.map(r => `<figure><blockquote>${r.t}</blockquote><figcaption>${r.n}</figcaption></figure>`).join("");
    },
    faq(el) {
      el.classList.add("faq-lista");
      el.innerHTML = N.faq.map((f, i) => `<details${i === 0 ? " open" : ""}><summary>${f.q}</summary><p>${f.a}</p></details>`).join("");
    },
    horario(el) {
      el.classList.add("horario-lista");
      el.innerHTML = [1, 2, 3, 4, 5, 6, 0].map(d => {
        const t = N.horario[d];
        return `<dt>${cap(DIAS[d])}</dt><dd class="${t ? "" : "cerrado"}">${t ? t.map(r => r.join(" a ")).join(" y ") : "Cerrado"}</dd>`;
      }).join("");
    },
    redes(el) {
      el.classList.add("redes");
      const lista = [["wa", "WhatsApp", I.wa], ["ig", "Instagram", I.ig], ["fb", "Facebook", I.fb], ["tt", "TikTok", I.tt]];
      el.innerHTML = lista.map(([k, n, ic]) => `<a class="red red-${k}" data-red="${k}" href="#" aria-label="${n}">${ic}<span>${n}</span></a>`).join("");
      $$("[data-red]", el).forEach(a => a.setAttribute("data-demo", DEMO[a.dataset.red]));
    },
    contacto(el) {
      el.classList.add("contacto");
      const q = encodeURIComponent(N.direccion + ", " + N.ciudad);
      el.innerHTML = `<address>${N.direccion}<br>${N.ciudad}</address>
        <a class="btn" target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query=${q}">${I.pin}<span>Cómo llegar</span></a>
        <a class="btn btn-o" href="#" data-demo="${DEMO.llamar}">${I.phone}<span>Llamar ${N.tel}</span></a>`;
    },
    arma(el) {
      el.classList.add("arma");
      el.innerHTML = `<ul class="arma-lista">${N.servicios.map((s, i) => `<li><label><input type="checkbox" data-i="${i}"><span class="arma-t"><b>${s.nombre}</b><small>${s.duracion}</small></span><span class="arma-p">${money(s.precio)}</span></label></li>`).join("")}</ul>
        <div class="arma-tot" aria-live="polite"><div><small>Tu visita</small><strong id="arma-total">${money(0)}</strong></div><p id="arma-n">Elige uno o más servicios.</p><a class="btn" href="#agenda" id="arma-go">Reservar</a></div>`;
      const act = () => {
        const sel = $$("input:checked", el).map(c => N.servicios[+c.dataset.i]);
        $("#arma-total", el).textContent = money(sel.reduce((a, s) => a + s.precio, 0));
        $("#arma-n", el).textContent = sel.length ? sel.map(s => s.nombre).join(" + ") : "Elige uno o más servicios.";
        const sv = $('select[name="servicio"]'); if (sv && sel.length) sv.value = sel[0].nombre;
      };
      el.addEventListener("change", act); act();
    },
    cotiza(el) {
      el.classList.add("cotiza");
      const C = N.cotiza, op = (a, f) => a.map((x, i) => `<option value="${i}">${f(x)}</option>`).join("");
      el.innerHTML = `<div class="cot-campos"><label>Tamaño<select id="cot-t">${op(C.tamanos, x => x[0])}</select></label><label>Zona del cuerpo<select id="cot-z">${op(C.zonas, x => x[0])}</select></label><label>Estilo<select id="cot-e">${op(C.estilos, x => x[0])}</select></label></div>
        <div class="cot-res" aria-live="polite"><small>Precio aproximado</small><strong id="cot-r"></strong><p>La cifra final se confirma en tu consulta de diseño.</p><a class="btn" href="#agenda">Agendar consulta</a></div>`;
      const f = () => {
        const t = C.tamanos[+$("#cot-t", el).value], z = C.zonas[+$("#cot-z", el).value][1], e = C.estilos[+$("#cot-e", el).value][1], k = z * e;
        $("#cot-r", el).textContent = money(Math.round(t[1] * k / 50) * 50) + " a " + money(Math.round(t[2] * k / 50) * 50);
      };
      el.addEventListener("change", f); f();
    },
    estilos(el) {
      el.classList.add("estilos-lista");
      el.innerHTML = N.estilos.map((e, i) => `<li style="--i:${i}"><span class="est-fig" aria-hidden="true"></span><b>${e[0]}</b><small>${e[1]}</small></li>`).join("");
    },
    docs(el) {
      el.classList.add("docs");
      const k = Object.keys(N.docs);
      el.innerHTML = `<label class="docs-sel">¿Qué trámite necesitas?<select id="docs-s">${k.map(x => `<option>${x}</option>`).join("")}</select></label><ul class="docs-lista" id="docs-l"></ul><button type="button" class="btn btn-o" data-demo="Demo: aquí se enviaría la lista a tu WhatsApp.">Enviarme la lista por WhatsApp</button>`;
      const f = () => { $("#docs-l", el).innerHTML = N.docs[$("#docs-s", el).value].map(d => `<li><label><input type="checkbox"><span>${d}</span></label></li>`).join(""); };
      $("#docs-s", el).addEventListener("change", f); f();
    },
    cartilla(el) {
      el.classList.add("cartilla");
      el.innerHTML = `<div class="cartilla-in">
        <label>Nombre de tu mascota<input id="c-nombre" value="Rocky" autocomplete="off"></label>
        <div class="c-esp" role="group" aria-label="Especie"><button type="button" class="on" data-e="Perro">Perro</button><button type="button" data-e="Gato">Gato</button></div>
      </div><div class="cartilla-out" id="c-out" aria-live="polite"></div>`;
      let esp = "Perro";
      const hoy = new Date();
      const f = d => { const x = new Date(hoy); x.setDate(x.getDate() + d); return x.getDate() + " " + MESES[x.getMonth()].slice(0, 3) + " " + x.getFullYear(); };
      function pinta() {
        const nom = ($("#c-nombre", el).value || "Tu mascota").trim();
        const vac = esp === "Perro"
          ? [["Rabia", -200, 165], ["Múltiple canina", -200, 165], ["Bordetella", -120, 245]]
          : [["Rabia", -200, 165], ["Triple felina", -200, 165], ["Leucemia felina", -90, 275]];
        $("#c-out", el).innerHTML = `<div class="c-card"><h4>Cartilla de ${nom}</h4><p class="c-sub">${esp}, ejemplo de datos</p>
          <ul>${vac.map(v => `<li><b>${v[0]}</b><span>Aplicada ${f(v[1])}</span><em>Próxima ${f(v[2])}</em></li>`).join("")}
          <li><b>Desparasitación</b><span>Aplicada ${f(-30)}</span><em>Próxima ${f(60)}</em></li></ul></div>
          <div class="c-card"><h4>Última receta</h4><p class="c-sub">${f(-12)}</p>
          <p class="c-rec">Antiparasitario externo, una dosis al mes.<br>Revisión de seguimiento en 15 días.</p>
          <button type="button" class="btn btn-o chico" data-demo="Demo: aquí se descargaría la receta en PDF.">Descargar receta</button></div>`;
      }
      el.addEventListener("input", pinta);
      $$(".c-esp button", el).forEach(b => b.addEventListener("click", () => { esp = b.dataset.e; $$(".c-esp button", el).forEach(x => x.classList.toggle("on", x === b)); pinta(); }));
      pinta();
    },
    respira(el) {
      el.classList.add("respira");
      el.innerHTML = `<div class="r-orbe" id="r-orbe"><span id="r-txt">Toca para empezar</span></div><p class="r-nota">Un minuto de respiración lenta. Inhala 4 segundos, exhala 6.</p>`;
      let on = false, timer;
      const orbe = $("#r-orbe", el), txt = $("#r-txt", el);
      function ciclo() {
        orbe.classList.add("in"); orbe.classList.remove("out"); txt.textContent = "Inhala";
        timer = setTimeout(() => { orbe.classList.remove("in"); orbe.classList.add("out"); txt.textContent = "Exhala"; timer = setTimeout(ciclo, 6000); }, 4000);
      }
      orbe.setAttribute("role", "button"); orbe.tabIndex = 0;
      const toggle = () => { on = !on; if (on) ciclo(); else { clearTimeout(timer); orbe.classList.remove("in", "out"); txt.textContent = "Toca para empezar"; } };
      orbe.addEventListener("click", toggle);
      orbe.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); } });
    },
    sonrisa(el) {
      el.classList.add("sonrisa");
      el.innerHTML = `<div class="s-dientes" id="s-d" aria-hidden="true">${"<i></i>".repeat(6)}</div>
        <label class="s-ctl">Antes <input type="range" min="0" max="100" value="20" id="s-r" aria-label="Antes y después, ejemplo"> Después</label>
        <p class="r-nota">Ejemplo ilustrativo del tono del esmalte.</p>`;
      const r = $("#s-r", el), d = $("#s-d", el);
      const set = () => { const v = +r.value; d.style.setProperty("--tono", `hsl(${48 - v * .1} ${60 - v * .5}% ${72 + v * .24}%)`); };
      r.addEventListener("input", set); set();
    }
  };
  $$("[data-r]").forEach(el => { const f = R[el.dataset.r]; if (f && el.dataset.r !== "agenda") f(el); });

  /* ---------- agenda ---------- */
  const agEl = $('[data-r="agenda"]');
  if (agEl) {
    const A = N.agenda || {};
    const extra = (A.campos || []).map(c => c.tipo === "select"
      ? `<label>${c.label}<select name="${c.name}">${c.opciones.map(o => `<option>${o}</option>`).join("")}</select></label>`
      : `<label>${c.label}<input name="${c.name}" autocomplete="off"></label>`).join("");
    const mod = A.modalidades ? `<fieldset><legend>Modalidad</legend>${A.modalidades.map((m, i) => `<label class="radio"><input type="radio" name="modalidad" value="${m}"${i === 0 ? " checked" : ""}> ${m}</label>`).join("")}</fieldset>` : "";
    agEl.classList.add("ag");
    agEl.innerHTML = `
      <div class="ag-col">
        <h3 id="ag-t1">Elige el día</h3><div class="ag-dias" id="ag-dias" role="group" aria-labelledby="ag-t1"></div>
        <h3 id="ag-t2">Elige la hora</h3><div class="ag-horas" id="ag-horas" role="group" aria-labelledby="ag-t2"><p class="vacio">Primero elige un día.</p></div>
      </div>
      <form class="ag-form" id="ag-form" novalidate>
        <h3>Tus datos</h3>
        <label>Nombre completo<input name="nombre" autocomplete="name"></label>
        <label>WhatsApp<input name="tel" inputmode="tel" autocomplete="tel" placeholder="55 1234 5678"></label>
        <label>Servicio<select name="servicio">${N.servicios.map(s => `<option>${s.nombre}</option>`).join("")}</select></label>
        ${extra}${mod}
        <p class="ag-resumen" id="ag-resumen">Aún no has elegido día y hora.</p>
        <p class="ag-error" id="ag-error" role="alert" hidden></p>
        <button class="btn" type="submit">Confirmar cita</button>
        <p class="ag-nota">Demostración: la cita se guarda solo en este navegador.</p>
      </form>
      <div class="ag-listo" id="ag-listo" hidden tabindex="-1">
        <h3>Cita agendada</h3><p id="ag-listo-txt"></p>
        <div class="ag-acc">
          <button class="btn" type="button" data-demo="${DEMO.wa}">Confirmar por WhatsApp</button>
          <button class="btn btn-o" type="button" id="ag-ics">Agregar al calendario</button>
          <button class="btn-texto" type="button" id="ag-otra">Agendar otra</button>
        </div>
      </div>`;

    const LS = "dsd-citas-" + EJ.giro + "-" + EJ.n;
    let citas = []; try { citas = JSON.parse(localStorage.getItem(LS) || "[]"); } catch (e) {}
    const guardar = () => { try { localStorage.setItem(LS, JSON.stringify(citas)); } catch (e) {} };
    const pad = n => String(n).padStart(2, "0");
    const key = d => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
    const mins = h => { const [a, b] = h.split(":").map(Number); return a * 60 + b; };
    const hhmm = m => `${pad(Math.floor(m / 60))}:${pad(m % 60)}`;
    const horariosDe = d => { const r = N.horario[d.getDay()]; if (!r) return []; const o = []; r.forEach(([a, b]) => { for (let m = mins(a); m + N.duracion <= mins(b); m += N.duracion + 15) o.push(hhmm(m)); }); return o; };
    const ocupado = (d, h) => { const k = key(d) + h; let x = 0; for (const c of k) x = (x * 31 + c.charCodeAt(0)) >>> 0; return x % 5 === 0 || citas.some(c => c.fecha === key(d) && c.hora === h); };
    const disp = d => { const hoy = new Date(); return horariosDe(d).filter(h => key(d) !== key(hoy) || mins(h) > hoy.getHours() * 60 + hoy.getMinutes() + 60); };
    const larga = d => `${DIAS[d.getDay()]} ${d.getDate()} de ${MESES[d.getMonth()]}`;

    const lista = []; const base = new Date(); base.setHours(0, 0, 0, 0);
    for (let i = 0; lista.length < 14 && i < 30; i++) { const d = new Date(base); d.setDate(base.getDate() + i); if (N.horario[d.getDay()]) lista.push(d); }
    const diasEl = $("#ag-dias"), horasEl = $("#ag-horas"), resumen = $("#ag-resumen"), form = $("#ag-form"), err = $("#ag-error"), listo = $("#ag-listo"), col = $(".ag-col", agEl);
    let dSel = null, hSel = null, ultima = null;

    diasEl.innerHTML = lista.map((d, i) => {
      const libres = disp(d).filter(h => !ocupado(d, h)).length;
      return `<button type="button" class="dia" data-i="${i}" aria-pressed="false" ${libres ? "" : "disabled"} aria-label="${larga(d)}"><span>${DIAS_C[d.getDay()]}</span><strong>${d.getDate()}</strong><span>${MESES[d.getMonth()].slice(0, 3)}</span></button>`;
    }).join("");
    diasEl.addEventListener("click", e => {
      const b = e.target.closest(".dia"); if (!b || b.disabled) return;
      $$(".dia", diasEl).forEach(x => x.setAttribute("aria-pressed", "false")); b.setAttribute("aria-pressed", "true");
      dSel = lista[+b.dataset.i]; hSel = null;
      horasEl.innerHTML = disp(dSel).map(h => `<button type="button" class="hora" data-h="${h}" aria-pressed="false" ${ocupado(dSel, h) ? "disabled" : ""}>${h}</button>`).join("") || '<p class="vacio">No hay horarios este día.</p>';
      resumen2();
    });
    horasEl.addEventListener("click", e => {
      const b = e.target.closest(".hora"); if (!b || b.disabled) return;
      $$(".hora", horasEl).forEach(x => x.setAttribute("aria-pressed", "false")); b.setAttribute("aria-pressed", "true"); hSel = b.dataset.h; resumen2();
    });
    function resumen2() { resumen.textContent = dSel && hSel ? `${cap(larga(dSel))}, ${hSel} h` : dSel ? "Ahora elige una hora." : "Aún no has elegido día y hora."; }

    form.addEventListener("submit", e => {
      e.preventDefault(); err.hidden = true;
      const f = new FormData(form), nombre = (f.get("nombre") || "").trim(), tel = (f.get("tel") || "").replace(/\D/g, "");
      let m = "";
      if (!dSel || !hSel) m = "Elige un día y una hora.";
      else if (nombre.length < 3) m = "Escribe tu nombre completo.";
      else if (tel.length < 10) m = "Escribe tu WhatsApp a 10 dígitos.";
      if (m) { err.textContent = m; err.hidden = false; return; }
      ultima = { fecha: key(dSel), hora: hSel, nombre, servicio: f.get("servicio"), modalidad: f.get("modalidad") || "" };
      citas.push(ultima); guardar();
      const extraTxt = f.get("mascota") ? ` para ${f.get("mascota")}` : "";
      $("#ag-listo-txt").textContent = `${nombre.split(" ")[0]}, te esperamos el ${larga(dSel)} a las ${hSel} h${extraTxt}. Te llegará un recordatorio un día antes (en la versión real).`;
      form.hidden = true; col.hidden = true; listo.hidden = false; listo.focus(); listo.scrollIntoView({ behavior: "smooth", block: "center" });
    });
    $("#ag-ics").addEventListener("click", () => {
      if (!ultima) return;
      const [y, m, d] = ultima.fecha.split("-"), ini = ultima.hora.replace(":", ""), fin = hhmm(mins(ultima.hora) + N.duracion).replace(":", "");
      const ics = ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//DS DigitalCode//ES", "BEGIN:VEVENT", `UID:${Date.now()}@dsdigitalcode`, `DTSTART:${y}${m}${d}T${ini}00`, `DTEND:${y}${m}${d}T${fin}00`, `SUMMARY:${ultima.servicio} en ${N.nombre}`, `LOCATION:${N.direccion}`, "END:VEVENT", "END:VCALENDAR"].join("\r\n");
      const a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([ics], { type: "text/calendar" })); a.download = "cita.ics"; a.click();
    });
    $("#ag-otra").addEventListener("click", () => {
      listo.hidden = true; form.hidden = false; col.hidden = false; form.reset(); dSel = hSel = null;
      horasEl.innerHTML = '<p class="vacio">Primero elige un día.</p>'; $$(".dia", diasEl).forEach(x => x.setAttribute("aria-pressed", "false")); resumen2();
      agEl.scrollIntoView({ behavior: "smooth" });
    });
  }

  /* ---------- barra de navegación entre ejemplos y pie con el contacto ---------- */
  if (window.self !== window.top) return; // dentro de las vistas previas del portafolio no se muestran
  const nav = document.createElement("nav");
  nav.className = "dsd-nav"; nav.setAttribute("aria-label", "Portafolio");
  let links = `<a href="../../index.html" class="dsd-volver">← Portafolio</a><span class="dsd-sep" aria-hidden="true"></span>`;
  for (let i = 1; i <= EJ.total; i++) links += `<a href="../${i}/index.html"${i === EJ.n ? ' aria-current="page"' : ""}>${i}</a>`;
  nav.innerHTML = links; document.body.appendChild(nav);

  const pie = document.createElement("aside");
  pie.className = "dsd-pie";
  pie.innerHTML = `Página de demostración de DS DigitalCode. ¿Quieres una para tu negocio? <a href="https://wa.me/${DULCE_WA}?text=${encodeURIComponent("Hola Dulce, vi tu portafolio y me interesa una página web.")}" target="_blank" rel="noopener">WhatsApp +52 55 8563 7134</a>`;
  document.body.appendChild(pie);
})();
