# Ciclo Formativo PretaLab | ReactJS  - Aula 5 - 17/08 🚀 

✓ React Hooks (useState e useEffect)  

# ❤️ React hooks

Em 2018, os hooks chegaram como uma solução para que não precisassemos escrever componentes usando classes.
Nós temos hooks internos, que são algumas funções prontas que podemos usar em nossos projetos de react. E temos também a possibilidade de criar nossos próprios hooks costumizados.

Quando você se deparar por aí com alguma função dentro do react escrita assim, esses são os hooks: useState, useEffect, useMemo, useCallback entre outros.

Hoje, vamos aprender useState e useEffect. Já tô ansiosa para as coisas incríveis que vamos construir juntas.

## State - useState

Lembra o exemplo do perfil do instagram na aula anterior? Eu disse que uma das soluções para se fazer isso é usando props. 

Um complemento seria usando state, que é o super poder passado para o componente para que ele possa lidar com dados e atualizar a tela toda vez que um evento acontecer (com uma pessoa usuária interagindo ou alguma configuração que a gente tenha criado).

Vamos aprender praticando:

1) Antes de tudo você precisa importar de dentro do react o hook useState

```
import { useState } from 'react'
```

2) Dentro do seu componente antes do retorno você destrutura um array que recebe duas informações
 >> uma variável onde vamos guardar nosso valor inicial e suas futuras atualizações
 >> uma função que vai receber a lógica para atualizar a variável

```
const [contador, setContador] = useState(0)
```
> dentro do seu estado inicial podemos passar valores de qualquer tipo de dados em javacript, nesse caso aqui começamos com o número zero, mas poderia ser um array, um objeto, uma string entr outros.

3) Podemos declarar a lógica da nossa função que irá atualizar nossa variável

```
setContador(contador += 1)
```
4) Podemos dizer quando queremos que nossa função atualizadora seja chamada a partir de uma configuração ou de um evento
```
setInterval(
  setContador(contador += 1),
  1000
)
```
ou 

```
function handleClick() {
  setContador(contador += 1)
}
```
5) Usar nosso evento no html do componente

```
<button onClick= {handleClick}>click me</button>
```

6) Chamar o estado no html do
```
<p>{contador}</>
```

**Exemplos:**
| Recurso | Descrição |
| --- | --- |
| `Contador de clicks` |  Agora vamos treinar criar componentes, guardar memória no componente e atualizar na tela a quantidade de vezes que um botão está sendo clicado. |


## UseEffect - Consumindo API em React

O useEffect é o hook que nos possibilita gerar efeitos colaterais na tela quando alguma variável modifica. Com um exemplo vai ficar bem melhor de entender. Vamos lá!

1) Antes de tudo você precisa importar de dentro do react o hook useEffect

```
import { useEffect } from 'react'
```

2) Dentro do seu componente antes do retorno chama a função useEffect que recebe dois parametros.
 >> uma arrow function que vai determinar a ação do efeito colateral
 >> um array que recebe as dependências, ou seja as variáveis que determinam quando essas mudanças devem acontecer

```
useEffect(() => {
  setLista()
}, [])
```
> quando esse array aparece vazio, significa que a interface irá receber os efeitos colaterais quando a tela for carregada

> geralmente utilizamos useEffect com useState

**Exemplos:**

| Recurso | Descrição |
| --- | --- |
| `API` |  Chegou o grande momento de consumir uma api externa e renderizar os dados na tela, vamos usar o useEffect e useState para isso. |




