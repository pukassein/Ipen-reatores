import { Reactor, GlossaryTerm } from './types';

export const REACTORS_DATA: Reactor[] = [
  {
    id: 'iea-r1',
    name: 'IEA-R1',
    fullName: 'Reator Nuclear de Pesquisa IEA-R1',
    tagline: 'O primeiro reator nuclear do Brasil, pilar da pesquisa e produção de radioisótopos.',
    imageUrl: 'IEA1.jpg',
    gallery: [
      { src: 'IEA1.jpg', sourceName: 'Fonte: ABEN', sourceUrl: 'https://aben.org.br/iea-r1-reator-de-pesquisas-do-ipen-cnen-a-servico-da-sociedade-ha-65-anos/' },
      { src: 'IEA2.jpg', sourceName: 'Fonte: Conhecer para Debater', sourceUrl: 'https://conhecerparadebater.blogspot.com/2011/08/aumento-na-potencia-do-reator-nuclear.html' },
      { src: 'IEA3.jpg', sourceName: 'Fonte: ABEN', sourceUrl: 'https://aben.org.br/iea-r1-reator-de-pesquisas-do-ipen-cnen-a-servico-da-sociedade-ha-65-anos/' },
      { src: 'IEA4.jpg', sourceName: 'Fonte: Acervo O Globo', sourceUrl: 'https://acervo.oglobo.globo.com/incoming/iea-r1-primeiro-reator-brasileiro-22293182' },
    ],
    sections: [
      {
        title: 'Descrição Geral',
        content: 'O IEA-R1 é um reator de pesquisa do tipo piscina, operado pelo Instituto de Pesquisas Energéticas e Nucleares (IPEN) em São Paulo desde 1957. Utiliza água leve como moderador e refrigerante, e grafite e berílio como refletores de nêutrons. Atualmente opera com potência de até 5 megawatts térmicos (MWt), após ter sido modernizado e convertido para uso de combustível com baixo enriquecimento (LEU). É o maior e mais antigo reator de pesquisa em operação no Brasil, desempenhando papel essencial na produção de radioisótopos, análises por ativação de nêutrons, ensaios com feixes de nêutrons, e formação de profissionais nas áreas nuclear, médica e industrial.',
      },
      {
        title: 'Componentes Principais',
        content: [
          'Núcleo: composto por elementos combustíveis tipo MTR, contendo placas de liga alumínio-uranífero (U₃Si₂-Al) com enriquecimento inferior a 20 %.',
          'Moderador e refrigerante: água leve desmineralizada, que desacelera os nêutrons e remove o calor gerado.',
          'Refletores: blocos de grafite e berílio ao redor do núcleo, que refletem nêutrons de volta para a região ativa.',
          'Sistema de controle e segurança: barras de controle e de segurança operadas a partir de uma ponte móvel sobre a piscina.',
          'Instalações de irradiação: posições verticais e horizontais, canais de feixe, e sistema pneumático (“coelho”) para introdução rápida de amostras.',
          'Sistema de refrigeração secundário: circuitos e trocadores de calor para dissipação da potência térmica gerada no núcleo.',
        ],
      },
      {
        title: 'Aplicações e Usabilidade',
        content: [
          'Produção de radioisótopos para diagnóstico e terapia médica (como ⁹⁹ᵐTc e ¹³¹I);',
          'Análise por ativação de nêutrons (NAA) em materiais ambientais, biológicos e industriais;',
          'Ensaios e irradiação de materiais, para estudo de danos por radiação;',
          'Radiografia e tomografia por nêutrons, que permitem visualizar o interior de peças e componentes;',
          'Formação de recursos humanos e treinamento de operadores e estudantes de engenharia nuclear.',
        ],
      },
      {
        title: 'Curiosidades e Fatos Relevantes',
        content: [
          'Foi o primeiro reator nuclear a entrar em operação na América do Sul (1957).',
          'Passou por um grande projeto de modernização que aumentou sua potência de 2 MW para 5 MW.',
          'É responsável pela maior parte da produção nacional de radioisótopos usados em hospitais brasileiros.',
          'Possui mais de dez canais de irradiação e três tubos de feixe horizontais para pesquisas com nêutrons.',
          'É operado sob supervisão da Comissão Nacional de Energia Nuclear (CNEN) e segue padrões internacionais de segurança.',
        ],
      },
    ],
  },
  {
    id: 'mb-01',
    name: 'IPEN/MB-01',
    fullName: 'Reator de Potência Zero IPEN/MB-01',
    tagline: 'Uma instalação crítica essencial para a física de reatores e o programa nuclear brasileiro.',
    imageUrl: '4.png',
    gallery: [
      { src: '4.png', sourceName: 'Fonte: Autor' },
      { src: '2.png', sourceName: 'Fonte: Autor' },
      { src: '3.png', sourceName: 'Fonte: Autor' },
      { src: '5.png', sourceName: 'Fonte: Autor' },
    ],
    sections: [
      {
        title: 'Descrição Geral',
        content: 'O IPEN/MB-01 é um reator crítico de potência zero (do tipo zero-power critical assembly), projetado para experimentos em física de reatores e validação de códigos nucleares. Entrou em operação em 1988 e é operado em baixíssimas potências (até cerca de 100 watts térmicos), o que permite estudar o comportamento do núcleo sem geração significativa de calor. O MB-01 foi construído integralmente no Brasil e é considerado um dos reatores experimentais mais precisos da América Latina, sendo referência internacional em medições de parâmetros nucleares.',
      },
      {
        title: 'Componentes Principais',
        content: [
          'Núcleo: formado por uma matriz retangular de elementos combustíveis, montados em uma estrutura metálica imersa em água, permitindo configurações com varetas ou placas.',
          'Combustível: O reator pode operar com dois tipos de núcleo: um com varetas de UO₂ (enriquecimento de 4,3 %) e outro com placas de U₃Si₂-Al (enriquecimento de 19,75 %).',
          'Moderador e refletor: Água leve desmineralizada. Para o núcleo tipo placa, um refletor de água pesada (D₂O) pode ser utilizado para estudos específicos.',
          'Sistema de controle: As barras de controle variam com o núcleo: Ag-In-Cd e B₄C para o núcleo de varetas, e Háfnio (Hf) para o núcleo de placas.',
          'Instrumentação: guias e canais para inserção de detectores e sensores utilizados em experimentos de reatividade, cinética e espectrometria de nêutrons.',
        ],
      },
      {
        title: 'Aplicações e Usabilidade',
        content: [
          'Estudos de física de reatores: medições de reatividade, coeficientes de temperatura, distribuição de fluxo e espectro de nêutrons;',
          'Validação de códigos computacionais utilizados em análises de segurança de reatores de potência;',
          'Ensino e treinamento de engenheiros nucleares, físicos e operadores;',
          'Experimentos de benchmark reconhecidos internacionalmente pela Agência Internacional de Energia Atômica (AIEA).',
        ],
      },
      {
        title: 'Curiosidades e Fatos Relevantes',
        content: [
          'O MB-01 é chamado de “reator crítico zero-potência” porque opera apenas para medir parâmetros nucleares, sem produzir calor significativo.',
          'Possui configuração modular, permitindo rearranjar o núcleo conforme o tipo de experimento.',
          'Já foi usado para gerar dados experimentais de referência para o desenvolvimento do reator multipropósito brasileiro (RMB).',
          'É certificado pela AIEA como uma das instalações de benchmark mais completas da região.',
          'Diversas universidades brasileiras utilizam seus resultados em programas de pós-graduação em engenharia nuclear.',
        ],
      },
    ],
  },
];

export const GLOSSARY_DATA: GlossaryTerm[] = [
  {
    term: 'Núcleo do Reator',
    definition: 'A região central de um reator nuclear onde ocorrem as reações de fissão em cadeia. Contém o combustível nuclear, o moderador e as barras de controle.',
  },
  {
    term: 'Combustível Nuclear',
    definition: 'Material (geralmente urânio) que sustenta a reação em cadeia de fissão. No IEA-R1, é silicieto de urânio; no MB-01, é óxido de urânio.',
  },
  {
    term: 'Moderador',
    definition: 'Substância (como água leve ou grafite) que desacelera os nêutrons rápidos produzidos na fissão, aumentando a probabilidade de que causem novas fissões.',
  },
  {
    term: 'Barras de Controle',
    definition: 'Hastes feitas de materiais que absorvem nêutrons (como boro ou cádmio). São inseridas ou removidas do núcleo para controlar a taxa de reação ou desligar o reator.',
  },
  {
    term: 'Criticalidade',
    definition: 'O estado em que a reação de fissão em cadeia é autossustentável. Em um reator crítico, o número de nêutrons produzidos é igual ao número de nêutrons perdidos ou absorvidos.',
  },
  {
    term: 'Reator Tipo Piscina',
    definition: 'Um tipo de reator de pesquisa onde o núcleo fica submerso em um grande tanque de água. A água serve como refrigerante, moderador e blindagem contra a radiação.',
  },
];