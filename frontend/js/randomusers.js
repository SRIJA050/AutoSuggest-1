function randomusers() {
    fetch("https://randomuser.me/api/")
        .then(function(res){
            return res.json();
        })
        .then(function(data){
            var user=data.results[0];
            var fullName=user.name.title + " " + user.name.first + " " + user.name.last;
             //image
            document.getElementById("user-img").src=user.picture.large;
            //name
            document.getElementById("user-Name").innerText=fullName;
            //gender
            document.getElementById("user-gender").innerText=user.gender;
        })
        .catch(function(err){
            console.log("Error: "+err);
        })


};
