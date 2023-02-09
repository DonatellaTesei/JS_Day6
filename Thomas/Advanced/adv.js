const mydata = JSON.parse(books)
console.log(mydata)
for (let i = 0; i < mydata.length; i++) {
    let color = "yellow";
    if (mydata[i].read == "true") {
        color = "green";
    }
    document.getElementById('result').innerHTML += ` <br> <b>Title</b>: ${mydata[i].title} <br> <b>Author</b>: ${mydata[i].author} <br> <b>Status</b>: ${mydata[i].read} <br> <div style="background: ${color}"> ${mydata[i].read} </div> <img src="${mydata[i].pic}" <br> <hr>`;
}