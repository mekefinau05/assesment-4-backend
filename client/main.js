const newCompliment = document.getElementById("createCompliment")
const form = document.querySelector('form')
const deleteButton = document.getElementById("deleteCompliment")
const deleteBtn = document.getElementById("deleteFortune")

document.getElementById("complimentButton").onclick = function () {
    axios.get("http://localhost:4000/api/compliment/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
}

document.getElementById("fortuneButton").onclick = function () {
  axios.get("http://localhost:4000/api/fortune/")
      .then(function (response) {
        const data = response.data;
        alert(data);
      });
}

document.getElementById('newLine').oninput = (event) => {
  console.log(event.target.value)
}


form.addEventListener("submit", (event) => {

  event.preventDefault()

  const formData = new FormData(event.target)

  axios.post("http://localhost:4000/api/createCompliment", {
    compliment: formData.get('compliment')
  })
  .then((res) => {
    for(let i = 0; i < res.data.length; i++){
      const complimentSpan = document.createElement('div');
      complimentSpan.innerText = res.data[i];
      complimentHolder.appendChild(complimentSpan);
    }
  })
  

})

function deleteCompliment () {
  axios.delete("http://localhost:4000/api/deleteCompliment") 
  .then(res => {
    for(let i=0; i<res.data.length; i++) {
      const complimentSpan = document.createElement('div')
      complimentSpan.innerText = res.data[i]
      complimentHolder.appendChild(complimentSpan)
    }
  })
   
}

function deleteFortune () {
  axios.delete("http://localhost:4000/api/deleteFortune")
  .then(res => {
    for(let i=0; i<res.data.length; i++) {
      const fortuneSpan = document.createElement('div')
      fortuneSpan.innerText = res.data[i]
      fortuneHolder.appendChild(fortuneSpan)
    }
  })
}


deleteButton.addEventListener('click', deleteCompliment)
deleteBtn.addEventListener('click', deleteFortune)
