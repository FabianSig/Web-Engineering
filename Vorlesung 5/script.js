function getRepos(){

    document.getElementById("repos-list").innerHTML = "";
    
    fetch(`https://api.github.com/user/repos`, {
        headers: {
            'Authorization' : 'Bearer ' + document.getElementById("password").value
        }
    }
    ).then(res => {

        if(res.ok){
            document.getElementById("message").innerHTML = "Success!";
            return res;
        }
        else{
            throw("Unable to fetch data");
        }

    }
    ).then(res => res.json())
    .then(res => { 
        res.forEach(element => {
            var ul = document.getElementById("repos-list");
            var li = document.createElement("li");
            li.innerText = element.name;
            ul.appendChild(li);
        });
        
    }).catch(err => document.getElementById("message").innerHTML = "Error: " + err);


}