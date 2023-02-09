const mydata = JSON.parse(employees);
console.log(mydata)
for (let i = 0; i < mydata.length; i++) {
    document.getElementById('tbody').innerHTML +=
        `<tr>
        <th scope="row">${i+1}</th>
        <td>${mydata[i].UniqueID}</td>
        <td>${mydata[i].FirstName}</td>
        <td>${mydata[i].LastName}</td>
        <td>${mydata[i].email}</td>
        <td>${mydata[i].jobTitle}</td>
        <td>${mydata[i].Salary}</td>
       
    </tr>`
}