
import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-black text-ipen-yellow-400 mb-2">Contato e Informações</h1>
        <p className="text-xl text-ipen-gray">
          Encontre informações de contato, localização e como saber mais sobre o IPEN.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="bg-ipen-blue-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-ipen-light mb-4">Informações Gerais</h2>
          <div className="space-y-4 text-ipen-gray">
            <p><strong>Endereço:</strong><br/> Av. Prof. Lineu Prestes, 2242 - Cidade Universitária, São Paulo - SP, 05508-000</p>
            <p><strong>Telefone Geral:</strong><br/> (11) 3133-9000</p>
            <p><strong>Website:</strong><br/> <a href="http://www.ipen.br" target="_blank" rel="noopener noreferrer" className="text-ipen-yellow-400 hover:underline">www.ipen.br</a></p>
            <p><strong>Visitação:</strong><br/> Visitas técnicas e institucionais devem ser agendadas com antecedência através dos canais oficiais do IPEN. Verifique o site para mais informações sobre a política de visitação.</p>
          </div>
        </div>

        {/* Safety Notice */}
        <div className="bg-ipen-blue-800 p-6 rounded-lg shadow-lg border-2 border-ipen-yellow-500">
          <h2 className="text-2xl font-bold text-ipen-yellow-500 mb-4">Aviso de Segurança</h2>
          <div className="space-y-4 text-ipen-gray">
            <p>Os reatores nucleares são instalações reguladas pela Comissão Nacional de Energia Nuclear (CNEN).</p>
            <p>O acesso às áreas controladas é restrito a pessoal autorizado e segue rigorosos protocolos de segurança e proteção radiológica.</p>
            <p>Toda e qualquer visita deve ser oficialmente agendada e acompanhada por funcionários designados pelo IPEN.</p>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="mt-8">
        <h2 className="text-3xl font-bold text-center text-ipen-yellow-400 mb-4">Localização</h2>
        <div className="aspect-w-16 aspect-h-9 bg-ipen-blue-800 rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.175783363351!2d-46.73507168554257!3d-23.56191796752718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5615705a6a6b%3A0x33b8b60f1712a188!2sInstituto%20de%20Pesquisas%20Energ%C3%A9ticas%20e%20Nucleares%20(IPEN)!5e0!3m2!1spt-BR!2sbr!4v1683123456789!5m2!1spt-BR!2sbr"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização do IPEN"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
