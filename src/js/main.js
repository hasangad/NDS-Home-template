const headerSearchInputGroup = document.getElementById("header-search");
const input = document.getElementById("search-input");
const searchIcon = document.getElementById("search-input-icon");

const handleInputFocus = () => {
  headerSearchInputGroup.style.border = "2px solid green";
  headerSearchInputGroup.style.borderRadius = "4px";
  headerSearchInputGroup.style.width = "200px";
  input.focus();
};

searchIcon.addEventListener("click", handleInputFocus);
input.addEventListener("focus", handleInputFocus);

input.addEventListener("blur", () => {
  headerSearchInputGroup.style.borderColor = "transparent";
  headerSearchInputGroup.style.width = "117px";
});

// translate
const translations = {
  en: {
    // Header
    cloud: "Cloud",
    date: "3-sep-2024",
    time: "2:30pm",
    location: "Al-Riyadh",
    home: "Home",
    about: "About GEA",
    tabs: "Tabs",
    tab1: "Tab 1",
    tab2: "Tab 2",
    initiatives: "Initiatives",
    searchPlaceholder: "Search",
    login: "Login",
    langButton: "عربى",
    // Footer
    overviewTitle: "Overview",
    aboutPortal: "About [Portal Name]",
    privacyTerms: "Privacy and Terms of Use",
    howToUse: "How to Use",
    newsEvents: "News and Events",
    slaStatistics: "Service Level Agreement Statistics",
    importantLinksTitle: "Important Links",
    nationalServicePortal: "National Service Portal",
    openGovData: "Open Government Data",
    nationalStrategy: "National Strategy for Data and AI",
    openDataPortal: "Open Data Portal",
    eParticipationPortal: "E-Participation Portal",
    contactSupportTitle: "Contact and Support",
    customerHub: "Customer Hub",
    contactUs: "Contact Us",
    engageWithUs: "Engage With Us",
    submitComplaint: "Submit a Complaint",
    reportCorruption: "Report Corruption",
    socialMediaTitle: "Follow Us On",
    acceptabilityToolsTitle: "Accessibility and Usability Tools",
    sitemapLink: "Sitemap",
    mobileAppLink: "Mobile App",
    allRightsReserved:
      "All rights reserved to the Government Digital Authority &copy; 2024",
    developedBy: "Developed and maintained by [Name]",
    lastUpdate: "Last update date: 2020/04/02",
  },
  ar: {
    // Header
    cloud: "غائم",
    date: "٣-سبتمبر-٢٠٢٤",
    time: "٢:٣٠ مساءً",
    location: "الرياض",
    home: "الرئيسية",
    about: "عن الهيئة",
    tabs: "تبويب",
    tab1: "تبويب 1",
    tab2: "تبويب 2",
    initiatives: "المبادرات",
    searchPlaceholder: "البحث",
    login: "تسجيل الدخول",
    langButton: "English",
    // Footer
    overviewTitle: "ملخص",
    aboutPortal: "عن [اسم البوابة]",
    privacyTerms: "الخصوصية وشروط الاستخدام",
    howToUse: "كيفية الاستخدام",
    newsEvents: "الأخبار والفعاليات",
    slaStatistics: "إحصائيات مستوى الخدمة",
    importantLinksTitle: "روابط مهمة",
    nationalServicePortal: "بوابة الوطنية للخدمات",
    openGovData: "البيانات الحكومية المفتوحة",
    nationalStrategy: "الاستراتيجية الوطنية للبيانات والذكاء الاصطناعى",
    openDataPortal: "بوابة البيانات المفتوحة",
    eParticipationPortal: "بوابة المشاركة الإلكترونية",
    contactSupportTitle: "الاتصال والدعم",
    customerHub: "مركز العملاء",
    contactUs: "تواصل معنا",
    engageWithUs: "شارك معنا",
    submitComplaint: "تقديم شكوى",
    reportCorruption: "الإبلاغ عن الفساد",
    socialMediaTitle: "تابعنا على",
    acceptabilityToolsTitle: "أدوات الاتاحة والوصول",
    sitemapLink: "خريطة الموقع",
    mobileAppLink: "التطبيق المحمول",
    allRightsReserved: "جميع الحقوق محفوظة للهيئة الرقمية للحكومة &copy; 2024",
    developedBy: "تم التطوير والصيانة بواسطة [الاسم]",
    lastUpdate: "تاريخ آخر تحديث: 2020/04/02",
  },
};

const applyTranslations = (translations, isBodyContent = true) => {
  const currentLang = localStorage.getItem("language") || 'en';
  const texts = translations[currentLang];
  let items =  document.querySelectorAll(
    "header [data-translate], footer [data-translate]"
  );

  if (isBodyContent) {
    items = document.querySelectorAll(
      "body *[data-translate]:not(header *):not(footer *)"
    );
  }

  items.forEach((el) => {
    const key = el.getAttribute("data-translate");

    if (texts[key]) {
      if (el.tagName === "INPUT") {
        el.placeholder = texts[key];
      } else {
        el.textContent = texts[key];
      }
    }
  });

  document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";
  if (currentLang === "ar") {
    document.body.classList.add("rtl");
  } else {
    document.body.classList.remove("rtl");
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const langButton = document.getElementById("langButton");
  applyTranslations(translations, false);

  langButton.addEventListener("click", () => {
    let currentLang = localStorage.getItem("language") || "en";
    currentLang = currentLang === "en" ? "ar" : "en";
    localStorage.setItem("language", currentLang);
    applyTranslations(translations, false);
  });
});
