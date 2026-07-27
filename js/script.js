fetch("content/home.json")
  .then(response => response.json())
  .then(data => {
    document.getElementById("title").textContent = data.title;
    document.getElementById("description").textContent = data.description;
    document.getElementById("button").textContent = data.button;
  })
  .catch(error => console.error(error));