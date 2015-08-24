module.exports = function(RED){

  //CREDENTIALS
  function TrelloNode(n) {
        RED.nodes.createNode(this,n);
        this.user_me = n.user_me;
    }
    RED.nodes.registerType("trello-credentials",TrelloNode,{
        credentials: {
            user_me: {type:"text"},
            access_token: {type: "password"},
            access_token_secret: {type:"password"}
        }
    });

  //CREATE CARD
  function CreateCard(config){
    RED.nodes.createNode(this,config);
    var node = this;
    this.on('input', function(msg) {

    });

  }
  RED.nodes.registerType("create-card",CreateCard);

  //GET BOARDS
  function GetBoards(config){
    RED.nodes.createNode(this, config);

  }
  RED.nodes.registerType("get-boards", GetBoards);

}
