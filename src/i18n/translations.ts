export const defaultLang = (() => typeof window !== "undefined" && navigator.language.includes('de') ? 'de' : 'en')();

export const translations = {
    en: {
        "header.title": 'AI Agents for your business',
        "header.subtitle": 'We support SMEs and e-commerce with intelligent automation solutions.',
        "header.button": 'Request free consultation',
        "contact.header": "Contact",
        "contact.title": 'Transform your business processes with custom AI solutions.',
        "contact.button": 'Send',
        "aboutme.title": 'About me',
        "aboutme.text": 'I am Tristan Teufel - your contact for individual AI solutions. I have been working in software development for over 10 years and have successfully implemented projects for many well-known large enterprise companies. With passion and expertise, my team and I support companies in automating their processes. You can find out more about my career in my ',
        'imprint': 'Imprint',
        'integration.title': 'Over 450 ready-to-use integration solutions',
        'integration.text': 'We offer numerous ready-to-use integration solutions for your enterprise software.',
        'services.title': "Our services",
        "services.individual_agents.title": "Individual AI agents",
        "services.individual_agents.description": "We develop custom solutions for your specific business processes.",
        "services.automation.title": "AI-supported automation",
        "services.automation.description": "We create smart agents that accelerate manual processes.",
        "services.process_automation.title": "Process automation",
        "services.process_automation.description": "Make processes more efficient - for noticeable time savings and higher productivity.",
        "services.dashboards.title": "Interactive dashboards",
        "services.dashboards.description": "We develop interactive dashboards for real-time analysis of your sales figures.",
        "services.customer_service.title": "Customer service automation",
        "services.customer_service.description": "Chatbots and AI agents for your customer service.",
        "services.ecommerce.title": "E-commerce automation",
        "services.ecommerce.description": "We support online retailers with AI solutions for marketing and sales.",
        "workflow.title": "AI Agent Workflow Example",
    },
    de: {
        "header.title": 'KI-Agenten für dein Unternehmen',
        "header.subtitle": 'Wir unterstützen Mittelständler und E-Commerce mit intelligenten Automationslösungen.',
        "header.button": 'Kostenlose Beratung anfordern',
        "contact.header": "Kontakt",
        "contact.title": 'Transformiere deine Geschäftsprozesse mit maßgeschneiderten KI-Lösungen.',
        "contact.button": 'Senden',
        "aboutme.title": 'Über mich',
        "aboutme.text": 'Ich bin Tristan Teufel – Ihr Ansprechpartner für individuelle KI- Lösungen.Seit über 10 Jahren bin ich in der Softwareentwicklung tätig und habe erfolgreich Projekte für viele bekannte große Enterprise- Unternehmen umgesetzt.Mit Leidenschaft und Expertise unterstützen mein Team und ich Unternehmen dabei, ihre Prozesse zu automatisieren.Mehr über meinen Werdegang finden Sie in meinem ',
        'imprint': 'Impressum',
        'integration.title': 'Über 450 sofort einsatzbereite Integrationslösungen',
        'integration.text': 'Wir bieten zahlreiche fertige Integrationslösungen für deine Enterprise-Software.',
        'services.title': "Unsere Leistungen",
        "services.individual_agents.title": "Individuelle KI-Agenten",
        "services.individual_agents.description": "Wir entwickeln maßgeschneiderte Lösungen für deine spezifischen Geschäftsprozesse.",
        "services.automation.title": "KI-gestützte Automatisierung",
        "services.automation.description": "Wir erstellen smarte Agenten, die manuelle Abläufe beschleunigen.",
        "services.process_automation.title": "Prozessautomatisierung",
        "services.process_automation.description": "Prozesse effizienter gestalten - für spürbare Zeitersparnis und höhere Produktivität.",
        "services.dashboards.title": "Interaktive Dashboards",
        "services.dashboards.description": "Wir entwickeln interaktive Dashboards für Echtzeit-Analysen deiner Verkaufszahlen.",
        "services.customer_service.title": "Kundenservice-Automatisierung",
        "services.customer_service.description": "Chatbots und KI-Agenten für deinen Kundenservice.",
        "services.ecommerce.title": "E-Commerce Automatisierung",
        "services.ecommerce.description": "Wir unterstützen Online-Händler mit KI-Lösungen für Marketing und Vertrieb.",
        "workflow.title": "KI-Agent Workflow-Beispiel",

    },
} as const;