function GetUsers(){
    var _url ='https://jsonplaceholder.typicode.com/users'
    fetch(_url)
      .then(response => response.json())
      .then(data => {
        var _users = document.getElementById('users');
        data.forEach(user=> {
            var _option = document.createElement('option');
            _option.innerHTML = user.name;
            _users.appendChild(_option);
        });
      })
}