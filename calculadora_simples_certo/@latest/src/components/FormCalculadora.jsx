import { useState } from 'react';
import './FormCalculadora.css';

export default function FormCalculadora() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operacao, setOperacao] = useState('+');
  const [resultado, setResultado] = useState(null);
  const [erro, setErro] = useState('');

  const handleCalcular = (e) => {
    e.preventDefault();
    setErro('');

    // Validação de campos vazios
    if (num1 === '' || num2 === '') {
      setErro('Por favor, preencha os dois números.');
      setResultado(null);
      return;
    }

    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    let res = 0;

    switch (operacao) {
      case '+':
        res = n1 + n2;
        break;
      case '-':
        res = n1 - n2;
        break;
      case '*':
        res = n1 * n2;
        break;
      case '/':
        if (n2 === 0) {
          setErro('Divisão por zero não é permitida.');
          setResultado(null);
          return;
        }
        res = n1 / n2;
        break;
      default:
        return;
    }

    setResultado(res);
  };

  const handleLimpar = () => {
    setNum1('');
    setNum2('');
    setOperacao('+');
    setResultado(null);
    setErro('');
  };

  return (
    <div className="calculadora-container">
      <h2>Calculadora Simples</h2>

      <form onSubmit={handleCalcular} className="calculadora-form">
        <div className="input-group">
          <label htmlFor="num1">Primeiro número:</label>
          <input
            id="num1"
            type="number"
            step="any"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            placeholder="Digite o primeiro número"
          />
        </div>

        <div className="input-group">
          <label htmlFor="operacao">Operação:</label>
          <select
            id="operacao"
            value={operacao}
            onChange={(e) => setOperacao(e.target.value)}
          >
            <option value="+">Somar (+)</option>
            <option value="-">Subtrair (-)</option>
            <option value="*">Multiplicar (*)</option>
            <option value="/">Dividir (/)</option>
          </select>
        </div>

        <div className="input-group">
          <label htmlFor="num2">Segundo número:</label>
          <input
            id="num2"
            type="number"
            step="any"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            placeholder="Digite o segundo número"
          />
        </div>

        <div className="button-group">
          <button type="submit" className="btn-calcular">
            Calcular
          </button>
          <button type="button" onClick={handleLimpar} className="btn-limpar">
            Limpar
          </button>
        </div>
      </form>

      {/* Exibição de Erros */}
      {erro && <p className="mensagem-erro">{erro}</p>}

      {/* Exibição do Resultado */}
      {resultado !== null && !erro && (
        <div className="resultado-container">
          <h3>Resultado:</h3>
          <p className="resultado-valor">{resultado}</p>
        </div>
      )}
    </div>
  );
}