function updateCounter(){
    fetch("https://g1wsmd54l1.execute-api.us-east-1.amazonaws.com/Prod/")
      .then(response => response.text())
      .then((body) => {
        var obj = JSON.parse(body);
        document.getElementById("counter").innerHTML=obj.visitorCount
      })
      .catch(function(error) {
        console.log(error); 
      });  
    }  