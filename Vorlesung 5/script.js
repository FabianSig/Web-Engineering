var accesstoken = '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'

function getRepos(){

    console.log()
    
    fetch(`https://api.github.com/user/repos`, {
        headers: {
            'Authorization' : 'Bearer ' + document.getElementById("password").value
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
        
    });


}