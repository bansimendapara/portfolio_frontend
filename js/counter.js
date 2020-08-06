function updateCounter(){
    fetch("https://jubghcwtck.execute-api.us-east-1.amazonaws.com/default/Visitor_Count")
      .then(response => response.text())
      .then((body) => {
        var obj = JSON.parse(body);
        document.getElementById("counter").innerHTML=obj.visitorCount
      })
      .catch(function(error) {
        console.log(error); 
      });  
    }  
