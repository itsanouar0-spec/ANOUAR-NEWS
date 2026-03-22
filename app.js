// --- News Data Store ---
const newsData = [
    {
        id: 8,
        title: "تذكير هام: العودة إلى توقيت (GMT+1) بزيادة 60 دقيقة هذه الليلة",
        description: "يُرجى الانتباه إلى أنه ستتم إضافة ستين (60) دقيقة إلى التوقيت الحالي للمملكة عند حلول الساعة الثانية صباحاً من يوم الأحد 22 مارس 2026.",
        content: `
            <p>تُذكر "أنوار الإخبارية" جميع المواطنين والمقيمين بأنه سيتم الرجوع للعمل بالتوقيت الصيفي (GMT+1) للمملكة، وذلك بإضافة ستين (60) دقيقة إلى التوقيت الحالي.</p>
            <p>وسيتم هذا التغيير رسمياً عند حلول الساعة الثانية صباحاً (02:00) من يوم الأحد 22 مارس 2026، لتُصبح الساعة بذلك الثالثة صباحاً (03:00).</p>
            <p>ويأتي هذا التغيير طبقا لمقتضيات المادة الثانية من المرسوم رقم 2.18.855 الصادر في 16 صفر 1440 (26 أكتوبر 2018) المتعلق بالساعة القانونية للمملكة.</p>
            <p>ندعو الجميع إلى ضبط ساعاتهم وتحديث أجهزتهم الإلكترونية لتفادي أي ارتباك في المواعيد والالتزامات الأسبوع المقبل.</p>
        `,
        category: "مجتمع",
        image: "https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&q=80&w=1200",
        date: "21 مارس 2026",
        author: "هيئة التحرير",
        readTime: "دقيقة واحدة"
    },
    {
        id: 7,
        title: "مباراة دولية ودية للمنتخبات 2026: المغرب يواجه الإكوادور",
        description: "يستعد المنتخب المغربي لمواجهة نظيره الإكوادوري في مباراة دولية ودية يوم الجمعة 27 مارس 2026.",
        content: `
            <p>يواجه المنتخب الوطني المغربي الأول لكرة القدم نظيره منتخب الإكوادور في مباراة ودية دولية، وذلك في إطار استعدادات "أسود الأطلس" للمنافسات القادمة في عام 2026.</p>
            <p>ومن المقرر أن تُقام المباراة يوم الجمعة الموافق 27 مارس 2026، على أرضية "ملعب طيران الرياض ميتروبوليتانو".</p>
            <p>وستنطلق صافرة بداية اللقاء في تمام الساعة التاسعة والربع مساءً (21:15) بتوقيت المغرب. وسيتم بث المواجهة مباشرة عبر شاشة "قناة الرياضية" و"قناة الأولى".</p>
            <p>وتشكل هذه المباراة فرصة مهمة للاستعداد والتجربة قبل خوض غمار المباريات الرسمية المرتقبة.</p>
        `,
        category: "رياضة",
        image: "https://images.unsplash.com/photo-1518605338461-1eb47df4b9e2?auto=format&fit=crop&q=80&w=1200",
        date: "22 مارس 2026",
        author: "القسم الرياضي",
        readTime: "دقيقة واحدة"
    },
    {
        id: 1,
        title: "صندوق النقد الدولي يتوقع نمواً ملحوظاً في الاقتصاديات الناشئة خلال العام الجاري",
        description: "أصدر صندوق النقد الدولي تقريره الربع سنوي والذي يتوقع فيه أن تشهد الاقتصادات الناشئة طفرة نمو مدفوعة بالإصلاحات الهيكلية والاستثمارات التكنولوجية.",
        content: `
            <p>أكد صندوق النقد الدولي في تقريره الأخير أن مجموعة من الاقتصادات الناشئة في منطقة الشرق الأوسط وآسيا في طريقها لتحقيق معدلات نمو غير مسبوقة خلال العام 2026.</p>
            <p>وأشار التقرير إلى أن حزم التحفيز الاقتصادي التي اتخذتها حكومات هذه الدول، بالتزامن مع استيعاب تكنولوجيا الذكاء الاصطناعي في القطاعات الإنتاجية، قد ساهمت بشكل كبير في تعزيز تنافسيتها أمام الأسواق المتقدمة.</p>
            <p>وأضاف خبراء الاقتصاد بأن قطاعات التكنولوجيا النظيفة والطاقة المتجددة كانت العصب الرئيسي المستقطب للاستثمارات الأجنبية المباشرة، مما يمهد الطريق لمرحلة جديدة من الاستقرار المالي الإقليمي.</p>
        `,
        category: "اقتصاد",
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1200",
        date: "22 مارس 2026",
        author: "أحمد عبد الله",
        readTime: "3 دقائق"
    },
    {
        id: 2,
        title: "القمة الدولية للسلام تختتم أعمالها بوثيقة تاريخية لوقف النزاعات المسلحة",
        description: "بعد مفاوضات شاقة استمرت أسبوعاً كاملاً، توصل قادة الدول في القمة الدولية إلى مسودة اتفاق شامل لإنهاء النزاعات الإقليمية المستمرة.",
        content: `
            <p>اختتمت في العاصمة جنيف فعاليات "القمة الدولية للسلام" والتي حضرها أكثر من 50 رئيس دولة ومنظمة دولية، حيث تم الإعلان عن توقيع معاهدة ملزمة لوقف فوري لإطلاق النار في عدة بؤر توتر.</p>
            <p>تتضمن الوثيقة بنوداً صارمة تتعلق بتفعيل الممرات الإنسانية، وانسحاب القوات من المناطق المتنازع عليها، مع تشكيل لجان رقابة أممية لضمان التنفيذ الفعلي على الأرض.</p>
            <p>وقد اعتبر الأمين العام للأمم المتحدة هذا الاتفاق "انتصاراً للدبلوماسية وصوت العقل"، مشيراً إلى أن الطريق لا يزال طويلاً لتحقيق التنمية وإعادة الإعمار في تلك المناطق.</p>
        `,
        category: "سياسة",
        image: "https://images.unsplash.com/photo-1541872526868-b35248106a54?auto=format&fit=crop&q=80&w=1200",
        date: "21 مارس 2026",
        author: "سالم محمود",
        readTime: "4 دقائق"
    },
    {
        id: 3,
        title: "شركة ميتا تعلن عن نظارات الواقع المعزز الجيل الرابع بتصميم ثوري",
        description: "أزاحت شركة ميتا الستار عن نظاراتها الجديدة للواقع المعزز، والتي تتميز بوزن أخف ومجال رؤية أوسع ودمج كامل مع مساعد الذكاء الاصطناعي.",
        content: `
            <p>في مؤتمرها السنوي للمطورين، كشفت شركة التكنولوجيا العملاقة "ميتا" عن الجيل الرابع من نظارات الواقع المعزز (AR)، والتي تعد طفرة تكنولوجية حقيقية تنافس الهواتف الذكية.</p>
            <p>وتأتي النظارات الجديدة بوزن لا يتجاوز 50 جراماً، مع شاشات عرض شفافة بتقنية Micro-LED توفر سطوعاً فائقاً يتيح استخدامها في وضح النهار.</p>
            <p>الميزة الأبرز في هذا الإصدار السعر الذي يعتبر في متناول الجميع مقارنة بالأجيال السابقة، فضلاً عن دمج نموذج مساعد ذكاء اصطناعي قادر على الترجمة الفورية والتعرف على البيئة المحيطة لتوفير معلومات استباقية للمستخدم.</p>
        `,
        category: "تكنولوجيا",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200",
        date: "21 مارس 2026",
        author: "رنا سعيد",
        readTime: "2 دقائق"
    },
    {
        id: 4,
        title: "المنتخب الوطني يحقق فوزاً تاريخياً في تصفيات كأس العالم ويتصدر مجموعته",
        description: "في ليلة كروية ساحرة، تمكن المنتخب الوطني من التغلب على الغريم التقليدي بثلاثية نظيفة ليقترب من بطاقة التأهل للمونديال.",
        content: `
            <p>شهد الملعب الأولمبي حضوراً جماهيرياً مكثفاً لمساندة المنتخب الوطني في مباراته المصيرية ضمن تصفيات كأس العالم 2026.</p>
            <p>وقد قدم اللاعبون أداءً استثنائياً منذ الدقائق الأولى، حيث افتتح التسجيل القائد في الدقيقة الخامسة عشرة قبل أن يضيف المهاجم الشاب هدفين رائعين في الشوط الثاني.</p>
            <p>بهذا الانتصار يتصدر المنتخب الوطني مجموعته برصيد 15 نقطة مبتعداً بفارق 4 نقاط عن أقرب ملاحقيه، مما يجعل التأهل شبه مضمون في حال تحقيق نتيجة إيجابية في المباراة القادمة.</p>
        `,
        category: "رياضة",
        image: "https://images.unsplash.com/photo-1518605338461-1eb47df4b9e2?auto=format&fit=crop&q=80&w=1200",
        date: "20 مارس 2026",
        author: "عصام فوزي",
        readTime: "3 دقائق"
    },
    {
        id: 5,
        title: "انخفاض أسعار النفط وبرميل برنت يتراجع لمستويات غير متوقعة",
        description: "سجلت الأسواق العالمية اليوم تراجعاً حاداً في أسعار الخام وسط مخاوف من تباطؤ الطلب الصيني وزيادة المخزونات الأمريكية.",
        content: `
            <p>تعرضت أسواق النفط العالمية لضغوط بيعية شديدة خلال تعاملات اليوم، حيث انخفض خام برنت بنسبة 4% ليصل إلى أدنى مستوى له منذ ستة أشهر.</p>
            <p>ويعزو المحللون الاقتصاديون هذا الانخفاض إلى البيانات الأخيرة الصادرة من الصين والتي أظهرت انكماشاً في القطاع الصناعي، إلى جانب تقرير معهد البترول الأمريكي الذي كشف عن زيادة غير معتادة في المخزونات التجارية.</p>
            <p>وقد أكد وزراء في منظمة أوبك بلس أن المنظمة تراقب التطورات عن كثب ومستعدة للتدخل عند الضرورة لضمان استقرار الأسواق.</p>
        `,
        category: "اقتصاد",
        image: "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&q=80&w=1200",
        date: "19 مارس 2026",
        author: "أحمد عبد الله",
        readTime: "5 دقائق"
    },
    {
        id: 6,
        title: "اكتشاف ثغرة أمنية شديدة الخطورة في متصفحات الويب الأكثر شيوعاً",
        description: "حذرت وكالات الأمن السيبراني من ثغرة ذِيرُو-دَاي تهدد الملايين وتتيح للمخترقين سرقة البيانات المصرفية.",
        content: `
            <p>أصدرت هيئات الأمن السيبراني العالمية تحذيراً عاجلاً لجميع مستخدمي الإنترنت بضرورة التحديث الفوري لمتصفحاتهم لتصحيح عيب أمني خطير (Zero-Day Vulnerability).</p>
            <p>الثغرة التي تم التكتم على تفاصيلها التقنية الدقيقة لمنع استغلالها المفرط، تتيح للقراصنة حقن أكواد خبيثة عن بُعد وسرقة كلمات المرور والبيانات البنكية بمجرد زيارة صفحة ملغمة.</p>
            <p>وقد أعلنت كبرى شركات التكنولوجيا أنها وفرت التحديثات الضرورية وأوصت بشدة بتفعيل التحديث التلقائي لتجنب التعرض للاختراق.</p>
        `,
        category: "تكنولوجيا",
        image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?auto=format&fit=crop&q=80&w=1200",
        date: "18 مارس 2026",
        author: "رنا سعيد",
        readTime: "2 دقائق"
    }
];

// --- Application Logic ---
const app = {
    container: null,
    
    init() {
        this.container = document.getElementById('app-content');
        
        // Setup Date in Header
        const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        document.getElementById('current-date').innerText = new Date().toLocaleDateString('ar-EG', dateOptions);
        
        // Initial Route
        this.navigate('home');
    },

    navigate(view, meta = null) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // Hide mobile menu if open
        const nav = document.getElementById('navLinks');
        if (nav.classList.contains('active')) nav.classList.remove('active');
        
        // Update Active Nav Link
        document.querySelectorAll('.nav-links .nav-item').forEach(el => {
            el.classList.remove('active');
            // Matching category or home Target
            if(view === 'home' && el.dataset.target === 'home') el.classList.add('active');
            if(view === 'category' && el.dataset.target === meta) el.classList.add('active');
        });

        // Routing
        if (view === 'home') {
            this.renderHome();
        } else if (view === 'category') {
            this.renderCategory(meta);
        } else if (view === 'article') {
            this.renderArticle(meta);
        }
    },

    toggleMenu() {
        document.getElementById('navLinks').classList.toggle('active');
    },

    // --- Views ---

    renderHome() {
        const featured = newsData[0]; 
        const sideArticles = newsData.slice(1, 4);
        const gridArticles = newsData.slice(4);

        let html = `
            <div class="section-header">
                <h2 class="section-title">أهم الأخبار</h2>
            </div>
            
            <div class="hero-grid">
                <!-- Main Featured Article -->
                <div class="hero-main" style="cursor:pointer;" onclick="app.navigate('article', ${featured.id})">
                    <img src="${featured.image}" alt="${featured.title}">
                    <div class="hero-main-overlay">
                        <span class="hero-tag">${featured.category}</span>
                        <h1 class="hero-title"><a href="javascript:void(0)">${featured.title}</a></h1>
                        <p style="opacity:0.9; font-size: 1.1rem;">${featured.description}</p>
                    </div>
                </div>

                <!-- Side Articles List -->
                <div class="side-news">
                    <h3 class="side-news-header">متابعات إخبارية</h3>
                    ${sideArticles.map(article => `
                        <div class="side-item">
                            <img src="${article.image}" class="side-item-img" alt="${article.title}">
                            <div class="side-item-content">
                                <h4 class="side-item-title"><a href="javascript:void(0)" onclick="app.navigate('article', ${article.id})">${article.title}</a></h4>
                                <span class="side-item-date"><i class="fa-regular fa-clock"></i> قبل قليل</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="section-header" style="margin-top: 20px;">
                <h2 class="section-title">آخر الأخبار</h2>
            </div>
            <div class="news-grid">
                ${newsData.map(article => this.articleCardTemplate(article)).join('')}
            </div>
        `;
        
        this.container.innerHTML = html;
    },

    renderCategory(catName) {
        const categoryNews = newsData.filter(n => n.category === catName);
        
        let html = `
            <div class="section-header">
                <h2 class="section-title">أخبار ${catName}</h2>
            </div>
            `;
            
        if (categoryNews.length > 0) {
            html += `
                <div class="news-grid">
                    ${categoryNews.map(article => this.articleCardTemplate(article)).join('')}
                </div>
            `;
        } else {
            html += `<div style="text-align:center; padding: 50px; background:var(--white); border-radius: 8px;">لا توجد أخبار تنتمي لهذا التصنيف حالياً.</div>`;
        }
        
        this.container.innerHTML = html;
    },

    renderArticle(id) {
        const article = newsData.find(a => a.id === parseInt(id));
        if (!article) return this.navigate('home');

        let html = `
            <div class="article-full-wrapper">
                <div class="back-btn" onclick="app.navigate('home')">
                    <i class="fa-solid fa-arrow-right"></i> العودة للرئيسية
                </div>
                
                <div class="full-header">
                    <div class="full-category">${article.category}</div>
                    <h1 class="full-title">${article.title}</h1>
                    <div class="full-meta">
                        <div class="full-author"><i class="fa-solid fa-pen-nib"></i> تقرير: ${article.author}</div>
                        <div>
                            <span style="margin-left: 15px;"><i class="fa-regular fa-calendar"></i> ${article.date}</span>
                            <span><i class="fa-regular fa-clock"></i> وقت القراءة: ${article.readTime}</span>
                        </div>
                    </div>
                </div>
                
                <div class="full-img-container">
                    <img src="${article.image}" alt="${article.title}">
                </div>
                
                <div class="full-content">
                    ${article.content}
                </div>
                
                <!-- Social Share placeholder -->
                <div style="margin-top:40px; border-top: 1px solid var(--border); padding-top:20px; text-align:center;">
                    <p style="margin-bottom: 10px; font-weight:700;">شارك هذا الخبر:</p>
                    <div style="font-size: 1.5rem; color: var(--primary);">
                        <i class="fa-brands fa-twitter" style="margin: 0 10px; cursor:pointer;"></i>
                        <i class="fa-brands fa-facebook" style="margin: 0 10px; cursor:pointer;"></i>
                        <i class="fa-brands fa-whatsapp" style="margin: 0 10px; cursor:pointer; color:#25D366;"></i>
                    </div>
                </div>
            </div>
        `;
        
        this.container.innerHTML = html;
    },

    // --- Templates ---
    articleCardTemplate(article) {
        return `
            <div class="article-card">
                <div class="article-category">${article.category}</div>
                <div class="article-img" onclick="app.navigate('article', ${article.id})">
                    <img src="${article.image}" alt="${article.title}" loading="lazy">
                </div>
                <div class="article-body">
                    <div class="article-meta">
                        <span><i class="fa-regular fa-calendar"></i> ${article.date}</span>
                    </div>
                    <h3 class="article-title">
                        <a href="javascript:void(0)" onclick="app.navigate('article', ${article.id})">${article.title}</a>
                    </h3>
                    <p class="article-desc">${article.description}</p>
                    <a href="javascript:void(0)" class="btn-read-more" onclick="app.navigate('article', ${article.id})">
                        اقرأ المزيد <i class="fa-solid fa-arrow-left"></i>
                    </a>
                </div>
            </div>
        `;
    }
};

// Ready Event
document.addEventListener('DOMContentLoaded', () => {
    app.init();
});
