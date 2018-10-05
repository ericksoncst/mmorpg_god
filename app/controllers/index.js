module.exports.index = function(application, req, res){
	res.render('index',{validacao : {}});
	//json vazio da var validacao,para que o ejs entenda a pag index
}

module.exports.autenticar = function(application, req, res){
	
	var dadosForm = req.body;

	req.assert('usuario', 'Usuário não pode estar vazio!!').notEmpty();
	req.assert('senha', 'Senha não pode estar vazia!!').notEmpty();

	var erros = req.validationErrors();

	if (erros) {
		res.render('index', {validacao : erros});
		return;
	}

	var connection = application.config.dbConnection;
	var UsuariosDAO = new application.app.models.UsuariosDAO(connection);

	UsuariosDAO.autenticar(dadosForm, req, res);

	//res.send('tudo ok para criar sessão');
}