const k = (n) => n * 1000;

/** Resolve a filename under assets/ (handles spaces & special characters). */
export const asset = (file) => `assets/${encodeURIComponent(file)}`;

/** Images in assets/ — add new files here, then reference by key in MENU. */
export const ASSETS = {
  americano: "IcedAmericano-600x600-500x500.jpg",
  latte: "iced-latte.webp",
  cappuccino: "Frappuccino.jpeg",
  espresso: "Espresso-Frappe.jpg",
  mocha: "Mocha.webp",
  flatWhite: "Flat White.webp",
  vanillaLatte: "Vanilla Latte.jpg",
  caramelLatte: "Caramel Latte.jpg",
  hazelnut: "Hazelnut Cappuccino.jpg",
  macchiato: "Espresso Macchiato.webp",
  coldBrew: "How to Make Cold Brew Coffee.jpeg",
  // pourOver: "☕ Master Pour-Over Coffee _ Easy Brew Guide for Bold Flavor! ✨.jpeg",
  matcha: "Matcha-atte.png",
  chocolate: "Chocolate.jpeg",
  milkTea: "sathai.png",
  milk: "milk.jpeg",
  lemonTea: "Iced Lemon Tea.jpeg",
  honeyLemon: "Lemon & Honey.jpeg",
  hotTea: "hot-tea.jpg",
  soda: "gallery-2.jpg",
  strawberrySoda: "Strawberry Soda.jpeg",
  sodaAlt: "lemon-soda.webp",
  fruitShake: "mango-frooti.jpg",
  croissant: "You Wouldn't Suspect The Treats From This_.jpeg",
  BlackHoneyLemon: "Black Honey Lemon.jpg",
  BlackSoda: "Black coffee Soda.jpg",
  BlackOrange: "Black-coffee-Orange-Juice.jpg",
  // LemonSoda: "Lemon Soda.jpg",
  RaspberrySoda: "raspberry-soda.jpg",
  // StrawberrySoda: "Strawberry Soda.jpg",
  PassionSoda: "pass.jpeg",
  // PeachSoda: "Peach Soda.jpg",
  BlueLemonSoda: "Blue Lemon Soda.jpeg",
  melon: "Melon.webp",
  orangeJuice: "Orange Juice.jpeg",
  apple: "Apple.jpeg",
  watermelon: "Watermelon.jpg",
  banana: "Banana.jpg",

  strawberryBanana: "Strawberry Banana.jpg",
  bananaAlmond: "Banana Almond.jpg",
  strawberryMilk: "Strawberry Milk.jpg",
  strawberryYogurt: "Strawberry Yogurt.jpeg",
};

export const formatKip = (n) => `₭${n.toLocaleString("en-US")}`;

export const MENU_TABS = [
  { id: "coffee", label: "Coffee" },
  { id: "tea", label: "Tea & Specials" },
  { id: "soda", label: "Soda" },
  { id: "shake", label: "Shakes & Juice" },
  { id: "food", label: "Food" },
];

export const MENU = [
  {
    id: "americano", name: "Americano", lao: "ອາເມຣິກາໂນ", category: "coffee", image: asset(ASSETS.americano),
    variants: [{ label: "Hot", price: k(40) }, { label: "Ice", price: k(40) }],
  },
  {
    id: "latte", name: "Latte", lao: "ລາເຕ້", category: "coffee", image: asset(ASSETS.latte),
    variants: [{ label: "Hot", price: k(45) }, { label: "Ice", price: k(55) }, { label: "Shake", price: k(65) }],
  },
  {
    id: "cappuccino", name: "Cappuccino", lao: "ຄາປູຊີໂນ", category: "coffee", image: asset(ASSETS.cappuccino),
    variants: [{ label: "Hot", price: k(42) }, { label: "Ice", price: k(50) }, { label: "Shake", price: k(65) }],
  },
  {
    id: "espresso", name: "Espresso", lao: "ເອສເພຣສໂຊ", category: "coffee", image: asset(ASSETS.espresso),
    variants: [{ label: "Hot", price: k(35) }, { label: "Ice", price: k(50) }, { label: "Shake", price: k(55) }],
  },
  {
    id: "mocha", name: "Mocha", lao: "ມັອກກ້າ", category: "coffee", image: asset(ASSETS.mocha),
    variants: [{ label: "Hot", price: k(50) }, { label: "Ice", price: k(59) }, { label: "Shake", price: k(69) }],
  },
  {
    id: "flat-white", name: "Flat White", lao: "ແຟຼດໄວ", category: "coffee", image: asset(ASSETS.flatWhite),
    variants: [{ label: "Hot", price: k(40) }, { label: "Ice", price: k(50) }],
  },
  {
    id: "vanilla-latte", name: "Vanilla Latte", lao: "ວານິລາ ລາເຕ້", category: "coffee", image: asset(ASSETS.vanillaLatte),
    variants: [{ label: "Hot", price: k(50) }, { label: "Ice", price: k(58) }],
  },
  {
    id: "caramel-latte", name: "Caramel Latte", lao: "ຄາຣາແມວ ລາເຕ້", category: "coffee", image: asset(ASSETS.caramelLatte),
    variants: [{ label: "Hot", price: k(50) }, { label: "Ice", price: k(58) }, { label: "Shake", price: k(75) }],
  },
  {
    id: "hazelnut-cappuccino", name: "Hazelnut Cappuccino", lao: "ເຮເຊວນັດ ຄາປູຊີໂນ", category: "coffee", image: asset(ASSETS.hazelnut),
    variants: [{ label: "Hot", price: k(50) }, { label: "Ice", price: k(58) }],
  },
  {
    id: "espresso-macchiato", name: "Espresso Macchiato", lao: "ເອສເພຣສໂຊ ມັກກິອາໂຕ", category: "coffee", image: asset(ASSETS.macchiato),
    variants: [{ label: "Hot", price: k(45) }],
  },
  {
    id: "cold-brew", name: "Cold Brew", lao: "ໂຄນບຣິວ", category: "coffee", image: asset(ASSETS.coldBrew),
    variants: [{ label: "Ice", price: k(65) }],
  },
  {
    id: "drip-coffee", name: "Drip Coffee", lao: "ກາເຟຢົດ", category: "coffee", image: asset(ASSETS.pourOver),
    variants: [{ label: "Hot", price: k(65) }, { label: "Ice", price: k(65) }],
    description: "Catimor, Typica,Robusta, Catuai honey,Catuaira honey",
  },
  {
    id: "green-tea", name: "Matcha latte", lao: "ມັຊກາ ລາເຕ້", category: "tea", image: asset(ASSETS.matcha),
    variants: [{ label: "Hot", price: k(60) }, { label: "Ice", price: k(65) }, { label: "Shake", price: k(75) }],
  },
  {
    id: "chocolate", name: "Chocolate", lao: "ຊ໋ອກໂກແລັດ", category: "tea", image: asset(ASSETS.chocolate),
    variants: [{ label: "Hot", price: k(50) }, { label: "Ice", price: k(57) }, { label: "Shake", price: k(65) }],
  },
  {
    id: "milk-tea", name: "Milk Tea", lao: "ຊານົມ", category: "tea", image: asset(ASSETS.milkTea),
    variants: [{ label: "Ice", price: k(57) }],
  },
  {
    id: "milk", name: "Milk", lao: "ນົມ", category: "tea", image: asset(ASSETS.milk),
    variants: [{ label: "Hot", price: k(50) }, { label: "Ice", price: k(55) }, { label: "Shake", price: k(59) }],
  },
  {
    id: "lemon-tea", name: "Lemon Tea", lao: "ຊາໝາກນາວ", category: "tea", image: asset(ASSETS.lemonTea),
    variants: [{ label: "Hot", price: k(45) }, { label: "Ice", price: k(50) }],
  },
  {
    id: "honey-lemon", name: "Honey Lemon", lao: "ນ້ຳເຜິ້ງໝາກນາວ", category: "tea", image: asset(ASSETS.honeyLemon),
    variants: [{ label: "Hot", price: k(45) }, { label: "Ice", price: k(50) }],
  },
  {
    id: "hot-tea", name: "Hot Tea", lao: "ຊາຮ້ອນ", category: "tea", image: asset(ASSETS.hotTea),
    variants: [{ label: "Hot", price: k(55) }],
    description: "Green tea, Black tea, Butterfly pea tea, Dilmah tea.",
  },
  {
    id: "black-honey-lemon", name: "Black Honey Lemon", lao: "ກາເຟດຳ ນ້ຳເຜິ້ງ", category: "coffee", image: asset(ASSETS.BlackHoneyLemon),
    variants: [{ label: "Ice", price: k(57) }],
  },
  {
    id: "black-soda", name: "Black coffee Soda", lao: "ກາເຟດຳ ໂຊດາ", category: "coffee", image: asset(ASSETS.BlackSoda),
    variants: [{ label: "Ice", price: k(50) }],
  },
  {
    id: "black-orange", name: "Black coffee Orange Juice", lao: "ກາເຟດຳ ນ້ຳສົ້ມ", category: "coffee", image: asset(ASSETS.BlackOrange),
    variants: [{ label: "Ice", price: k(65) }],
  },
  {
    id: "lemon-soda", name: "Lemon Soda", lao: "ໂຊດາ ໝາກນາວ", category: "soda", image: asset(ASSETS.sodaAlt),
    variants: [{ label: "Ice", price: k(45) }],
  },
  {
    id: "raspberry-soda", name: "Raspberry Soda", lao: "ໂຊດາ ຣາສເບີຣີ", category: "soda", image: asset(ASSETS.RaspberrySoda),
    variants: [{ label: "Ice", price: k(45) }],
  },
  {
    id: "strawberry-soda", name: "Strawberry Soda", lao: "ໂຊດາ ສະຕຣໍເບີຣີ", category: "soda", image: asset(ASSETS.strawberrySoda),
    variants: [{ label: "Ice", price: k(45) }],
  },
  {
    id: "passion-soda", name: "Passion Fruit Soda", lao: "ໂຊດາ ໝາກນ໋ອດ", category: "soda", image: asset(ASSETS.PassionSoda),
    variants: [{ label: "Ice", price: k(45) }],
  },
  {
    id: "peach-soda", name: "Peach Soda", lao: "ໂຊດາ ໝາກພິສ", category: "soda", image: asset(ASSETS.sodaAlt),
    variants: [{ label: "Ice", price: k(45) }],
  },
  {
    id: "blue-lemon-soda", name: "Blue Lemon Soda", lao: "ໂຊດາ ບລູເລມອນ", category: "soda", image: asset(ASSETS.BlueLemonSoda),
    variants: [{ label: "Ice", price: k(45) }],
  },



  {
    id: "mango", name: "Mango", lao: "ໝາກມ່ວງ", category: "shake", image: asset(ASSETS.fruitShake),
    variants: [{ label: "Shake", price: k(40) }],
  },
  {
    id: "melon", name: "Melon", lao: "ແຕງດອມ", category: "shake", image: asset(ASSETS.melon),
    variants: [{ label: "Shake", price: k(50) }],
  },
  {
    id: "orange-juice", name: "Orange Juice", lao: "ນ້ຳໝາກກ້ຽງ", category: "shake", image: asset(ASSETS.orangeJuice),
    variants: [{ label: "Single", price: k(43) }],
  },
  {
    id: "watermelon", name: "Watermelon", lao: "ໝາກໂມ", category: "shake", image: asset(ASSETS.watermelon),
    variants: [{ label: "Shake", price: k(40) }],
  },
  {
    id: "apple", name: "Apple", lao: "ແອັບເປິ້ນ", category: "shake", image: asset(ASSETS.apple),
    variants: [{ label: "Shake", price: k(50) }],
  },
  {
    id: "banana", name: "Banana", lao: "ໝາກກ້ວຍ", category: "shake", image: asset(ASSETS.banana),
    variants: [{ label: "Shake", price: k(40) }],
  },
  {
    id: "strawberry-banana", name: "Strawberry Banana", lao: "ສະຕຣໍ ໝາກກ້ວຍ", category: "shake", image: asset(ASSETS.strawberryBanana),
    variants: [{ label: "Shake", price: k(65) }],
  },
  {
    id: "banana-almond", name: "Banana Almond", lao: "ໝາກກ້ວຍ ອັນມອນ", category: "shake", image: asset(ASSETS.bananaAlmond),
    variants: [{ label: "Shake", price: k(65) }],
  },
  {
    id: "strawberry-milk", name: "Strawberry Milk", lao: "ສະຕຣໍ ນົມ", category: "shake", image: asset(ASSETS.strawberryMilk),
    variants: [{ label: "Shake", price: k(57) }],
  },
  {
    id: "strawberry-yogurt", name: "Strawberry Yogurt", lao: "ສະຕຣໍ ໂຍເກີດ", category: "shake", image: asset(ASSETS.strawberryYogurt),
    variants: [{ label: "Shake", price: k(75) }],
  },



  {
    id: "croissant", name: "Croissant", lao: "ຄຣົວຊອງ", category: "food", image: asset(ASSETS.croissant),
    description: "72-hour laminated French butter, baked daily.",
    variants: [{ label: "Single", price: k(35) }],
  },
];
