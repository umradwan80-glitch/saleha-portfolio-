/* ============================================================
   Saleha Mohammed — Portfolio interactions
   Language (AR/EN + RTL/LTR) and theme (light/dark).
   No external libraries.
   ============================================================ */

(function () {
  "use strict";

  var root = document.documentElement;
  var LANG_KEY = "saleha-portfolio-lang";
  var THEME_KEY = "saleha-portfolio-theme";

  var dict = {
    en: {
      "meta.home": "Saleha Mohammed | My Portfolio",
      "meta.projects": "Saleha Mohammed | Projects",
      "meta.contact": "Saleha Mohammed | Contact",
      "meta.description": "Web Design • Creative Projects • Digital Solutions",

      "skip": "Skip to content",
      "brand.role": "My Portfolio",
      "nav.home": "Home",
      "nav.projects": "Projects",
      "nav.contact": "Contact",

      "lang.label": "العربية",
      "lang.aria": "Switch to Arabic",
      "theme.toDark": "Dark mode",
      "theme.toLight": "Light mode",
      "theme.aria": "Switch color theme",

      "hero.eyebrow": "Web Designer",
      "hero.name": "Saleha Mohammed",
      "hero.title": "My Portfolio",
      "hero.subtitle": "Web Design • Creative Projects • Digital Solutions",
      "hero.phrase": "Design • Build • Inspire",
      "hero.cta": "Explore Projects",
      "hero.secondary": "Get in Touch",
      "hero.coverAlt": "Portfolio cover artwork in soft violet and blue tones",
      "hero.captionTitle": "Saleha Mohammed",
      "hero.captionText": "Web Design • Creative Projects • Digital Solutions",

      "about.eyebrow": "About",
      "about.title": "Elegant ideas, thoughtfully built.",
      "about.text": "Web Design • Creative Projects • Digital Solutions. A curated selection of applied and training projects presented with clarity and care.",
      "about.chip1": "Web Design",
      "about.chip2": "Creative Projects",
      "about.chip3": "Digital Solutions",

      "featured.eyebrow": "Selected Work",
      "featured.title": "Three featured projects",
      "featured.text": "A closer look at a few applied and training projects.",
      "featured.cta": "View All Projects",

      "projects.eyebrow": "Portfolio",
      "projects.title": "All Projects",
      "projects.lead": "Eight applied and training projects in web design.",
      "projects.badge": "Training Project",
      "projects.platform": "Platform",
      "projects.view": "View Project",

      "alt.p1": "Digital CV project preview showing an organized Arabic CV interface",
      "alt.p2": "Aroma Café website preview with coffee products and menu sections",
      "alt.p3": "Bait Al-Ilham Decor website preview showcasing furniture and interior design",
      "alt.p4": "LAVEN Fashion Store preview with product displays and shopping interface",
      "alt.p5": "EduSpace Learning platform preview with online course sections",
      "alt.p6": "Let's Learn English website preview with grammar, vocabulary and conversation sections",
      "alt.p7": "Mecca English Companion website preview presenting English learning resources",
      "alt.p8": "English Learning website preview with organized educational content",

      "contact.eyebrow": "Contact",
      "contact.title": "Let's Connect",
      "contact.lead": "A simple, elegant space for your inquiries.",
      "contact.noteTitle": "Contact details",
      "contact.note": "Contact details will be added here. No email address or phone number has been provided yet.",
      "contact.formTitle": "Send a message",
      "contact.name": "Name",
      "contact.email": "Email",
      "contact.message": "Message",
      "contact.namePh": "Your name",
      "contact.emailPh": "Your email address",
      "contact.messagePh": "Write your message...",
      "contact.send": "Prepare Message",
      "contact.status": "This demo form does not send data. You can copy your message before closing this page.",

      "footer.phrase": "Design • Build • Inspire",
      "footer.rights": "All rights reserved."
    },

    ar: {
      "meta.home": "Saleha Mohammed | بورتفوليو خاصتي",
      "meta.projects": "Saleha Mohammed | المشاريع",
      "meta.contact": "Saleha Mohammed | تواصل",
      "meta.description": "تصميم مواقع • مشاريع إبداعية • حلول رقمية",

      "skip": "انتقل إلى المحتوى",
      "brand.role": "بورتفوليو خاصتي",
      "nav.home": "الرئيسية",
      "nav.projects": "المشاريع",
      "nav.contact": "تواصل",

      "lang.label": "English",
      "lang.aria": "التبديل إلى الإنجليزية",
      "theme.toDark": "الوضع الداكن",
      "theme.toLight": "الوضع الفاتح",
      "theme.aria": "تبديل المظهر اللوني",

      "hero.eyebrow": "مصممة مواقع",
      "hero.name": "Saleha Mohammed",
      "hero.title": "بورتفوليو خاصتي",
      "hero.subtitle": "تصميم مواقع • مشاريع إبداعية • حلول رقمية",
      "hero.phrase": "صمّم • ابنِ • ألهم",
      "hero.cta": "استكشف المشاريع",
      "hero.secondary": "تواصل معي",
      "hero.coverAlt": "غلاف البورتفوليو بدرجات بنفسجية وزرقاء ناعمة",
      "hero.captionTitle": "Saleha Mohammed",
      "hero.captionText": "تصميم مواقع • مشاريع إبداعية • حلول رقمية",

      "about.eyebrow": "نبذة",
      "about.title": "أفكار أنيقة، مبنية بعناية.",
      "about.text": "تصميم مواقع • مشاريع إبداعية • حلول رقمية. مجموعة مختارة من المشاريع التطبيقية والتدريبية مقدّمة بوضوح وعناية.",
      "about.chip1": "تصميم مواقع",
      "about.chip2": "مشاريع إبداعية",
      "about.chip3": "حلول رقمية",

      "featured.eyebrow": "أعمال مختارة",
      "featured.title": "ثلاثة مشاريع مختارة",
      "featured.text": "نظرة أقرب إلى بعض المشاريع التطبيقية والتدريبية.",
      "featured.cta": "عرض جميع المشاريع",

      "projects.eyebrow": "البورتفوليو",
      "projects.title": "جميع المشاريع",
      "projects.lead": "ثمانية مشاريع تطبيقية وتدريبية في تصميم المواقع.",
      "projects.badge": "مشروع تدريبي",
      "projects.platform": "المنصة",
      "projects.view": "عرض المشروع",

      "alt.p1": "معاينة مشروع السيرة الذاتية الرقمية بواجهة عربية منظمة",
      "alt.p2": "معاينة موقع Aroma Café مع أقسام القهوة والقائمة",
      "alt.p3": "معاينة موقع بيت الإلهام للديكور يعرض الأثاث والتصميم الداخلي",
      "alt.p4": "معاينة متجر LAVEN للأزياء بعرض المنتجات وواجهة تسوق",
      "alt.p5": "معاينة منصة EduSpace Learning بأقسام الدورات الإلكترونية",
      "alt.p6": "معاينة موقع Let's Learn English بأقسام القواعد والمفردات والمحادثة",
      "alt.p7": "معاينة موقع Mecca English Companion يعرض موارد تعلم الإنجليزية",
      "alt.p8": "معاينة موقع English Learning بمحتوى تعليمي منظم",

      "contact.eyebrow": "تواصل",
      "contact.title": "لنتواصل",
      "contact.lead": "مساحة بسيطة وأنيقة لاستفساراتك.",
      "contact.noteTitle": "وسائل التواصل",
      "contact.note": "ستتم إضافة وسائل التواصل هنا. لم يتم تقديم بريد إلكتروني أو رقم هاتف حتى الآن.",
      "contact.formTitle": "أرسل رسالة",
      "contact.name": "الاسم",
      "contact.email": "البريد الإلكتروني",
      "contact.message": "الرسالة",
      "contact.namePh": "اكتب اسمك",
      "contact.emailPh": "عنوان بريدك الإلكتروني",
      "contact.messagePh": "اكتب رسالتك...",
      "contact.send": "جهّز الرسالة",
      "contact.status": "هذا النموذج التجريبي لا يرسل بيانات. يمكنك نسخ رسالتك قبل إغلاق الصفحة.",

      "footer.phrase": "صمّم • ابنِ • ألهم",
      "footer.rights": "جميع الحقوق محفوظة."
    }
  };

  function readStore(key) {
    try {
      return window.localStorage.getItem(key);
    } catch (e) {
      return null;
    }
  }

  function writeStore(key, value) {
    try {
      window.localStorage.setItem(key, value);
    } catch (e) {
      /* Storage may be unavailable — the page still works. */
    }
  }

  function currentLang() {
    return root.lang === "ar" ? "ar" : "en";
  }

  function setText(selector, value) {
    var el = document.querySelector(selector);
    if (el && value !== undefined) el.textContent = value;
  }

  function applyLanguage(lang) {
    var normalized = lang === "ar" ? "ar" : "en";
    var t = dict[normalized];
    var page = document.body.getAttribute("data-page") || "home";

    root.lang = normalized;
    root.dir = normalized === "ar" ? "rtl" : "ltr";

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var value = t[el.getAttribute("data-i18n")];
      if (value !== undefined) el.textContent = value;
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var value = t[el.getAttribute("data-i18n-placeholder")];
      if (value !== undefined) el.setAttribute("placeholder", value);
    });

    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var value = t[el.getAttribute("data-i18n-aria")];
      if (value !== undefined) el.setAttribute("aria-label", value);
    });

    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      var value = t[el.getAttribute("data-i18n-alt")];
      if (value !== undefined) el.setAttribute("alt", value);
    });

    document.title = t["meta." + page] || t["meta.home"];

    var metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute("content", t["meta.description"]);

    var langBtn = document.getElementById("lang-toggle");
    if (langBtn) {
      langBtn.setAttribute("aria-label", t["lang.aria"]);
      langBtn.setAttribute("aria-pressed", normalized === "ar" ? "true" : "false");
    }

    writeStore(LANG_KEY, normalized);
    applyThemeLabel();
  }

  function currentTheme() {
    return root.getAttribute("data-theme") === "dark" ? "dark" : "light";
  }

  function applyTheme(theme) {
    var normalized = theme === "dark" ? "dark" : "light";
    root.setAttribute("data-theme", normalized);
    writeStore(THEME_KEY, normalized);
    applyThemeLabel();
  }

  function applyThemeLabel() {
    var t = dict[currentLang()];
    var btn = document.getElementById("theme-toggle");
    if (!btn) return;

    var isDark = currentTheme() === "dark";
    var label = btn.querySelector("[data-theme-label]");
    var icon = btn.querySelector("[data-theme-icon]");

    if (label) label.textContent = isDark ? t["theme.toLight"] : t["theme.toDark"];
    if (icon) icon.textContent = isDark ? "☀" : "☾";
    btn.setAttribute("aria-label", t["theme.aria"]);
    btn.setAttribute("aria-pressed", isDark ? "true" : "false");
  }

  function init() {
    var savedLang = readStore(LANG_KEY);
    var savedTheme = readStore(THEME_KEY);

    applyTheme(savedTheme === "dark" ? "dark" : "light");
    applyLanguage(savedLang === "ar" || savedLang === "en" ? savedLang : "en");

    var langBtn = document.getElementById("lang-toggle");
    if (langBtn) {
      langBtn.addEventListener("click", function () {
        applyLanguage(currentLang() === "en" ? "ar" : "en");
      });
    }

    var themeBtn = document.getElementById("theme-toggle");
    if (themeBtn) {
      themeBtn.addEventListener("click", function () {
        applyTheme(currentTheme() === "light" ? "dark" : "light");
      });
    }

    var form = document.getElementById("contact-form");
    if (form) {
      form.addEventListener("submit", function (event) {
        event.preventDefault();
        var status = document.getElementById("form-status");
        if (status) status.textContent = dict[currentLang()]["contact.status"];
      });
    }

    var year = document.getElementById("year");
    if (year) year.textContent = String(new Date().getFullYear());
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
