# Ciclo Formativo PretaLab | ReactJS  - Aula 11 - 31/08 🚀 

✓ Introdução aos testes unitários - parte 2

# Configurando ambiente

Em vez de usar o vite, iremos uar o `npm create react-app`

O projeto iniciado com create-react-app que já traz tudo que é necessário para iniciar os testes de sua aplicação em react (setup, scripts e libs e framework)

- setup(jest-dom -> simula os nós do navegador), 

- scripts e libs (testing library e jest um framework que roda em node, entao ele apenas está fingindo que renderiza o componente, mas está rodando no node)

- arquivo(extensão test ou spec) 

- o jest localiza arquivos com essas extensoes e rodam os testes

- palavras reservadas (test, screen, getByText e expect)

## Criando meu primeiro teste

 ![image](https://media.giphy.com/media/KMyt74nbfFpnTEIgLU/giphy.gif)

O mais legal é que vamos fazer com testes garantindo os cenários abaixo:

✅ Quando a tela carrega, o componente renderiza corretamente com todos os elementos?

✅ A imagem está acessível com o texto alternativo?

✅ O input funciona capturando o valor digitado?

✅ Após a usuária digitar o nome, o texto renderiza corretamente na tela?


