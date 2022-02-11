


document.getElementById("complimentButton").onclick = function () {
    axios.get("http://localhost:4000/api/compliment/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
  };

  const addCompliment = ({data: newCompliment}) 
  const error = console.log(error)

  const createCompliment = body => axios.post(port, body).then(addCompliment).catch(error)
  

function submitCompliment(e) {
    e.preventDefault()

let newCompliment = document.querySelector('#createCompliment')

let bodyObj = {
      newCompliment: newCompliment.value
  }
  createCompliment(bodyObj)

  newCompliment.value = ''
}

// function createCompliment(addCompliment) {
//     const newCompliment = document.createElement('div')
//     newCompliment.classList.add('compliments')
// }
