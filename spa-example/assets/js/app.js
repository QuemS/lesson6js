
    const URL = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';

    const Model = {
        rate:[],
        searchText: '',
        sortDirection: null,

        async load(){
            let data = await fetch(URL);
                data = await data.json();
                this.rate = data;
                this.render();
        },//load()

        render(){
            let tableBody = document.querySelector('tbody');

            let output = [...this.rate]; 
            if (this.searchText) {
                output = output.filter( i => i.txt
                                                .toLowerCase()
                                                .includes(this.searchText))
            }

            if (this.sortDirection == 'up') {
                output.sort((a,b) => a.rate - b.rate);
            }
            if (this.sortDirection == 'down') {
                output.sort((a,b) => b.rate - a.rate);
            }

            tableBody.innerHTML = output.map(i => `
            <tr>
                <th>${i.cc}</th>
                <td>${i.txt}</td>
                <td>${i.rate} грн.</td>
                <td>${i.exchangedate}</td>
            </tr>
        `).join('')
        },//render()

        searth(stext){
            this.searchText = stext.toLowerCase().trim();
            this.render();
        },//searth()

        sort(dir){
            this.sortDirection = dir;
            this.render();
        } //loar()
    };
    /******************************************/
    let searchInput = document.getElementById('search');
    searchInput.addEventListener('input', function(){
        Model.searth(searchInput.value);
    });

     /******************************************/

     let sortUp = document.getElementById('sort-up');
     let sortDown = document.getElementById('sort-down');
     sortUp.addEventListener('click', function(){
        Model.sort('up');
    })

     sortDown.addEventListener('click', function(){
        Model.sort('down');
    });



    




    Model.load();
    
    