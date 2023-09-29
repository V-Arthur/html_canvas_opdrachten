function KolomDiagram(){
//Arthur Vartanian	Art&Tech
	this.drawKolomGraph = function drawKolomGraph(context, waarden){
		
		var maxValue = Math.max.apply(null, waarden);
		var maxBalkHoogte = 350;
		var indexValue, indexHoogte;
		var posX = 120;
		var posY;
		var xAs = 450;

		for(var i = 0; i < waarden.length; i++){
			// tekenen van linksboven dan naar onder
			// waarde van index
			indexValue = waarden[i];
			// hoeveel % van de maximum hoogte is de index hoogte?
			indexHoogte = (maxBalkHoogte / maxValue) * indexValue;

			posY = xAs - indexHoogte;

			context.fillStyle = "#ff0000";
			context.fillRect(posX, posY, 40, indexHoogte);
			context.stroke();

			posX += 60;
		}
	}
}