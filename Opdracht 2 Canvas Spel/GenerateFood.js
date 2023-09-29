function GenerateFood(){

	this.initFood = function initFood(map, mapWidth, mapHeight){
		// Random positie genereren
	    var posX = Math.round(Math.random() * mapWidth - 1);
	    var posY = Math.round(Math.random() * mapHeight - 1);
	 
	    // Positie van food mag niet gelijk zijn aan de positie van een deel van de snake
	    // 2 = snake
	    while (map[posX][posY] === 2) {
	        posX = Math.round(Math.random() * mapWidth - 1);
	        posY = Math.round(Math.random() * mapHeight - 1);
	    }
	 
	    map[posX][posY] = 1;
	    return map;

	    // 2 = als snake op een vak staat
	    // 1 = als food op een vak staat
	    // 0 = als vak leeg is
	}
}