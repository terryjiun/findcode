const BIG5_LABELS = {
  "1": "Big5 常用字",
  "2": "Big5 次常用字",
  "3": "Big5 倚天造字區"
};

let big5Map = new Map();

const METHODS = {
  cangjie: {
    id: "cangjie",
    name: "倉頡",
    dataFile: "./Cangjie.txt",
    subtitle: "支援 CJK 基本區 + Extension A～J",
    codeLabel: "英文字母",
    radicalLabel: "倉頡字母",
    radicalMap: {
      a: "日", b: "月", c: "金", d: "木", e: "水",
      f: "火", g: "土", h: "竹", i: "戈", j: "十",
      k: "大", l: "中", m: "一", n: "弓", o: "人",
      p: "心", q: "手", r: "口", s: "尸", t: "廿",
      u: "山", v: "女", w: "田", x: "難", y: "卜",
      z: "重"
    }
  },

  zhuyin: {
    id: "zhuyin",
    name: "注音",
    dataFile: "./Zhuyin.txt",
    subtitle: "支援 CJK 基本區 + Extension A～D",
    codeLabel: "英文字母",
    radicalLabel: "注音字母",
    radicalMap: {
      a: "ㄇ", b: "ㄖ", c: "ㄏ", d: "ㄎ", e: "ㄍ",
      f: "ㄑ", g: "ㄕ", h: "ㄘ", i: "ㄛ", j: "ㄨ",
      k: "ㄜ", l: "ㄠ", m: "ㄩ", n: "ㄙ", o: "ㄟ",
      p: "ㄣ", q: "ㄆ", r: "ㄐ", s: "ㄋ", t: "ㄔ",
      u: "ㄧ", v: "ㄒ", w: "ㄊ", x: "ㄌ", y: "ㄗ",
      z: "ㄈ",
      "1": "ㄅ", "2": "ㄉ", "3": "ˇ", "4": "ˋ", "5": "ㄓ",
      "6": "ˊ", "7": "˙", "8": "ㄚ", "9": "ㄞ", "0": "ㄢ",
      "-": "ㄦ", "[": "「", "]": "」", "\\": "＼", ";": "ㄤ",
      "'": "、", ",": "ㄝ", ".": "ㄡ", "/": "ㄥ"
    }
  },

  dayi: {
    id: "dayi",
    name: "大易",
    dataFile: "./Dayi.txt",
    subtitle: "支援 CJK 基本區 + Extension A",
    codeLabel: "英文字母",
    radicalLabel: "大易字母",
    radicalMap: {
      a: "人", b: "馬", c: "鹿", d: "日", e: "一",
      f: "土", g: "手", h: "鳥", i: "木", j: "月",
      k: "立", l: "女", m: "雨", n: "魚", o: "口",
      p: "耳", q: "石", r: "工", s: "革", t: "糸",
      u: "艸", v: "禾", w: "山", x: "水", y: "火",
      z: "心",
      "1": "言", "2": "牛", "3": "目", "4": "四", "5": "王",
      "6": "車", "7": "田", "8": "米", "9": "足", "0": "金",
      "=": "＝", ";": "虫", ",": "力", ".": "舟", "/": "竹"
    }
  },

  array: {
    id: "array",
    name: "行列",
    dataFile: "./Array.txt",
    subtitle: "支援 CJK 基本區 + Extension A～D",
    codeLabel: "英文字母",
    radicalLabel: "行列字母",
    radicalMap: {
      a: "1-", b: "5v", c: "3v", d: "3-", e: "3^",
      f: "4-", g: "5-", h: "6-", i: "8^", j: "7-",
      k: "8-", l: "9-", m: "7v", n: "6v", o: "9^",
      p: "0^", q: "1^", r: "4^", s: "2-", t: "5^",
      u: "7^", v: "4v", w: "2^", x: "2v", y: "6^",
      z: "1v",
      ";": "0-", ",": "8v", ".": "9v", "/": "0v"
    }
  },

  boshiamy: {
    id: "boshiamy",
    name: "無蝦米",
    dataFile: "./Boshiamy.txt",
    subtitle: "支援 CJK 基本區 + Extension A～D",
    codeLabel: "英文字母",
    radicalLabel: "無蝦米字母",
    radicalMap: {}          // 無自訂對照表
  }
};

let currentMethod = "cangjie";
let codeMap = new Map();
let isComposing = false;

function getConfig() {
  return METHODS[currentMethod];
}

function toRadical(code) {
  const map = getConfig().radicalMap || {};
  return code
    .toLowerCase()
    .split("")
    .map(c => map[c] || c)
    .join("");
}

function getFirstChar(str) {
  const chars = [...str];
  return chars.length > 0 ? chars[0] : "";
}

function forceSingleChar() {
  const inputEl = document.getElementById("charInput");
  const chars = [...inputEl.value];
  if (chars.length > 1) {
    inputEl.value = chars[chars.length - 1];
  }
}

function getCodePoint(char) {
  return char.codePointAt(0);
}

function getUnicodeBlock(codePoint) {
  if (codePoint >= 0x4E00 && codePoint <= 0x9FFF) return "CJK URO(基本區)";
  if (codePoint >= 0x3400 && codePoint <= 0x4DBF) return "CJK Extension-A";
  if (codePoint >= 0x20000 && codePoint <= 0x2A6DF) return "CJK Extension-B";
  if (codePoint >= 0x2A700 && codePoint <= 0x2B73F) return "CJK Extension-C";
  if (codePoint >= 0x2B740 && codePoint <= 0x2B81F) return "CJK Extension-D";
  if (codePoint >= 0x2B820 && codePoint <= 0x2CEAF) return "CJK Extension-E";
  if (codePoint >= 0x2CEB0 && codePoint <= 0x2EBEF) return "CJK Extension-F";
  if (codePoint >= 0x30000 && codePoint <= 0x3134F) return "CJK Extension-G";
  if (codePoint >= 0x31350 && codePoint <= 0x323AF) return "CJK Extension-H";
  if (codePoint >= 0x2EBF0 && codePoint <= 0x2EE5F) return "CJK Extension-I";
  if (codePoint >= 0x323B0 && codePoint <= 0x3347F) return "CJK Extension-J";
  if (codePoint >= 0xF900 && codePoint <= 0xFAFF) return "CJK 相容漢字";
  if (codePoint >= 0x2F800 && codePoint <= 0x2FA1F) return "CJK 相容漢字補充";
  return "其他字元集";
}

function getBig5Category(char) {
  const category = big5Map.get(char);
  return BIG5_LABELS[category] || "非 Big5 字元";
}

function updateFooterSource() {
  const config = getConfig();
  const fileName = config.dataFile.replace("./", "");
  const url = `https://github.com/terryjiun/findcode/blob/main/${fileName}`;
  const footer = document.getElementById("footerSource");
  footer.innerHTML = `碼表來源：<a href="${url}" target="_blank" rel="noopener">${fileName}</a>`;
}

async function loadBig5Category() {
  try {
    const response = await fetch("./Big5Category.txt");
    if (!response.ok) throw new Error("無法載入 Big5Category.txt");

    const text = await response.text();
    const lines = text.split(/\r?\n/);

    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("##")) continue;

      const parts = trimmed.split(/\s+/);
      if (parts.length < 2) continue;

      const category = parts[0];
      const char = parts[1];

      if (category === "1" || category === "2" || category === "3") {
        big5Map.set(char, category);
      }
    }

    console.log(`Big5 分類載入完成（共 ${big5Map.size} 個字）`);
  } catch (err) {
    console.error("載入 Big5 分類失敗：", err);
  }
}

async function loadCodeTable() {
  const config = getConfig();
  const statusEl = document.getElementById("status");
  const searchBtn = document.getElementById("searchBtn");

  searchBtn.disabled = true;
  statusEl.textContent = `正在載入「${config.name}」碼表，請靜待載入完成（約需3至30秒）...`;
  codeMap = new Map();

    document.getElementById("result").classList.remove("show");
  document.getElementById("codeList").innerHTML = "";
  const oldInfo = document.getElementById("unicodeInfo");
  if (oldInfo) oldInfo.remove();
  
  updateFooterSource();

  try {
    const response = await fetch(config.dataFile);
    if (!response.ok) throw new Error(`無法載入 ${config.dataFile}`);

    const text = await response.text();
    const lines = text.split(/\r?\n/);

    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("##")) continue;

      const parts = trimmed.split(/\s+/);
      if (parts.length < 2) continue;

      const code = parts[0].toLowerCase();
      const char = parts[1];

      if (!codeMap.has(char)) {
        codeMap.set(char, []);
      }
      if (!codeMap.get(char).includes(code)) {
        codeMap.get(char).push(code);
      }
    }

    statusEl.textContent = `「${config.name}」碼表載入完成（共 ${codeMap.size} 個字）`;
    searchBtn.disabled = false;
  } catch (err) {
    statusEl.textContent = `載入失敗：${err.message}`;
    console.error(err);
  }
}

function search() {
  const config = getConfig();
  const input = document.getElementById("charInput");
  const raw = input.value.trim();
  const char = getFirstChar(raw);

  const resultEl = document.getElementById("result");
  const charDisplay = document.getElementById("charDisplay");
  const codeList = document.getElementById("codeList");
  const status = document.getElementById("status");

  codeList.innerHTML = "";
  resultEl.classList.remove("show");
  
  const oldUnicodeInfo = document.getElementById("unicodeInfo");
  if (oldUnicodeInfo) oldUnicodeInfo.remove();

  if (!char) {
    status.textContent = "請輸入一個漢字";
    return;
  }

  if ([...raw].length > 1) {
    status.textContent = `偵測到多個字元，已使用第一個字元「${char}」查詢`;
  }

  const codes = codeMap.get(char);
  
  const codePoint = getCodePoint(char);
  const unicodeHex = "U+" + codePoint.toString(16).toUpperCase();
  const unicodeDec = codePoint;
  const blockName = getUnicodeBlock(codePoint);
  const big5Category = getBig5Category(char);

  const unicodeInfo = document.createElement("div");
  unicodeInfo.id = "unicodeInfo";
  unicodeInfo.className = "unicode-info";
  unicodeInfo.innerHTML = `
    <div class="unicode-item">
      <span class="label">所屬字元集</span>
      <span class="value">${blockName}</span>
    </div>
    <div class="unicode-item">
      <span class="label">Unicode U+hex</span>
      <span class="value">${unicodeHex}</span>
    </div>
    <div class="unicode-item">
      <span class="label">Unicode Decimal</span>
      <span class="value">${unicodeDec}</span>
    </div>
    <div class="unicode-item">
      <span class="label">Big5 分類</span>
      <span class="value">${big5Category}</span>
    </div>
  `;
  charDisplay.after(unicodeInfo);

  charDisplay.textContent = char;

  if (!codes || codes.length === 0) {
    if (!status.textContent.includes("偵測到")) {
      status.textContent = "";
    }
    codeList.innerHTML = `<div class="not-found">查無此字的${config.name}編碼</div>`;
    resultEl.classList.add("show");
    return;
  }

  if (!status.textContent.includes("偵測到")) {
    status.textContent = `找到 ${codes.length} 組編碼`;
  } else {
    status.textContent += `，找到 ${codes.length} 組編碼`;
  }
  
  codes.sort((a, b) => a.length - b.length || a.localeCompare(b));

  for (const code of codes) {
    const item = document.createElement("div");
    item.className = "code-item";
    item.innerHTML = `
      <div>
        <div class="label">${config.codeLabel}</div>
        <div class="value">${code.toUpperCase()}</div>
      </div>
      <div>
        <div class="label">${config.radicalLabel}</div>
        <div class="value cangjie">${toRadical(code)}</div>
      </div>
    `;
    codeList.appendChild(item);
  }

  resultEl.classList.add("show");
}

function switchMethod(methodId) {
  if (!METHODS[methodId] || methodId === currentMethod) return;

  currentMethod = methodId;
  const config = getConfig();
  
  document.getElementById("pageTitle").textContent = config.name + "查碼";
  document.getElementById("pageSubtitle").textContent = config.subtitle;
  document.title = config.name + "查碼";
  
  document.querySelectorAll(".method-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.method === methodId);
  });
  
  loadCodeTable();
}

function initEvents() {
  const inputEl = document.getElementById("charInput");

  inputEl.addEventListener("compositionstart", () => {
    isComposing = true;
  });

  inputEl.addEventListener("compositionend", () => {
    isComposing = false;
    forceSingleChar();
  });

  inputEl.addEventListener("input", () => {
    if (isComposing) return;
    forceSingleChar();
  });

  inputEl.addEventListener("keydown", (e) => {
    if (e.key === "Enter") search();
  });

  document.getElementById("searchBtn").addEventListener("click", search);

  document.getElementById("methodSwitcher").addEventListener("click", (e) => {
    const btn = e.target.closest(".method-btn");
    if (btn) {
      switchMethod(btn.dataset.method);
    }
  });
}

document.addEventListener("DOMContentLoaded", async () => {
  initEvents();
  await loadBig5Category();
  loadCodeTable();
});
