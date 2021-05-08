(function(){
	var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
	for (var i in names) {
		if(names[i].charAt(0)=="J"){
			byeSpeaker.Speak(names[i]);
  		} 
  		else {
    		helloSpeaker.Speak(names[i]);
  		}
	}
})();