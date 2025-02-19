import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import './App.css';

// Página do formulário de cadastro
const CadastroPage = () => {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [idade, setIdade] = useState('');
  const [cartaoCredito, setCartaoCredito] = useState('');
  const [validadeCartao, setValidadeCartao] = useState('');
  const [cvv, setCvv] = useState('');
  const [opcaoSelecionada, setOpcaoSelecionada] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Cadastro realizado com sucesso!');
  };

  return (
    <div className="cadastro-page">
      <h1>Cadastro</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nome:</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>CPF:</label>
          <input
            type="text"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Idade:</label>
          <input
            type="number"
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Cartão de Crédito:</label>
          <input
            type="text"
            value={cartaoCredito}
            onChange={(e) => setCartaoCredito(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Validade do Cartão:</label>
          <input
            type="month"
            value={validadeCartao}
            onChange={(e) => setValidadeCartao(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>CVV:</label>
          <input
            type="text"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Por que vc quer ser boostado?</label>
          <select value={opcaoSelecionada} onChange={(e) => setOpcaoSelecionada(e.target.value)} required>
            <option value="">Selecione</option>
            <option value="opcao1">causar inveja nos meus amigos</option>
            <option value="opcao2">ter um elo maior para betar mulheres no ARAM</option>
            <option value="opcao3">sou rico e prefiro dar dinheiro pros crias do que doar para alguma ONG</option>
            <option value="opcao4">me obrigaram a fazer isso (nao sei do q vc esta falando) ps: nao temos mais vagas para agiotas </option>
            <option value="opcao5">fui corneado pela webnamorada e quero fazer ela se arrepender disso fazendo ela se sentir inferior(in game)</option>
          </select>
        </div>

        <button type="submit">Cadastrar</button>
      </form>

      <Link to="/home">
        <button>Voltar para Home</button>
      </Link>
    </div>
  );
};

// Página do vídeo (Agora será a página "Quem Somos")
const QuemSomosPage = () => {
  return (
    <div className="quem-somos-page">
      <h4>Se voce esta aqui quer dizer que esta frustado com os ragers, trols e afks nas suas ranqueadas, nao temos culpa se vc e boostado e n consegue carregar 4 australoptecos com cerebro atrofiado, mas estamos aqui para te oferecer uma opcao mais rapida e barata do que ler o ebook do ucla</h4>
      
      {/* Vídeo centralizado */}
      <div className="video-container">
        <video controls>
          <source src="/video/malpvideo.mp4" type="video/mp4" />
          Seu navegador não suporta a tag de vídeo.
        </video>
      </div>

      <Link to="/home">
        <button>Voltar para Home</button>
      </Link>
    </div>
  );
};

// Página de Perguntas Frequentes
const PerguntasFrequentesPage = () => {
  return (
    <div className="perguntas-frequentes-page">
      <h1>Perguntas Frequentes</h1>
      <div>
        <h3>Pergunta 1: Como funciona o sistema de boost?</h3>
        <p>Resposta: O sistema de boost funciona da seguinte maneira...</p>
      </div>
      <div>
        <h3>Pergunta 2: Qual é o preço para o boost?</h3>
        <p>Resposta: O preço depende do nível de elo que você deseja alcançar...</p>
      </div>
      <div>
        <h3>Pergunta 3: O que é necessário para começar?</h3>
        <p>Resposta: Para começar, você precisa fornecer seus dados e fazer o pagamento...</p>
      </div>
      <div>
        <h3>Pergunta 4: Como posso confiar na empresa?</h3>
        <p>Resposta: Temos uma longa história e diversos depoimentos de clientes satisfeitos...</p>
      </div>
      <div>
        <h3>Pergunta 5: Existe algum tipo de garantia?</h3>
        <p>Resposta: Sim, oferecemos garantias de satisfação...</p>
      </div>

      <Link to="/home">
        <button>Voltar para Home</button>
      </Link>
    </div>
  );
};

// Página inicial
const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Bem Vindo a Elojorge Crias</h1>

      <div className="buttons-home">
        <Link to="/cadastro">
          <button>Ir para Cadastro</button>
        </Link>

        <Link to="/quem-somos">
          <button>Quem são vocês?</button>
        </Link>

        <Link to="/perguntas-frequentes">
          <button>Perguntas Frequentes</button>
        </Link>
      </div>

      <img
        src="/video/ap-malphite-dance.gif"
        alt="Malphite Dance GIF"
        className="background-gif"
      />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Redireciona para /home quando o usuário acessa a raiz */}
        <Route path="/" element={<Navigate to="/home" />} />

        {/* Página inicial com o GIF de fundo */}
        <Route path="/home" element={<HomePage />} />

        {/* Página de Cadastro */}
        <Route path="/cadastro" element={<CadastroPage />} />

        {/* Página "Quem Somos" com vídeo */}
        <Route path="/quem-somos" element={<QuemSomosPage />} />

        {/* Página de Perguntas Frequentes */}
        <Route path="/perguntas-frequentes" element={<PerguntasFrequentesPage />} />
      </Routes>
    </Router>
  );
};

export default App;
