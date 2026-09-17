## 🧠 Conceitos de React Aplicados

### 1. Componentização (`FormCalculadora.jsx`)
O React é baseado em **Componentes** — blocos de código reutilizáveis e independentes. Toda a estrutura do formulário, lógica e botões foram isolados dentro de `FormCalculadora.jsx`, mantendo o código organizado e modular.

### 2. Gerenciamento de Estado (`useState`)
O Hook `useState` permite que o componente armazene e gerencie dados que mudam com a interação do usuário. Quando o estado muda, o React atualiza a tela automaticamente (reatividade).

* `num1` e `num2`: Armazenam os números digitados nos campos de entrada.
* `operacao`: Guarda a operação matemática selecionada no `<select>`.
* `resultado`: Armazena o valor do cálculo final para exibição.

## 🧠 Conceitos de React Aplicados

### 1. Componentização (`FormCalculadora.jsx`)
O React é baseado em **Componentes** — blocos de código reutilizáveis e independentes. Toda a estrutura do formulário, lógica e botões foram isolados dentro de `FormCalculadora.jsx`, mantendo o código organizado e modular.

### 2. Gerenciamento de Estado (`useState`)
O Hook `useState` permite que o componente armazene e gerencie dados que mudam com a interação do usuário. Quando o estado muda, o React atualiza a tela automaticamente (reatividade).

* `num1` e `num2`: Armazenam os números digitados nos campos de entrada.
* `operacao`: Guarda a operação matemática selecionada no `<select>`.
* `resultado`: Armazena o valor do cálculo final para exibição.
* `erro`: Guarda mensagens de validação (ex: campos vazios ou divisão por zero).

### 3. Componentes Controlados (Controlled Components)
No React, os dados dos inputs do formulário são mantidos no estado do componente. A cada caractere digitado, o evento `onChange` dispara e chama a função atualizadora do estado (`setNum1`, `setNum2`, `setOperacao`), mantendo o valor da tela em sincronia com o JavaScript.

### 4. Manipulação de Eventos (Event Handling)
* `onSubmit`: Intercepta o envio do formulário no botão **Calcular** usando `e.preventDefault()` para impedir que a página recarregue ao submeter os dados.
* `onClick`: Executa a função `handleLimpar` para redefinir todos os estados de volta ao seu valor inicial.

### 5. Renderização Condicional
O resultado e as mensagens de erro são renderizados na tela apenas quando satisfazem condições específicas usando seletores lógicos:

* `{erro && <p className="mensagem-erro">{erro}</p>}`: Exibe a mensagem apenas se houver algum erro registrado.
* `{resultado !== null && !erro && (...)}`: Exibe o quadro de resultado apenas se o cálculo tiver sido concluído sem erros.

📂 Estrutura de Arquivos do Projeto
Plaintext

calculadora_simples/
├── node_modules/
├── public/
├── src/
│   ├── components/
│   │   ├── FormCalculadora.css  # Estilos específicos do formulário
│   │   └── FormCalculadora.jsx  # Lógica e interface da calculadora
│   ├── App.css                  # Estilos globais do App
│   ├── App.jsx                  # Componente raiz
│   ├── main.jsx                 # Ponto de entrada do React no DOM
│   └── index.css
├── index.html                   # Estrutura HTML principal com a <div id="root">
├── package.json                 # Dependências e scripts do projeto
└── vite.config.js               # Configuração do Vite