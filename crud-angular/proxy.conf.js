const PROXY_CONFIG = [
    {
        context: ['/api'], //Sempre que eu fizer um /api, o angular vai redirecionar para o localhost:8080
        target: 'http://localhost:8080/',
        secure: false, // Não é seguro, pois não temos um certificado SSL
        logLevel: 'debug',
    }
];

module.exports = PROXY_CONFIG