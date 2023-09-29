function Waarden(){
//Arthur Vartanian	Art&Tech
	
	// klasse om waarden in de lijst te valideren, verwijderen, en array terug geven
	var waardenLijst = new Array();

	this.valideren = function valideren(waarde){
		if(waarde != ""){
			if(isNaN(waarde)){
				alert("Voer een getal waarde in!");
				return false;
			}
			else{
				waardenLijst.push(waarde);
				return true;
				
			}
		}
	}

	this.verwijderen = function verwijderen(index){
		waardenLijst.splice(index, 1);
	}

	this.getArray = function getArray(){
		if(typeof waardenLijst != 'undefined' && waardenLijst.length > 0){
			return waardenLijst;
		}
	}
}