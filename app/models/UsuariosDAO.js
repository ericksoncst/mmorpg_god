function UsuariosDAO(connection){
	this._connection = connection();
}

UsuariosDAO.prototype.inserirUsuario = function(usuario){
						//open param callback
	this._connection.open(function(err, mongoclient){
					//collection param collection name,callback
		mongoclient.collection("usuarios", function(err, collection){
			collection.insert(usuario);
			mongoclient.close();
		});
	});
}

module.exports = function(){
	return UsuariosDAO;
}