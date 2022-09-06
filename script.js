
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


