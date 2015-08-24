module.exports = function(RED){

  


  function CreateCard(config){
    RED.nodes.createNode(this,config);
      var node = this;
      this.on('input', function(msg) {

    });

  }
  RED.nodes.registerType("create-card",CreateCard);


}
