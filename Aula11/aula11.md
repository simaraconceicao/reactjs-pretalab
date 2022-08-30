# Ciclo Formativo PretaLab | ReactJS  - Aula 11 - 31/08 🚀 

✓ Introdução aos testes unitários - parte 2

# Configurando ambiente

## Vamos continuar usando o vite para criar nosso projeto, não esqueça de escolher react as duas vezes que aparecem para escolher a linguagem:

```
npm create vite@latest aprendendo-testes
```

Vamos entrar no projeto:

```
cd aprendendo-testes
```

 Vamos baixar as dependências importante para o projeto reactjs funcionar:

  ```
  npm install
  ```

  ## Agora vamos configurar nosso projeto para receber e rodar testes unitários com vitest e testing library react:

  `Passo 1`: Instalar as dependências como dependências de desenvolvimento

  ```
  npm install vitest -D
  ```

  ```
  npm install @vitest/ui @testing-library/jest-dom @testing-library/react @testing-library/react-hooks @testing-library/user-event jsdom -D --force
  ```

 `Passo 2`: Inserir os scripts no package.json

 ```
  "test": "vitest",
  "test:ui": "vitest --ui"
 ```

 `Passo 3`: Inserir a propriedade test no vite.config

 ```
test: {
  globals: true,
  setupFiles: 'src/setupTests.js',
}
 ```

`Passo 4`: Criar o setupTests.js

 ```  
import '@testing-library/jest-dom'
export { default as userEvent } from '@testing-library/user-event'
 ```

 ## Agora vamos criar nossos testes:

 `Passo 5`: Criar arquivo de testes

 ```
 App.test.jsx
 ```

`Passo 6`: Incluir a config do jsdom no arquivo de cada teste

 ```
 /**
* @vitest-environment jsdom
*/
 ```

 `Passo 7`: Importar palavras reservadas

 ```
  import { describe, test } from 'vitest'
  import { render, screen, waitFor } from '@testing-library/react'
  import userEvent from '@testing-library/user-event'
  import App  from './App'
 ```

`Passo 8`: Agora vamos escrever nosso primeiro teste:

```

 describe('App', () => {
  test('should return the correct text', () => {
    render(<App />)

    expect(screen.getByText('Vite + React')).toBeInTheDocument() 
  })

  test('should return 1 when the user click one time at button', () => {
    render(<App />)

    const buttonElement = screen.getByRole('button')
    expect(screen.queryByText('count is 0')).toBeInTheDocument() 

    userEvent.click(buttonElement)

    waitFor(() => expect(screen.queryByText('count is 1')).toBeInTheDocument() ) 
  })
})

 ```


  `Passo 9`: Agora vamos rodar nossos testes:

```

 npm run test

 ```

 ```

 npm run test:ui

 ```
 
## O Projeto e os casos de testes que iremos fazer:

 ![image](https://media.giphy.com/media/FEmdjuDY4R6WSrK2Bm/giphy.gif)

O mais legal é que vamos fazer com testes garantindo os cenários abaixo:

✅ Quando a tela carrega, o componente renderiza corretamente com todos os elementos?

✅ A imagem está acessível com o texto alternativo?

✅ O input funciona capturando o valor digitado?

✅ Após a usuária digitar o nome, o texto renderiza corretamente na tela?


