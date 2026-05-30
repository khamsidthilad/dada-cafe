import { MENU, MENU_TABS, formatKip } from "./data.js";
import {
  addToCart,
  getCart,
  removeFromCart,
  renderCartDrawer,
  setCartOpen,
  setLineQty,
  subscribe,
} from "./cart.js";

let activeTab = "all";

function initNavbar() {
  const header = document.getElementById("site-header");
  const darkToggle = document.getElementById("dark-toggle");
  const mobileOpen = document.getElementById("mobile-menu-open");
  const mobileOverlay = document.getElementById("mobile-overlay");
  const mobileClose = document.getElementById("mobile-menu-close");

  const onScroll = () => {
    header.classList.toggle("site-header--scrolled", window.scrollY > 24);
  };
  window.addEventListener("scroll", onScroll);
  onScroll();

  darkToggle?.addEventListener("click", () => {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    darkToggle.setAttribute("aria-pressed", String(next));
    darkToggle.innerHTML = next ? iconSun() : iconMoon();
  });

  mobileOpen?.addEventListener("click", () => {
    mobileOverlay.hidden = false;
    document.body.classList.add("nav-open");
  });

  const closeMobile = () => {
    mobileOverlay.hidden = true;
    document.body.classList.remove("nav-open");
  };

  mobileClose?.addEventListener("click", closeMobile);
  mobileOverlay?.addEventListener("click", (e) => {
    if (e.target === mobileOverlay) closeMobile();
  });
  mobileOverlay?.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeMobile));
}

function initCart() {
  document.getElementById("cart-close")?.addEventListener("click", () => setCartOpen(false));
  document.getElementById("cart-overlay")?.addEventListener("click", (e) => {
    if (e.target.id === "cart-overlay") setCartOpen(false);
  });

  document.getElementById("cart-lines")?.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;
    const id = btn.dataset.cartQty || btn.dataset.cartRemove;
    if (btn.dataset.cartRemove) {
      removeFromCart(id);
      return;
    }
    if (btn.dataset.cartQty) {
      const line = getCart().lines.find((l) => l.id === id);
      if (line) setLineQty(id, line.qty + Number(btn.dataset.delta));
    }
  });

  subscribe(renderCartDrawer);
  renderCartDrawer();
}

function renderMenuTabs() {
  const container = document.getElementById("menu-tabs");
  if (!container) return;
  container.innerHTML = MENU_TABS.map(
    (t) =>
      `<button type="button" class="menu-tab${activeTab === t.id ? " menu-tab--active" : ""}" data-tab="${t.id}">${t.label}</button>`
  ).join("");

  container.querySelectorAll(".menu-tab").forEach((btn) => {
    btn.addEventListener("click", () => {
      activeTab = btn.dataset.tab;
      renderMenuTabs();
      renderMenuGrid();
    });
  });
}

function renderMenuGrid() {
  const grid = document.getElementById("menu-grid");
  if (!grid) return;

  const items = activeTab === "all" ? MENU : MENU.filter((m) => m.category === activeTab);

  grid.innerHTML = items
    .map((item) => {
      const minPrice = Math.min(...item.variants.map((v) => v.price));
      const priceLabel =
        item.variants.length > 1 ? `from ${formatKip(minPrice)}` : formatKip(minPrice);
      const variants = item.variants
        .map(
          (v, vi) => `
        <button type="button" class="menu-variant" data-item-id="${item.id}" data-variant-index="${vi}">
          <span class="menu-variant-label"><span aria-hidden="true">+</span> ${v.label}</span>
          <span>${formatKip(v.price)}</span>
        </button>`
        )
        .join("");

      return `
      <article class="menu-card glass">
        <div class="menu-card-image">
          <img src="${item.image}" alt="${item.name}" loading="lazy" width="800" height="600" />
          <span class="menu-card-category">${item.category}</span>
        </div>
        <div class="menu-card-body">
          <div class="menu-card-header">
            <h3>${item.name}</h3>
            <span class="menu-card-price">${priceLabel}</span>
          </div>
          <div class="menu-card-lao">${item.lao}</div>
          ${item.description ? `<p class="menu-card-desc">${item.description}</p>` : ""}
          <div class="menu-card-variants">${variants}</div>
        </div>
      </article>`;
    })
    .join("");

  grid.querySelectorAll(".menu-variant").forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = MENU.find((m) => m.id === btn.dataset.itemId);
      if (item) addToCart(item, Number(btn.dataset.variantIndex));
    });
  });
}

function iconMoon() {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`;
}

function iconSun() {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`;
}

document.getElementById("footer-year").textContent = String(new Date().getFullYear());

initNavbar();
initCart();
renderMenuTabs();
renderMenuGrid();
