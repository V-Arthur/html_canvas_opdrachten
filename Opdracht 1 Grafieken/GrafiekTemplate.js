function GrafiekTemplate(){
//Arthur Vartanian	Art&Tech
	this.drawTemplate = function drawTemplate(context, canvas){

		context.strokeStyle = "#101010";
		context.strokeRect(0, 0, canvas.width, canvas.height);

		var hoogte = 400;
		var breedte = 800;

		context.beginPath();
		context.moveTo(100, 50);
		context.lineTo(100, 50 + hoogte);
		context.lineTo(100 + breedte, 50 + hoogte);
		context.stroke();
	}
}