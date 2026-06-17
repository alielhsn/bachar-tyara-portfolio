//src/data/translations.js
const sharedImages = {
  mainImage: "/images/coach/coach-1.jpg",
  coachImages: [
    "/images/coach/coach-1.jpg",
    "/images/coach/coach-2.jpg",
    "/images/coach/coach-3.jpg",
    "/images/coach/coach-4.jpg",
    "/images/coach/coach-5.jpg",
  ],
  clients: [
  {
    images: [
      "/images/clients/girl-client-1-before.jpg",
      "/images/clients/girl-client-1-after.jpg",
    ],
  },
  {
    images: [
      "/images/clients/client-2-before.jpg",
      "/images/clients/client-2-after.jpg",
    ],
  },
  {
    images: [
      "/images/clients/girl-client-2-before.jpg",
      "/images/clients/girl-client-2-after.jpg",
    ],
  },
  {
    images: [
      "/images/clients/client-3-before.jpg",
      "/images/clients/client-3-after.jpg",
    ],
  },
  {
    images: [
      "/images/clients/client-4-before.jpg",
      "/images/clients/client-4-after.jpg",
    ],
  },
  {
    images: [
      "/images/clients/client-5-before.jpg",
      "/images/clients/client-5-after.jpg",
    ],
  },
],
};

export const translations = {
  en: {
    languageButton: "AR",

    nav: {
      home: "Home",
      about: "About",
      transformations: "Transformations",
      services: "Services",
      contact: "Contact",
      startNow: "Start Now",
      startCoaching: "Start Coaching",
    },

    coach: {
      name: "Coach Bashar",
      title: "Elite Personal Trainer",
      slogan: "Premium coaching for men and women who want strength, fat loss, shape, discipline, and real transformation.",
      location: "Lebanon",
      instagramUrl: "https://www.instagram.com/bashaar__t?igsh=Z2F5ZnQ1b2psdm9y",
      whatsappUrl: "https://wa.me/96181240946",
      mainImage: sharedImages.mainImage,
      images: sharedImages.coachImages,
      bio: "A results-driven personal trainer helping both men and women build stronger bodies, better shape, and real confidence through structured training, smart nutrition guidance, and premium follow-up.",
      specialties: [
  "Men & Women Coaching",
  "Fat Loss",
  "Muscle Building",
  "Body Toning",
  "Body Recomposition",
  "Nutrition Guidance",
],
      stats: [
        {
          value: "9+",
          label: "Years Experience",
        },
        {
          value: "500+",
          label: "Transformations",
        },
        {
          value: "1:1",
          label: "Premium Coaching",
        },
      ],
    },

    hero: {
      badge: "Premium transformations for men and women",
      titleTop: "Build Your",
      titleHighlight: "Legend Body",
      bookButton: "Book Your Plan",
      instagramButton: "View Instagram",
      coachLabel: "Coach",
      ready: "Ready?",
      messageNow: "Message Now",
    },

    about: {
      eyebrow: "About The Coach",
      title: "Built Different. Coaching Different.",
      description:
  "A premium training experience for men and women who want more than random workouts — they want structure, confidence, and visible results.",
      galleryBadge: "Elite Personal Trainer",
      coachImage: "Coach image",
      coachingTitle: "Coaching that turns effort into a",
      coachingHighlight: "visible transformation.",
      cards: [
        {
          title: "Elite Coaching",
          text: "Premium training strategy built around your body, your goal, and your lifestyle.",
        },
        {
          title: "Real Results",
          text: "Focused on visible transformation, consistency, and long-term discipline.",
        },
        {
          title: "Accountability",
          text: "Clear follow-up, progress tracking, and direct support through your journey.",
        },
      ],
    },

    transformations: {
      eyebrow: "Real Transformations",
      title: "Proof That Discipline Changes Everything.",
      description:
        "A premium showcase of client progress — before, after, and transformation moments that prove what structured coaching can do.",
      note:
        "Every transformation below represents consistency, guidance, and a plan made for the client’s body and lifestyle.",
      labels: ["Before", "After", "Progress"],
      transformation: "Transformation",
      clients: [
  {
    name: "Female Transformation 01",
    goal: "Fat Loss & Shape Transformation",
    images: sharedImages.clients[0].images,
  },
  {
    name: "Client 02",
    goal: "Muscle Gain",
    images: sharedImages.clients[1].images,
  },
  {
    name: "Female Transformation 02",
    goal: "Body Toning & Confidence",
    images: sharedImages.clients[2].images,
  },
  {
    name: "Client 03",
    goal: "Body Recomposition",
    images: sharedImages.clients[3].images,
  },
  {
    name: "Client 04",
    goal: "Strength & Shape",
    images: sharedImages.clients[4].images,
  },
  {
    name: "Client 05",
    goal: "Premium Coaching Result",
    images: sharedImages.clients[5].images,
  },
],
    },

    services: {
      eyebrow: "Premium Services",
      title: "Choose Your Transformation Path.",
      description:
        "Whether you want private gym coaching, online guidance, or a complete transformation plan, everything is built for serious progress.",
      askButton: "Ask About This",
      list: [
        {
          title: "Personal Training",
          description:
  "Private coaching sessions for men and women focused on strength, shape, posture, and performance.",
        },
        {
          title: "Online Coaching",
          description:
            "Custom workout plans, progress tracking, and weekly follow-up from anywhere.",
        },
        {
          title: "Nutrition Guidance",
          description:
            "Simple nutrition structure designed to support fat loss, muscle gain, and discipline.",
        },
        {
          title: "Transformation Program",
          description:
            "A complete premium plan for serious clients who want visible results.",
        },
      ],
      whyEyebrow: "Why Choose Me",
      whyTitleStart: "Not just workouts. A complete",
      whyTitleHighlight: "coaching system.",
      whyText:
        "The goal is not only to make you train harder. The goal is to make you train smarter, eat better, stay consistent, and finally understand how your body changes.",
      imageEyebrow: "Train With Purpose",
      imageTitle: "Serious coaching for serious results.",
      startButton: "Start Your Transformation",
      reasons: [
        {
          title: "Goal-Based Plans",
          text: "Every program is built around your current body, target shape, schedule, and fitness level.",
        },
        {
          title: "Smart Training",
          text: "No random workouts. Every session has a purpose: strength, shape, posture, or performance.",
        },
        {
          title: "Premium Follow-Up",
          text: "Progress tracking, accountability, adjustments, and direct support to keep you moving forward.",
        },
      ],
    },

    testimonials: {
      eyebrow: "Client Stories",
      title: "What Clients Say After The Change.",
      description:
        "Real coaching is not only about training hard. It is about guidance, accountability, and building a system that the client can actually follow.",
      list: [
        {
          name: "George",
          text: "The coaching was clear, professional, and very motivating. I finally understood how to train with structure and stay consistent.",
          result: "Fat Loss Transformation",
        },
        {
          name: "Ali",
          text: "The plan was realistic and powerful. I saw changes in my body, strength, and confidence.",
          result: "Muscle Gain",
        },
        {
          name: "Sara",
          text: "The follow-up made the biggest difference. Every week we adjusted the plan and kept improving.",
          result: "Body Recomposition",
        },
      ],
    },

    contact: {
      eyebrow: "Start Today",
      titleStart: "Your transformation starts with one",
      titleHighlight: "message.",
      text:
        "Tell the coach your goal, your current level, and what you want to change. Then start with a plan built to move you forward.",
      whatsappButton: "Message On WhatsApp",
      instagramButton: "Follow On Instagram",
    },

    footer: {
      rights: "Premium PT Portfolio. All rights reserved.",
    },
  },

  ar: {
    languageButton: "EN",

    nav: {
      home: "الرئيسية",
      about: "عن المدرب",
      transformations: "التحولات",
      services: "الخدمات",
      contact: "تواصل",
      startNow: "ابدأ الآن",
      startCoaching: "ابدأ التدريب",
    },

    coach: {
      name: "Coach Bashar",
      title: "مدرب شخصي محترف",
      slogan: "تدريب بريميوم للرجال والنساء لبناء القوة، خسارة الدهون، تحسين شكل الجسم، والوصول لتحول حقيقي.",
      location: "لبنان",
      instagramUrl: "https://www.instagram.com/bashaar__t?igsh=Z2F5ZnQ1b2psdm9y",
      whatsappUrl: "https://wa.me/96181240946",
      mainImage: sharedImages.mainImage,
      images: sharedImages.coachImages,
      bio: "مدرب شخصي يساعد الرجال والنساء على بناء جسم أقوى، شكل أفضل، وثقة أعلى من خلال تدريب منظم، إرشاد غذائي ذكي، ومتابعة احترافية.",
      specialties: [
  "تدريب رجال ونساء",
  "خسارة الدهون",
  "بناء العضلات",
  "شد الجسم",
  "إعادة تشكيل الجسم",
  "إرشاد غذائي",
],
      stats: [
        {
          value: "9+",
          label: "سنوات خبرة",
        },
        {
          value: "500+",
          label: "تحول ناجح",
        },
        {
          value: "1:1",
          label: "تدريب شخصي",
        },
      ],
    },

    hero: {
      badge: "تحولات بريميوم للرجال والنساء",
      titleTop: "ابنِ جسمك",
      titleHighlight: "الأسطوري",
      bookButton: "احجز خطتك",
      instagramButton: "شاهد إنستغرام",
      coachLabel: "المدرب",
      ready: "جاهز؟",
      messageNow: "راسل الآن",
    },

    about: {
      eyebrow: "عن المدرب",
      title: "تدريب مختلف. نتائج مختلفة.",
      description:
  "تجربة تدريب بريميوم للرجال والنساء الذين لا يريدون تمارين عشوائية، بل يريدون خطة واضحة، ثقة، ونتائج ملموسة.",
      galleryBadge: "مدرب شخصي محترف",
      coachImage: "صورة المدرب",
      coachingTitle: "تدريب يحوّل مجهودك إلى",
      coachingHighlight: "نتيجة واضحة.",
      cards: [
        {
          title: "تدريب احترافي",
          text: "استراتيجية تدريب بريميوم مبنية حول جسمك، هدفك، ونمط حياتك.",
        },
        {
          title: "نتائج حقيقية",
          text: "تركيز على التحول الواضح، الاستمرارية، والانضباط طويل المدى.",
        },
        {
          title: "متابعة ومحاسبة",
          text: "متابعة واضحة، تتبع للتقدم، ودعم مباشر خلال رحلة التغيير.",
        },
      ],
    },

    transformations: {
      eyebrow: "تحولات حقيقية",
      title: "الدليل أن الانضباط يغيّر كل شيء.",
      description:
        "عرض بريميوم لتقدم العملاء قبل وبعد، ولحظات التحول التي تثبت قوة التدريب المنظم.",
      note:
        "كل تحول بالأسفل هو نتيجة التزام، متابعة، وخطة مناسبة لجسم ونمط حياة العميل.",
      labels: ["قبل", "بعد", "تقدم"],
      transformation: "تحول",
      clients: [
  {
    name: "تحول نسائي 01",
    goal: "خسارة دهون وتحسين شكل الجسم",
    images: sharedImages.clients[0].images,
  },
  {
    name: "العميل 02",
    goal: "بناء عضلات",
    images: sharedImages.clients[1].images,
  },
  {
    name: "تحول نسائي 02",
    goal: "شد الجسم وزيادة الثقة",
    images: sharedImages.clients[2].images,
  },
  {
    name: "العميل 03",
    goal: "إعادة تشكيل الجسم",
    images: sharedImages.clients[3].images,
  },
  {
    name: "العميل 04",
    goal: "قوة وشكل أفضل",
    images: sharedImages.clients[4].images,
  },
  {
    name: "العميل 05",
    goal: "نتيجة تدريب بريميوم",
    images: sharedImages.clients[5].images,
  },
],
    },

    services: {
      eyebrow: "الخدمات",
      title: "اختر طريق التحول المناسب لك.",
      description:
        "سواء كنت تريد تدريباً خاصاً في النادي، متابعة أونلاين، أو خطة تحول كاملة، كل شيء مصمم للتقدم الجدي.",
      askButton: "اسأل عن الخدمة",
      list: [
        {
          title: "تدريب شخصي",
          description:
  "جلسات تدريب خاصة للرجال والنساء تركّز على القوة، الشكل، الوضعية، والأداء.",
        },
        {
          title: "تدريب أونلاين",
          description:
            "خطط تمرين مخصصة، تتبع تقدم، ومتابعة أسبوعية من أي مكان.",
        },
        {
          title: "إرشاد غذائي",
          description:
            "نظام غذائي بسيط ومنظم لدعم خسارة الدهون، بناء العضلات، والانضباط.",
        },
        {
          title: "برنامج تحول كامل",
          description:
            "خطة بريميوم كاملة للعملاء الجادين الذين يريدون نتائج واضحة.",
        },
      ],
      whyEyebrow: "لماذا تختارني",
      whyTitleStart: "ليس مجرد تمارين. بل",
      whyTitleHighlight: "نظام تدريب كامل.",
      whyText:
        "الهدف ليس فقط أن تتمرن أكثر، بل أن تتمرن بذكاء، تأكل بشكل أفضل، تلتزم أكثر، وتفهم كيف يتغير جسمك.",
      imageEyebrow: "تمرّن بهدف",
      imageTitle: "تدريب جدي لنتائج جدية.",
      startButton: "ابدأ تحولك الآن",
      reasons: [
        {
          title: "خطط حسب الهدف",
          text: "كل برنامج يُبنى حسب جسمك الحالي، هدفك، جدولك، ومستواك الرياضي.",
        },
        {
          title: "تدريب ذكي",
          text: "لا يوجد تمارين عشوائية. كل جلسة لها هدف: قوة، شكل، وضعية، أو أداء.",
        },
        {
          title: "متابعة بريميوم",
          text: "تتبع للتقدم، محاسبة، تعديلات مستمرة، ودعم مباشر للاستمرار.",
        },
      ],
    },

    testimonials: {
      eyebrow: "آراء العملاء",
      title: "ماذا يقول العملاء بعد التغيير.",
      description:
        "التدريب الحقيقي ليس فقط تمريناً قاسياً، بل توجيه، متابعة، ونظام يستطيع العميل الالتزام به.",
      list: [
        {
          name: "جورج",
          text: "التدريب كان واضحاً، احترافياً، ومحفزاً جداً. أخيراً فهمت كيف أتمرن بخطة وأبقى ملتزماً.",
          result: "تحول وخسارة دهون",
        },
        {
          name: "علي",
          text: "الخطة كانت واقعية وقوية. رأيت فرقاً في جسمي، قوتي، وثقتي بنفسي.",
          result: "بناء عضلات",
        },
        {
          name: "سارة",
          text: "المتابعة صنعت الفرق الأكبر. كل أسبوع كان هناك تعديل وتحسن مستمر.",
          result: "إعادة تشكيل الجسم",
        },
      ],
    },

    contact: {
      eyebrow: "ابدأ اليوم",
      titleStart: "تحولك يبدأ من",
      titleHighlight: "رسالة واحدة.",
      text:
        "أخبر المدرب بهدفك، مستواك الحالي، وما الذي تريد تغييره. بعدها تبدأ بخطة مصممة لتأخذك للأمام.",
      whatsappButton: "تواصل عبر واتساب",
      instagramButton: "تابع على إنستغرام",
    },

    footer: {
      rights: "بورتفوليو مدرب شخصي بريميوم. جميع الحقوق محفوظة.",
    },
  },
};