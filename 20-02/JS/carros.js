const cars = [
    {
        brand:"Toyota",
        model:"Supra MK4",
        year: 1993
    },
    {
        brand:"Honda",
        model:"NSX",
        year: 1991
    },
    {
        brand:"Subaru",
        model:"WRX",
        year: 2007
    },
    {
        brand:"Mitsubishi",
        model:"Lancer EVO",
        year: 1992
    },
    {
        brand:"Dodge",
        model:"Dodge Hellcat",
        year: 2015
    },
];

// Cria uma função e chama essa função displayCards, aqui mesmo
function displayCards() {
    const cardList = document.querySelector("#card-list");
    
    cars.forEach((car) => {
        // Criamos um elemento div pelo JS
        const cardDiv = document.createElement("div");
        cardDiv.classList.add('car');

        // Criando o modelo
        const carModel = document.createElement("h2");
        carModel.textContent = `${car.brand} - ${car.model}`;

        // Criando o Ano
        const carYear = document.createElement("p");
        carYear.textContent = `Ano: ${car.year}`;

        // Imprimindo na tela as informações
        cardDiv.appendChild(carModel);
        cardDiv.appendChild(carYear);
        cardList.appendChild(cardDiv);

    })

}

// Chamar Função
displayCards();