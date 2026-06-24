import mdx from '@astrojs/mdx';
import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Apostila Campina Grande/PB',
      description:
        'Mini apostila de estudos para Professor Educação Infantil da Prefeitura de Campina Grande/PB.',
      locales: {
        root: {
          label: 'Português',
          lang: 'pt-BR',
        },
      },
      customCss: ['./src/styles/custom.css'],
      sidebar: [
        {
          label: 'Comece aqui',
          items: [
            { label: 'Início', slug: '' },
            { label: 'Guia de estudo', slug: 'guia-de-estudo' },
          ],
        },
        {
          label: 'Língua Portuguesa',
          items: [
            { label: 'Interpretação textual', slug: 'lingua-portuguesa/interpretacao-textual' },
            { label: 'Sintaxe e construção frasal', slug: 'lingua-portuguesa/sintaxe-construcao-frasal' },
            { label: 'Morfologia', slug: 'lingua-portuguesa/morfologia' },
            { label: 'Norma-padrão', slug: 'lingua-portuguesa/norma-padrao' },
          ],
        },
        {
          label: 'Noções de Informática',
          items: [
            {
              label: 'Hardware, arquivos e sistemas operacionais',
              slug: 'informatica/hardware-arquivos-sistemas-operacionais',
            },
            { label: 'Editor de textos e planilhas', slug: 'informatica/editor-textos-planilhas' },
            {
              label: 'Internet, e-mail e reuniões online',
              slug: 'informatica/internet-email-reunioes-online',
            },
            { label: 'Segurança da informação', slug: 'informatica/seguranca-informacao' },
          ],
        },
        { label: 'História de Campina Grande/PB', slug: 'historia-campina-grande' },
        {
          label: 'Legislação e Ética',
          items: [
            { label: 'Lei Orgânica', slug: 'legislacao-etica/lei-organica' },
            { label: 'LGPD e LAI', slug: 'legislacao-etica/lgpd-lai' },
            {
              label: 'Ética e princípios da Administração Pública',
              slug: 'legislacao-etica/etica-principios-administracao-publica',
            },
          ],
        },
        {
          label: 'Conhecimentos Específicos',
          items: [
            { label: 'BNCC e DCNEI', slug: 'conhecimentos-especificos/bncc-dcnei' },
            {
              label: 'Avaliação na Educação Infantil',
              slug: 'conhecimentos-especificos/avaliacao-educacao-infantil',
            },
            {
              label: 'Desenvolvimento e aprendizagem',
              slug: 'conhecimentos-especificos/desenvolvimento-aprendizagem',
            },
            { label: 'Teorias pedagógicas', slug: 'conhecimentos-especificos/teorias-pedagogicas' },
            {
              label: 'Alfabetização e letramento',
              slug: 'conhecimentos-especificos/alfabetizacao-letramento',
            },
            { label: 'Inclusão e diversidade', slug: 'conhecimentos-especificos/inclusao-diversidade' },
            {
              label: 'Gestão da sala e escola-comunidade',
              slug: 'conhecimentos-especificos/gestao-sala-escola-comunidade',
            },
            {
              label: 'Legislação educacional',
              slug: 'conhecimentos-especificos/legislacao-educacional',
            },
            {
              label: 'Pensadores e escolas pedagógicas',
              slug: 'conhecimentos-especificos/pensadores-escolas-pedagogicas',
            },
          ],
        },
        {
          label: 'Prática e referências',
          items: [
            { label: 'Questões rápidas', slug: 'questoes-rapidas' },
            { label: 'Fontes oficiais', slug: 'fontes-oficiais' },
          ],
        },
      ],
    }),
    mdx(),
  ],
});
