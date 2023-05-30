/* Chamando a view e passando as configurações no parametro vindo do serve.js */

module.exports = function(application){

    application.post('/chat', function(req, res){
        application.app.controllers.chat.iniciaChat(application, req, res);
    });

    application.get('/chat', function(req, res){
        application.app.controllers.chat.iniciaChat(application, req, res);
    });

}