const EMAIL = 'eng.zainwahbi@gmail.com';

/* ---------- Contact form (opens the visitor's default mail app) ---------- */
document.getElementById('sendBtn').addEventListener('click', function (e) {
  e.preventDefault();
  const name = document.getElementById('f-name').value.trim();
  const emailInput = document.getElementById('f-email');
  const email = emailInput.value.trim();
  const msg = document.getElementById('f-msg').value.trim();
  const err = document.getElementById('emailErr');

  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!valid) {
    err.hidden = false;
    emailInput.setAttribute('aria-invalid', 'true');
    emailInput.focus();
    return;
  }
  err.hidden = true;
  emailInput.removeAttribute('aria-invalid');

  const subject = encodeURIComponent('Portfolio contact from ' + (name || 'a visitor'));
  const body = encodeURIComponent((msg || '') + '\n\n— ' + (name || '') + ' (' + email + ')');
  window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
});
document.getElementById('f-email').addEventListener('input', function () {
  document.getElementById('emailErr').hidden = true;
  this.removeAttribute('aria-invalid');
});

/* ---------- Translations ---------- */
const translations = {
  nav_about:{en:"About", ar:"نبذة"},
  nav_skills:{en:"Skills", ar:"المهارات"},
  nav_projects:{en:"Projects", ar:"المشاريع"},
  nav_education:{en:"Education", ar:"التعليم"},
  nav_contact:{en:"Contact", ar:"تواصل"},
  nav_cv:{en:"Resume", ar:"السيرة الذاتية"},
  nav_cta:{en:"Get in touch", ar:"تواصل معي"},
  hero_badge:{en:"Computer Engineering · Hama, Syria", ar:"هندسة معلوماتية · حماة، سوريا"},
  hero_subtitle:{en:"Backend & ML Engineer", ar:"مهندس Backend وتعلّم آلي"},
  hero_lede:{en:"Computer Engineering graduate specializing in backend development with Laravel and PHP, with hands-on experience building and deploying machine learning systems.",
              ar:"خريج هندسة معلوماتية متخصص في تطوير الواجهات الخلفية (Backend) باستخدام Laravel وPHP، ولديه خبرة عملية في بناء ونشر أنظمة التعلّم الآلي."},
  hero_btn1:{en:"View projects", ar:"شاهد المشاريع"},
  hero_btn2:{en:"Contact me", ar:"تواصل معي"},
  about_heading:{en:"About Me", ar:"نبذة عني"},
  about_p1:{en:"I'm a Computer Engineer who graduated from Al-Wataniya Private University in 2026, based in Hama, Syria. My work sits at the intersection of backend engineering and applied machine learning, with an emphasis on systems that are reliable, well-tested, and easy to reason about.",
             ar:"مهندس معلوماتية، تخرجت من الجامعة الوطنية الخاصة عام 2026، ومقيم في حماة، سوريا. يجمع عملي بين هندسة الواجهات الخلفية (Backend) وتطبيقات التعلّم الآلي، مع التركيز على بناء أنظمة موثوقة، جيدة الاختبار، وسهلة الفهم."},
  about_p2:{en:"I build Laravel REST APIs with proper authentication, payments, and background job processing, and I develop machine learning pipelines that go from raw data to a deployed prediction endpoint. I care about clean, maintainable code, and about being upfront about a model's limitations rather than just its headline metric.",
             ar:"أُصمّم واجهات REST API باستخدام Laravel مع مصادقة موثوقة، أنظمة دفع، ومهام خلفية، كما أبني مسارات تعلّم آلي كاملة تبدأ من البيانات الخام وتنتهي بنقطة نهاية (Endpoint) جاهزة للتنبؤ. أحرص على كتابة كود نظيف وقابل للصيانة، وعلى التوضيح الصريح لحدود أي نموذج بدلًا من الاكتفاء بعرض مؤشراته النهائية فقط."},
  comp_heading:{en:"Core Competencies", ar:"المهارات الأساسية"},
  comp1_title:{en:"Backend", ar:"Backend"},
  comp1_desc:{en:"PHP · Laravel · REST APIs · MySQL · Sanctum · Stripe · FastAPI", ar:"PHP · Laravel · REST APIs · MySQL · Sanctum · Stripe · FastAPI"},
  comp2_title:{en:"Machine Learning", ar:"التعلّم الآلي"},
  comp2_desc:{en:"Python · Scikit-learn · LightGBM · XGBoost · Random Forest · TabNet", ar:"Python · Scikit-learn · LightGBM · XGBoost · Random Forest · TabNet"},
  comp5_title:{en:"Data Analysis", ar:"تحليل البيانات"},
  comp5_desc:{en:"Pandas · NumPy · Matplotlib · Jupyter · Excel", ar:"Pandas · NumPy · Matplotlib · Jupyter · Excel"},
  comp6_title:{en:"Programming Languages", ar:"لغات البرمجة"},
  comp6_desc:{en:"PHP · Python · JavaScript · Java · C++ · R · SQL", ar:"PHP · Python · JavaScript · Java · C++ · R · SQL"},
  comp3_title:{en:"Frontend", ar:"الواجهات الأمامية"},
  comp3_desc:{en:"HTML · CSS · JavaScript · Tailwind · jQuery · Chart.js", ar:"HTML · CSS · JavaScript · Tailwind · jQuery · Chart.js"},
  comp4_title:{en:"Testing & Tools", ar:"الاختبار والأدوات"},
  comp4_desc:{en:"PHPUnit · Pest · Git · GitHub · Swagger/OpenAPI · SOLID · OOP", ar:"PHPUnit · Pest · Git · GitHub · Swagger/OpenAPI · SOLID · OOP"},
  projects_title:{en:"Projects", ar:"المشاريع"},
  proj1_date:{en:"Graduation Project · Feb – Jul 2026", ar:"مشروع التخرج · شباط – تموز 2026"},
  proj1_title:{en:"Fraud Bank — Financial Fraud Detection", ar:"Fraud Bank — نظام كشف الاحتيال المالي"},
  proj1_desc:{en:"Compared four ML models on 5 million transactions, engineered 30+ features, and shipped the winner behind a full Laravel dashboard with live simulation.",
               ar:"قارنت بين أربعة نماذج تعلّم آلي على 5 ملايين معاملة، وهندست أكثر من 30 ميزة مشتقة، ونشرت النموذج الفائز خلف لوحة تحكم كاملة بـ Laravel مع محاكاة حية."},
  proj1_li1:{en:"Random Forest, XGBoost, LightGBM and TabNet trained on a stratified 4M-record split with 3:1 undersampling",
              ar:"تدريب Random Forest وXGBoost وLightGBM وTabNet على تقسيم طبقي بـ 4 ملايين معاملة مع Undersampling بنسبة 3:1"},
  proj1_li2:{en:"LightGBM selected for deployment — best F1-score and fastest inference, threshold tuned to 0.94",
              ar:"تم اعتماد LightGBM للنشر — أفضل F1-Score وأسرع استجابة، مع عتبة مضبوطة عند 0.94"},
  proj1_li3:{en:"FastAPI backend (predict, batch-predict, explain, health) with a 9-step preprocessing pipeline",
              ar:"واجهة FastAPI (تنبؤ، تنبؤ دفعي، تفسير، فحص حالة) مع مسار معالجة مسبقة من 9 خطوات"},
  proj1_li4:{en:"Bilingual (AR/EN) Laravel dashboard with live transaction simulation, Chart.js analytics, and rule-based fraud explanations",
              ar:"لوحة تحكم ثنائية اللغة بـ Laravel مع محاكاة حية للمعاملات، تحليلات Chart.js، وتفسيرات احتيال قائمة على قواعد"},
  proj4_date:{en:"Class project 2025 · Rebuilt 2026", ar:"مشروع فصلي 2025 · أُعيد بناؤه 2026"},
  proj4_title:{en:"ATC — Airline Travel Company", ar:"ATC — نظام إدارة شركة طيران"},
  proj4_desc:{en:"Originally a university semester project in framework-free PHP/MySQL. Rebuilt from the ground up as ATC v2 — a production-style Laravel application developed with a two-person team using feature branches, PR review, and a protected main branch.",
               ar:"كان في الأصل مشروعاً فصلياً جامعياً بلغة PHP خام بدون framework. أُعيد بناؤه بالكامل كنسخة ATC v2 — تطبيق Laravel بجودة إنتاجية، طُوّر مع فريق من مطورَين باستخدام فروع مستقلة للميزات، مراجعة Pull Request، وفرع رئيسي محمي."},
  proj4_li1:{en:"Two structurally separate authentication systems (staff vs. customers) on distinct guards and tables — not just role checks",
              ar:"نظامان منفصلان بنيوياً للمصادقة (الموظفون مقابل الزبائن) على حراس وجداول مختلفة تماماً — وليس فقط تحقق أدوار"},
  proj4_li2:{en:"Real-time seat availability broadcast to customers via Laravel Reverb WebSockets as admins book or release seats",
              ar:"توفّر مقاعد فوري يُبث للزبائن عبر WebSockets بواسطة Laravel Reverb لحظة حجز أو تحرير مقعد من قبل الأدمن"},
  proj4_li3:{en:"Computed (not stored) flight status derived live from departure time and duration, eliminating stale-status bugs",
              ar:"حالة الرحلة تُحسب لحظياً (لا تُخزَّن) بالاعتماد على وقت المغادرة والمدة، ما يلغي مشاكل الحالة القديمة"},
  proj4_li4:{en:"Full Arabic/English localization with proper RTL typography, plus a Filament admin panel with CSV/XLSX export and activity logging",
              ar:"دعم كامل ثنائي اللغة (عربي/إنجليزي) مع اتجاه RTL صحيح، ولوحة تحكم Filament مع تصدير CSV/XLSX وسجل نشاط"},
  proj2_date:{en:"Jun 2026", ar:"حزيران 2026"},
  proj2_desc:{en:"Full-featured e-commerce REST API — 12 relational tables covering auth, products, cart, coupons, orders and Stripe payments end to end.",
               ar:"واجهة REST API متكاملة لمتجر إلكتروني — 12 جدول مترابط يغطي المصادقة، المنتجات، السلة، الكوبونات، الطلبات، والدفع عبر Stripe بشكل كامل."},
  proj2_li1:{en:"Sanctum token auth with remember-me sessions, email verification and rate-limited endpoints (10 req/min)",
              ar:"مصادقة Sanctum مع جلسات 'تذكرني'، تفعيل بريد إلكتروني، وحدّ لعدد الطلبات (10 طلبات/دقيقة)"},
  proj2_li2:{en:"Stripe Payment Intent integration with webhook verification and DB-transaction stock locking to prevent race conditions",
              ar:"دمج Stripe Payment Intent مع التحقق من webhooks، وقفل مخزون عبر معاملات قاعدة البيانات لمنع تعارض الطلبات المتزامنة"},
  proj2_li3:{en:"Queued email notifications (welcome, order confirmation, payment receipt) via background jobs",
              ar:"إشعارات بريد عبر طابور مهام (ترحيب، تأكيد طلب، إيصال دفع)"},
  proj2_li4:{en:"Full admin panel for products, categories, orders, coupons and users, plus interactive Swagger/OpenAPI docs",
              ar:"لوحة تحكم كاملة للمنتجات، الفئات، الطلبات، الكوبونات، والمستخدمين، بالإضافة لتوثيق Swagger/OpenAPI تفاعلي"},
  proj3_date:{en:"May 2026", ar:"أيار 2026"},
  proj3_title:{en:"Todo App API", ar:"Todo App API"},
  proj3_desc:{en:"RESTful task-management API built with Laravel 11 and Sanctum, fully tested.",
               ar:"واجهة RESTful لإدارة المهام مبنية بـ Laravel 11 وSanctum، مُختبرة بالكامل."},
  proj3_li1:{en:"Full task & category CRUD with filtering, search and cached dashboard statistics",
              ar:"عمليات CRUD كاملة للمهام والفئات مع فلترة، بحث، وإحصائيات لوحة تحكم مخزّنة مؤقتاً (cache)"},
  proj3_li2:{en:"Role-based admin panel for managing users and tasks, with rate limiting and request logging",
              ar:"لوحة تحكم أدمن حسب الصلاحية لإدارة المستخدمين والمهام، مع تحديد معدل الطلبات وتسجيل السجلات"},
  proj3_li3:{en:"31 automated tests (73 assertions) via PHPUnit", ar:"31 اختبار آلي (73 assertion) عبر PHPUnit"},
  proj5_date:{en:"Sep – Oct 2026", ar:"أيلول – تشرين الأول 2026"},
  proj5_title:{en:"Tech Salary Analysis", ar:"Tech Salary Analysis — تحليل رواتب المطورين"},
  proj5_desc:{en:"End-to-end data analysis project on the Stack Overflow Developer Survey 2025 — from raw survey data to a salary prediction model and a command-line tool.",
               ar:"مشروع تحليل بيانات متكامل على استبيان Stack Overflow للمطورين 2025 — من البيانات الخام وصولاً إلى نموذج للتنبؤ بالرواتب وأداة سطر أوامر."},
  proj5_li1:{en:"Data cleaning and exploratory analysis documented across six Jupyter notebooks",
              ar:"تنظيف البيانات والتحليل الاستكشافي موثّقان عبر ست دفاتر Jupyter"},
  proj5_li2:{en:"Salary prediction model built with Scikit-learn", ar:"نموذج للتنبؤ بالرواتب مبني بـ Scikit-learn"},
  proj5_li3:{en:"Packaged as a command-line predictor and released as v1.0.0", ar:"مُغلَّف كأداة تنبؤ بسطر الأوامر ومُصدَر كنسخة v1.0.0"},
  view_github:{en:"View on GitHub →", ar:"شاهد على GitHub ←"},
  edu_eyebrow:{en:"Education & Certifications", ar:"التعليم والشهادات"},
  edu_subhead:{en:"Education", ar:"التعليم"},
  fact_degree_val:{en:"B.Eng, Computer Engineering", ar:"بكالوريوس هندسة معلوماتية"},
  fact_uni_val:{en:"Al-Wataniya Private University", ar:"الجامعة الوطنية الخاصة"},
  edu_date:{en:"Sep 2021 – Jul 2026", ar:"أيلول 2021 – تموز 2026"},
  edu_course:{en:"Relevant coursework: PHP-based web applications, Java programming, database management systems.",
               ar:"مساقات ذات صلة: تطبيقات ويب بلغة PHP، برمجة Java، وأنظمة إدارة قواعد البيانات."},
  certs_subhead:{en:"Certifications", ar:"الشهادات"},
  contact_title:{en:"Let's build something", ar:"لنبنِ شيئًا معًا"},
  field_name:{en:"Name", ar:"الاسم"},
  field_name_ph:{en:"Your name", ar:"اسمك"},
  field_email:{en:"Email", ar:"البريد الإلكتروني"},
  field_email_err:{en:"Please enter a valid email address.", ar:"الرجاء إدخال بريد إلكتروني صحيح."},
  field_msg:{en:"Message", ar:"الرسالة"},
  field_msg_ph:{en:"Tell me about the project...", ar:"أخبرني عن مشروعك..."},
  send_btn:{en:"Send message →", ar:"إرسال الرسالة ←"},
  contact_side_title:{en:"Reach me directly", ar:"تواصل معي مباشرة"},
  footer_copy:{en:"© 2026 Zain Wahbi. All rights reserved.", ar:"© 2026 زين وهبي. جميع الحقوق محفوظة."}
};

function toggleLang() {
  const current = document.getElementById('htmlRoot').getAttribute('lang') || 'en';
  setLang(current === 'en' ? 'ar' : 'en');
}

function setLang(lang) {
  const root = document.getElementById('htmlRoot');
  root.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  root.setAttribute('lang', lang);
  document.body.classList.toggle('lang-ar', lang === 'ar');
  document.getElementById('langToggleBtn').textContent = lang === 'en' ? 'AR' : 'EN';
  try { localStorage.setItem('lang', lang); } catch (e) {}

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[key]) el.textContent = translations[key][lang];
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (translations[key]) el.setAttribute('placeholder', translations[key][lang]);
  });
}

/* Restore the visitor's last language choice */
(function () {
  let saved = null;
  try { saved = localStorage.getItem('lang'); } catch (e) {}
  if (saved === 'ar') setLang('ar');
})();
