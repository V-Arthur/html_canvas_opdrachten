function Area(){

	this.initArea = function initArea(context, canvas, score, level){
		// Gebied tekenen, een beetje ruimte vrij houden voor tekst
		context.lineWidth = 2;
		context.strokeStyle = 'black';
		context.strokeRect(2, 20, canvas.width - 4, canvas.height - 24);
		
		context.font = '12px sans-serif';
		context.fillText('Score: ' + score + ' - Level: ' + level, 2, 12);
	}

	this.gameOver = function gameOver(context, canvas, score){
	    // Canvas schoon maken
        context.clearRect(0, 0, canvas.width, canvas.height);

        // Game over tekst genereren
        context.fillStyle = 'black';
        context.font = '16px sans-serif';
        
        context.fillText('Game Over!', ((canvas.width / 2) - (context.measureText('Game Over!').width / 2)), 50);

        context.font = '12px sans-serif';

        context.fillText('Your Score Was: ' + score, ((canvas.width / 2) - (context.measureText('Your Score Was: ' + score).width / 2)), 70);
	}
}