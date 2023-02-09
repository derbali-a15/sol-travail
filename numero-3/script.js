//var btnTrouverEmployees = document.getElementById('btnTrouverEmployees')
//listener sur ce bouton
//btnTrouverEmployees.addEventListener('click', function(event){
fetch('http://localhost:3000/employees')
    .then(response => { return response.json() })
    .then(data => {
        //console.log(data)
        let tableContent = document.getElementById('tableContent')
        data.forEach(employee => {
            let line = document.createElement('tr')

            let col1 = document.createElement('td')
            col1.innerHTML = employee.id
            line.appendChild(col1)

            let col2 = document.createElement('td')
            col2.innerHTML = employee.first_name
            line.appendChild(col2)

            let col3 = document.createElement('td')
            col3.innerHTML = employee.last_name
            line.appendChild(col3)

            /*ACTIONS*/
            let colActionDetails = document.createElement('td')
            let btnDetails = document.createElement('button')
            btnDetails.innerHTML = "Détails"
            btnDetails.setAttribute('class', 'btn btn-secondary')
            btnDetails.setAttribute('onclick', 'voirDetails(' + employee.id + ')')
            colActionDetails.appendChild(btnDetails)
            line.appendChild(colActionDetails)

            let colActionDELETE = document.createElement('td')
            let btnDELETE = document.createElement('button')
            btnDELETE.innerHTML = "Supprimer"
            btnDELETE.setAttribute('class', 'btn btn-danger')
            btnDELETE.setAttribute('onclick', 'supprimer(' + employee.id + ')')
            colActionDELETE.appendChild(btnDELETE)
            line.appendChild(colActionDELETE)

            let colActionUPDATE = document.createElement('td')
            let btnUPDATE = document.createElement('button')
            btnUPDATE.innerHTML = "Éditer"
            btnUPDATE.setAttribute('class', 'btn btn-primary')
            btnUPDATE.setAttribute('onclick', 'editer(' + employee.id + ')')
            colActionUPDATE.appendChild(btnUPDATE)
            line.appendChild(colActionUPDATE)

            tableContent.appendChild(line)
        });
    })
//})

function voirDetails(id) {
    fetch('http://localhost:3000/employees/' + id)
        .then(response => { return response.json() })
        .then(data => { //data est un objet
            alert(data.id + ' | ' + data.first_name + ' | ' + data.last_name + ' | ' + data.email + ' | ' + data.salary)
        })
}

function supprimer(id) {
    if (confirm('Voulez-vous supprimer cet(te) employé(e) ?')) {
        fetch('http://localhost:3000/employees/' + id, { method: 'DELETE' })
            .then(response => { return response.json() })
            .then(data => {
                //alert('L\'employé(e) numéro ' + id + ' est supprimé(e)')
            })
    }

}


function editer(id){
    window.location.href = 'edit.html#' + id
}


var btnAjouter = document.getElementById('btnAjouter')
btnAjouter.addEventListener('click', function () {
    let fname = document.getElementById('fname').value
    let lname = document.getElementById('lname').value
    let email = document.getElementById('email').value
    let salary = document.getElementById('salary').value

    let json = { "first_name": fname, "last_name": lname, "email": email, "salary": salary }
    fetch('http://localhost:3000/employees',
        { 
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(json)
        })
        .then(response => { return response.json() })
        .then(data => {
            alert('Nouvel(lle) employé(e) numéro ' + data.id + ' ajouté(e)')
        })
})