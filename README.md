Starthub - Sistema de Gerenciamento de Startups
Este é o material que produzi para o processo seletivo LAPES 2024, onde me candidatei para a posição de desenvolvedor back-end. Criei uma API robusta conectada a um banco de dados, que alimentei com os dados fornecidos. Este sistema, que nomeei 'Starthub', funciona como uma plataforma de gerenciamento de startups, oferecendo uma interface eficiente e intuitiva para a administração de empresas emergentes.

Funcionalidades da API
A API foi desenvolvida para fornecer um conjunto completo de funcionalidades que permitem o gerenciamento eficiente de startups. Abaixo estão as principais funcionalidades implementadas:

1. Gerenciamento de Sessões
Login/Registro de Usuário:
Rota: POST /sessions
Descrição: Permite que um usuário faça login no sistema utilizando email e senha. Caso o usuário não exista, ele é registrado automaticamente. O retorno é o objeto do usuário, incluindo seu ID.
2. Gerenciamento de Startups
Criação de Startups:
Rota: POST /startups
Descrição: Permite que o usuário logado registre uma nova startup no sistema. Cada startup é associada ao usuário que a criou, identificada pelo user_id.
Edição de Startups:
Rota: PUT /startups/:startup_id
Descrição: Permite que o usuário edite os detalhes de uma startup existente, desde que ele seja o criador da mesma. A verificação é feita comparando o user_id do usuário logado com o user da startup.
Exclusão de Startups:
Rota: DELETE /startups
Descrição: Permite que o usuário exclua uma startup do sistema. Assim como na edição, o usuário precisa ser o criador da startup para poder excluí-la.
3. Dashboard de Startups
Visualização de Startups:
Rota: GET /dashboard
Descrição: Retorna uma lista de todas as startups armazenadas no sistema, independentemente do usuário que as criou. Esta funcionalidade permite que os usuários visualizem todas as startups cadastradas, proporcionando uma visão ampla do ecossistema de startups.
4. Modelos de Dados
Modelo de Usuário:

Campos: email, senha
Descrição: Representa os usuários registrados no sistema. Cada usuário é identificado pelo seu ObjectId gerado pelo MongoDB.
Modelo de Startup:

Campos: name, city, state_code, category_code, founded_at, status, user
Descrição: Representa uma startup no sistema. O campo user associa cada startup ao usuário que a criou, garantindo que apenas o criador possa editar ou excluir a startup.
5. Conectividade
Banco de Dados:
Descrição: A API está conectada a um banco de dados MongoDB, que armazena todas as informações de usuários e startups. A conexão é estabelecida no momento da inicialização do servidor utilizando a biblioteca mongoose.
6. Estrutura de Rotas
SessionController: Gerencia a autenticação de usuários.
StartupController: Gerencia as operações CRUD (Create, Read, Update, Delete) para as startups.
DashboardController: Facilita a visualização das startups associadas ao usuário logado.
