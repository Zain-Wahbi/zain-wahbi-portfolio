document.getElementById('sendBtn').addEventListener('click', function(e){
    e.preventDefault();
    const name = document.getElementById('f-name').value;
    const email = document.getElementById('f-email').value;
    const msg = document.getElementById('f-msg').value;
    if(!email){ document.getElementById('f-email').focus(); return; }
    const subject = encodeURIComponent('Portfolio contact from ' + (name || 'a visitor'));
    const body = encodeURIComponent((msg || '') + '\n\n— ' + (name || '') + ' (' + email + ')');
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=eng.zainwahbi@gmail.com&su=${subject}&body=${body}`, '_blank');
  });

  const translations = {
    nav_about:{en:"About", ar:"نبذة"},
    nav_skills:{en:"Skills", ar:"المهارات"},
    nav_projects:{en:"Projects", ar:"المشاريع"},
    nav_education:{en:"Education", ar:"التعليم"},
    nav_contact:{en:"Contact", ar:"تواصل"},
    nav_cv:{en:"Resume", ar:"السيرة الذاتية"},
    nav_cta:{en:"Get in touch", ar:"تواصل معي"},
    hero_kicker:{en:"Open to freelance & remote work", ar:"متاح للعمل الحر والعمل عن بُعد"},
    hero_badge:{en:"Computer Engineering · Hama, Syria", ar:"هندسة معلوماتية · حماة، سوريا"},
    hero_subtitle:{en:"Backend & ML Engineer", ar:"مهندس Backend وتعلّم آلي"},
    hero_lede:{en:"Computer Engineering graduate specializing in Laravel/PHP REST APIs and applied Machine Learning. I turn messy requirements — and messy data — into systems people can rely on.",
                ar:"خريج هندسة معلوماتية متخصص في بناء واجهات REST API باستخدام Laravel وPHP، وفي تطبيقات التعلّم الآلي. أحوّل المتطلبات غير الواضحة، والبيانات غير المنظمة، إلى أنظمة يمكن الاعتماد عليها."},
    hero_btn1:{en:"View projects", ar:"شاهد المشاريع"},
    hero_btn2:{en:"Contact me", ar:"تواصل معي"},
    meta_location:{en:"Location", ar:"الموقع"},
    meta_location_val:{en:"Hama, Syria", ar:"حماة، سوريا"},
    meta_focus:{en:"Focus", ar:"التخصص"},
    meta_status:{en:"Status", ar:"الحالة"},
    meta_status_val:{en:"Available now", ar:"متاح الآن"},
    about_heading:{en:"About Me", ar:"نبذة عني"},
    about_p1:{en:"I'm a Computer Engineer who graduated from Al-Wataniya Private University in 2026, based in Hama, Syria. My work sits at the intersection of solid backend engineering and applied machine learning — I like systems that are both correct and explainable.",
               ar:"أنا مهندس معلوماتية، تخرجت من الجامعة الوطنية الخاصة عام 2026، ومقيم في حماة، سوريا. عملي يجمع بين هندسة Backend متينة وتطبيقات التعلّم الآلي — بحب الأنظمة يلي تكون دقيقة وقابلة للتفسير بنفس الوقت."},
    about_p2:{en:"Day to day, that means designing Laravel REST APIs with proper authentication, payments and background jobs, and building ML pipelines that go from raw data to a served prediction endpoint. I care about clean code, SOLID principles, and being upfront about a model's limitations rather than just its headline metric.",
               ar:"عملياً هاد بيعني تصميم واجهات REST API بـ Laravel مع مصادقة سليمة، دفع إلكتروني، ومهام خلفية، وبناء مسارات تعلّم آلي كاملة من البيانات الخام لحتى نقطة نهاية (endpoint) بتقدّم تنبؤات فعلية. بهتم بالكود النظيف، مبادئ SOLID، والصراحة بخصوص حدود أي نموذج مش بس رقمه النهائي."},
    fact_degree:{en:"Degree", ar:"الشهادة"},
    fact_degree_val:{en:"B.Eng, Computer Engineering", ar:"بكالوريوس هندسة معلوماتية"},
    fact_uni:{en:"University", ar:"الجامعة"},
    fact_uni_val:{en:"Al-Wataniya Private University", ar:"الجامعة الوطنية الخاصة"},
    fact_grad:{en:"Graduated", ar:"التخرج"},
    fact_grad_val:{en:"Jul 2026", ar:"تموز 2026"},
    fact_lang:{en:"Languages", ar:"اللغات"},
    fact_lang_val:{en:"Arabic, English", ar:"العربية، الإنجليزية"},
    fact_stack:{en:"Core stack", ar:"الأدوات الأساسية"},
    comp1_title:{en:"Backend & APIs", ar:"Backend وواجهات API"},
    comp1_desc:{en:"PHP, Laravel, REST APIs, Sanctum, Stripe, FastAPI, MySQL", ar:"PHP، Laravel، REST APIs، Sanctum، Stripe، FastAPI، MySQL"},
    comp2_title:{en:"Machine Learning & Data", ar:"التعلّم الآلي والبيانات"},
    comp2_desc:{en:"Python, Pandas, Scikit-learn, Random Forest, XGBoost, LightGBM, TabNet", ar:"Python، Pandas، Scikit-learn، Random Forest، XGBoost، LightGBM، TabNet"},
    comp3_title:{en:"Frontend (basic)", ar:"الواجهات الأمامية (أساسي)"},
    comp3_desc:{en:"HTML, CSS, JavaScript, Tailwind", ar:"HTML، CSS، JavaScript، Tailwind"},
    comp4_title:{en:"Tools & Principles", ar:"الأدوات والمبادئ"},
    comp4_desc:{en:"Git, GitHub, OOP, SOLID Principles, Excel", ar:"Git، GitHub، OOP، مبادئ SOLID، Excel"},
    comp_heading:{en:"Core Competencies", ar:"المهارات الأساسية"},
    projects_eyebrow:{en:"Projects", ar:"المشاريع"},
    projects_title:{en:"Selected work", ar:"أبرز الأعمال"},
    projects_sub:{en:"A mix of production-style backend systems and a full machine-learning pipeline built and shipped end to end.",
                   ar:"مزيج من أنظمة Backend بجودة إنتاجية، ومسار متكامل للتعلّم الآلي تم بناؤه ونشره من الألف إلى الياء."},
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
    proj3_desc:{en:"RESTful task-management API built with Laravel 11 and Sanctum, fully tested and deployed live.",
                 ar:"واجهة RESTful لإدارة المهام مبنية بـ Laravel 11 وSanctum، مُختبرة بالكامل ومنشورة فعلياً."},
    proj3_li1:{en:"Full task & category CRUD with filtering, search and cached dashboard statistics",
                ar:"عمليات CRUD كاملة للمهام والفئات مع فلترة، بحث، وإحصائيات لوحة تحكم مخزّنة مؤقتاً (cache)"},
    proj3_li2:{en:"Role-based admin panel for managing users and tasks, with rate limiting and request logging",
                ar:"لوحة تحكم أدمن حسب الصلاحية لإدارة المستخدمين والمهام، مع تحديد معدل الطلبات وتسجيل السجلات"},
    proj3_li3:{en:"31 automated tests (73 assertions) via PHPUnit", ar:"31 اختبار آلي (73 assertion) عبر PHPUnit"},
    view_demo:{en:"Live demo →", ar:"تجربة حية ←"},
    proj4_date:{en:"Apr – Jun 2025", ar:"نيسان – حزيران 2025"},
    proj4_title:{en:"ATC — Airline Travel Company", ar:"ATC — نظام إدارة شركة طيران"},
    proj4_progress:{en:"🚧 V2 in progress — Laravel", ar:"🚧 نسخة V2 قيد التطوير — Laravel"},
    proj4_desc:{en:"Full-stack airline booking system with three role-based experiences — admin, employee and customer — sharing one codebase.",
                 ar:"نظام حجوزات طيران متكامل بثلاث تجارب مختلفة حسب الصلاحية — أدمن، موظف، وزبون — على نفس قاعدة الكود."},
    proj4_li1:{en:"Real-time flight & seat management with auto seat generation and status tracking (upcoming → departed → arrived)",
                ar:"إدارة رحلات ومقاعد فورية مع توليد مقاعد تلقائي وتتبّع الحالة (قادمة ← مغادرة ← وصلت)"},
    proj4_li2:{en:"Transactional booking flow with live seat locking to prevent double-booking, plus automatic fare calculation",
                ar:"مسار حجز آمن مع قفل مقاعد لحظي لمنع الحجز المزدوج، وحساب تكلفة تلقائي"},
    proj4_li3:{en:"Digital tickets with scannable QR codes and a print-ready boarding pass layout",
                ar:"تذاكر رقمية مع رمز QR قابل للمسح، وتصميم جاهز للطباعة كبطاقة صعود"},
    proj4_li4:{en:"Admin panel, a Chart.js statistics dashboard, and a fully RTL Arabic interface",
                ar:"لوحة تحكم للأدمن، لوحة إحصائيات تفاعلية بـ Chart.js، وواجهة عربية RTL كاملة"},
    view_github:{en:"View on GitHub →", ar:"شاهد على GitHub ←"},
    edu_eyebrow:{en:"Education & Certifications", ar:"التعليم والشهادات"},
    edu_subhead:{en:"Education", ar:"التعليم"},
    edu_date:{en:"Sep 2021 – Jul 2026", ar:"أيلول 2021 – تموز 2026"},
    edu_course:{en:"Relevant coursework: PHP-based web applications, Java programming, database management systems.",
                 ar:"مساقات ذات صلة: تطبيقات ويب بلغة PHP، برمجة Java، وأنظمة إدارة قواعد البيانات."},
    certs_subhead:{en:"Certifications", ar:"الشهادات"},
    contact_eyebrow:{en:"Contact", ar:"تواصل"},
    contact_title:{en:"Let's build something", ar:"لنبنِ شيئًا معًا"},
    field_name:{en:"Name", ar:"الاسم"},
    field_name_ph:{en:"Your name", ar:"اسمك"},
    field_email:{en:"Email", ar:"البريد الإلكتروني"},
    field_msg:{en:"Message", ar:"الرسالة"},
    field_msg_ph:{en:"Tell me about the project...", ar:"احكيلي عن المشروع..."},
    send_btn:{en:"Send message →", ar:"إرسال الرسالة ←"},
    contact_side_title:{en:"Reach me directly", ar:"تواصل معي مباشرة"},
    contact_side_sub:{en:"Available for Laravel/API and ML freelance work — remote, part-time or full projects.",
                       ar:"متاح للعمل الحر بمجال Laravel/API والتعلّم الآلي — عن بُعد، دوام جزئي أو مشاريع كاملة."},
    footer_copy:{en:"© 2026 Zain Wahbi. All rights reserved.", ar:"© 2026 زين وهبي. جميع الحقوق محفوظة."}
  };

  function toggleLang(){
    const current = document.getElementById('htmlRoot').getAttribute('lang') || 'en';
    setLang(current === 'en' ? 'ar' : 'en');
  }

  function setLang(lang){
    document.getElementById('htmlRoot').setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    document.getElementById('htmlRoot').setAttribute('lang', lang);
    document.body.classList.toggle('lang-ar', lang === 'ar');
    document.getElementById('langToggleBtn').textContent = lang === 'en' ? 'AR' : 'EN';

    document.querySelectorAll('[data-i18n]').forEach(el=>{
      const key = el.getAttribute('data-i18n');
      if(translations[key]) el.textContent = translations[key][lang];
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(el=>{
      const key = el.getAttribute('data-i18n-ph');
      if(translations[key]) el.setAttribute('placeholder', translations[key][lang]);
    });
  }
