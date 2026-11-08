export type Language = 'pt' | 'en';

export interface Project {
  id: string;
  title: string;
  client: string;
  productionCompany: string;
  year: string;
  category: 'entertainment' | 'finishing' | 'ads' | 'ai';
  rolePt: string;
  roleEn: string;
  recognitionPt?: string;
  recognitionEn?: string;
  youtubeId: string;
  youtubeUrl: string;
  coverImage: string;
  descriptionPt: string;
  descriptionEn: string;
  specs: {
    resolution: string;
    codec: string;
    colorSpace: string;
    audioStandard: string;
    aspectRatio: string;
    workflow: string;
  };
  clientLogoKey: string;
}

export interface CareerExperience {
  period: string;
  company: string;
  rolePt: string;
  roleEn: string;
  departmentPt: string;
  departmentEn: string;
  highlightPt?: string;
  highlightEn?: string;
  platforms?: string[];
  responsibilitiesPt: string[];
  responsibilitiesEn: string[];
}

export interface ToolItem {
  name: string;
  rolePt: string;
  roleEn: string;
  descriptionPt: string;
  descriptionEn: string;
  iconKey: string;
  badge: string;
}

export const PROJECTS_DATA: Project[] = [
  {
    id: 'bora-o-podio-e-nosso',
    title: 'Bora, o Pódio é Nosso!',
    client: 'Rede Globo / Gloob',
    productionCompany: 'Sentimental Filme',
    year: '2024',
    category: 'entertainment',
    rolePt: 'Edição e Finalização de Vídeo',
    roleEn: 'Video Editing & Post-Production Finishing',
    recognitionPt: 'Produção Indicada ao Emmy Awards 2025',
    recognitionEn: '2025 Emmy Awards Nominated Production',
    youtubeId: 'wKLZQvkjuQ0',
    youtubeUrl: 'https://youtu.be/wKLZQvkjuQ0',
    coverImage: './assets/aistudio/bora_3c6711ba.png',
    descriptionPt:
      'Série infantojuvenil documental e esportiva veiculada no canal Gloob (Grupo Globo). A narrativa acompanha jovens atletas brasileiros em sua trajetória de superação e conquistas. Montagem dinâmica com ritmo ágil, alinhamento dramatúrgico emocionante, sincronização de múltiplas câmeras e rigoroso controle de qualidade broadcast.',
    descriptionEn:
      'Youth documentary sports entertainment series broadcast on the Gloob channel (Grupo Globo). The series chronicles the inspiring journey of promising young Brazilian athletes. Dynamic, emotionally resonant editorial pacing, multi-camera synchronization, and broadcast-grade post-production delivery.',
    specs: {
      resolution: '4K DCI (4096x2160) & Full HD Broadcast (1080i59.94)',
      codec: 'Apple ProRes 422 HQ / XAVC-Intra 100',
      colorSpace: 'DaVinci Wide Gamut → Rec.709 Gamma 2.4',
      audioStandard: 'EBU R128 (-24 LUFS ±0.5 LUFS / True Peak -1.0 dBTP)',
      aspectRatio: '16:9 Nativo',
      workflow: 'Montagem Offline no Premiere/Avid, Conform Online em DaVinci Resolve',
    },
    clientLogoKey: 'globo',
  },
  {
    id: 'streaming-series-productions',
    title: 'Streaming Platform Series & Productions',
    client: 'Netflix, HBO, Globoplay, Prime Video',
    productionCompany: 'Polar Filmes',
    year: '2012–2020',
    category: 'entertainment',
    rolePt: 'Edição de Vídeo e Montagem Online',
    roleEn: 'Video Editing & Online Conform Editor',
    youtubeId: 'FfiP6m1x0I0',
    youtubeUrl: 'https://youtu.be/FfiP6m1x0I0',
    coverImage: './assets/aistudio/netflix_d8dab0f6.png',
    descriptionPt:
      'Conjunto de obras seriadas originais e produções documentais de longa metragem entregues para os maiores serviços globais de streaming. Montagem a partir de arquivos RAW de cinema, gerenciamento de metadados, sincronização de áudio em canais discretos e conformidade com os manuais técnicos de entrega de cada plataforma.',
    descriptionEn:
      'Comprehensive catalog of original episodic series and feature-length documentary productions delivered to leading international streaming services. Editing from digital cinema camera RAW feeds, metadata pipeline management, discrete multi-channel audio synchronization, and strict platform delivery specifications.',
    specs: {
      resolution: '4K UHD (3840x2160) / DCI 4K (4096x2160)',
      codec: 'Apple ProRes 4444 XQ / Avid DNxHR HQX',
      colorSpace: 'ACEScct / DCI-P3 / Rec.709',
      audioStandard: '5.1 Surround & 2.0 Stereo (EBU R128 / ITU-R BS.1770-4)',
      aspectRatio: '16:9 / 2.39:1 Anamórfico',
      workflow: 'Conform de RAW (ARRI Alexa, RED, Sony Venice) para pacotes IMF & ProRes',
    },
    clientLogoKey: 'netflix',
  },
  {
    id: 'commercial-advertising-conform',
    title: 'Commercial Advertising Masters & Conform',
    client: 'Coca-Cola, Fiat, Samsung, Burger King, Nubank, L\'Oréal Paris, Vivo, Bradesco',
    productionCompany: 'Sentimental Filme',
    year: '2021–2025',
    category: 'finishing',
    rolePt: 'Finalização de Vídeo e Conform Técnico (Não Edição)',
    roleEn: 'Finishing & Online Conform Specialist (Technical Finishing, Not Offline Edit)',
    youtubeId: 'FfiP6m1x0I0',
    youtubeUrl: 'https://youtu.be/FfiP6m1x0I0',
    coverImage: './assets/aistudio/propaganda_9a2f026a.png',
    descriptionPt:
      'Supervisão técnica de conform online, fechamento de masters e controle de qualidade para campanhas publicitárias de alto impacto nacional e internacional. Recomposição de planos em alta resolução, substituição de VFX/CGI em EXR, ajuste de proporções (16:9, 9:16, 1:1, 4:5), versionamento de praças e geração de pacotes broadcast para TV aberta e fechada.',
    descriptionEn:
      'Technical online conform supervision, master closing, and quality control (QC) for high-impact national and global advertising campaigns. Hi-res plate re-linking, VFX EXR compositing conform, multi-ratio adaptations (16:9, 9:16, 1:1, 4:5), regional market versioning, and broadcast master generation for open/cable television.',
    specs: {
      resolution: '4K UHD, Full HD, 1080x1920 (Vertical 9:16), 1080x1080 (1:1)',
      codec: 'ProRes 4444 / MXF OP1a XDCAM HD422 / H.264 High Profile',
      colorSpace: 'Rec.709 Gamma 2.4 / sRGB para Digital',
      audioStandard: 'EBU R128 (-24 LUFS) / Web Loudness (-14 LUFS)',
      aspectRatio: '16:9, 9:16, 1:1, 4:5',
      workflow: 'Round-trip EDL/XML, conform de VFX pulls e fechamento de copião master',
    },
    clientLogoKey: 'cocacola',
  },
  {
    id: 'aiwa-mondial-performance-ads',
    title: 'AIWA & Mondial — Tráfego Pago & Anúncios',
    client: 'AIWA / Mondial',
    productionCompany: 'Divisão de Trade Marketing & Audiovisual',
    year: '2025–2026',
    category: 'ads',
    rolePt: 'Edição de Vídeo e Anúncios para Tráfego Pago',
    roleEn: 'Performance Video Editor & Multi-Platform Paid Ads',
    youtubeId: '8IcGt-NQS9o',
    youtubeUrl: 'https://youtu.be/8IcGt-NQS9o',
    coverImage: './assets/aistudio/aiwa_8a179449.png',
    descriptionPt:
      'Criação, montagem e finalização de criativos audiovisuais focados em tráfego pago de alta performance e ponto de venda para os lançamentos de áudio e eletroportáteis da AIWA e Mondial. Otimização dos primeiros 3 segundos (hook retention), adaptação simultânea para formatos 9:16 (Stories, Reels, TikTok), 1:1 e 16:9 (YouTube Ads), com testes A/B dinâmicos de copy e trilha sonora.',
    descriptionEn:
      'Editorial production, motion rhythm, and post-production for high-conversion paid traffic campaigns and retail point-of-sale video assets for AIWA and Mondial electronics. Hook retention optimization within the first 3 seconds, multi-format delivery across 9:16 (Reels/Stories/TikTok), 1:1 (Feed), and 16:9 (YouTube Ads), plus dynamic A/B test versioning.',
    specs: {
      resolution: '1080x1920 (Vertical 9:16), 1080x1080 (Square), 4K UHD',
      codec: 'Apple ProRes 422 / H.265 / H.264 Master 50Mbps',
      colorSpace: 'Rec.709 / sRGB Color Profile para Telas Mobile OLED',
      audioStandard: '-14 LUFS True Peak -1.0 dBTP (Calibração para Redes Sociais)',
      aspectRatio: '9:16, 1:1, 16:9',
      workflow: 'Premiere Pro, DaVinci Resolve e CapCut Pro com automação de legendas e motion',
    },
    clientLogoKey: 'aiwa',
  },
  {
    id: 'caravana-das-drags',
    title: 'Caravana das Drags',
    client: 'Amazon Prime Video',
    productionCompany: 'Prime Video Original',
    year: '2023',
    category: 'entertainment',
    rolePt: 'Edição de Vídeo',
    roleEn: 'Video Editor',
    youtubeId: 'NzWYOUXf8L0',
    youtubeUrl: 'https://youtu.be/NzWYOUXf8L0',
    coverImage: './assets/aistudio/caravana_8b97b1b4.png',
    descriptionPt:
      'Reality show original e concurso artístico itinerante do Amazon Prime Video apresentado por Xuxa Meneghel e Ikaro Kadoshi. Edição de episódios dinâmicos, números musicais coreografados, montagem de depoimentos confessionais em ritmo cômico e dramático, e coordenação de ritmo narrativo com a direção geral.',
    descriptionEn:
      'Original reality competition travelogue series on Amazon Prime Video hosted by Xuxa Meneghel and Ikaro Kadoshi. Editing multi-angle performance numbers, comedic confessionals, dramatic judging deliberations, and high-energy narrative pacing in coordination with series showrunners.',
    specs: {
      resolution: '4K UHD (3840x2160)',
      codec: 'Apple ProRes 422 HQ / Avid DNxHR',
      colorSpace: 'Rec.709 / P3-D65',
      audioStandard: 'EBU R128 (-24 LUFS / 5.1 Surround & Stereo)',
      aspectRatio: '16:9 Nativo',
      workflow: 'Edição em Premiere Pro & Avid Media Composer com múltiplos fluxos de câmera',
    },
    clientLogoKey: 'prime',
  },
  {
    id: 'ai-assisted-audiovisual-workflows',
    title: 'AI-Assisted Audiovisual Workflows',
    client: 'AIWA / Mondial Laboratório Audiovisual & R&D',
    productionCompany: 'Pesquisa e Inovação Audiovisual',
    year: '2025–2026',
    category: 'ai',
    rolePt: 'Fluxo e Inovação Audiovisual',
    roleEn: 'Workflow & Audiovisual Innovation',
    youtubeId: 'emBGl7L-M30',
    youtubeUrl: 'https://youtu.be/emBGl7L-M30',
    coverImage: './assets/aistudio/lumenIA_a81b193d.png',
    descriptionPt:
      'Exploração prática e implementação de fluxos de trabalho híbridos de pós-produção audiovisual utilizando modelos generativos avançados de inteligência artificial (Google Flow, Veo, etc.). Geração de cenas animadas para visualização conceitual, extensão de backgrounds, interpolação de quadros e integração harmoniosa entre filmagens reais e assets gerados por IA.',
    descriptionEn:
      'Implementation and testing of hybrid post-production pipelines leveraging cutting-edge generative AI models (Google Flow, Veo). Creation of animated conceptual scenes, background extension, frame interpolation, and seamless integration between live-action footage and AI-assisted elements.',
    specs: {
      resolution: '4K UHD (3840x2160) & 1080p Upscaled',
      codec: 'ProRes 422 HQ Master / WebM VP9',
      colorSpace: 'Rec.709 / sRGB',
      audioStandard: 'Loudness Calibrated -14 LUFS',
      aspectRatio: '16:9 Widescreen & 9:16 Vertical',
      workflow: 'Pipeline híbrido: Ferramentas Generativas de IA (Google Flow / Veo) + DaVinci & Premiere',
    },
    clientLogoKey: 'aiwa',
  },
];

export const CAREER_EXPERIENCES: CareerExperience[] = [
  {
    period: '2025 – 2026',
    company: 'MONDIAL / AIWA',
    rolePt: 'Editora de Vídeo | Tráfego Pago e Anúncios',
    roleEn: 'Video Editor | Paid Traffic & Performance Ads',
    departmentPt: 'Tráfego Pago, Anúncios e Produção Audiovisual',
    departmentEn: 'Paid Traffic, Advertising & Audiovisual Production',
    responsibilitiesPt: [
      'Edição e pós-produção voltada a anúncios de alta conversão, pontos de venda (PDV) e lançamentos de produtos eletroeletrônicos e de áudio.',
      'Otimização de fluxos de trabalho e organização estruturada de acervos de mídia multiformato (9:16, 1:1, 16:9).',
      'Pesquisa e aplicação de fluxos híbridos com ferramentas generativas de inteligência artificial (Google Flow, Veo, etc.) para ampliação de capacidade criativa.',
    ],
    responsibilitiesEn: [
      'Video editing and post-production tailored for high-conversion paid media ads, retail point-of-sale (POS), and consumer audio product launches.',
      'Workflow optimization and digital asset management across multi-aspect deliverable formats (9:16, 1:1, 16:9).',
      'Research and deployment of hybrid workflows utilizing generative AI video tools (Google Flow, Veo) to enhance production efficiency.',
    ],
  },
  {
    period: '2021 – 2025',
    company: 'SENTIMENTAL FILME',
    rolePt: 'Editora de Vídeo e Finalização de Vídeo',
    roleEn: 'Video Editor & Post-Production Finishing Specialist',
    departmentPt: 'Publicidade e Conteúdo de Entretenimento',
    departmentEn: 'Advertising Commercials & Entertainment Content',
    highlightPt: 'Montagem da produção "Bora, o Pódio é Nosso" (Rede Globo / Gloob), indicada ao Emmy Awards 2025.',
    highlightEn: 'Editor on "Bora, o Pódio é Nosso" (Rede Globo / Gloob), nominated for the 2025 Emmy Awards.',
    responsibilitiesPt: [
      'Montagem e edição narrativa de produções de entretenimento e séries documentais.',
      'Finalização técnica de vídeo, conform online a partir de arquivos RAW de câmera, correção de imagem e fechamento de copião master para filmes publicitários de grandes marcas (Coca-Cola, Fiat, Samsung, Burger King, Nubank, L\'Oréal Paris, Vivo, Bradesco).',
      'Gestão minuciosa de versões de praça, formatos variados de tela e organização de acervos de campanhas nacionais.',
      'Supervisão de controle de qualidade (QC) e gestão de entrega broadcast para canais de TV aberta/fechada e plataformas digitais.',
    ],
    responsibilitiesEn: [
      'Narrative video editing for entertainment productions and sports documentary series.',
      'Technical post-production finishing, online conform from camera RAW files, color timing, and master delivery for major advertising clients (Coca-Cola, Fiat, Samsung, Burger King, Nubank, L\'Oréal Paris, Vivo, Bradesco).',
      'Management of regional market versions, multi-screen formats, and campaign digital asset archives.',
      'Broadcast Quality Control (QC) supervision and technical delivery compliance for open broadcast, cable channels, and digital streaming.',
    ],
  },
  {
    period: '2012 – 2020',
    company: 'POLAR FILMES',
    rolePt: 'Editora de Vídeo e Finalização de Vídeo',
    roleEn: 'Video Editor & Post-Production Finishing Specialist',
    departmentPt: 'Pós-Produção, Edição e Finalização',
    departmentEn: 'Post-Production, Offline/Online Editing & Finishing',
    platforms: ['Netflix', 'HBO', 'Globoplay', 'Amazon Prime Video'],
    responsibilitiesPt: [
      'Edição de vídeo e montagem online de alta precisão a partir de arquivos RAW de câmera digital de cinema.',
      'Sincronização audiovisual de múltiplas câmeras e gerenciamento de trilhas de áudio discretas.',
      'Controle de qualidade técnico rigoroso (QC) e conformidade de níveis de áudio pela norma internacional EBU R128.',
      'Masterização e geração de pacotes técnicos de entrega para broadcast e streaming global (Apple ProRes 4444, MXF OP1a, pacotes IMF).',
    ],
    responsibilitiesEn: [
      'High-precision video editing and online conform directly from digital cinema camera RAW material.',
      'Multi-camera audiovisual synchronization and management of discrete audio channel stems.',
      'Rigorous technical quality control (QC) and audio loudness compliance according to EBU R128 international standards.',
      'Mastering and technical package authoring for international broadcast and global streaming platforms (Apple ProRes 4444, MXF OP1a, IMF packages).',
    ],
  },
];

export const TECHNICAL_TOOLS: ToolItem[] = [
  {
    name: 'Avid Media Composer',
    rolePt: 'Edição de Séries & Broadcast',
    roleEn: 'Broadcast & Episodic Editing',
    descriptionPt: 'Padrão da indústria cinematográfica para montagem de grandes narrativas, gerenciamento de projetos colaborativos e sincronização de acervos complexos.',
    descriptionEn: 'Gold standard in cinema and broadcast for complex narrative editing, collaborative shared storage environments, and heavy media management.',
    iconKey: 'avid',
    badge: '10+ ANOS',
  },
  {
    name: 'Adobe Premiere Pro',
    rolePt: 'Edição Ágil & Publicidade',
    roleEn: 'Agile Commercials & Editorial',
    descriptionPt: 'Montagem ágil para publicidade, tráfego pago multiformato, documentários e produções de entretenimento com integração ao ecossistema Adobe.',
    descriptionEn: 'Rapid timeline editing for commercials, multi-format performance campaigns, and episodic documentary series with Adobe CC integration.',
    iconKey: 'premiere',
    badge: 'ESPECIALISTA',
  },
  {
    name: 'DaVinci Resolve Studio',
    rolePt: 'Conform Técnico & Cor',
    roleEn: 'Technical Conform & Color',
    descriptionPt: 'Conform online de arquivos RAW de câmera, masterização em Apple ProRes 4444, conformidade de espaço de cor ACES/Rec.709 e controle de qualidade de entrega.',
    descriptionEn: 'Online RAW conform, Apple ProRes 4444 mastering, ACES/Rec.709 color management pipeline, and broadcast QC packaging.',
    iconKey: 'davinci',
    badge: 'CONFORM & QC',
  },
  {
    name: 'CapCut Pro',
    rolePt: 'Tráfego Pago & Social Video',
    roleEn: 'Performance Ads & Social',
    descriptionPt: 'Ferramenta estratégica para entregas ágeis de anúncios verticais (9:16), legendagem dinâmica precisa, hook retention e formatos de alta conversão.',
    descriptionEn: 'Fast turnaround tool for vertical 9:16 social ads, dynamic subtitle timing, hook retention pacing, and high-converting marketing creatives.',
    iconKey: 'capcut',
    badge: 'PERFORMANCE',
  },
  {
    name: 'Adobe Photoshop',
    rolePt: 'Tratamento de Imagem & Still',
    roleEn: 'Key Visuals & Retouching',
    descriptionPt: 'Limpeza de quadros, tratamento de stills, preparação de texturas e composição de elementos gráficos para titulação e conform.',
    descriptionEn: 'Still frame retouching, plate cleanup, texture preparation, and graphic matte compositing for titles and finish.',
    iconKey: 'photoshop',
    badge: 'GRAPHIC STILL',
  },
  {
    name: 'Google Flow & Veo',
    rolePt: 'Inovação & Fluxos com IA',
    roleEn: 'Audiovisual AI Innovation',
    descriptionPt: 'Pesquisa e implementação de fluxos de trabalho híbridos com IA generativa para geração de conceitos visuais, extensão de frames e otimização de pós-produção.',
    descriptionEn: 'Research and deployment of generative AI video pipelines for concept pre-visualization, background extension, and post-production acceleration.',
    iconKey: 'ai',
    badge: 'R&D / WORKFLOW',
  },
];

export const CLIENT_LOGOS = [
  { name: 'Rede Globo', key: 'globo' },
  { name: 'Gloob', key: 'gloob' },
  { name: 'Netflix', key: 'netflix' },
  { name: 'HBO', key: 'hbo' },
  { name: 'Amazon Prime Video', key: 'prime' },
  { name: 'Globoplay', key: 'globoplay' },
  { name: 'Coca-Cola', key: 'cocacola' },
  { name: 'L\'Oréal Paris', key: 'loreal' },
  { name: 'Samsung', key: 'samsung' },
  { name: 'AIWA', key: 'aiwa' },
];

export const CV_DATA = {
  name: 'Débora Guerra',
  titlePt: 'Editora de Vídeo e Especialista em Pós-Produção',
  titleEn: 'Video Editor & Post-Production Specialist',
  location: 'São Paulo, Brasil (Remoto & Presencial)',
  phone: '+55 (11) 9 6484 4975',
  phoneRaw: '5511964844975',
  whatsappUrl: 'https://wa.me/5511964844975',
  availabilityPt: 'Disponível para contratação por projeto ou contrato contínuo, em modelo remoto ou presencial.',
  availabilityEn: 'Available for hire on a project basis or ongoing contract, in remote or on-site model.',
  email: 'deboracguerra@gmail.com',
  linkedin: 'https://www.linkedin.com/in/débora-guerra-534b80a6/',
  showreel: 'https://youtu.be/FfiP6m1x0I0',
  languages: [
    { namePt: 'Português', nameEn: 'Portuguese', levelPt: 'Nativo', levelEn: 'Native' },
    { namePt: 'Inglês', nameEn: 'English', levelPt: 'Avançado', levelEn: 'Advanced' },
    { namePt: 'Francês', nameEn: 'French', levelPt: 'Básico', levelEn: 'Basic' },
  ],
  educationPt: 'Graduação em Audiovisual / Cinema e Especialização Contínua em Pós-Produção e Novas Tecnologias.',
  educationEn: 'Bachelor\'s Degree in Film & Audiovisual Arts, Continuous Advanced Specialization in Post-Production & Emerging Technologies.',
  summaryPt:
    'Profissional com mais de 10 anos de experiência consistente no mercado audiovisual brasileiro e internacional. Especialista em montagem narrativa de produções de entretenimento, documentários, séries para plataformas globais de streaming (Netflix, HBO, Amazon Prime Video, Globoplay) e filmes publicitários para as principais marcas do mercado. Reconhecimento com a montagem da produção "Bora, o Pódio é Nosso" (Sentimental Filme / Rede Globo / Gloob), indicada ao Emmy Awards 2025. Domínio técnico aprofundado em conform online, padrões de masterização broadcast (ProRes, MXF, IMF), calibração de áudio EBU R128, edição de tráfego pago de alta performance e integração de fluxos híbridos com ferramentas generativas de IA.',
  summaryEn:
    'Accomplished video editor and post-production finishing specialist with over 10 years of consistent track record in high-standard film, television, and advertising. Proven expertise in narrative offline editing for episodic streaming series (Netflix, HBO, Amazon Prime Video, Globoplay), sports documentaries, and commercial campaigns for premier global brands. Nominated for the 2025 Emmy Awards as video editor for "Bora, o Pódio é Nosso" (Sentimental Filme / Rede Globo / Gloob). Proficient in technical online conform, broadcast delivery packaging (ProRes, MXF, IMF), EBU R128 audio compliance, multi-format performance advertising, and generative AI hybrid workflows.',
};
