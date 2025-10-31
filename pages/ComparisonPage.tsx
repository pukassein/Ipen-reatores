import React from 'react';

const comparisonData = [
  { parameter: 'Tipo', iea_r1: 'Piscina aberta (MTR)', mb_01: 'Conjunto crítico tipo tanque' },
  { parameter: 'Classificação', iea_r1: 'Heterogêneo', mb_01: 'Heterogêneo' },
  { parameter: 'Potência térmica', iea_r1: '5 MW', mb_01: '100 W' },
  { parameter: 'Combustível', iea_r1: 'U₃Si₂–Al (19,75 % ²³⁵U, LEU)', mb_01: 'Cerne varetas: UO₂ (4,3 % ²³⁵U) / Cerne placas: U₃Si₂–Al (19,75 % ²³⁵U)' },
  { parameter: 'Moderador', iea_r1: 'Água leve desmineralizada', mb_01: 'Água leve desmineralizada' },
  { parameter: 'Refletor', iea_r1: 'Grafite e berílio', mb_01: 'Água leve (cerne varetas) / Água pesada (D₂O) (cerne placas)' },
  { parameter: 'Refrigerante', iea_r1: 'Água leve (natural e forçada)', mb_01: 'Água leve (natural, sem circuito ativo)' },
  { parameter: 'Barras de controle', iea_r1: '4 × Ag-In-Cd', mb_01: 'Ag-In-Cd + B₄C (cerne varetas) / Hf (cerne placas)' },
  { parameter: 'Fluxo de nêutrons térmicos', iea_r1: '~3,4 × 10¹³ n/cm²·s', mb_01: '~10⁹ n/cm²·s' },
  { parameter: 'Finalidade', iea_r1: 'Produção de radioisótopos e pesquisa', mb_01: 'Validação de códigos e estudos neutrônicos' },
];

const ComparisonPage: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-black text-ipen-yellow-400 mb-2">⚙️ Tabela Comparativa</h1>
        <p className="text-xl text-ipen-gray">
          Uma comparação direta entre os reatores de pesquisa do IPEN.
        </p>
      </header>

      <div className="bg-ipen-blue-800 rounded-lg shadow-lg overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-ipen-blue-700">
              <th className="p-4 font-semibold text-ipen-yellow-400 uppercase text-sm">Parâmetro</th>
              <th className="p-4 font-semibold text-ipen-yellow-400 uppercase text-sm">IEA-R1</th>
              <th className="p-4 font-semibold text-ipen-yellow-400 uppercase text-sm">IPEN/MB-01</th>
            </tr>
          </thead>
          <tbody>
            {comparisonData.map((row, index) => (
              <tr key={index} className="border-b border-ipen-blue-700 last:border-b-0 hover:bg-ipen-blue-700/50 transition-colors">
                <td className="p-4 text-ipen-light font-medium">{row.parameter}</td>
                <td className="p-4 text-ipen-gray">{row.iea_r1}</td>
                <td className="p-4 text-ipen-gray">{row.mb_01}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ComparisonPage;