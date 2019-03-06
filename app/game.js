exports.returnGameMap = function(){
    function Room(desc){
        this.desc = desc;
    }
    let gameMap = [[],[],[]];
    gameMap[0][0] = new Room("A small, well-lit room.");
    gameMap[0][1]= new Room("A sparse kitchen. There is a toaster here.");
    return gameMap;
};
