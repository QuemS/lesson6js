
    let data = await fetch(URL);
    data = await data.json();

console.log(data);

let tableBody = document.querySelector('tbody');

tableBody.innerHTML = data.map(i => `
<tr>
    <th>${i.cc}</th>
    <td>${i.txt}</td>
    <td>${i.rate} грн.</td>
    <td>${i.exchangedate}</td>
</tr>
`).join('');

let searchInput = document.getElementById('search');
searchInput.addEventListener('input', function(){
let s = searchInput.value.trim();
let result = data.filter( i =>i.txt.toLowerCase().includes(s));
tableBody.innerHTML = result.map(i => `
<tr>
    <th>${i.cc}</th>
    <td>${i.txt}</td>
    <td>${i.rate} грн.</td>
    <td>${i.exchangedate}</td>
</tr>
`).join(''); 
});

