//on recupere l'id de l'employé à partir de l'URL
var id = window.location.hash.substring(1) //subtring enleve #
fetch('http://localhost:3000/employees/' + id)
    .then(response => { return response.json() })
    .then(data => { //data est un objet
        //alert(data.id + ' | ' + data.first_name + ' | ' + data.last_name + ' | ' + data.email + ' | ' + data.salary)
        document.getElementById('fname').value = data.first_name
        document.getElementById('lname').value = data.last_name
        document.getElementById('email').value = data.email
        document.getElementById('salary').value = data.salary
    })

var btnEditer = document.getElementById('btnEditer')
btnEditer.addEventListener('click', function(){
    let fname = document.getElementById('fname').value
    let lname = document.getElementById('lname').value
    let email = document.getElementById('email').value
    let salary = document.getElementById('salary').value

    let json = { "first_name": fname, "last_name": lname, "email": email, "salary": salary }
    fetch('http://localhost:3000/employees/' + id,
        { 
            method: 'PUT',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(json)
        })
        .then(response => { return response.json() })
        .then(data => {
            alert('Employé(e) numéro ' + data.id + ' mis(e) à jour')
        })
})

document.getElementById('btnRetourner').addEventListener('click', function(){
    window.location.href = 'index.html'
})