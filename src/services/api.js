/**
 * Todas as ferramentas de conexão com elementos externos
 * ao front-end devem ficar dentro da pasta SERVICES
 */

/**
 * Lembrar-se de configurar o CORS na api
 */

import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333'
})

export default api;