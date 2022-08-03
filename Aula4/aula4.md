# Ciclo Formativo PretaLab | ReactJS  - Aula 4 - 15/08 🚀 

✓	 Estados e eventos  

✓  Listas e chaves   

## 🧠 Visão geral: O que é estado?  

Estado é o super poder que vai renderizar quase que em tempo real, o componente com as informações atualizadas de acordo com a interação da pessoa usuária ou regras que criamos no componente.

Diferente das props, a gente não repassa o estado pra o componente  quando vai utilizá-lo, mas a gente cria o estado dentro do próprio componente usando variaveis que terão seus valores atualizados. 

É importante também saber que o estado não muda, ou seja, ele nunca vai ser alterado, mas vai ser sobreposto a partir do seu estado atual.

Vamos entender melhor, já já, quando formos aprender hooks.

`Acesse a documentação oficial`: [ReactJS](https://pt-br.reactjs.org/)          

<br>

# 😎 Eventos no react

Agora, sabe os eventos de interação das usuárias que a gente usa no javascript? Com react também podemos usar. :) 
Vamos aprender como usar o onChange(para capturar input) e o onClick(para capturar título). 

Mas por quê a gente não vai ver tudo de evento?
 
São muitas possibilidades e não teríamos tempo suficiente. Mas essa aula aqui é uma introdução para que você saiba que tudo isso existe e que você pode e deve continuar estudando. 

Belezinha? <3

## Mão no código:

| Recurso | Descrição |
| --- | --- |
| `onClick` | Mostrando no console o evento de click funcionando! |

| Recurso | Descrição |
| --- | --- |
| `OnChange` | Mostrando no console o valor digitado num formulário!! |

# Listas e Chaves

Mapeando dados no React.

Talvez você esteja se sentindo um pouco confusa e se perguntando quando finalmente vai criar um projetinho inteiro e que faça sentido. Calma!

Dando spoiler, nossa última aula será para a criação de um projeto lindão, mas até lá estou te preparando pra entender os principais conceitos de react que iremos usar.

Agora chegou a vez de entendermos como lidar com listas no React. Imagina que internamente tenhamos um array de objetos de filmes assim:

```
const filmes = [
    {
        id: 1,
        nome: "The Social Dilemma",
        genero: "documentário",
        capa: "https://static.wixstatic.com/media/00d1a3_e8a01dfe8cf0489d8ed6001d1ab6286f~mv2.jpeg/v1/fill/w_1000,h_1500,al_c,q_90,usm_0.66_1.00_0.01/00d1a3_e8a01dfe8cf0489d8ed6001d1ab6286f~mv2.jpeg"

    },
    {
        id: 2,
        nome: "Us",
        genero: "terror",
        capa: "https://upload.wikimedia.org/wikipedia/en/0/00/Us_%282019%29_theatrical_poster.png"

    },
    {
        id: 3,
        nome: "Bubble Boy",
        genero: "comédia romântica",
        capa: "https://images-na.ssl-images-amazon.com/images/I/51hCG-ULh5L._AC_SY445_.jpg"

    },
    {
        id: 4,
        nome: "Get Out",
        genero: "terror",
        capa: "https://miro.medium.com/max/675/0*afTCZX9mMynUvqi2.jpg"

    }

]

export default filmes
```
Qual seria a melhor forma de pegar esses dados e passar para nosso componente Lista que irá aparecer na nossa tela tipo na netflix, rs. Bem tipo mesmo! haha

```
import filmes from '../Services/dados'

const Lista = () =>{
    return(
        <div>
            {filmes.map(filme => 
                <div>
                    <h1 key={filme.id}>
                        {filme.nome}
                    </h1>
                    <p>
                        {filme.genero}
                    </p>
                    <img alt={filme.nome} src={filme.capa}/>
                </div>
            )
                
            }
        </div>
    )
}

export default Lista
```
## Mão no código:

| Recurso | Descrição |
| --- | --- |
| `Vamos consumir dados internos no react` | Vamos criar uma lista com uns 10 objetos , onde cada um possui quatro propriedades/valores e por fim vamos mapear esses objetos na nossa tela |

