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

let activeTab = "coffee";

const bagIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>`;

function initNavbar() {
  const header = document.getElementById("site-header");
  const mobileOpen = document.getElementById("mobile-menu-open");
  const mobileOverlay = document.getElementById("mobile-overlay");
  const mobileClose = document.getElementById("mobile-menu-close");
  const cartOpen = document.getElementById("cart-open");

  const onScroll = () => {
    header.classList.toggle("site-header--scrolled", window.scrollY > 24);
  };
  window.addEventListener("scroll", onScroll);
  onScroll();

  cartOpen?.addEventListener("click", () => setCartOpen(true));

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

function updateCartBadge() {
  const badge = document.getElementById("cart-count");
  if (!badge) return;
  const { count } = getCart();
  badge.textContent = String(count);
  badge.hidden = count === 0;
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

  subscribe(() => {
    renderCartDrawer();
    updateCartBadge();
  });
  renderCartDrawer();
  updateCartBadge();
}

function renderMenuTabs() {
  const container = document.getElementById("menu-tabs");
  if (!container) return;
  container.innerHTML = MENU_TABS.map(
    (t) =>
      `<button type="button" role="tab" aria-selected="${activeTab === t.id}" class="menu-tab${activeTab === t.id ? " menu-tab--active" : ""}" data-tab="${t.id}">${t.label}</button>`
  ).join("");

  container.querySelectorAll(".menu-tab").forEach((btn) => {
    btn.addEventListener("click", () => {
      activeTab = btn.dataset.tab;
      renderMenuTabs();
      renderMenuGrid();
    });
  });
}

function formatPriceMeta(item, variantIndex = 0) {
  const v = item.variants[variantIndex];
  if (!v) return "";
  if (item.variants.length === 1) return formatKip(v.price);
  return `${formatKip(v.price)} / ${v.label}`;
}

function renderMenuGrid() {
  const grid = document.getElementById("menu-grid");
  if (!grid) return;

  const items = MENU.filter((m) => m.category === activeTab);

  grid.innerHTML = items
    .map((item) => {
      const hasVariants = item.variants.length > 1;
      const variantOptions = item.variants
        .map(
          (v, vi) =>
            `<option value="${vi}"${vi === 0 ? " selected" : ""}>${v.label} — ${formatKip(v.price)}</option>`
        )
        .join("");

      return `
      <article class="menu-card">
        <div class="menu-card-image">
          <img src="${item.image}" alt="${item.name}" loading="lazy" width="400" height="400" />
        </div>
        <div class="menu-card-footer">
          <h3 class="menu-card-name">${item.name}</h3>
          <span class="menu-card-lao">${item.lao}</span>
          <div class="menu-card-row">
            <div class="menu-card-meta">
              <span class="menu-card-price" data-item-id="${item.id}">${formatPriceMeta(item, 0)}</span>
              ${
                hasVariants
                  ? `<select class="menu-card-variant" data-item-id="${item.id}" aria-label="Size for ${item.name}">${variantOptions}</select>`
                  : ""
              }
            </div>
            <button type="button" class="menu-card-add" data-item-id="${item.id}" data-variant-index="0">
              <span>Add to cart</span>
              ${bagIcon}
            </button>
          </div>
        </div>
      </article>`;
    })
    .join("");

  grid.querySelectorAll(".menu-card-variant").forEach((select) => {
    select.addEventListener("change", () => {
      const item = MENU.find((m) => m.id === select.dataset.itemId);
      const card = select.closest(".menu-card");
      const priceEl = card?.querySelector(".menu-card-price");
      const addBtn = card?.querySelector(".menu-card-add");
      const vi = Number(select.value);
      if (item && priceEl) priceEl.textContent = formatPriceMeta(item, vi);
      if (addBtn) addBtn.dataset.variantIndex = String(vi);
    });
  });

  grid.querySelectorAll(".menu-card-add").forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = MENU.find((m) => m.id === btn.dataset.itemId);
      if (item) addToCart(item, Number(btn.dataset.variantIndex || 0));
    });
  });
}

document.getElementById("footer-year").textContent = String(new Date().getFullYear());

initNavbar();
initCart();
renderMenuTabs();
renderMenuGrid();
