import React, { createContext, useState, useContext, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const translations = {
  en: {
    // Navigation
    nav: {
      home: 'Home',
      about: 'About Us',
      services: 'Services',
      products: 'Products',
      projects: 'Projects',
      gallery: 'Gallery',
      testimonials: 'Testimonials',
      faq: 'FAQ',
      contact: 'Contact',
      getQuote: 'Get Quote',
    },
    // Home Page
    home: {
      hero: {
        title: 'Transforming Spaces with',
        titleHighlight: 'Premium Shopfitting Solutions',
        subtitle: 'Creating exceptional retail environments that enhance customer experience and drive business growth across Zimbabwe and beyond.',
        cta1: 'Explore Our Services',
        cta2: 'View Projects',
      },
      stats: {
        projects: 'Projects Completed',
        clients: 'Happy Clients',
        experience: 'Years Experience',
        satisfaction: 'Satisfaction Rate',
      },
      services: {
        title: 'Our Services',
        subtitle: 'Comprehensive shopfitting solutions tailored to your business needs',
      },
      whyUs: {
        title: 'Why Choose Global Shopfitters',
        subtitle: 'Excellence in every detail',
      },
      cta: {
        title: 'Ready to Transform Your Space?',
        subtitle: 'Let\'s discuss your project and bring your vision to life',
        button: 'Contact Us Today',
      },
    },
    // About Page
    about: {
      title: 'About Global Shopfitters',
      subtitle: 'Your Trusted Partner in Retail Excellence',
      story: {
        title: 'Our Story',
        text: 'Global Shopfitters, trading as Mukuvisi Manufacturing (Private) Limited, is Zimbabwe\'s premier shopfitting company. We specialize in creating innovative retail spaces that combine functionality with aesthetic appeal.',
      },
      mission: {
        title: 'Our Mission',
        text: 'To deliver world-class shopfitting solutions that exceed client expectations and transform retail spaces into profitable business environments.',
      },
      vision: {
        title: 'Our Vision',
        text: 'To be the leading shopfitting company in Zimbabwe and the region, recognized for quality, innovation, and exceptional customer service.',
      },
      values: {
        title: 'Our Values',
        quality: 'Quality Excellence',
        qualityDesc: 'We never compromise on quality and craftsmanship',
        innovation: 'Innovation',
        innovationDesc: 'Constantly evolving with industry trends and technology',
        integrity: 'Integrity',
        integrityDesc: 'Honest, transparent, and ethical in all dealings',
        customer: 'Customer Focus',
        customerDesc: 'Your success is our priority',
      },
    },
    // Services Page
    services: {
      title: 'Our Services',
      subtitle: 'Comprehensive shopfitting solutions for every retail need',
      retail: {
        title: 'Retail Shopfitting',
        desc: 'Complete store design and fitout services including shelving, displays, counters, and custom fixtures.',
      },
      custom: {
        title: 'Custom Fixtures',
        desc: 'Bespoke furniture and fixtures designed and manufactured to your exact specifications.',
      },
      refrigeration: {
        title: 'Refrigeration Solutions',
        desc: 'Commercial refrigeration units, cold rooms, and display chillers for food retail.',
      },
      signage: {
        title: 'Signage & Branding',
        desc: 'Eye-catching signage solutions that enhance your brand visibility and store presence.',
      },
      consultation: {
        title: 'Design Consultation',
        desc: 'Expert advice on space planning, layout optimization, and retail design strategy.',
      },
      maintenance: {
        title: 'Maintenance & Support',
        desc: 'Ongoing maintenance services to keep your store fixtures in perfect condition.',
      },
    },
    // Products Page
    products: {
      title: 'Our Products',
      subtitle: 'Quality shopfitting products for modern retail spaces',
      categories: {
        shelving: 'Shelving Systems',
        displays: 'Display Units',
        counters: 'Counters & Checkout',
        refrigeration: 'Refrigeration',
        furniture: 'Store Furniture',
        accessories: 'Accessories',
      },
    },
    // Contact Page
    contact: {
      title: 'Get in Touch',
      subtitle: 'We\'d love to hear about your project',
      form: {
        name: 'Full Name',
        email: 'Email Address',
        phone: 'Phone Number',
        company: 'Company Name',
        service: 'Service Interested In',
        message: 'Your Message',
        submit: 'Send Message',
        sending: 'Sending...',
      },
      info: {
        address: 'Our Address',
        phone: 'Phone',
        email: 'Email',
        hours: 'Business Hours',
        hoursValue: 'Mon - Fri: 8:00 AM - 5:00 PM',
      },
    },
    // Footer
    footer: {
      about: 'About Us',
      aboutText: 'Global Shopfitters is Zimbabwe\'s premier shopfitting company, delivering excellence in retail space transformation.',
      quickLinks: 'Quick Links',
      services: 'Services',
      followUs: 'Follow Us',
      rights: 'All rights reserved.',
      poweredBy: 'Powered by Bit Studio',
    },
    // Common
    common: {
      learnMore: 'Learn More',
      readMore: 'Read More',
      viewAll: 'View All',
      contactUs: 'Contact Us',
      getStarted: 'Get Started',
      requestQuote: 'Request Quote',
      backToTop: 'Back to Top',
      loading: 'Loading...',
    },
  },
  nd: {
    // Navigation (Ndebele)
    nav: {
      home: 'Ikhaya',
      about: 'Ngathi',
      services: 'Izinsizakalo',
      products: 'Imikhiqizo',
      projects: 'Imisebenzi',
      gallery: 'Igalari',
      testimonials: 'Ubufakazi',
      faq: 'Imibuzo',
      contact: 'Thintana',
      getQuote: 'Cela Intengo',
    },
    // Home Page (Ndebele)
    home: {
      hero: {
        title: 'Siguqula Iindawo nge',
        titleHighlight: 'Izixazululo Zokwakha Izitolo Ezihle',
        subtitle: 'Sakha iindawo zokuthengisela ezinhle ezenza ukuthi amakhasimende athokoze futhi zisebenzise ibhizinisi kuhle eZimbabwe nasemhlabeni.',
        cta1: 'Bona Izinsizakalo Zethu',
        cta2: 'Bona Imisebenzi',
      },
      stats: {
        projects: 'Imisebenzi Ephelelisiweyo',
        clients: 'Amakhasimende Athokozileyo',
        experience: 'Iminyaka Yobunzima',
        satisfaction: 'Izinga Lokuneliseka',
      },
      services: {
        title: 'Izinsizakalo Zethu',
        subtitle: 'Izixazululo ezipheleleyo zokwakha izitolo ezilungele ibhizinisi lakho',
      },
      whyUs: {
        title: 'Kungani Ukhetha I-Global Shopfitters',
        subtitle: 'Ubuhle emisebenzini yonke',
      },
      cta: {
        title: 'Ukulungele Ukuguqula Indawo Yakho?',
        subtitle: 'Asixoxe ngephrojekthi yakho silethise umbono wakho empilweni',
        button: 'Sithinte Namuhla',
      },
    },
    // About Page (Ndebele)
    about: {
      title: 'Nge-Global Shopfitters',
      subtitle: 'Umlingani Wakho Othembekileyo Ekuthengiseni Okuhle',
      story: {
        title: 'Indaba Yethu',
        text: 'I-Global Shopfitters, ethengisa ngaphansi kwe-Mukuvisi Manufacturing (Private) Limited, yinkampani ephambili yokwakha izitolo eZimbabwe. Sizwa ngokudala iindawo zokuthengisela ezintsha ezihlanganisa ukusebenza lobuhle.',
      },
      mission: {
        title: 'Injongo Yethu',
        text: 'Ukunikela ngezixazululo zokwakha izitolo ezizinga lomhlaba ezedlula okulindelweyo kwamakhasimende futhi ziguqule iindawo zokuthengisela zibe yiindawo zebhizinisi ezinenzelayo.',
      },
      vision: {
        title: 'Umbono Wethu',
        text: 'Ukuba yinkampani ephambili yokwakha izitolo eZimbabwe nasesifundeni, eyaziwa ngekhwalithi, ukuqamba, lokunakekelwa kwamakhasimende okuhle kakhulu.',
      },
      values: {
        title: 'Izimiso Zethu',
        quality: 'Ubuhle Bekhwalithi',
        qualityDesc: 'Kasivumi ukwehlisa ikhwalithi lomsebenzi',
        innovation: 'Ukuqamba',
        innovationDesc: 'Sihlala sithuthuka ngokwezinga lemboni nobuchwepheshe',
        integrity: 'Ubuqotho',
        integrityDesc: 'Siqondile, sincengayo, futhi sinobuqotho emisebenzini yonke',
        customer: 'Ukunaka Amakhasimende',
        customerDesc: 'Impumelelo yakho yiluqakatheko lwethu',
      },
    },
    // Services Page (Ndebele)
    services: {
      title: 'Izinsizakalo Zethu',
      subtitle: 'Izixazululo ezipheleleyo zokwakha izitolo ngayo yonke imfuneko yokuthengisa',
      retail: {
        title: 'Ukwakha Izitolo',
        desc: 'Izinsizakalo ezipheleleyo zokuklama nokwakha izitolo kuhlanganise amashaliphi, iziboniso, amakhawunda, lezinto ezenzelwe wena.',
      },
      custom: {
        title: 'Impahla Ekhethekileyo',
        desc: 'Ifenisha lezinto ezakhelwe wena ngqo ngokwezifiso zakho eziqondileyo.',
      },
      refrigeration: {
        title: 'Izixazululo Zokubandisa',
        desc: 'Amayunithi okubandisa webhizinisi, amagumbi abandayo, leziboniso zokubandisa zokuthengisa ukudla.',
      },
      signage: {
        title: 'Izibonakaliso Lokuklanyelwa',
        desc: 'Izixazululo zezibonakaliso ezinomtsalane ezenza ukuthi ibizo lakho libonakale futhi isitolo sakho sibonakale.',
      },
      consultation: {
        title: 'Ukwelulekwa Ngoklama',
        desc: 'Iseluleko sochwepheshe mayelana nokucwaninga iindawo, ukwenza indawo isebenze kahle, lesu lokuklanyelwa kokuthengisa.',
      },
      maintenance: {
        title: 'Ukunakekelwa Lokusekelwa',
        desc: 'Izinsizakalo zokuqhubekisela phambili zokulondoloza impahla yesitolo sakho isesimweni esihle.',
      },
    },
    // Products Page (Ndebele)
    products: {
      title: 'Imikhiqizo Yethu',
      subtitle: 'Imikhiqizo yekhwalithi yokwakha izitolo ezitolo zanamuhla',
      categories: {
        shelving: 'Amasistimu Amashaliphi',
        displays: 'Amayunithi Okubonisa',
        counters: 'Amakhawunda Lokuhlawula',
        refrigeration: 'Ukubandisa',
        furniture: 'Ifenisha Yesitolo',
        accessories: 'Izinto Ezincedisayo',
      },
    },
    // Contact Page (Ndebele)
    contact: {
      title: 'Thintana Lathi',
      subtitle: 'Sithanda ukuzwa ngephrojekthi yakho',
      form: {
        name: 'Ibizo Elipheleleyo',
        email: 'Ikheli Le-email',
        phone: 'Inombolo Yocingo',
        company: 'Ibizo Lenkampani',
        service: 'Insizakalo Onomdlandla Ngayo',
        message: 'Umlayezo Wakho',
        submit: 'Thumela Umlayezo',
        sending: 'Iyathumela...',
      },
      info: {
        address: 'Ikheli Lethu',
        phone: 'Ucingo',
        email: 'I-email',
        hours: 'Izikhathi Zebhizinisi',
        hoursValue: 'Mon - Fri: 8:00 AM - 5:00 PM',
      },
    },
    // Footer (Ndebele)
    footer: {
      about: 'Ngathi',
      aboutText: 'I-Global Shopfitters yinkampani ephambili yokwakha izitolo eZimbabwe, inikela ngobuhle ekuguquleni iindawo zokuthengisa.',
      quickLinks: 'Izixhumanisi Ezishesha',
      services: 'Izinsizakalo',
      followUs: 'Sihambele',
      rights: 'Wonke amalungelo agodliwe.',
      poweredBy: 'Yenziwa ngu-Bit Studio',
    },
    // Common (Ndebele)
    common: {
      learnMore: 'Funda Okuningi',
      readMore: 'Bala Okuningi',
      viewAll: 'Bona Konke',
      contactUs: 'Thintana Lathi',
      getStarted: 'Qalisa',
      requestQuote: 'Cela Intengo',
      backToTop: 'Buyela Phezulu',
      loading: 'Iyalayisha...',
    },
  },
  es: {
    // Navigation (Spanish)
    nav: {
      home: 'Inicio',
      about: 'Nosotros',
      services: 'Servicios',
      products: 'Productos',
      projects: 'Proyectos',
      gallery: 'Galería',
      testimonials: 'Testimonios',
      faq: 'Preguntas',
      contact: 'Contacto',
      getQuote: 'Cotizar',
    },
    // Home Page (Spanish)
    home: {
      hero: {
        title: 'Transformando Espacios con',
        titleHighlight: 'Soluciones Premium de Equipamiento Comercial',
        subtitle: 'Creamos ambientes minoristas excepcionales que mejoran la experiencia del cliente e impulsan el crecimiento empresarial en Zimbabwe y más allá.',
        cta1: 'Explorar Servicios',
        cta2: 'Ver Proyectos',
      },
      stats: {
        projects: 'Proyectos Completados',
        clients: 'Clientes Satisfechos',
        experience: 'Años de Experiencia',
        satisfaction: 'Tasa de Satisfacción',
      },
      services: {
        title: 'Nuestros Servicios',
        subtitle: 'Soluciones integrales de equipamiento comercial adaptadas a sus necesidades',
      },
      whyUs: {
        title: 'Por Qué Elegir Global Shopfitters',
        subtitle: 'Excelencia en cada detalle',
      },
      cta: {
        title: '¿Listo para Transformar su Espacio?',
        subtitle: 'Hablemos de su proyecto y hagamos realidad su visión',
        button: 'Contáctenos Hoy',
      },
    },
    // About Page (Spanish)
    about: {
      title: 'Acerca de Global Shopfitters',
      subtitle: 'Su Socio de Confianza en Excelencia Minorista',
      story: {
        title: 'Nuestra Historia',
        text: 'Global Shopfitters, operando como Mukuvisi Manufacturing (Private) Limited, es la principal empresa de equipamiento comercial de Zimbabwe. Nos especializamos en crear espacios minoristas innovadores que combinan funcionalidad con atractivo estético.',
      },
      mission: {
        title: 'Nuestra Misión',
        text: 'Ofrecer soluciones de equipamiento comercial de clase mundial que superen las expectativas de los clientes y transformen los espacios minoristas en entornos comerciales rentables.',
      },
      vision: {
        title: 'Nuestra Visión',
        text: 'Ser la empresa líder en equipamiento comercial en Zimbabwe y la región, reconocida por calidad, innovación y servicio excepcional al cliente.',
      },
      values: {
        title: 'Nuestros Valores',
        quality: 'Excelencia en Calidad',
        qualityDesc: 'Nunca comprometemos la calidad y la artesanía',
        innovation: 'Innovación',
        innovationDesc: 'Evolucionando constantemente con las tendencias de la industria y la tecnología',
        integrity: 'Integridad',
        integrityDesc: 'Honestos, transparentes y éticos en todos los tratos',
        customer: 'Enfoque en el Cliente',
        customerDesc: 'Su éxito es nuestra prioridad',
      },
    },
    // Services Page (Spanish)
    services: {
      title: 'Nuestros Servicios',
      subtitle: 'Soluciones integrales de equipamiento para cada necesidad minorista',
      retail: {
        title: 'Equipamiento Minorista',
        desc: 'Servicios completos de diseño y equipamiento de tiendas incluyendo estanterías, exhibidores, mostradores y accesorios personalizados.',
      },
      custom: {
        title: 'Mobiliario Personalizado',
        desc: 'Muebles y accesorios a medida diseñados y fabricados según sus especificaciones exactas.',
      },
      refrigeration: {
        title: 'Soluciones de Refrigeración',
        desc: 'Unidades de refrigeración comercial, cuartos fríos y exhibidores refrigerados para venta de alimentos.',
      },
      signage: {
        title: 'Señalización y Marca',
        desc: 'Soluciones de señalización llamativas que mejoran la visibilidad de su marca y la presencia de su tienda.',
      },
      consultation: {
        title: 'Consultoría de Diseño',
        desc: 'Asesoramiento experto en planificación espacial, optimización de diseño y estrategia de diseño minorista.',
      },
      maintenance: {
        title: 'Mantenimiento y Soporte',
        desc: 'Servicios de mantenimiento continuo para mantener el mobiliario de su tienda en perfectas condiciones.',
      },
    },
    // Products Page (Spanish)
    products: {
      title: 'Nuestros Productos',
      subtitle: 'Productos de equipamiento de calidad para espacios minoristas modernos',
      categories: {
        shelving: 'Sistemas de Estanterías',
        displays: 'Unidades de Exhibición',
        counters: 'Mostradores y Cajas',
        refrigeration: 'Refrigeración',
        furniture: 'Mobiliario de Tienda',
        accessories: 'Accesorios',
      },
    },
    // Contact Page (Spanish)
    contact: {
      title: 'Contáctenos',
      subtitle: 'Nos encantaría saber de su proyecto',
      form: {
        name: 'Nombre Completo',
        email: 'Correo Electrónico',
        phone: 'Número de Teléfono',
        company: 'Nombre de la Empresa',
        service: 'Servicio de Interés',
        message: 'Su Mensaje',
        submit: 'Enviar Mensaje',
        sending: 'Enviando...',
      },
      info: {
        address: 'Nuestra Dirección',
        phone: 'Teléfono',
        email: 'Correo',
        hours: 'Horario de Atención',
        hoursValue: 'Lun - Vie: 8:00 AM - 5:00 PM',
      },
    },
    // Footer (Spanish)
    footer: {
      about: 'Nosotros',
      aboutText: 'Global Shopfitters es la principal empresa de equipamiento comercial de Zimbabwe, ofreciendo excelencia en la transformación de espacios minoristas.',
      quickLinks: 'Enlaces Rápidos',
      services: 'Servicios',
      followUs: 'Síguenos',
      rights: 'Todos los derechos reservados.',
      poweredBy: 'Desarrollado por Bit Studio',
    },
    // Common (Spanish)
    common: {
      learnMore: 'Más Información',
      readMore: 'Leer Más',
      viewAll: 'Ver Todo',
      contactUs: 'Contáctenos',
      getStarted: 'Comenzar',
      requestQuote: 'Solicitar Cotización',
      backToTop: 'Volver Arriba',
      loading: 'Cargando...',
    },
  },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('language') || 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (path) => {
    const keys = path.split('.');
    let value = translations[language];
    
    for (const key of keys) {
      value = value?.[key];
    }
    
    return value || path;
  };

  const changeLanguage = (lang) => {
    if (translations[lang]) {
      setLanguage(lang);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};