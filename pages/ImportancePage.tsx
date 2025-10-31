import React from 'react';

const ImportancePage: React.FC = () => {
  const points = [
    {
      title: 'Formação de Recursos Humanos',
      description: 'Os reatores do IPEN são verdadeiros laboratórios de ensino e capacitação, onde estudantes e profissionais de engenharia, física e tecnologia nuclear recebem formação prática em operação de reatores, controle de reatividade e segurança radiológica. Essas instalações contribuem diretamente para a formação de técnicos e pesquisadores que atuam em centros de pesquisa, universidades e indústrias nucleares do Brasil e do exterior.',
    },
    {
      title: 'Produção de Radioisótopos',
      description: 'O IEA-R1 é responsável pela produção nacional de radioisótopos utilizados em medicina nuclear, indústria e agricultura. Ele fornece a maior parte dos insumos usados em exames e terapias do Sistema Único de Saúde (SUS), como o Tecnécio-99m, essencial para diagnósticos de imagem, e o Iodo-131, usado no tratamento de doenças da tireoide. Essa produção garante autossuficiência estratégica e reduz a dependência de importações.',
    },
    {
      title: 'Validação de Códigos de Reatores',
      description: 'O IPEN/MB-01 é um dos poucos reatores no mundo projetados especialmente para experimentos de física de reatores a baixíssima potência. Seus dados experimentais de alta precisão são utilizados internacionalmente para validar e aperfeiçoar os códigos computacionais que simulam o comportamento de reatores nucleares, incluindo projetos de energia e reatores de pesquisa avançados. Esses resultados servem como referência (“benchmarks”) reconhecida pela Agência Internacional de Energia Atômica (AIEA).',
    },
    {
      title: 'Ensino Universitário e Pesquisa Científica',
      description: 'Os reatores IEA-R1 e IPEN/MB-01 apoiam uma ampla gama de projetos de pesquisa científica e tecnológica, desenvolvidos em parceria com universidades e centros de excelência. São utilizados em aulas práticas, dissertações, teses e experimentos de graduação e pós-graduação, permitindo que estudantes tenham contato direto com técnicas de análise por ativação neutrônica, difração e cinética de nêutrons. Essas experiências fortalecem o ensino e impulsionam a inovação na área nuclear brasileira.',
    },
    {
      title: 'Colaboração Internacional',
      description: 'O IPEN mantém cooperação com organismos internacionais, como a AIEA (Agência Internacional de Energia Atômica), e com instituições de pesquisa de diversos países. Participa de projetos conjuntos voltados ao uso pacífico da energia nuclear, ao desenvolvimento de combustíveis LEU (baixo enriquecimento) e ao Reator Multipropósito Brasileiro (RMB) — iniciativa que reforça a posição do Brasil no cenário científico global. Essas parcerias garantem a troca contínua de conhecimento e tecnologia em benefício da sociedade.',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-black text-ipen-yellow-400 mb-2">Importância para Ensino e Pesquisa</h1>
        <p className="text-xl text-ipen-gray">
          Descubra como os reatores do IPEN impulsionam a ciência, a saúde e a formação de especialistas no Brasil.
        </p>
      </header>

      <div className="space-y-8">
        {points.map((point, index) => (
          <div key={index} className="bg-ipen-blue-800 p-6 rounded-lg shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
            <h2 className="text-2xl font-bold text-ipen-yellow-400 mb-3">{point.title}</h2>
            <p className="text-ipen-gray">{point.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImportancePage;