const k = (n) => n * 1000;

/** Resolve a filename under assets/ (handles spaces & special characters). */
export const asset = (file) => `assets/${encodeURIComponent(file)}`;

/** Images in assets/ — add new files here, then reference by key in MENU. */
export const ASSETS = {
  americano: "IcedAmericano-600x600-500x500.jpg",
  latte: "Gemini_Generated_Image_7xp4vd7xp4vd7xp4.png",
  cappuccino: "Gemini_Generated_Image_ctj6gcctj6gcctj6.png",
  espresso: "Gemini_Generated_Image_2l11mi2l11mi2l11.png",
  mocha: "Marble Mocha Macchiato.jpeg",
  flatWhite: "Gemini_Generated_Image_hmj95shmj95shmj9.png",
  vanillaLatte: "Gemini_Generated_Image_pi23eupi23eupi23.png",
  caramelLatte: "Gemini_Generated_Image_4tblms4tblms4tbl.png",
  hazelnut: "Hazelnut Cappuccino - Premium Fragrance Oil.jpeg",
  macchiato: "Gemini_Generated_Image_xa5eh6xa5eh6xa5e.png",
  coldBrew: "How to Make Cold Brew Coffee.jpeg",
  pourOver: "☕ Master Pour-Over Coffee _ Easy Brew Guide for Bold Flavor! ✨.jpeg",
  matcha: "Gemini_Generated_Image_evpe7ievpe7ievpe.png",
  chocolate: "บางวันก็ไม่ต้องการอะไรหวือหวา_แค่อยากนั่งพัก หยิบ ชีสเค้กหน้าไหม้ นุ่ม ๆ_จิบ น้ำฮันน.jpeg",
  milkTea: "เอาไปเลยย!! 20 สูตร _ชงชา กาแฟ_ ทำเองไม่ต้องง้อร้านแล้ว! _ Spiceee_net _ LINE TODAY.jpeg",
  milk: "Gemini_Generated_Image_eo4gegeo4gegeo4g.png",
  lemonTea: "When life gives you lemons… add them to your Biome Brews tea 🍋✨ Your gut will thank you, and your taste buds will dance! 💃 100% organic, 100% delicious_ #TeaLoversUnite #GutHealthJourney.jpeg",
  soda: "gallery-2.jpg",
  strawberrySoda: "Strawberry Soda.jpeg",
  sodaAlt: "_ (1).jpeg",
  sodaAlt2: "_ (2).jpeg",
  shake: "Thick Vanilla Shake • Gestational Diabetes UK.jpeg",
  fruitShake: "Gemini_Generated_Image_eo4gegeo4gegeo4g.png",
  fruitShake2: "Gemini_Generated_Image_2l11mi2l11mi2l11.png",
  croissant: "You Wouldn't Suspect The Treats From This_.jpeg",
};

export const formatKip = (n) => `₭${n.toLocaleString("en-US")}`;

export const MENU_TABS = [
  { id: "all", label: "All" },
  { id: "coffee", label: "Coffee" },
  { id: "tea", label: "Tea & Specials" },
  { id: "soda", label: "Soda" },
  { id: "shake", label: "Shakes & Juice" },
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
    id: "honey-lemon", name: "Honey Lemon", lao: "ນ້ຳເຜິ້ງໝາກນາວ", category: "tea", image: asset(ASSETS.lemonTea),
    variants: [{ label: "Hot", price: k(45) }, { label: "Ice", price: k(50) }],
  },
  {
    id: "hot-tea", name: "Hot Tea", lao: "ຊາຮ້ອນ", category: "tea", image: asset(ASSETS.milkTea),
    variants: [{ label: "Hot", price: k(55) }],
    description: "Green tea, Black tea, Butterfly pea tea, Dilmah tea.",
  },
  {
    id: "black-honey-lemon", name: "Black Honey Lemon", lao: "ກາເຟດຳ ນ້ຳເຜິ້ງ", category: "coffee", image: asset(ASSETS.americano),
    variants: [{ label: "Ice", price: k(57) }],
  },
  {
    id: "black-soda", name: "Black coffee Soda", lao: "ກາເຟດຳ ໂຊດາ", category: "coffee", image: asset(ASSETS.americano),
    variants: [{ label: "Ice", price: k(50) }],
  },
  {
    id: "black-orange", name: "Black coffee Orange Juice", lao: "ກາເຟດຳ ນ້ຳສົ້ມ", category: "coffee", image: asset(ASSETS.fruitShake),
    variants: [{ label: "Ice", price: k(65) }],
  },
  {
    id: "lemon-soda", name: "Lemon Soda", lao: "ໂຊດາ ໝາກນາວ", category: "soda", image: asset(ASSETS.sodaAlt),
    variants: [{ label: "Ice", price: k(45) }],
  },
  {
    id: "raspberry-soda", name: "Raspberry Soda", lao: "ໂຊດາ ຣາສເບີຣີ", category: "soda", image: asset(ASSETS.sodaAlt2),
    variants: [{ label: "Ice", price: k(45) }],
  },
  {
    id: "strawberry-soda", name: "Strawberry Soda", lao: "ໂຊດາ ສະຕຣໍເບີຣີ", category: "soda", image: asset(ASSETS.strawberrySoda),
    variants: [{ label: "Ice", price: k(45) }],
  },
  {
    id: "passion-soda", name: "Passion Fruit Soda", lao: "ໂຊດາ ໝາກນ໋ອດ", category: "soda", image: asset(ASSETS.soda),
    variants: [{ label: "Ice", price: k(45) }],
  },
  {
    id: "peach-soda", name: "Peach Soda", lao: "ໂຊດາ ໝາກພິສ", category: "soda", image: asset(ASSETS.sodaAlt),
    variants: [{ label: "Ice", price: k(45) }],
  },
  {
    id: "blue-lemon-soda", name: "Blue Lemon Soda", lao: "ໂຊດາ ບລູເລມອນ", category: "soda", image: asset(ASSETS.sodaAlt2),
    variants: [{ label: "Ice", price: k(45) }],
  },
  {
    id: "mango", name: "Mango", lao: "ໝາກມ່ວງ", category: "shake", image: asset(ASSETS.fruitShake),
    variants: [{ label: "Shake", price: k(40) }],
  },
  {
    id: "melon", name: "Melon", lao: "ແຕງດອມ", category: "shake", image: asset(ASSETS.fruitShake2),
    variants: [{ label: "Shake", price: k(50) }],
  },
  {
    id: "orange-juice", name: "Orange Juice", lao: "ນ້ຳໝາກກ້ຽງ", category: "shake", image: asset(ASSETS.sodaAlt),
    variants: [{ label: "Single", price: k(43) }],
  },
  {
    id: "watermelon", name: "Watermelon", lao: "ໝາກໂມ", category: "shake", image: asset(ASSETS.fruitShake),
    variants: [{ label: "Shake", price: k(40) }],
  },
  {
    id: "apple", name: "Apple", lao: "ແອັບເປິ້ນ", category: "shake", image: asset(ASSETS.fruitShake2),
    variants: [{ label: "Shake", price: k(50) }],
  },
  {
    id: "banana", name: "Banana", lao: "ໝາກກ້ວຍ", category: "shake", image: asset(ASSETS.shake),
    variants: [{ label: "Shake", price: k(40) }],
  },
  {
    id: "strawberry-banana", name: "Strawberry Banana", lao: "ສະຕຣໍ ໝາກກ້ວຍ", category: "shake", image: asset(ASSETS.shake),
    variants: [{ label: "Shake", price: k(65) }],
  },
  {
    id: "banana-almond", name: "Banana Almond", lao: "ໝາກກ້ວຍ ອັນມອນ", category: "shake", image: asset(ASSETS.shake),
    variants: [{ label: "Shake", price: k(65) }],
  },
  {
    id: "strawberry-milk", name: "Strawberry Milk", lao: "ສະຕຣໍ ນົມ", category: "shake", image: asset(ASSETS.shake),
    variants: [{ label: "Shake", price: k(57) }],
  },
  {
    id: "strawberry-yogurt", name: "Strawberry Yogurt", lao: "ສະຕຣໍ ໂຍເກີດ", category: "shake", image: asset(ASSETS.strawberrySoda),
    variants: [{ label: "Shake", price: k(75) }],
  },
  {
    id: "croissant", name: "Croissant", lao: "ຄຣົວຊອງ", category: "tea", image: asset(ASSETS.croissant),
    description: "72-hour laminated French butter, baked daily.",
    variants: [{ label: "Single", price: k(35) }],
  },
];
