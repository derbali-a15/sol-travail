var btnTrouver = document.getElementById('btnTrouver')
//ajouter un listener au bouton
btnTrouver.addEventListener('click', function(){
    let nomPays = document.getElementById('nomPays').value
    //console.log(nomPays)
    fetch('https://restcountries.com/v3.1/name/' + nomPays)
    .then(response => { return response.json()})
    .then(data => {  //data est un tableau d'objet en JSON
        console.log(data)
        document.getElementById('capital').innerHTML = data[0].capital[0]
        document.getElementById('population').innerHTML = data[0].population + ' habitants'
        document.getElementById('area').innerHTML = data[0].area + " km2"
        document.getElementById('flag').src = data[0].flags.png

    })
})