import { Language } from '../types';

export interface UIContent {
  nav: {
    about: string;
    skills: string;
    education: string;
    experience: string;
    certifications: string;
    projects: string;
    contact: string;
    talkCTA: string;
  };
  hero: {
    statusBadge: string;
    greeting: string;
    name: string;
    subtitle: string;
    bio: string;
    ctaProjects: string;
    ctaContact: string;
    editPhotoTooltip: string;
    statsYears: string;
    statsYearsLabel: string;
    statsHours: string;
    statsHoursLabel: string;
    statsCert: string;
    statsCertLabel: string;
    statsProjects: string;
    statsProjectsLabel: string;
  };
  skills: {
    sectionTag: string;
    title: string;
    subtitle: string;
    filterAll: string;
    filterData: string;
    filterCloud: string;
    filterTools: string;
    techStackNote: string;
  };
  education: {
    sectionTag: string;
    title: string;
    subtitle: string;
    curriculumTitle: string;
  };
  experience: {
    sectionTag: string;
    title: string;
    subtitle: string;
    clientsTitle: string;
    clientsSubtitle: string;
    keyDeliverables: string;
  };
  certifications: {
    sectionTag: string;
    title: string;
    subtitle: string;
    academicTag: string;
  };
  projects: {
    sectionTag: string;
    title: string;
    subtitle: string;
    viewOnGithub: string;
    viewDetails: string;
    highlightsTitle: string;
    modalClose: string;
    modalRepoButton: string;
  };
  footer: {
    title: string;
    subtitle: string;
    contactNote: string;
    emailLabel: string;
    whatsappLabel: string;
    linkedinLabel: string;
    githubLabel: string;
    copyEmail: string;
    copied: string;
    rights: string;
    builtWith: string;
  };
  imageModal: {
    title: string;
    description: string;
    fileUploadLabel: string;
    fileUploadHelp: string;
    urlInputLabel: string;
    urlPlaceholder: string;
    useUrlButton: string;
    resetButton: string;
    closeButton: string;
  };
  toast: {
    copiedEmail: string;
    copiedPhone: string;
  };
}

export const TRANSLATIONS: Record<Language, UIContent> = {
  pt: {
    nav: {
      about: 'Sobre',
      skills: 'Habilidades',
      education: 'Educação',
      experience: 'Experiência',
      certifications: 'Eventos',
      projects: 'Projetos',
      contact: 'Contato',
      talkCTA: 'Conectar no LinkedIn',
    },
    hero: {
      statusBadge: 'DISPONÍVEL PARA OPORTUNIDADES EM DADOS & ML',
      greeting: 'PORTFÓLIO PROFISSIONAL',
      name: 'DÉBORA GUERRA',
      subtitle: 'CIÊNCIA DE DADOS & INTELIGÊNCIA ANALÍTICA | EX-POST PRODUCTION SPECIALIST',
      bio: 'Profissional com trajetória em fluxos de trabalho para grandes players globais (Netflix, HBO, Globoplay, Amazon Prime Video). Atuação na área de Marketing e Dados, desenvolvendo projetos analíticos em Trade Marketing para mensuração de desempenho de vídeos em marketplaces, unindo Python, SQL e processos ETL/ELT. Graduanda em Ciência da Computação.',
      ctaProjects: 'Ver Projetos GitHub',
      ctaContact: 'Entrar em Contato',
      editPhotoTooltip: 'Trocar / Ajustar Foto',
      statsYears: '12+ Anos',
      statsYearsLabel: 'Carreira & Entregas Globais',
      statsHours: '+130 Horas',
      statsHoursLabel: 'Especialização Data Science',
      statsCert: 'OCI 2026',
      statsCertLabel: 'Certificada Oracle Cloud',
      statsProjects: 'Emmy & IA',
      statsProjectsLabel: 'Reconhecimento & Inovação',
    },
    skills: {
      sectionTag: 'DOMÍNIO TÉCNICO & FERRAMENTAS',
      title: 'HABILIDADES TÉCNICAS',
      subtitle: 'Arsenal analítico desenvolvido para engenharia, manipulação, modelagem e visualização estratégica de dados.',
      filterAll: 'Todas as Habilidades',
      filterData: 'Dados & Ciência',
      filterCloud: 'Nuvem & Infra',
      filterTools: 'BI & Ferramentas',
      techStackNote: 'Foco constante em código limpo, documentação estruturada e boas práticas de engenharia de software.',
    },
    education: {
      sectionTag: 'FORMAÇÃO ACADÊMICA & CERTIFICAÇÕES',
      title: 'FORMAÇÃO ACADÊMICA & CERTIFICAÇÕES',
      subtitle: 'Fundamentos consistentes em Ciência da Computação, especialização aprofundada em Ciência de Dados e repertório transdisciplinar em Cinema.',
      curriculumTitle: 'Grade & Tópicos de Especialização:',
    },
    experience: {
      sectionTag: 'TRAJETÓRIA PROFISSIONAL',
      title: 'EXPERIÊNCIA & CLIENTES DE DESTAQUE',
      subtitle: 'Execução de projetos de alta complexidade técnica em conformidade com os mais altos padrões da indústria global.',
      clientsTitle: 'PLAYERS GLOBAIS ATENDIDOS COM EXCELÊNCIA TÉCNICA',
      clientsSubtitle: 'Finalização e entrega em conformidade total com os parâmetros técnicos de transmissão e streaming internacional.',
      keyDeliverables: 'Principais Destaques & Conquistas',
    },
    certifications: {
      sectionTag: 'FORMAÇÃO CONTÍNUA & COMUNIDADE',
      title: 'PARTICIPAÇÃO EM EVENTOS E CERTIFICAÇÕES',
      subtitle: 'Certificações oficiais em nuvem e imersões práticas em desenvolvimento ágil e tecnologia colaborativa.',
      academicTag: 'CREDENCIAIS & HACKATHONS',
    },
    projects: {
      sectionTag: 'REPOSITÓRIOS & CÓDIGO ABERTO',
      title: 'PROJETOS / PROJECTS',
      subtitle: 'Aplicações práticas de pipelines de dados, modelos de machine learning e dashboards executivos.',
      viewOnGithub: 'Ver no GitHub',
      viewDetails: 'Explorar Arquitetura',
      highlightsTitle: 'Destaques Técnicos:',
      modalClose: 'Fechar',
      modalRepoButton: 'Acessar Repositório no GitHub',
    },
    footer: {
      title: 'VAMOS TRABALHAR JUNTOS?',
      subtitle: 'Estou pronta para somar valor analítico, precisão técnica e soluções eficientes de dados ao seu time ou projeto.',
      contactNote: 'Sinta-se à vontade para enviar um email, chamar no WhatsApp ou conectar no LinkedIn.',
      emailLabel: 'Email Direto',
      whatsappLabel: 'WhatsApp',
      linkedinLabel: 'Perfil LinkedIn',
      githubLabel: 'Repositórios GitHub',
      copyEmail: 'Copiar Email',
      copied: 'Copiado!',
      rights: 'Todos os direitos reservados.',
      builtWith: 'Desenvolvido com padrão editorial dark & alta performance.',
    },
    imageModal: {
      title: 'Personalizar Imagem de Perfil',
      description: 'Envie um arquivo do seu computador ou informe uma URL de imagem para atualizar sua foto.',
      fileUploadLabel: 'Enviar Arquivo do Computador:',
      fileUploadHelp: 'Formatos aceitos: JPG, PNG, WebP (arraste ou clique para selecionar).',
      urlInputLabel: 'Ou informe a URL da Imagem:',
      urlPlaceholder: 'https://exemplo.com/sua-foto.jpg',
      useUrlButton: 'Aplicar Imagem',
      resetButton: 'Restaurar Foto Oficial',
      closeButton: 'Cancelar',
    },
    toast: {
      copiedEmail: 'Email copiado para a área de transferência!',
      copiedPhone: 'Telefone copiado para a área de transferência!',
    },
  },
  en: {
    nav: {
      about: 'About',
      skills: 'Skills',
      education: 'Education',
      experience: 'Experience',
      certifications: 'Events',
      projects: 'Projects',
      contact: 'Contact',
      talkCTA: 'Connect on LinkedIn',
    },
    hero: {
      statusBadge: 'AVAILABLE FOR DATA SCIENCE & ML OPPORTUNITIES',
      greeting: 'DATA & TECH PORTFOLIO',
      name: 'DÉBORA GUERRA',
      subtitle: 'DATA SCIENCE & ANALYTICS | EX-POST PRODUCTION SPECIALIST',
      bio: 'Professional with an established track record in workflow management for premier global players (Netflix, HBO, Globoplay, Amazon Prime Video). Active in Marketing and Data, developing analytics projects for Trade Marketing to track video performance across marketplaces, combining Python, SQL, and ETL/ELT pipelines. B.S. in Computer Science undergraduate.',
      ctaProjects: 'View GitHub Projects',
      ctaContact: 'Get in Touch',
      editPhotoTooltip: 'Change / Adjust Photo',
      statsYears: '12+ Years',
      statsYearsLabel: 'Global Tier Deliveries',
      statsHours: '+130 Hours',
      statsHoursLabel: 'Data Science Specialization',
      statsCert: 'OCI 2026',
      statsCertLabel: 'Oracle Cloud Certified',
      statsProjects: 'Emmy & AI',
      statsProjectsLabel: 'Recognition & Innovation',
    },
    skills: {
      sectionTag: 'TECHNICAL STACK & TOOLSET',
      title: 'TECHNICAL SKILLS',
      subtitle: 'Analytical toolkit developed for data engineering, manipulation, statistical modeling, and executive visualization.',
      filterAll: 'All Skills',
      filterData: 'Data & Science',
      filterCloud: 'Cloud & Infra',
      filterTools: 'BI & Tools',
      techStackNote: 'Consistent emphasis on clean code, structured documentation, and software engineering best practices.',
    },
    education: {
      sectionTag: 'ACADEMIC PATHWAY & CERTIFICATIONS',
      title: 'EDUCATION & CERTIFICATIONS',
      subtitle: 'Structured Computer Science foundation, in-depth Data Science specialization, and multidisciplinary Cinema background.',
      curriculumTitle: 'Curriculum & Specialization Topics:',
    },
    experience: {
      sectionTag: 'CAREER TRACK RECORD',
      title: 'PROFESSIONAL EXPERIENCE & FEATURED CLIENTS',
      subtitle: 'Execution of complex technical workflows compliant with the highest global industry standards.',
      clientsTitle: 'GLOBAL STREAMING PLAYERS SERVICED UNDER HIGH STANDARDS',
      clientsSubtitle: 'Finishing and delivery in full compliance with international streaming standards.',
      keyDeliverables: 'Key Highlights & Achievements',
    },
    certifications: {
      sectionTag: 'LIFELONG LEARNING & COMMUNITY',
      title: 'EVENTS PARTICIPATION & CERTIFICATIONS',
      subtitle: 'Official cloud credentials, developer deep-dives, and hands-on agile tech sprints.',
      academicTag: 'CREDENTIALS & HACKATHONS',
    },
    projects: {
      sectionTag: 'REPOSITORIES & OPEN SOURCE',
      title: 'PROJETOS / PROJECTS',
      subtitle: 'Hands-on applications of data pipelines, predictive machine learning models, and executive dashboards.',
      viewOnGithub: 'View on GitHub',
      viewDetails: 'Explore Architecture',
      highlightsTitle: 'Technical Highlights:',
      modalClose: 'Close',
      modalRepoButton: 'Access GitHub Repository',
    },
    footer: {
      title: "LET'S WORK TOGETHER",
      subtitle: 'Ready to bring analytical depth, operational discipline, and reliable data solutions to your team or project.',
      contactNote: 'Feel free to send an email, reach out on WhatsApp, or connect on LinkedIn.',
      emailLabel: 'Direct Email',
      whatsappLabel: 'WhatsApp',
      linkedinLabel: 'LinkedIn Profile',
      githubLabel: 'GitHub Repositories',
      copyEmail: 'Copy Email',
      copied: 'Copied!',
      rights: 'All rights reserved.',
      builtWith: 'Built with dark editorial standards & high performance.',
    },
    imageModal: {
      title: 'Customize Profile Picture',
      description: 'Upload a picture from your computer or enter an image URL to replace the hero photo.',
      fileUploadLabel: 'Upload from your computer:',
      fileUploadHelp: 'Supported formats: JPG, PNG, WebP (drag or click to select).',
      urlInputLabel: 'Or provide an Image URL:',
      urlPlaceholder: 'https://example.com/your-photo.jpg',
      useUrlButton: 'Apply Image',
      resetButton: 'Restore Official Photo',
      closeButton: 'Cancel',
    },
    toast: {
      copiedEmail: 'Email copied to clipboard!',
      copiedPhone: 'Phone copied to clipboard!',
    },
  },
};
