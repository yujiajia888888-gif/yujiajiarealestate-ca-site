const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const contactForm = document.querySelector("[data-contact-form]");
const formStatus = document.querySelector("[data-form-status]");
const year = document.querySelector("[data-year]");
const languageButtons = document.querySelectorAll("[data-lang]");

const translations = {
  en: {
    "metadata.title": "Jiajia Yu Real Estate | yujiajiarealestate.ca",
    "metadata.description":
      "Jiajia Yu is a residential and commercial real estate broker serving Montreal, the South Shore, Laval, and Greater Montreal in English, French, and Mandarin Chinese.",
    "brand.role": "Real Estate Broker",
    "nav.listings": "Listings",
    "nav.services": "Services",
    "nav.areas": "Areas",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.open": "Open navigation",
    "hero.eyebrow": "Residential and commercial real estate broker",
    "hero.title": "Move with strategy in Greater Montreal.",
    "hero.copy":
      "Jiajia Yu helps buyers, sellers, and investors make clear real estate decisions across Montreal, the South Shore, Laval, and surrounding areas.",
    "hero.cta": "Book a Consultation",
    "hero.call": "Call 514-557-1514",
    "proof.oaciq": "Verified broker record",
    "proof.languages": "Languages: English, French, Mandarin",
    "proof.guidance": "Residential and commercial guidance",
    "intro.eyebrow": "Clear guidance",
    "intro.title": "Built for serious decisions, not pressure.",
    "intro.copy1":
      "Real estate decisions are easier when the process is organized. Jiajia brings structure, discipline, and honest advice to each step, from search strategy and pricing context to offer terms and negotiation.",
    "intro.copy2":
      "Whether you are buying your first home, preparing to sell, reviewing a commercial opportunity, or comparing investment options, you get direct communication and a practical plan.",
    "listings.eyebrow": "Featured listings",
    "listings.title": "Current properties represented by Jiajia.",
    "listings.copy":
      "Active listings verified on Centris. Availability and prices can change, so open the Centris listing for the latest details.",
    "listing.businessSale": "Business for sale",
    "listing.restaurant": "Restaurant",
    "listing.commercialSale": "Commercial building for sale",
    "listing.commercialResidential": "Commercial, Residential",
    "listing.condoSale": "Condo for sale",
    "listing.oneBedOneBath": "1 bedroom · 1 bathroom",
    "listing.apartmentRent": "Condo / Apartment for rent",
    "listing.houseRent": "Condominium house for rent",
    "listing.threeBedThreeBath": "3 bedrooms · 3 bathrooms",
    "listing.view": "View on Centris",
    "services.eyebrow": "Services",
    "services.title": "Support for buyers, sellers, and investors.",
    "services.buyers.title": "Buyer Representation",
    "services.buyers.copy": "Define criteria, compare properties, understand value, prepare offers, and move through closing.",
    "services.sellers.title": "Seller Strategy",
    "services.sellers.copy": "Prepare the property, position the price, plan the launch, qualify buyers, and negotiate carefully.",
    "services.commercial.title": "Commercial Real Estate",
    "services.commercial.copy": "Review location, property use, numbers, risk, and long-term fit before moving forward.",
    "services.investors.title": "Investor Guidance",
    "services.investors.copy": "Evaluate opportunities with discipline, clear assumptions, and practical market context.",
    "areas.eyebrow": "Service areas",
    "areas.title": "Montreal, South Shore, Laval.",
    "areas.copy":
      "Jiajia works across Greater Montreal and helps clients compare neighborhoods, property types, lifestyle needs, commute patterns, and resale signals before making a move.",
    "areas.montreal": "Urban condos, residential homes, and commercial opportunities.",
    "areas.southShore": "Family moves, lifestyle planning, and long-term value.",
    "areas.laval": "Residential and commercial guidance in a growing market.",
    "about.eyebrow": "About Jiajia",
    "about.title": "Strategy, honesty, and discipline.",
    "about.copy1":
      "Jiajia Yu is a residential and commercial real estate broker based in Greater Montreal. Fluent in English, French, and Mandarin Chinese, he helps buyers, sellers, and investors understand the market and make confident decisions.",
    "about.copy2":
      "With a background in real estate and personal training, Jiajia brings structure, responsibility, and client-focused service to every relationship.",
    "about.details": "Professional Details",
    "contact.eyebrow": "Contact",
    "contact.title": "Ready to talk about your next move?",
    "contact.copy": "Send a quick note and your email app will open with the details ready to send to Jiajia.",
    "form.name": "Name",
    "form.email": "Email",
    "form.interest": "Interest",
    "form.choose": "Choose one",
    "form.buying": "Buying a home",
    "form.selling": "Selling a property",
    "form.commercial": "Commercial real estate",
    "form.investment": "Investment property",
    "form.valuation": "Market valuation",
    "form.message": "Message",
    "form.placeholder": "Tell me what you are planning.",
    "form.submit": "Open Email Draft",
    "form.status": "Opening your email app with a draft message for Jiajia.",
    "form.subject": "Website inquiry from",
    "form.subjectFallback": "a client",
    "footer.copyright": "Jiajia Yu Real Estate. All rights reserved.",
    "footer.tagline": "Residential and Commercial Real Estate Broker · Greater Montreal",
  },
  fr: {
    "metadata.title": "Jiajia Yu Immobilier | yujiajiarealestate.ca",
    "metadata.description":
      "Jiajia Yu est courtier immobilier résidentiel et commercial dans le Grand Montréal, au service de Montréal, de la Rive-Sud, de Laval et des environs en anglais, français et mandarin.",
    "brand.role": "Courtier immobilier",
    "nav.listings": "Inscriptions",
    "nav.services": "Services",
    "nav.areas": "Secteurs",
    "nav.about": "À propos",
    "nav.contact": "Contact",
    "nav.open": "Ouvrir la navigation",
    "hero.eyebrow": "Courtier immobilier résidentiel et commercial",
    "hero.title": "Avancez avec stratégie dans le Grand Montréal.",
    "hero.copy":
      "Jiajia Yu aide les acheteurs, vendeurs et investisseurs à prendre des décisions immobilières claires à Montréal, sur la Rive-Sud, à Laval et dans les environs.",
    "hero.cta": "Réserver une consultation",
    "hero.call": "Appeler 514-557-1514",
    "proof.oaciq": "Dossier de courtier vérifié",
    "proof.languages": "Langues : anglais, français, mandarin",
    "proof.guidance": "Accompagnement résidentiel et commercial",
    "intro.eyebrow": "Conseils clairs",
    "intro.title": "Des décisions importantes, sans pression.",
    "intro.copy1":
      "Les décisions immobilières sont plus simples lorsque le processus est bien structuré. Jiajia apporte organisation, discipline et conseils honnêtes à chaque étape, de la stratégie de recherche au contexte de prix, en passant par les conditions d’offre et la négociation.",
    "intro.copy2":
      "Que vous achetiez votre première propriété, prépariez une vente, analysiez une occasion commerciale ou compariez des options d’investissement, vous recevez une communication directe et un plan pratique.",
    "listings.eyebrow": "Inscriptions en vedette",
    "listings.title": "Propriétés actuellement représentées par Jiajia.",
    "listings.copy":
      "Inscriptions actives vérifiées sur Centris. La disponibilité et les prix peuvent changer; ouvrez l’inscription Centris pour consulter les détails les plus récents.",
    "listing.businessSale": "Commerce à vendre",
    "listing.restaurant": "Restaurant",
    "listing.commercialSale": "Bâtiment commercial à vendre",
    "listing.commercialResidential": "Commercial, résidentiel",
    "listing.condoSale": "Condo à vendre",
    "listing.oneBedOneBath": "1 chambre · 1 salle de bain",
    "listing.apartmentRent": "Condo / Appartement à louer",
    "listing.houseRent": "Maison en copropriété à louer",
    "listing.threeBedThreeBath": "3 chambres · 3 salles de bain",
    "listing.view": "Voir sur Centris",
    "services.eyebrow": "Services",
    "services.title": "Accompagnement pour acheteurs, vendeurs et investisseurs.",
    "services.buyers.title": "Représentation d’acheteurs",
    "services.buyers.copy": "Définir les critères, comparer les propriétés, comprendre la valeur, préparer les offres et avancer jusqu’à la clôture.",
    "services.sellers.title": "Stratégie de vente",
    "services.sellers.copy": "Préparer la propriété, positionner le prix, planifier le lancement, qualifier les acheteurs et négocier avec soin.",
    "services.commercial.title": "Immobilier commercial",
    "services.commercial.copy": "Analyser l’emplacement, l’usage, les chiffres, les risques et l’adéquation à long terme avant d’avancer.",
    "services.investors.title": "Conseils aux investisseurs",
    "services.investors.copy": "Évaluer les occasions avec discipline, hypothèses claires et contexte de marché pratique.",
    "areas.eyebrow": "Secteurs desservis",
    "areas.title": "Montréal, Rive-Sud, Laval.",
    "areas.copy":
      "Jiajia travaille dans le Grand Montréal et aide ses clients à comparer les quartiers, types de propriétés, besoins de style de vie, trajets et signaux de revente avant de passer à l’action.",
    "areas.montreal": "Condos urbains, maisons résidentielles et occasions commerciales.",
    "areas.southShore": "Déménagements familiaux, planification du mode de vie et valeur à long terme.",
    "areas.laval": "Accompagnement résidentiel et commercial dans un marché en croissance.",
    "about.eyebrow": "À propos de Jiajia",
    "about.title": "Stratégie, honnêteté et discipline.",
    "about.copy1":
      "Jiajia Yu est courtier immobilier résidentiel et commercial basé dans le Grand Montréal. Parlant anglais, français et mandarin, il aide les acheteurs, vendeurs et investisseurs à comprendre le marché et à prendre des décisions avec confiance.",
    "about.copy2":
      "Avec une expérience en immobilier et en entraînement personnel, Jiajia apporte structure, responsabilité et service axé sur le client à chaque relation.",
    "about.details": "Détails professionnels",
    "contact.eyebrow": "Contact",
    "contact.title": "Prêt à discuter de votre prochain projet?",
    "contact.copy": "Envoyez une courte note et votre application courriel ouvrira un message prêt à envoyer à Jiajia.",
    "form.name": "Nom",
    "form.email": "Courriel",
    "form.interest": "Intérêt",
    "form.choose": "Choisir une option",
    "form.buying": "Acheter une propriété",
    "form.selling": "Vendre une propriété",
    "form.commercial": "Immobilier commercial",
    "form.investment": "Propriété d’investissement",
    "form.valuation": "Évaluation du marché",
    "form.message": "Message",
    "form.placeholder": "Parlez-moi de votre projet.",
    "form.submit": "Ouvrir un brouillon courriel",
    "form.status": "Ouverture de votre application courriel avec un brouillon pour Jiajia.",
    "form.subject": "Demande du site web de",
    "form.subjectFallback": "un client",
    "footer.copyright": "Jiajia Yu Immobilier. Tous droits réservés.",
    "footer.tagline": "Courtier immobilier résidentiel et commercial · Grand Montréal",
  },
  zh: {
    "metadata.title": "Jiajia Yu 房地产 | yujiajiarealestate.ca",
    "metadata.description":
      "Jiajia Yu 是服务大蒙特利尔地区的住宅及商业地产经纪，服务范围包括蒙特利尔、南岸、拉瓦尔及周边地区，可用英语、法语和中文沟通。",
    "brand.role": "房地产经纪",
    "nav.listings": "房源",
    "nav.services": "服务",
    "nav.areas": "服务区域",
    "nav.about": "关于",
    "nav.contact": "联系",
    "nav.open": "打开导航",
    "hero.eyebrow": "住宅及商业地产经纪",
    "hero.title": "在大蒙特利尔，用策略稳步前进。",
    "hero.copy":
      "Jiajia Yu 帮助买家、卖家和投资者在蒙特利尔、南岸、拉瓦尔及周边地区做出清晰的房地产决策。",
    "hero.cta": "预约咨询",
    "hero.call": "致电 514-557-1514",
    "proof.oaciq": "经纪记录已验证",
    "proof.languages": "语言：英语、法语、中文",
    "proof.guidance": "住宅与商业地产服务",
    "intro.eyebrow": "清晰指导",
    "intro.title": "重要决定，需要策略，不需要压力。",
    "intro.copy1":
      "房地产决策在流程清楚时会更容易。Jiajia 在每一步提供结构、纪律和诚实建议，从找房策略、价格判断，到报价条件和谈判。",
    "intro.copy2":
      "无论您是购买第一套房、准备出售、评估商业机会，还是比较投资选择，您都会得到直接沟通和实用计划。",
    "listings.eyebrow": "精选房源",
    "listings.title": "Jiajia 当前代理的房源。",
    "listings.copy":
      "以下为 Centris 上验证的活跃房源。房源状态和价格可能变化，请打开 Centris 页面查看最新详情。",
    "listing.businessSale": "生意出售",
    "listing.restaurant": "餐厅",
    "listing.commercialSale": "商业楼宇出售",
    "listing.commercialResidential": "商业、住宅",
    "listing.condoSale": "公寓出售",
    "listing.oneBedOneBath": "1 间卧室 · 1 间浴室",
    "listing.apartmentRent": "公寓出租",
    "listing.houseRent": "共管住宅出租",
    "listing.threeBedThreeBath": "3 间卧室 · 3 间浴室",
    "listing.view": "在 Centris 查看",
    "services.eyebrow": "服务",
    "services.title": "为买家、卖家和投资者提供支持。",
    "services.buyers.title": "买家代理",
    "services.buyers.copy": "明确需求、比较房源、判断价值、准备报价，并顺利推进到交割。",
    "services.sellers.title": "卖房策略",
    "services.sellers.copy": "准备物业、制定价格、规划上市、筛选买家，并谨慎谈判。",
    "services.commercial.title": "商业地产",
    "services.commercial.copy": "在行动前评估位置、用途、数字、风险和长期匹配度。",
    "services.investors.title": "投资指导",
    "services.investors.copy": "以纪律、清晰假设和实用市场背景来评估机会。",
    "areas.eyebrow": "服务区域",
    "areas.title": "蒙特利尔、南岸、拉瓦尔。",
    "areas.copy":
      "Jiajia 服务大蒙特利尔地区，帮助客户在行动前比较社区、物业类型、生活需求、通勤和转售信号。",
    "areas.montreal": "城市公寓、住宅房屋和商业机会。",
    "areas.southShore": "家庭搬迁、生活规划和长期价值。",
    "areas.laval": "在成长市场中提供住宅与商业地产指导。",
    "about.eyebrow": "关于 Jiajia",
    "about.title": "策略、诚实与纪律。",
    "about.copy1":
      "Jiajia Yu 是大蒙特利尔地区的住宅及商业地产经纪。可用英语、法语和中文沟通，帮助买家、卖家和投资者了解市场并自信决策。",
    "about.copy2":
      "凭借房地产和私人训练背景，Jiajia 为每段客户关系带来结构、责任感和以客户为中心的服务。",
    "about.details": "专业信息",
    "contact.eyebrow": "联系",
    "contact.title": "准备聊聊您的下一步计划吗？",
    "contact.copy": "发送一条简短信息，您的邮件应用会自动打开一封准备发送给 Jiajia 的草稿。",
    "form.name": "姓名",
    "form.email": "邮箱",
    "form.interest": "需求",
    "form.choose": "请选择",
    "form.buying": "买房",
    "form.selling": "卖房",
    "form.commercial": "商业地产",
    "form.investment": "投资物业",
    "form.valuation": "市场估价",
    "form.message": "留言",
    "form.placeholder": "请告诉我您的计划。",
    "form.submit": "打开邮件草稿",
    "form.status": "正在打开您的邮件应用，并生成发给 Jiajia 的草稿。",
    "form.subject": "网站咨询来自",
    "form.subjectFallback": "一位客户",
    "footer.copyright": "Jiajia Yu 房地产。保留所有权利。",
    "footer.tagline": "住宅及商业地产经纪 · 大蒙特利尔",
  },
};

let activeLanguage = "en";

const getSavedLanguage = () => {
  try {
    return localStorage.getItem("site-language");
  } catch {
    return null;
  }
};

const saveLanguage = (language) => {
  try {
    localStorage.setItem("site-language", language);
  } catch {
    /* Ignore storage errors in private browsing or local file previews. */
  }
};

const t = (key) => translations[activeLanguage]?.[key] || translations.en[key] || key;

const applyLanguage = (language) => {
  activeLanguage = translations[language] ? language : "en";
  document.documentElement.lang = activeLanguage === "zh" ? "zh-Hans" : activeLanguage;
  document.documentElement.dataset.language = activeLanguage;
  document.title = t("metadata.title");

  const description = document.querySelector('meta[name="description"]');
  if (description) {
    description.setAttribute("content", t("metadata.description"));
  }

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.setAttribute("placeholder", t(element.dataset.i18nPlaceholder));
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === activeLanguage;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  saveLanguage(activeLanguage);
};

if (year) {
  year.textContent = new Date().getFullYear();
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.lang);
  });
});

applyLanguage(getSavedLanguage() || "en");

const updateHeader = () => {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 10);
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

if (nav && navToggle && header) {
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    header.classList.toggle("is-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      nav.classList.remove("is-open");
      header.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

if (contactForm && formStatus) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(contactForm);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const interest = String(data.get("interest") || "").trim();
    const message = String(data.get("message") || "").trim();

    const body = [
      `${t("form.name")}: ${name}`,
      `${t("form.email")}: ${email}`,
      `${t("form.interest")}: ${interest}`,
      "",
      message,
    ].join("\n");

    const mailto = new URL("mailto:Yujiajia0514@hotmail.com");
    mailto.searchParams.set("subject", `${t("form.subject")} ${name || t("form.subjectFallback")}`);
    mailto.searchParams.set("body", body);

    formStatus.textContent = t("form.status");
    window.location.href = mailto.toString();
  });
}
