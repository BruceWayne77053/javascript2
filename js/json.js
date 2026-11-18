let todos = [
    {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false
  },
  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false
  },
  {
    userId: 1,
    id: 3,
    title: "fugiat veniam minus",
    completed: false
  }

]


// for (let i = 0; i < todos.length; i++) {
//     //console.log(todos[i].title)
//     document.getElementById("mydiv").innerHTML += "<p class='bg-red-300 text-white m-6 px-4 py-2'>" + todos[i].title + "</p>";
// }




console.log("Start")
fetch("https://jsonplaceholder.typicode.com/posts")
.then(response => {return response.json()})
.then(data => {
    console.log(data);
    // for (let i = 0; i < data.length; i++) {
    // //console.log(todos[i].title)
    // document.getElementById("mydiv").innerHTML += "<p class='bg-red-300 text-white m-6 px-4 py-2'>" + data[i].title + "</p>";
    for (let i = 0; i < data.length; i++) {
        console.log(data[i].id, data[i].title)
}

}).catch(error => {
    console.log(error);
}
)
console.log("End")

