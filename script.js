document.addEventListener('DOMContentLoaded', function(event) {
    event.preventDefault()

    let url
 let urlPath;
document.querySelector('#form1').addEventListener('submit', function(e) {
    e.preventDefault()

    const userName = document.querySelector('#text1').value

    const formData = new FormData()
    formData.append('username',userName)

    url = 'https://api.genderize.io/'
    urlPath= `${url}?name=${userName}`

    fetch(urlPath, {
        method : 'POST',
        Body : formData
    })
    .then(res =>res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))

    document.querySelector('#name').innerHTML = urlPath.name
    document.querySelector('#gender1').innerHTML = urlPath.gender
    document.querySelector('#prob').innerHTML = urlPath.probability
    document.querySelector('#count').innerHTML = urlPath.count
} )

document.querySelector('#form3').addEventListener('change', function(e){
    e.preventDefault()

    url = "https://datausa.io/api/data?drilldowns=Nation&measures=Population"
    fetch(url, {
        method: 'POST',

    })
    .then(res => res.json())
    .then(data=>console.log(data))
    .catch(error => console.log(error))

    const formData = new FormData()
    formData.append('username',userName)

    if(e.target.value ===url.data[0].Year){
        document.querySelector('#nation').innerHTML = url.data['0'].Nation
        document.querySelector('#year').innerHTML = url.data[0].Year
        document.querySelector('#pop').innerHTML = url.data[0].Population
    }
    console.log(e)
})


})
 