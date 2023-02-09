const mydata = JSON.parse(books)
console.log(mydata)
for (let i = 0; i < mydata.length; i++) {
    document.getElementById('result').innerHTML += ` <br> <b>Title</b>: ${mydata[i].title} <br> <b>Author</b>: ${mydata[i].author} <br> <b>Status</b>: ${mydata[i].read} <br> <hr>`;
}