# Weather API

## Descrição
O projeto Weather API é uma aplicação completa que fornece informações meteorológicas. Ele é dividido em duas partes principais:

- **Backend**: Implementado em Node.js e C#, fornece uma API para gerenciar e fornecer dados meteorológicos.
- **Frontend**: Uma interface simples em HTML, CSS e JavaScript para exibir as informações meteorológicas ao usuário.

## Estrutura do Projeto

Weather-API/
├── Weather-API.Backend/
│   ├── appsettings.json
│   ├── package.json
│   ├── Program.cs
│   ├── redisClient.js
│   ├── server.js
│   ├── Controllers/
│   │   └── WeatherController.cs
│   ├── Models/
│   │   └── WeatherModel.cs
│   ├── Services/
│       ├── IWeatherService.cs
│       ├── WeatherService.cs
│       └── weatherService.js
├── Weather-API.Frontend/
│   ├── index.html
│   ├── script.js
│   └── style.css

## Tecnologias Utilizadas

### Backend
- **Node.js**: Para o servidor principal.
- **C#**: Para a lógica de negócios e API REST.

### Frontend
- **HTML5**: Estrutura da interface.
- **CSS3**: Estilização da interface.
- **JavaScript**: Lógica de interação com o usuário e consumo da API.

---

## Configuração e Execução

### Pré-requisitos
- Node.js instalado
- .NET SDK instalado

### Passos para Configuração
1. Clone o repositório:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   ```

2. Configure as variáveis de ambiente no arquivo `.env` na pasta `Weather-API.Backend`.

3. Instale as dependências do backend:
   ```bash
   cd Weather-API.Backend
   npm install
   ```

4. Inicie o servidor backend:
   ```bash
   node server.js
   ```

5. Abra o arquivo `index.html` no navegador para acessar o frontend.

---
## Estrutura de Pastas

### Backend
- **Controllers**: Contém os controladores da API.
- **Models**: Define os modelos de dados.
- **Services**: Contém a lógica de negócios e serviços auxiliares.

### Frontend
- **index.html**: Página principal do frontend.
- **script.js**: Lógica de interação com o backend.
- **style.css**: Estilos da aplicação.

- - Projeto feito como projeto para o roadmap backend https://roadmap.sh/projects/weather-api-wrapper-service
- A de adicionar Redis
- <img width="2048" height="1059" alt="image" src="https://github.com/user-attachments/assets/0c97037d-7315-421e-a213-f35de1f72c31" />
