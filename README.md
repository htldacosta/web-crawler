🪑 Monitor de Preço de Cadeira

Este é um script simples em Node.js projetado para monitorar o preço de um produto específico no Mercado Livre. Ele utiliza web scraping para extrair o valor atual do produto e exibi-lo no console.
✨ Funcionalidades

    Extração de Preço: Obtém o preço de uma URL de produto predefinida no Mercado Livre.

    Tratamento de Dados: Limpa o texto do preço para extrair apenas o valor numérico inteiro.

    Exibição no Console: Mostra o preço atual do produto de forma clara.

🛠️ Tecnologias Utilizadas

    Node.js: Ambiente de execução JavaScript.

    Axios: Cliente HTTP baseado em Promises para fazer requisições a sites.

    Cheerio: Biblioteca rápida, flexível e leve para implementar funcionalidades do jQuery no servidor, facilitando a manipulação de HTML.

🚀 Como Usar
Pré-requisitos

Certifique-se de ter o Node.js instalado em sua máquina. Você pode baixá-lo em nodejs.org.
Instalação

    Clone o repositório (ou salve o código em um arquivo .js, por exemplo, monitorar_preco.js).

    Instale as dependências do projeto usando npm ou yarn no terminal:

    npm install axios cheerio
    # ou
    yarn add axios cheerio

Execução

    Abra seu terminal na pasta onde o arquivo monitorar_preco.js está salvo.

    Execute o script com o seguinte comando:

    node monitorar_preco.js

    O console exibirá o preço atual da cadeira, como no exemplo:

    Texto capturado bruto: 1.169
    💺 Preço atual da cadeira: R$ 1169

⚠️ Observações Importantes

    Robustez do Scraper: O script depende da estrutura HTML do Mercado Livre. Se a estrutura da página for alterada (por exemplo, o seletorPreco), o script precisará ser atualizado para continuar funcionando corretamente.

    URL Fija: Atualmente, a URL do produto está fixada no código. Para monitorar outros produtos, você precisará alterar a variável url diretamente no arquivo.

🤝 Contribuição

Sinta-se à vontade para sugerir melhorias, como:

    Tornar a URL do produto configurável.

    Adicionar agendamento para monitoramento automático.

    Implementar notificações (por e-mail, por exemplo) quando o preço mudar.

    Melhorar o tratamento de erros e a resiliência do scraper.

📄 Licença

Este projeto está sob a licença MIT. Consulte o arquivo LICENSE para mais detalhes.
