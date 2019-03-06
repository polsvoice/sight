exports.returnGameMap = function(){
    function Room(desc){
        this.desc = desc;
    }
    let gameMap = [];
    gameMap.push(new Room("A small, well-lit room."));
    return gameMap;
};
