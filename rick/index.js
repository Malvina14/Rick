const container = document.createElement('div');
container.id = 'container';
document.body.appendChild(container);

function fetchData(){
    return new Promise((resolve, reject) =>{
        fetch('https://rickandmortyapi.com/api/character')
        .then(res => res.json())
        .then(data => {
            resolve(data.results)
        })
        .catch(err => {
            reject(err)
        })
    })
}

function characterCards(){
    fetchData()
    .then(data => {
        data.forEach((result) => { 
            const card = document.createElement('div');
            card.classList = 'card';
            const img = document.createElement('img');
            img.classList = 'cardImg'
            img.src = result.image;
            const info = document.createElement('div')
            info.classList = 'info'
            const h2 = document.createElement('h2');
            h2.textContent = result.name;
            const status = document.createElement('p');
            status.textContent = result.status;
            const species = document.createElement('p');
            species.textContent = result.species;
            const origin = document.createElement('p');
            origin.textContent = result.origin.name;
            const gender = document.createElement('p');
            gender.textContent = result.gender;

            card.appendChild(img);
            card.appendChild(info);
            info.appendChild(h2);
            info.appendChild(status);
            info.appendChild(species);
            info.appendChild(origin);
            info.appendChild(gender);

            // const container = document.getElementById('container');
            container.appendChild(card);
;

        })
    })
}

characterCards();
console.log(fetchData())