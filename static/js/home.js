var swiper = new Swiper(".service-swiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    400: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});


var swiper = new Swiper(".partners-swiper", {
  slidesPerView: 10,
  spaceBetween: 10,
  freeMode: true,
  loop: true,
  navigation: {
    nextEl: ".btn.next",
    prevEl: ".btn.prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    400: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    500: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 7,
      spaceBetween: 10,
    },
    992: {
      slidesPerView: 10,
      spaceBetween: 10,
    },
  },
});




// translate page
const translationsContent = {
  en: {
    // hero section
    mainSectionTitle: "Main section",
    mainSectionDescription:
      "Here you can add a short description about the purpose of the portal followed by a call to action button and an image or illustration on the left side.",
    mainActionButton: "Main Action",
    // About us section
    aboutUsTitle: "About us section",
    aboutUsDescription:
      "Here you can add a short description about the purpose of the portal followed by a call to action button and an image or illustration on the left side.",
    aboutUsActionButton: "Action",
    personText: "Person",

    // service section
    servicesSection: "Services section",
    servicesDescription:
      "Here you can add a short description about the purpose of the portal followed by a call to action button and an image or illustration on the left side.",
    viewAllButton: "View all",
    cardTitle: "Card Title",
    cardDescription: "Card description",
    cardBadgeDefault: "badge",
    cardBadgePrimary: "badge",
    cardBadgeSuccess: "badge",
    cardActionButton: "Action",
    cardSecondaryActionButton: "Secondary Action",

    // news and articles
    cardImageAlt: "News image",
    cardTitle: "Title Card in two lines",
    cardDescription:
      "Here you can include a brief description of the title in four lines",

    // partners
    partners: "Partners",
      // last modified
    lastModifiedDate: "Last Modified Date: 04/12/2020 - 4:13 PM Saudi Arabia Time",
    usefulPageQuestion: "Was this page useful?",
    yesButton: "Yes",
    noButton: "No",
    userFeedbackStats: "60% of users said Yes from 2843 Feedbacks",
  },
  ar: {
    // hero section
    mainSectionTitle: "القسم الرئيسي",
    mainSectionDescription:
      "هنا يمكنك إضافة وصف قصير عن هدف البوابة يتبعه زر دعوة لاتخاذ إجراء وصورة أو رسم توضيحي على الجانب الأيسر.",
    mainActionButton: "الإجراء الرئيسي",
    // About us section
    aboutUsTitle: "قسم من نحن",
    aboutUsDescription:
      "هنا يمكنك إضافة وصف قصير عن هدف البوابة يتبعه زر دعوة لاتخاذ إجراء وصورة أو رسم توضيحي على الجانب الأيسر.",
    aboutUsActionButton: "الإجراء",
    personText: "شخص",

    // service section
    servicesSection: "قسم الخدمات",
    servicesDescription:
      "هنا يمكنك إضافة وصف مختصر حول الغرض من البوابة متبوعًا بزر الحث على اتخاذ إجراء وصورة أو رسم توضيحي على الجانب الأيسر.",
    viewAllButton: "عرض الكل",
    cardTitle: "عنوان البطاقة",
    cardDescription: "وصف البطاقة",
    cardBadgeDefault: "وسم",
    cardBadgePrimary: "وسم",
    cardBadgeSuccess: "وسم",
    cardActionButton: "إجراء",
    cardSecondaryActionButton: "إجراء ثانوي",

    // news and articles
    cardImageAlt: "صورة الأخبار",
    cardTitle: "عنوان البطاقة في سطرين",
    cardDescription: "يمكنك تضمين وصف موجز للعنوان في أربعة أسطر",

    // partners
    partners: "الشركاء",


    // last modified
    lastModifiedDate: "تاريخ آخر تعديل: 04/12/2020 - 4:13 مساءً بتوقيت السعودية",
    usefulPageQuestion: "هل كانت هذه الصفحة مفيدة؟",
    yesButton: "نعم",
    noButton: "لا",
    userFeedbackStats: "60% من المستخدمين قالوا نعم من 2843 تعليقًا",

  },
};

document.addEventListener("DOMContentLoaded", () => {
  const langButton = document.getElementById("langButton");
  applyTranslations(translationsContent);

  langButton.addEventListener("click", () => {
    applyTranslations(translationsContent);
  });
});
