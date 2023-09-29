function LijnDiagram(){
//Arthur Vartanian	Art&Tech
	this.drawLijnGraph = function drawLijnkGraph(context, waarden){
		
		var maxValue = Math.max.apply(null, waarden);
		var maxBolHoogte = 350;
		var indexValue, indexHoogte;
		var posX = 140;
		var posY;
		var xAs = 450;

		var puntY, vorigePuntY;

		for(var i = 0; i < waarden.length; i++){
			// waarde van de index
			indexValue = waarden[i];
			// hoeveel % van max hoogte is de hoogte
			indexHoogte = (maxBolHoogte / maxValue) * indexValue;

			posY = xAs - indexHoogte;

			// punt tekenen
			context.beginPath();
			context.fillStyle = "#ff0000";
			context.arc(posX, posY, 10, 0, 2*Math.PI);
			context.fill();

			// punten verbinden met lijnen
			if(i == 0){
				puntY = posY;
			}
			else if(i > 0){
				vorigePuntY = puntY;
				puntY = posY;

				context.beginPath();
				context.strokeStyle="#ff0000";
				context.moveTo(posX, puntY);
				context.lineTo(posX - 60, vorigePuntY);
				context.stroke();
			}

			// afstand van elkaar
			posX += 60;

		}

	}
}