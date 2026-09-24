const BIG5_LABELS = {
  "1": "Big5 常用字",
  "2": "Big5 次常用字",
  "3": "Big5 倚天造字區"
};

const METHODS = {
  cangjie: {
    id: "cangjie",
    name: "倉頡",
    dataFile: "./Cangjie.txt",
    subtitle: "支援 CJK 基本區 + Extension A～J 及部分日文假名及符號",
    note: `碼表主要來源為<a href="https://www.cns11643.gov.tw/" target="_blank">全字庫</a>、<a href="https://www.chinesecj.com/forum/" target="_blank">倉頡之友論壇</a>，<br>泰瑞保證收錄以上字元集完整字數，<br>但是不保證每組編碼都符合公認的規則`,
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
    subtitle: "支援 CJK 基本區 + Extension A～B",
    note: `碼表主要來源為<a href="https://www.cns11643.gov.tw/" target="_blank">全字庫</a>，<br>泰瑞保證收錄以上字元集完整字數，<br>但是不保證每組編碼都符合公認的規則，<br>全字庫對於未知讀音的漢字一律將其注音標示為ㄇㄡˇ`,
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
    note: `碼表主要來源為<a href="https://github.com/xrloong/qiangheng" target="_blank">瑲珩</a>，<br>泰瑞保證收錄以上字元集完整字數，<br>但是不保證每組編碼都符合公認的規則`,
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
    note: `碼表主要來源為<a href="https://www.array.com.tw/" target="_blank">行列輸入法的家</a>，<br>泰瑞保證收錄以上字元集完整字數，<br>但是不保證每組編碼都符合公認的規則`,
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
    note: `碼表主要來源為<a href="https://vmliu.xyz/" target="_blank">蝦米族樂園</a>，<br>泰瑞保證收錄以上字元集完整字數，<br>但是不保證每組編碼都符合公認的規則`,
    codeLabel: "英文字母",
    radicalLabel: "無蝦米字母",
    radicalMap: {}
  }
};

const INITIAL_UI = {
  title: "輸入法查碼",
  subtitle: "請點選下方任一種輸入法開始查碼",
  status: "請點選上方任一種輸入法以載入碼表",
  placeholder: "請先選擇輸入法"
};

let big5Map = new Map();

const codeTableCache = new Map();

let currentMethod = null;

let codeMap = new Map();
let isComposing = false;
let toastTimer = null;

function getConfig() {
  return currentMethod ? METHODS[currentMethod] : null;
}

function applyMethodUI() {
  const config = getConfig();
  const titleEl = document.getElementById("pageTitle");
  const subtitleEl = document.getElementById("pageSubtitle");
  const inputEl = document.getElementById("charInput");
  const searchBtn = document.getElementById("searchBtn");
  const footer = document.getElementById("footerSource");

  const noteEl = document.getElementById("pageNote");

  document.title = "輸入法查碼";

  if (!config) {
    titleEl.textContent = INITIAL_UI.title;
    subtitleEl.textContent = INITIAL_UI.subtitle;
    if (noteEl) {
      noteEl.innerHTML = "";
      noteEl.hidden = true;
    }
    inputEl.placeholder = INITIAL_UI.placeholder;
    inputEl.disabled = true;
    searchBtn.disabled = true;
    footer.innerHTML = "";
  } else {
    titleEl.textContent = config.name + "查碼";
    subtitleEl.textContent = config.subtitle;
    if (noteEl) {
      noteEl.innerHTML = config.note || "";
      noteEl.hidden = !config.note;
    }
    inputEl.placeholder = "請輸入一個字元";
    updateFooterSource();
  }

  document.querySelectorAll(".method-btn").forEach((btn) => {
    const isActive = btn.dataset.method === currentMethod;
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-selected", isActive ? "true" : "false");
  });
}

function toRadical(code) {
  const map = getConfig()?.radicalMap || {};
  return code
    .toLowerCase()
    .split("")
    .map((c) => map[c] || c)
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
  if (codePoint >= 0x4e00 && codePoint <= 0x9fff) return "CJK URO (基本區)";
  if (codePoint >= 0x3400 && codePoint <= 0x4dbf) return "CJK Extension-A";
  if (codePoint >= 0x20000 && codePoint <= 0x2a6df) return "CJK Extension-B";
  if (codePoint >= 0x2a700 && codePoint <= 0x2b73f) return "CJK Extension-C";
  if (codePoint >= 0x2b740 && codePoint <= 0x2b81f) return "CJK Extension-D";
  if (codePoint >= 0x2b820 && codePoint <= 0x2ceaf) return "CJK Extension-E";
  if (codePoint >= 0x2ceb0 && codePoint <= 0x2ebef) return "CJK Extension-F";
  if (codePoint >= 0x30000 && codePoint <= 0x3134f) return "CJK Extension-G";
  if (codePoint >= 0x31350 && codePoint <= 0x323af) return "CJK Extension-H";
  if (codePoint >= 0x2ebf0 && codePoint <= 0x2ee5f) return "CJK Extension-I";
  if (codePoint >= 0x323b0 && codePoint <= 0x3347f) return "CJK Extension-J";
  if (codePoint >= 0xf900 && codePoint <= 0xfaff) return "CJK 相容漢字";
  if (codePoint >= 0x2f800 && codePoint <= 0x2fa1f) return "CJK 相容漢字補充";
  if (codePoint >= 0x3040 && codePoint <= 0x309f) return "平假名";
  if (codePoint >= 0x30a0 && codePoint <= 0x30ff) return "片假名";
  if (codePoint >= 0x31f0 && codePoint <= 0x31ff) return "片假名語音擴展";
  if (codePoint >= 0xff00 && codePoint <= 0xffef) return "半形／全形形式";
  if (codePoint >= 0x3000 && codePoint <= 0x303f) return "CJK 符號和標點";
  return "其他字元集";
}

function getBig5Category(char) {
  const category = big5Map.get(char);
  return BIG5_LABELS[category] || "非 Big5 字元";
}

function updateFooterSource() {
  const config = getConfig();
  const footer = document.getElementById("footerSource");
  if (!config) {
    footer.innerHTML = "";
    return;
  }
  const fileName = config.dataFile.replace("./", "");
  const url = `https://github.com/terryjiun/findcode/blob/main/${fileName}`;
  footer.innerHTML = `碼表來源：<a href="${url}" target="_blank" rel="noopener noreferrer">${fileName}</a><br>（連結至GitHub，因檔案較大，可能導致瀏覽器卡頓）<br>（碼表取自<a href="https://terryjiun.github.io/posts/Terry-mb-2016-1/" target="_blank">泰瑞系列中文輸入法對照表</a>）`;
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.hidden = true;
  }, 1800);
}

function clearResultUI() {
  const resultEl = document.getElementById("result");
  resultEl.hidden = true;
  resultEl.classList.remove("show");
  document.getElementById("codeList").innerHTML = "";
  const oldInfo = document.getElementById("unicodeInfo");
  if (oldInfo) oldInfo.remove();
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

function parseCodeTable(text) {
  const map = new Map();
  const lines = text.split(/\r?\n/);

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("##")) continue;

    const parts = trimmed.split(/\s+/);
    if (parts.length < 2) continue;

    const code = parts[0].toLowerCase();
    const char = parts[1];

    if (!map.has(char)) {
      map.set(char, []);
    }
    const list = map.get(char);
    if (!list.includes(code)) {
      list.push(code);
    }
  }

  return map;
}

async function loadCodeTable() {
  const config = getConfig();
  if (!config) return;

  const statusEl = document.getElementById("status");
  const searchBtn = document.getElementById("searchBtn");
  const inputEl = document.getElementById("charInput");

  searchBtn.disabled = true;
  inputEl.disabled = true;
  clearResultUI();
  applyMethodUI();

  if (codeTableCache.has(currentMethod)) {
    codeMap = codeTableCache.get(currentMethod);
    statusEl.textContent = `「${config.name}」碼表載入完成（共 ${codeMap.size} 個字）`;
    searchBtn.disabled = false;
    inputEl.disabled = false;
    inputEl.focus();
    return;
  }

  statusEl.textContent = `正在載入「${config.name}」碼表，請稍候...`;

  try {
    const response = await fetch(config.dataFile);
    if (!response.ok) throw new Error(`無法載入 ${config.dataFile}`);

    const text = await response.text();
    codeMap = parseCodeTable(text);
    codeTableCache.set(currentMethod, codeMap);

    statusEl.textContent = `「${config.name}」碼表載入完成（共 ${codeMap.size} 個字）`;
    searchBtn.disabled = false;
    inputEl.disabled = false;
    inputEl.focus();
  } catch (err) {
    statusEl.innerHTML = `載入失敗：${err.message} <button type="button" class="retry-btn" id="retryBtn">重試</button>`;
    document.getElementById("retryBtn")?.addEventListener("click", () => loadCodeTable());
    console.error(err);
  }
}

function search() {
  const config = getConfig();
  if (!config) {
    document.getElementById("status").textContent = INITIAL_UI.status;
    return;
  }

  const input = document.getElementById("charInput");
  const raw = input.value.trim();
  const char = getFirstChar(raw);

  const resultEl = document.getElementById("result");
  const charDisplay = document.getElementById("charDisplay");
  const codeList = document.getElementById("codeList");
  const status = document.getElementById("status");

  clearResultUI();

  if (!char) {
    status.textContent = "請輸入一個字元";
    return;
  }

  let statusMsg = "";
  if ([...raw].length > 1) {
    statusMsg = `偵測到多個字元，已使用第一個字元「${char}」查詢`;
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
      <span class="label">Unicode Block</span>
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
    status.textContent = statusMsg || "";
    codeList.innerHTML = `<div class="not-found">查無此字的${config.name}編碼</div>`;
    resultEl.hidden = false;
    resultEl.classList.add("show");
    return;
  }

  if (statusMsg) {
    status.textContent = `${statusMsg}，找到 ${codes.length} 組編碼`;
  } else {
    status.textContent = `找到 ${codes.length} 組編碼`;
  }

  codes.sort((a, b) => a.length - b.length || a.localeCompare(b));

  const fragment = document.createDocumentFragment();

  for (const code of codes) {
    const item = document.createElement("div");
    item.className = "code-item";
    item.tabIndex = 0;
    item.setAttribute("role", "button");
    item.setAttribute("aria-label", `複製編碼 ${code.toUpperCase()}`);
    item.title = "點擊複製編碼";

    const upper = code.toUpperCase();
    const radical = toRadical(code);

    item.innerHTML = `
      <div>
        <div class="label">${config.codeLabel}</div>
        <div class="value">${upper}</div>
      </div>
      <div>
        <div class="label">${config.radicalLabel}</div>
        <div class="value radical">${radical}</div>
      </div>
    `;

    const copyHandler = () => {
      navigator.clipboard.writeText(upper).then(
        () => showToast(`已複製：${upper}`),
        () => showToast("複製失敗")
      );
    };
    item.addEventListener("click", copyHandler);
    item.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        copyHandler();
      }
    });

    fragment.appendChild(item);
  }

  codeList.appendChild(fragment);
  resultEl.hidden = false;
  resultEl.classList.add("show");
}

function switchMethod(methodId) {
  if (!METHODS[methodId]) return;
  if (methodId === currentMethod) return;

  currentMethod = methodId;
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
    if (btn) switchMethod(btn.dataset.method);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "/" && document.activeElement !== inputEl && !e.ctrlKey && !e.metaKey) {
      if (!inputEl.disabled) {
        e.preventDefault();
        inputEl.focus();
      }
    }
  });
}

document.addEventListener("DOMContentLoaded", async () => {
  applyMethodUI();
  initEvents();
  loadBig5Category();
});
