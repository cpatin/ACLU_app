
  
  const postButton = document.getElementById('post-btn');
  postButton.addEventListener('click', store);
  
  const retieveButton = document.getElementById('retrieve-btn');
  retieveButton.addEventListener('click', getIncident);
  
  function store(){
    const formData = new FormData(document.getElementById('msg-form'));
    var jsonObject = {};
    formData.forEach(function(value, key){
      jsonObject[key] = value;
    });
    localStorage.setItem("incident",  JSON.stringify(jsonObject));
     }
  
     function getIncident(){
      console.log("Getting incident");
       var savedIncident = localStorage.getItem("incident");
       console.log(savedIncident);
     }
  