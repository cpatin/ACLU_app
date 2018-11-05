
  
  window.onload = function(){
  var incidentDataButton = document.getElementById('incidentSubmit');
 

  incidentDataButton.addEventListener('click', store);

}
  //const retieveButton = document.getElementById('retrieve-btn');
 // retieveButton.addEventListener('click', getIncident);
  
  function store(event){
      event.preventDefault();
    console.log("here");
    const formData = new FormData(document.getElementById('incidentData'));
    
    var jsonObject = {};
    formData.forEach(function(value, key){
      jsonObject[key] = value;
    });
    localStorage.setItem("incident",  JSON.stringify(jsonObject));
     }
  /*
     function getIncident(){
      console.log("Getting incident");
       var savedIncident = localStorage.getItem("incident");
       console.log(savedIncident);
     }*/
  