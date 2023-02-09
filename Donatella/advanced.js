let mydata = JSON.parse(books);
console.log(mydata);
for (let i = 0; i < mydata.length; i++) {
    let color = "gray";
    if (mydata[i].read == "true") {
        color = "green";
    }
    document.getElementById('book').innerHTML += ` <br> <b>BookId</b>: ${mydata[i].uniqueId}  <br> <b>Title</b>: ${mydata[i].title} <br> <b>Author</b>: ${mydata[i].author} <br> <b>Price</b>: ${mydata[i].price} <div style="background: ${color}"> ${mydata[i].read} </div> <img src="${mydata[i].image}" <br> <hr>`;
}