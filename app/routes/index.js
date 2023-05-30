/* Chamando a view e passando as configurações no parametro vindo do serve.js */
/* seguindo ate o caminho do controller para exportar a propriedade do home */

module.exports = function(application){

    application.get('/', function(req, res){
        application.app.controllers.index.home( application, req, res);
    });

}