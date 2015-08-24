module.exports = function(RED){

  //CREDENTIALS
  function TrelloNode(n) {
        RED.nodes.createNode(this,n);
        this.apikey = n.apikey;
        this.token = n.token
        this.warn("HERE");
        console.log("TrelloNODE");
    }
    RED.nodes.registerType("trello-credentials",TrelloNode,{
        credentials: {
            token: {type: "password"},
            apikey: {type:"password"}
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

    var node = this;
    this.on('input', function(msg) {
      
    });

  }
  RED.nodes.registerType("get-boards", GetBoards);

}
