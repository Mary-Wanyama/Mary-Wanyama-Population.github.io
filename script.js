document.addEventListener('DOMContentLoaded', function(event) {
    event.preventDefault()
    console.log('the page has finished loading')

    let url
    let urlPath;
    let age
document.querySelector('#form2').addEventListener('submit', function(e) {
    e.preventDefault()

    document.querySelector('#hello').id = 'division'
    document.querySelector('#division').id = 'hello'
    document.querySelector('#data').class = 'show'

    const userName = document.querySelector('#text2').value

    url = 'https://api.genderize.io/'
    urlPath= url + `?name=${userName}`
    fetch(urlPath)
    .then(res => res.json())
    .then(data=>{
      document.querySelector('#name').innerHTML = data.name
      document.querySelector('#gender1').innerHTML =`${data.name} is a ${data.gender} name that is common among ${age} year olds. The research was done for ${data.count} of people and the accuracy of the information is ${data.probability}` 
    })

} )
document.querySelector('#form2').addEventListener('submit', function(e) {
  e.preventDefault()
  url = 'https://api.agify.io/'

  const userName = document.querySelector('#text2').value
  urlPath= url + `?name=${userName}`

  fetch(urlPath)
  .then(res=> res.json())
  .then(data=> {
    age = data.age
  })
  .catch(error => console.log(error))


  console.log(e.target)
  e.reset()
})
document.querySelector('#form3').addEventListener('change', function(e) {
  e.preventDefault()
  document.querySelector('#hello').id = 'division'
  document.querySelector('#division').id = 'hello'
  document.querySelector('#gender').class = 'show'
  const updatedChange = document.querySelector('#form3').value
  url = "https://datausa.io/api/data?drilldowns=Nation&measures=Population&year="
  urlPath = url + updatedChange
  
  fetch(urlPath)
  .then(res=> res.json())
  .then(data =>{
    document.querySelector('#year').innerHTML = data.data[0].Year
    document.querySelector('#pop').innerHTML =`The population of ${data.data[0].Nation} in the year ${data.data[0].Year} is ${data.data[0].Population} `
  })
  .catch(error=> console.log(error))
})
document.querySelector('#button').addEventListener('click', function(e) {
  e.preventDefault()
  document.querySelector('.display').id = 'division'
  document.querySelector('.form').id = 'hello'
})

})