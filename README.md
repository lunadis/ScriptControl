# ScriptControl

Script Control é uma aplicação com um propósito de isolar e facilitar o controle de numeração de scripts em um cenário de aplicação legado que use scripts .sql para alterações no banco de dados.


## Problema Origem 
O problema que deu origem a ideia é muito especifico do legado da empresa NextSoft Tecnologia, o Gin5.
Nesse projeto o banco de dados é atualizado através de uma rotina inicial que lê e executa arquivos .sql. O que ocorre é que esses scripts tem uma numeração sequencial, sendo assim demanda a necessidade do time sempre se comunicar sobre qual a ultima numeração utilizada. E nesse ponto está a falha, por muitas vezes esquecemos de manter essa comunicação ativa, e os scripts se sobrepõe no versionamento. Poderíamos melhorar esse ponto humano ou isolar a falha com tecnologia. Esse projeto é a segunda alternativa.

# Processo
A requisição de scritps deve ser simples, com uma interface em que você escolha o projeto qual ele pertencera e a branch que vai ser incluído, e ele te retorne o numero e a versão do script

Para visualizar [Instale esta extensão](https://chrome.google.com/webstore/detail/github-+-mermaid/goiiopgdnkogdbjmncgedmgpoajilohe)

```mermaid
sequenceDiagram
Usuario-->>+WEB: Request new script {project, branch}
WEB->>+API: reqscript(): script
API->>+DB: {project,user,branch,script} 
DB-->-API: {script} 
API-->>-WEB: [script:{number, name}]
WEB-->>-Usuario: 
```
# Tecnologias

 - React
 - Node
 - MongoDB
 - Typescript