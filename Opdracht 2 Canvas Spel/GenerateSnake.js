function GenerateSnake(){

	var snake;

	this.initSnake = function initSnake(map, lengteSnake, posX, posY){
		// snake array definiëren, positie geven, en aan map toevoegen
		snake = new Array(lengteSnake);

		for (var i = 0; i < snake.length; i++) {
	        snake[i] = { x: posX, y: posY - i};
	        map[posX][posY-i] = 2;

	        console.log(snake[i]);
	    }
	 
	    return map;
	}

	this.getSnake = function getSnake(){
		return snake;
	}	
}