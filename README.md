![enter image description here](https://engineering.q42.nl/content/images/size/w2000/2019/09/2019-08-27---Laurens---Primephonics-Server-Driven-UI.png)

#  Orchestrator Server-driven UI

O Orchestrator é um lib que facilita a implementação do Server-driven UI web e mobile em projetos React, o mesmo foi criado com base na função principal do React o `React.createElement`, ele é responsável por criar os elementos em tela passando como parâmetro o elemento, propriedades e elementos filhos.


##  Server-Driven UI

A interface do usuário orientada a servidor (SDUI) é uma técnica emergente usada por empresas como Airbnb e Lyft que aproveitam o servidor para criar as interfaces de usuário de seus aplicativos móveis. Isso abre novas possibilidades e aborda alguns desafios fundamentais com o desenvolvimento de aplicativos móveis nativos.


##  Iniciando

O projeto consiste em um componente `<Orchestrator />`:

    <Orchestrator  response={layout}  components={OrchestratorConfig}  />

Nele recebemos os parâmetros:
**response**: que é a importação do arquivo layout.json, responsável pela estrutura do layout criado em JSON, como no exemplo **Estrutura de layout**.
**components**: que é a importação do arquivo orchestrator_config, responsável por importar uma Objeto com as declarações dos componentes que serão utilizados pelo servidor, como no exemplo **Declarações de componentes**.


##  Estrutura de layout

    
    {
    	"orchestrator:component": "orchestrator:**nome component**",
    	"props": {
	    	"**atributos**",
	    	"style"
    	},
    	"child" ou "children": {} ou []
    }

##  Estrutura de layout
    {
    	export const OrchestratorConfig  = {
			"orchestrator:**nome component**":  **component**,
		};
    }

##  Scripts

  


###  `yarn`

Para instalar dependencias.

###  `yarn dep:delete`

Para deletar node_modules do projeto.

###  `yarn start`

Para executar o projeto Vite de exemplo.
