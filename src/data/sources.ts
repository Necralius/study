export type OfficialSource = {
  id: string;
  name: string;
  type: string;
  url: string;
  usedBy: Array<{
    label: string;
    href: string;
  }>;
  updateNote: string;
};

export const officialSources: OfficialSource[] = [
  {
    id: 'edital-campina-grande-idecan-01-2026',
    name: 'Edital no 01/2026 - Concurso Publico da Prefeitura Municipal de Campina Grande/PB - IDECAN',
    type: 'Edital de concurso publico',
    url: 'https://idecan.org.br/',
    usedBy: [
      { label: 'Guia de estudo', href: '/guia-de-estudo/' },
      { label: 'Questoes rapidas', href: '/questoes-rapidas/' },
      { label: 'Fontes', href: '/fontes/' },
    ],
    updateNote:
      'Conferir sempre a pagina do IDECAN antes de publicar conteudo fechado, especialmente retificacoes, anexos, cronograma e conteudo programatico.',
  },
  {
    id: 'prefeitura-campina-grande',
    name: 'Prefeitura Municipal de Campina Grande/PB - portal oficial',
    type: 'Portal institucional oficial',
    url: 'https://campinagrande.pb.gov.br/',
    usedBy: [
      { label: 'Historia de Campina Grande/PB', href: '/historia-campina-grande/' },
      { label: 'Lei Organica', href: '/legislacao-etica/lei-organica/' },
      { label: 'Fontes', href: '/fontes/' },
    ],
    updateNote:
      'Usar para informacoes institucionais, atos municipais, paginas de legislacao, semanario oficial e comunicados da Prefeitura.',
  },
  {
    id: 'lei-organica-campina-grande',
    name: 'Lei Organica do Municipio de Campina Grande',
    type: 'Norma municipal',
    url: 'https://campinagrande.pb.gov.br/lei-organica-do-municipio/',
    usedBy: [
      { label: 'Lei Organica', href: '/legislacao-etica/lei-organica/' },
      { label: 'Legislacao educacional', href: '/conhecimentos-especificos/legislacao-educacional/' },
    ],
    updateNote:
      'Verificar se houve emenda, consolidacao ou nova publicacao no portal municipal antes de citar artigo especifico.',
  },
  {
    id: 'bncc-mec',
    name: 'Base Nacional Comum Curricular - BNCC',
    type: 'Documento normativo educacional',
    url: 'https://basenacionalcomum.mec.gov.br/',
    usedBy: [
      { label: 'BNCC e DCNEI', href: '/conhecimentos-especificos/bncc-dcnei/' },
      { label: 'Avaliacao na Educacao Infantil', href: '/conhecimentos-especificos/avaliacao-educacao-infantil/' },
      { label: 'Desenvolvimento e aprendizagem', href: '/conhecimentos-especificos/desenvolvimento-aprendizagem/' },
    ],
    updateNote:
      'Priorizar o portal oficial e o PDF hospedado pelo MEC. Conferir versao e etapa da Educacao Basica citada.',
  },
  {
    id: 'dcnei-resolucao-cne-ceb-5-2009',
    name: 'Resolucao CNE/CEB no 5/2009 - Diretrizes Curriculares Nacionais para a Educacao Infantil',
    type: 'Resolucao do Conselho Nacional de Educacao',
    url: 'https://portal.mec.gov.br/dmdocuments/rceb005_09.pdf',
    usedBy: [
      { label: 'BNCC e DCNEI', href: '/conhecimentos-especificos/bncc-dcnei/' },
      { label: 'Avaliacao na Educacao Infantil', href: '/conhecimentos-especificos/avaliacao-educacao-infantil/' },
      { label: 'Gestao da sala e escola-comunidade', href: '/conhecimentos-especificos/gestao-sala-escola-comunidade/' },
    ],
    updateNote:
      'Usar o PDF oficial do MEC/CNE. Ao citar, conferir se o edital cobra a resolucao ou as DCNEI de modo geral.',
  },
  {
    id: 'constituicao-1988-educacao',
    name: 'Constituicao Federal de 1988 - artigos 205 a 214',
    type: 'Constituicao Federal',
    url: 'https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm',
    usedBy: [
      { label: 'Legislacao educacional', href: '/conhecimentos-especificos/legislacao-educacional/' },
      { label: 'Etica e principios da Administracao Publica', href: '/legislacao-etica/etica-principios-administracao-publica/' },
    ],
    updateNote:
      'Consultar texto constitucional atualizado no Planalto, incluindo emendas que afetem educacao e financiamento.',
  },
  {
    id: 'ldb-9394-1996',
    name: 'Lei no 9.394/1996 - Lei de Diretrizes e Bases da Educacao Nacional',
    type: 'Lei federal',
    url: 'https://www.planalto.gov.br/ccivil_03/leis/l9394.htm',
    usedBy: [
      { label: 'Legislacao educacional', href: '/conhecimentos-especificos/legislacao-educacional/' },
      { label: 'BNCC e DCNEI', href: '/conhecimentos-especificos/bncc-dcnei/' },
      { label: 'Alfabetizacao e letramento', href: '/conhecimentos-especificos/alfabetizacao-letramento/' },
    ],
    updateNote:
      'A LDB e alterada com frequencia. Conferir redacao atualizada antes de produzir resumo ou questao.',
  },
  {
    id: 'eca-8069-1990',
    name: 'Lei no 8.069/1990 - Estatuto da Crianca e do Adolescente',
    type: 'Lei federal',
    url: 'https://www.planalto.gov.br/ccivil_03/leis/l8069.htm',
    usedBy: [
      { label: 'Legislacao educacional', href: '/conhecimentos-especificos/legislacao-educacional/' },
      { label: 'Inclusao e diversidade', href: '/conhecimentos-especificos/inclusao-diversidade/' },
      { label: 'Gestao da sala e escola-comunidade', href: '/conhecimentos-especificos/gestao-sala-escola-comunidade/' },
    ],
    updateNote:
      'Conferir atualizacoes no Planalto, principalmente dispositivos sobre direitos, protecao integral e deveres institucionais.',
  },
  {
    id: 'piso-magisterio-11738-2008',
    name: 'Lei no 11.738/2008 - Piso Salarial Profissional Nacional do Magisterio Publico',
    type: 'Lei federal',
    url: 'https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2008/lei/l11738.htm',
    usedBy: [
      { label: 'Legislacao educacional', href: '/conhecimentos-especificos/legislacao-educacional/' },
      { label: 'Lei Organica', href: '/legislacao-etica/lei-organica/' },
    ],
    updateNote:
      'Conferir redacao vigente e atos anuais de reajuste; a lei e a base normativa, mas valores podem mudar por ano.',
  },
  {
    id: 'fundeb-14113-2020',
    name: 'Lei no 14.113/2020 - Fundeb',
    type: 'Lei federal',
    url: 'https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2020/lei/l14113.htm',
    usedBy: [
      { label: 'Legislacao educacional', href: '/conhecimentos-especificos/legislacao-educacional/' },
      { label: 'Gestao da sala e escola-comunidade', href: '/conhecimentos-especificos/gestao-sala-escola-comunidade/' },
    ],
    updateNote:
      'Conferir alteracoes posteriores e regras vigentes de financiamento, complementacao e distribuicao.',
  },
  {
    id: 'pne-15388-2026',
    name: 'Lei no 15.388/2026 - Plano Nacional de Educacao (PNE)',
    type: 'Lei federal',
    url: 'https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2026/lei/l15388.htm',
    usedBy: [
      { label: 'Legislacao educacional', href: '/conhecimentos-especificos/legislacao-educacional/' },
      { label: 'Guia de estudo', href: '/guia-de-estudo/' },
    ],
    updateNote:
      'Fonte marcada para conferencia obrigatoria no Planalto, pois a busca publica nao confirmou indexacao estavel do texto nesta checagem.',
  },
  {
    id: 'lgpd-13709-2018',
    name: 'Lei no 13.709/2018 - Lei Geral de Protecao de Dados Pessoais (LGPD)',
    type: 'Lei federal',
    url: 'https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm',
    usedBy: [
      { label: 'LGPD e LAI', href: '/legislacao-etica/lgpd-lai/' },
      { label: 'Seguranca da informacao', href: '/informatica/seguranca-informacao/' },
    ],
    updateNote:
      'Conferir redacao vigente no Planalto e eventuais orientacoes da ANPD apenas como complemento interpretativo.',
  },
  {
    id: 'lai-12527-2011',
    name: 'Lei no 12.527/2011 - Lei de Acesso a Informacao (LAI)',
    type: 'Lei federal',
    url: 'https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2011/lei/l12527.htm',
    usedBy: [
      { label: 'LGPD e LAI', href: '/legislacao-etica/lgpd-lai/' },
      { label: 'Etica e principios da Administracao Publica', href: '/legislacao-etica/etica-principios-administracao-publica/' },
    ],
    updateNote:
      'Conferir texto atualizado no Planalto e regulamentacao municipal quando a questao tratar de procedimento local.',
  },
];

