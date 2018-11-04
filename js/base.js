
	
	

	$(function() { 
    $('#langSelected').change(function() {
    	var selection = $( "#langSelected option:selected" ).val();
    	
    	if(selection === "english"){
    		alert("Hello");
    	}
    	else{
    		alert("Hola");
    	}
    	return false;
        
    }); // Trigger the event
});

	// if(selection === 'English'){
	// 	alert("hello");
	// }
