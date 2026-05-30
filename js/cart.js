import { formatKip } from "./data.js";

const state = {
  lines: [],
  open: false,
};

const listeners = new Set();

export function subscribe(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

function notify() {
  listeners.forEach((fn) => fn(getCart()));
}

export function getCart() {
  const count = state.lines.reduce((s, l) => s + l.qty, 0);
  const total = state.lines.reduce((s, l) => s + l.qty * l.price, 0);
  return { ...state, count, total };
}

export function setCartOpen(open) {
  state.open = open;
  notify();
}

export function addToCart(item, variantIndex = 0) {
  const v = item.variants[variantIndex] ?? item.variants[0];
  const id = `${item.id}:${v.label}`;
  const existing = state.lines.find((l) => l.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    state.lines.push({
      id,
      itemId: item.id,
      name: item.name,
      lao: item.lao,
      variant: v.label,
      price: v.price,
      image: item.image,
      qty: 1,
    });
  }
  showToast(`${item.name} · ${v.label} added`);
  notify();
}

export function removeFromCart(id) {
  state.lines = state.lines.filter((l) => l.id !== id);
  notify();
}

export function setLineQty(id, qty) {
  if (qty <= 0) {
    removeFromCart(id);
    return;
  }
  const line = state.lines.find((l) => l.id === id);
  if (line) line.qty = qty;
  notify();
}

export function renderCartDrawer() {
  const overlay = document.getElementById("cart-overlay");
  const list = document.getElementById("cart-lines");
  const totalEl = document.getElementById("cart-total");
  if (!overlay || !list || !totalEl) return;

  const { lines, total, open } = getCart();
  overlay.hidden = !open;
  overlay.setAttribute("aria-hidden", open ? "false" : "true");
  document.body.classList.toggle("cart-open", open);

  if (lines.length === 0) {
    list.innerHTML = '<p class="cart-empty">Your cart is empty.</p>';
  } else {
    list.innerHTML = lines
      .map(
        (l) => `
      <li class="cart-line">
        <img src="${l.image}" alt="" width="64" height="64" />
        <div class="cart-line-info">
          <div class="cart-line-name">${l.name} <span class="cart-line-variant">· ${l.variant}</span></div>
          <div class="cart-line-price">${formatKip(l.price)}</div>
        </div>
        <div class="cart-qty">
          <button type="button" data-cart-qty="${l.id}" data-delta="-1" aria-label="Decrease">−</button>
          <span>${l.qty}</span>
          <button type="button" data-cart-qty="${l.id}" data-delta="1" aria-label="Increase">+</button>
        </div>
        <button type="button" class="cart-remove" data-cart-remove="${l.id}" aria-label="Remove">×</button>
      </li>`
      )
      .join("");
  }

  totalEl.textContent = formatKip(total);
}

function showToast(message) {
  let toast = document.getElementById("toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast";
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add("toast--visible");
  clearTimeout(showToast._timer);
  showToast._timer = setTimeout(() => toast.classList.remove("toast--visible"), 2400);
}
