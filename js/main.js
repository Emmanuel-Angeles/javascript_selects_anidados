const estados = [{
        id: 0,
        name: "Aguascalientes",
        municipios: [{
                id: 0,
                name: "Aguascalientes"
            },
            {
                id: 1,
                name: "Asientos"
            },
            {
                id: 2,
                name: "Calvillo"
            },
            {
                id: 3,
                name: "Cosio"
            },
            {
                id: 4,
                name: "El Llano"
            },
            {
                id: 5,
                name: "Jesus Maria"
            },
            {
                id: 6,
                name: "Pabellon de Arteaga"
            }
        ]
    },
    {
        id: 1,
        name: "Baja California",
        municipios: [{
                id: 0,
                name: "Ensenada"
            },
            {
                id: 1,
                name: "Mexicali"
            },
            {
                id: 2,
                name: "Playas de Rosarito"
            },
            {
                id: 3,
                name: "Tecate"
            },
            {
                id: 4,
                name: "Tijuana"
            },
        ]
    },
    {
        id: 2,
        name: "Baja California Sur",
        municipios: [{
                id: 0,
                name: "Comondu"
            },
            {
                id: 1,
                name: "La Paz"
            },
            {
                id: 2,
                name: "Loreto"
            },
            {
                id: 3,
                name: "Los Cabos"
            },
            {
                id: 4,
                name: "Mulege"
            },
        ]
    }
]

let selectStates = document.getElementById("estados");
let selectMunicipality = document.getElementById("municipios")

const loadStates = () => {
    estados.forEach(item => {
        selectStates.innerHTML += `<option value="${item.id}">${item.name}</option>`
    })
}

loadStates();


const loadMunicipality = (idState) => {
    let options = `<option value="">Elige un municipio</option>`

    estados[idState].municipios.forEach(item => {
        options += `<option value="${item.id}">${item.name}</option>`
    })
    selectMunicipality.innerHTML = options
}

selectStates.addEventListener("change", function(e) {
    if (!e.target.value) {
        selectMunicipality.innerHTML = `<option value="">Elige un municipio</option>`
    } else {
        loadMunicipality(e.target.value)
    }
})

selectMunicipality.addEventListener("change", function(e) {
    let optionSelected = this.options[selectMunicipality.selectedIndex];
    alert(optionSelected.text)
})