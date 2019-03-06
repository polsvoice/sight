exports.returnGameMap = function(){
    function Room(desc){
        this.desc = desc;
    }
    let gameMap = [[],[],[]];
    gameMap[0].push(new Room("A small, well-lit room."));
    gameMap[0].push(new Room("A sparse kitchen. There is a toaster here."));
    return gameMap;
};
