# Ciclo Formativo PretaLab | ReactJS  - Aula 10 - 29/08 🚀 

✓ Introdução aos testes unitários - parte 1

# ❤️ O que são testes unitários?

Testes unitários são testes realizados de forma isolada para garantir qualidade para pequenas partes do seu código, como as funções, as classes e por aí vai.

## 3  benefícios de realizar testes unitários:

 - Encontrar e corrigir bugs, otimizando o tempo da pessoa QA
 - Aumentar a confiabilidade da sua aplicação
 - Servir como documentação

Aqui nessa aula a gente vai praticar como testar interface de pessoas usuárias com react testing library. 
Vamos aprender como fazer os testes unitários dos componentes numa aplicação bem simples em react. 


## Ferramentas:
Vamos usar o `vitest` como ambiente para rodar nossos testes. Esta é uma alternativa ao Jest(a ferramenta mais famosa de testes), para projetos criados com vite.  Se você não conhece o vitest, se liga no que sua própria documentação diz sobre ele:

`Vitest é uma estrutura de teste de unidade extremamente rápida, desenvolvida pela Vite.`

Já para criação do testes a gente vai  automatizar a forma como a pessoa usuária poderia interagir com a nossa tela. 

Pra isso vamos usar o `testing library react` que segundo a documentação é:

`Uma família completa de pacotes para criar testes utilizando boas praticas centradas no comportamento da pessoa usuária.`

## Entendendo um teste unitário

> Bloco de teste

- Renderizar o componente que queremos testar
- Encontrar os elementos que queremos interagir
- Interagir com esses elementos
- Afirmar o resultado esperado

> describe, test e expect

- describe serve para criarmos um conjunto de testes
- test serve para criar um caso de teste
- expect serve para descrever o que esperamos com resultado ideal para aquele teste

> screen, render, userEvent, queryBy.../findBy..., toBeInTheDocument/toHaveTextContent

- screen é o que nos permite visualizar a tela e a partir daí encontrar os nós do DOM
- render é o metodo que renderiza nosso componente no ambiente de testes
- userEvent simula alguns eventos e interações da pessoa usuária
- queryBy.../findBy... são as queries, alguns dos muitos metódos que nos ajudam a encontrar, buscar, trazer um ou mais elementos da tela
- toBeInTheDocument/toHaveTextContent são os matchers, alguns dos muitos metodos que nos ajudam a comparar o resultado esperado com o resultado recebido. Eles nos ajudam também com o log de mensagens de erro.

### 😎 Próximos passos para estudar

- TDD (Programação orientada a testes): https://www.youtube.com/watch?v=Z9RzEyNwICg
- Documentação do React Testing Library: https://testing-library.com/docs/
- Documentação do Vitest: https://vitest.dev/guide/#configuring-vitest
- Melhores práticas e pensamento crítico para criação de testes




