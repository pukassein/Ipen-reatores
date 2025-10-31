import React from 'react';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-3xl font-bold text-ipen-yellow-400 mt-10 mb-5 border-b-2 border-ipen-blue-700 pb-2">{children}</h2>
);

const SubSectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h3 className="text-2xl font-semibold text-ipen-light mt-6 mb-3">{children}</h3>
);

const GlossaryPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-black text-ipen-yellow-400 mb-2">Como Funciona um Reator Nuclear</h1>
        <p className="text-xl text-ipen-gray">
          Uma visão concisa sobre os princípios, componentes e a operação dos reatores de pesquisa.
        </p>
      </header>

      <article className="bg-ipen-blue-800 p-6 sm:p-8 rounded-lg shadow-lg text-ipen-gray leading-relaxed">
        <p>
          Os reatores nucleares de pesquisa são instalações projetadas para gerar fluxos controlados de nêutrons e radiação gama. Diferente dos reatores de potência, que convertem energia em eletricidade, os reatores de pesquisa têm finalidades científicas e tecnológicas, como a produção de radioisótopos, o estudo de materiais e o treinamento de especialistas.
        </p>

        <SectionTitle>Classificação e Finalidade</SectionTitle>
        <p>Os reatores podem ser classificados conforme a energia dos nêutrons, o tipo de combustível, o moderador, o refrigerante e a configuração do núcleo. De forma geral, há dois tipos principais:</p>
        <ul className="list-disc list-inside space-y-2 pl-4 my-4">
            <li>Reatores de potência, voltados à geração de energia elétrica.</li>
            <li>Reatores de pesquisa, usados para experimentos, produção de radioisótopos e ensino.</li>
        </ul>
        <p>Os reatores de pesquisa costumam operar entre dezenas de quilowatts e alguns megawatts térmicos, dependendo de sua aplicação.</p>
        
        <SectionTitle>Estrutura e Componentes Principais</SectionTitle>
        
        <SubSectionTitle>Núcleo</SubSectionTitle>
        <p>
          É a região onde ocorre a fissão nuclear. Contém os elementos combustíveis, os refletores e as barras de controle. A disposição desses componentes define o comportamento neutrônico do reator.
        </p>
        
        <SubSectionTitle>Combustível nuclear</SubSectionTitle>
        <p>
          O combustível contém o material físsil, geralmente urânio-235. Nos reatores do IPEN são usados combustíveis de baixo enriquecimento (LEU, &lt; 20 % de U-235). O IEA-R1 utiliza placas metálicas de liga U₃Si₂-Al, e o IPEN/MB-01 emprega dois tipos de configuração: pastilhas de UO₂ (4,3 %) no cerne tipo vareta e U₃Si₂-Al (19,75 %) no cerne tipo placa.
        </p>

        <SubSectionTitle>Moderador</SubSectionTitle>
        <p>
          Reduz a velocidade dos nêutrons, facilitando a fissão. Ambos os reatores do IPEN usam água leve desmineralizada como moderador.
        </p>
        
        <SubSectionTitle>Refrigerante</SubSectionTitle>
        <p>
          Remove o calor do núcleo e mantém a estabilidade térmica. No IEA-R1, a água leve circula naturalmente ou por bombeamento. No IPEN/MB-01, a potência é muito baixa, não sendo necessário um sistema ativo de refrigeração.
        </p>

        <SubSectionTitle>Refletor de nêutrons</SubSectionTitle>
        <p>
          Posicionado ao redor do núcleo para refletir nêutrons que escapam. O IEA-R1 usa blocos de grafite e berílio; o IPEN/MB-01, caixas de água pesada (D₂O) como refletor.
        </p>

        <SubSectionTitle>Barras de controle e segurança</SubSectionTitle>
        <p>
          Regulam a reatividade absorvendo nêutrons. No IEA-R1, são de Ag-In-Cd. No IPEN/MB-01, variam conforme o cerne: Ag-In-Cd e B₄C no tipo vareta, e háfnio (Hf) no tipo placa. Em emergências, são inseridas rapidamente no núcleo, interrompendo a reação.
        </p>

        <SubSectionTitle>Piscina e blindagem</SubSectionTitle>
        <p>
          Nos reatores do tipo piscina, como o IEA-R1, o núcleo fica imerso em água desmineralizada, que atua como blindagem biológica, meio de refrigeração e proteção radiológica.
        </p>

        <SubSectionTitle>Sistemas de irradiação</SubSectionTitle>
        <p>
          Permitem expor amostras ao fluxo de nêutrons para produzir radioisótopos, realizar análises por ativação e testar materiais. O IEA-R1 possui 11 tubos de irradiação e um sistema pneumático que transporta amostras rapidamente ao núcleo.
        </p>
        
        <SectionTitle>Segurança e Operação</SectionTitle>
        <p>
          Os reatores do IPEN seguem normas da CNEN e da AIEA, com sistemas automáticos e redundantes para controle, refrigeração e monitoramento de radiação. Os operadores são treinados e passam por requalificação periódica, e toda a instalação é protegida por múltiplas barreiras de segurança física e radiológica.
        </p>

        <SectionTitle>Importância dos Reatores de Pesquisa</SectionTitle>
        <p>
            Esses reatores permitem:
        </p>
        <ul className="list-disc list-inside space-y-2 pl-4 my-4">
            <li>Produzir radioisótopos usados em diagnóstico e tratamento médico.</li>
            <li>Treinar engenheiros e físicos nucleares.</li>
            <li>Validar métodos de cálculo e novos combustíveis.</li>
            <li>Realizar experimentos com nêutrons e desenvolver tecnologias associadas ao Reator Multipropósito Brasileiro (RMB).</li>
        </ul>
      </article>
    </div>
  );
};

export default GlossaryPage;
