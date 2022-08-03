# Ciclo Formativo PretaLab | ReactJS  - Aula 2 - 10/08 🚀 

✓	 Preparando o ambiente

✓  "Olá, Mundo!"

✓  Componentes e JSX

✓  Props e Children

------


## `Preparando o ambiente`

Criando e entendendo meu primeiro projeto reactjs, render, estrutura de pastas, apagando arquivos padrão)

Eu sou uma pessoa supersticiosa e me contaram que toda vez que a gente está aprendendo alguma tecnologia nova, dá sorte começar com um hello world! Então vamos nessa! rs

Para essas aulas, vamos usar o editor de códido, vs code. No meu computador eu tenho também o NodeJS instalado na versão LTS e também o gerenciador de pacotes npm.

Como saber se tenho o node instalado? Abra um terminal e digite o comando abaixo:

``node -v``

Seu retorno positivo será um número parecido com esse, que é a versão correspondente: v14.17.0

Se seu retorno não for do modo acima, é porque você ainda não tem, acesse o link abaixo para instalar.

Node: https://nodejs.org/en/

Depois de instalar, rode o comando novamente e tenha certeza que instalou direitinho.

<br>
<br>

## `Olá, Mundo!`

### Criando seu primeiro projeto React com vite 

O que é e como usar vite:

`- Acesse a documentação oficial`: [Vite](https://vitejs.dev/guide/)    

`- Acesse um fio que fiz no twitter`: [Twitter da profa](https://twitter.com/SimaraConceicao/status/1529800875144781825?s=20&t=2KZjH-NL3eMEORI166W79w)  

`- Acesse um reels que fiz no instagram`: [Insta da profa](https://www.instagram.com/reel/CeBTbEoDUTM/)  

`- Siga o passo a passo aqui embaixo`
1) Lembra que eu falei que react é uma biblioteca e que a gente pode acessar e usar? Vamos fazer isso, no terminal rode o comando abaixo. Ele vai criar uma pasta contendo algumas outras pastas e arquivos dentro. Não se assuste! Demora um pouco até ficar pronto, rs.
      
``npm create vite@latest nome-do-app --template react``

Terminou e deu tudo certo, quando aparecer no terminal: ``Done. now run!``

2) Ainda no terminal, ele nos dá uma sugestão de entrar na pasta de nosso projeto ``cd nome-do-app``

Baixar as dependências com ``npm install``

Depois rodar com ``npm run dev``

Vamos fazer isso! 

3) Ele irá abrir um navegador sozinho usando a porta localhost:3000 e é lá que você consegue ter uma prévia de como sua página está ficando.

4) Perceba que ele rodou uma págima pronta! A gente só precisou rodar alguns pequenos comandos no terminal, certo? 

Vamos trocar esse conteúdo pelo nosso hello world. 

Vá até src > App.jsx 

 - Apague a div e tudo que está dentro dela e escreva no lugar <h1>Hello, World!</h1> 
 - Salve e volte para o navegador! 
 - Uhullllll, agora vamos começar com tudooo a entender todas essas pastas, arquivos e como estamos escrevendo num arquivo javascript/JSX e fazendo aparecer no html. <3

5) Entenda as pastas e arquivos
> node_modules

> index.html

> .gitignore

> package.json

> package-lock.json

> vite.config.js

> src
  >> app.jsx
  >> main.jsx
  >> outros arquivos que não nos interessam agora


<br>
<br>

## `Componentes e JSX`

Em react tudo é componente!
Pequenas partes onde podemos encapsular/guardar códigos e reutilizar sempre que necessário.

Se liga aqui no Instagram. Deve existir lá no código deles um componente chamado perfil. Olha como todos são exatamente iguais. 
tem o nome, a imagem, a quantidade de seguidores, seguindo, publicações, a Bio. Só o conteúdo muda de uma usuária pra outra, certo?

Se alguma funcionalidade muda, então fica muito mais fácil fazer uma manutenção, você sabe exatamente onde o código vai estar. Basta ir no componente e mudar onde a lógica está encapsulada.

Vamos aprender a criar um componente react.

Existem duas formas de criar componentes: classes e funcões.

Aqui, vamos focar somente em funções, pois em 2018 o time que criou o react introduziu uma forma de 
resolver problemas onde antes somente componentes com classes poderiam fazer. 

Eu chamo isso de React moderninho! haha
Você vai curtir, mas na próxima aula!

Um componente é justamente uma função que retorna um HTML. e quando temos javascript misturado com html chamamos de jsx. 

Vamos à prática:
Crio um arquivo com extensão jsx ou js iniciando o nome com letra maiuscula.

Dentro do arquivo crio e exporto uma função. Que poderei importar e usar em qualquer outro componente no meu projeto.

```
function SayHello() {
  return(
    <h1>Hello</h1>
  )
}

export default SayHello
```

```
function Title() {
  return(
    <h1>Eu sou um título lindão</h1>
  )
}

export default Title
```
<br>
<br>

## `Props e Children`

Lembra do componente de perfil que a gente tá supondo que o instagram deve ter?
Como será que eles fazem pra mudar os conteúdos sempre que identificam que estamos mudando de perfil ao acessar?

Uma das soluções para fazer isso seria usando as props, ou propriedades.
Vamos à prática.
Temos o componente Title que para cada página esse título irá mudar. A gente não precisa criar um h1 toda vez e criar todo estilo novamente. Vamos encapsular em um componente e permitir que por props ele receba conteúdos diferentes para o mesmo componente.

```
function Title(props) {
  return(
    <h1>{props.text}</h1>
  )
}

export default Title
```
Ao usar esse componente, por exemplo no App.js ficaria dessa forma:

```
import Title from "caminho para o arquivo Title"

function App() {
  return(
    <div>
      <Title text="Home"/>
    </div>
  )
}
```

Dentro das props também existem o children e basicamnete em vez de usar dentro de atributos em tags de autofechamento usaríamos como conteúdo em componentes de fechamento e de abertura. Assim:

```
function Name(props) {
  return(
    <p>{props.children}</p>
  )
}

export default Name
```
Ao usar esse componente, por exemplo no App.js ficaria dessa forma:

```
import Title from "caminho para o arquivo Name"

function App() {
  return(
    <div>
      <Name>Simara Conceição</Name>
    </div>
  )
}
```
     
<br>
<br>