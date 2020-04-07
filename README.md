# Semantix

Criação de páginas para mostrar gráficos adquiridos atráves de chamadas APIs.

### O que você pode fazer

Abaixo como instalar e executar esse projeto:

### `Instalar`

Após baixar o projeto, digite 'yarn' para instalar todas as dependências necessárias.

### `Iniciar`

Após instalar, digite 'yarn start' para iniciar o projeto no localHost.

### `Projeto`

Este projeto utilizo Chartjs para criar 2 gráficos em duas páginas diferentes.
Utilizo o un plugin para o Chartjs, que é o chartjs plugin datalabels, para poder personalizar as labels dos gráficos.
Reactjs e Hooks para realziar o projeto, axios para as chamadas de api.
Foi usado css module para que nenhum arquivo css interfira no outro.

### `Responsividade`

O projeto é responsivo para os modelos de celulares mais populares e tablets.
Foram feitos dois menus para serem responsivos, um na própria nav e outro utilizando burguer menu.

## Pastas e Arquivos

### `Index`

Arquivo para realizar toda exportação dos componentes para o aquivo APP.

### `Api`

Dentro dessa pasta temos o arvquivo index que possue todas nossas chamadas de dados para as APIs.

### `Components`

#### `Graph`

Pasta aonde contem todos os gráficos do projeto e o css para editar o container desses gráficos.

#### `Page`

Nesta se encontram as arquivos das duas páginas que temos na projeto:
  ##### `Page1`
    Primeira página que contem os gráficos de pizza e de barras.
  ##### `Page2`
    Segunda página com o gráfico de linhas.

Temos o css dessas páginas com o container de todo o conteúdo da página.

#### `SideBar`

Aqui temos o arquivo para criação da sideBar e também o burguer menu, junto do seu css.
