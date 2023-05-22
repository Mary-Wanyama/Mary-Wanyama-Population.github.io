document.addEventListener('DOMContentLoaded', function(event) {
    event.preventDefault()
    console.log('the page has finished loading')

    let url
    let urlPath;
document.querySelector('#form2').addEventListener('submit', function(e) {
    e.preventDefault()


    const userName = document.querySelector('#text2').value

    url = 'https://api.genderize.io/'
    urlPath= url + `?name=${userName}`

    fetch(urlPath)
    .then(res => res.json())
    .then(data=>{
      document.querySelector('#name').innerHTML = 'Name: ' + data.name
      document.querySelector('#gender1').innerHTML = 'Gender: ' + data.gender
      document.querySelector('#prob').innerHTML ='Probability: ' + data.probability
      document.querySelector('#count').innerHTML = 'Count: ' + data.count
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
    document.querySelector('#age1').textContent = 'Age: ' + data.age
  })
  .catch(error => console.log(error))


  console.log(e.target)
  e.reset()
})
document.querySelector('#form3').addEventListener('change', function(e) {
  e.preventDefault()
  const updatedChange = document.querySelector('#form3').value
  url = "https://datausa.io/api/data?drilldowns=Nation&measures=Population&year="
  urlPath = url + updatedChange
  
  fetch(urlPath)
  .then(res=> res.json())
  .then(data =>{
    document.querySelector('#nation').innerHTML ='Nation: ' + data.data[0].Nation
    document.querySelector('#year').innerHTML = 'Year: ' + data.data[0].Year
    document.querySelector('#pop').innerHTML ='Population: ' +  data.data[0].Population
  })
  .catch(error=> console.log(error))
})

const form1 =document.querySelector('#form1')

form1.addEventListener('submit', function(params) {
  params.preventDefault()
  const lis = document.createElement('li')
  lis.textContent = document.querySelector('#text1').value
  lis.style.color = 'black'
  document.querySelector('#comments').appendChild(lis)
  params.reset()
})

})