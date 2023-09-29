function StaafDiagram(){
//Arthur Vartanian	Art&Tech
	this.drawStaafGraph = function drawStaafGraph(context, waarden){
		
		var maxValue = Math.max.apply(null, waarden);
		var maxBalkBreedte = 650;
		var indexValue, indexBreedte;
		var posY = 60;
		var posX;
		var yAs = 100;

		for(var i = 0; i < waarden.length; i++){
			//tekenen van linksboven dan naar onder
			indexValue = waarden[i];
			indexBreedte = (maxBalkBreedte / maxValue) * indexValue;

			context.fillStyle = "#ff0000";
			context.fillRect(100, posY, indexBreedte, 20);
			context.stroke();

			posY += 30;

		}

	}
}