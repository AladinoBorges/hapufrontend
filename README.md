## Objectivo
- Frontend (desktop e mobile).

### Contexto
O desafio é construir uma aplicação React de uma só página.

**Requisitos**
  - [x]  instruções para rodar a aplicação React em ambiente de desenvolvimento;
  - [x]  instruções para rodar a aplicação em ambiente de produção;
  - [x]  os logotipos devem usar o formato de arquivo .svg;
  - [ ]  implementar a versão mobile com css media queries.
  - [ ]  a seção Hero deve ter testes A/B persistentes para o usuário e que pode mostrar a versão de design ou:
    * Título: Create the childcare you need at a price you can afford
    * Descrição: Connect with other local families to share a nanny from as low as $10.00/hr each. Create your family profile today to get started.
  - [x]  a integração da newsletter deve ser feita pelo endpoint:
    - POST https://api.jungledevs.com/api/v1/challenge-newsletter/ e no corpo:
        `{
          "name": "NAME",
          "email": "EMAIL"
        }`
  - [x]  usar html semântico para bom seo e acessibilidade;
  - [x]  boas práticas para lidar com loading e erros.

## Ambiente de desenvolvimento

#### Frameworks e dependências npm
* **[REACT](https://reactjs.org/);**

#### Como rodar o projeto em ambiente de desenvolvimento:
* fazer um clone do repositorio para a sua máquina;
* instalar as dependências com **`npm install`**;
* mudar para a pasta do projeto **`cd <pasta do projeto>`**;
* dentro da pasta do projeto rodar o comando **`npm start`**;
* a aplicação rodará no endpoint padrão **`localhost:3000`**

#### Como criar builds de produção:
* O ficheiro **`package.json`** já está configurado com tudo o que é necessário para criar builds de produção. Caso queira saber como fazer o mesmo, este **[tutorial](https://www.freecodecamp.org/news/deploy-a-react-app-to-github-pages/)** ensina todas as etapas necessárias para configurar qualquer projeto React.
* para que a aplicação rode na sua github pages, basta mudar o endereço da homepage do ficheiro `package.json` para o da sua ('https://<seu_nome_de_usuário>.github.io/hapufrontend')
* Para criar a build de produção, basta rodar no terminal o seguinte comando:
**`npm run deploy`**
* Depois de concluido o processo pelo `npm`, basta ir para o endereço que você colocou como homepage e o projeto estará disponível para ser visto de qualquer parte do mundo pela internet.