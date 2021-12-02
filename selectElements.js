const starterPokemon = [
    {
        name: "Bulbasaue",
        type: ["grass", "poision"],
        weakness: ["fire", "flying", "bug", "steel"],
        canEvolve: true,
        finalEvolution: false,
        evolutions: ["Ivysaur", "Venusaur"]
    },
    {
        name: "Ivysaur",
        type: ["grass", "poision"],
        weakness: ["fire", "flying", "bug", "steel"],
        canEvolve: true,
        finalEvolution: false,
        evolutions: [ "Venusaur"]
    },
    {
        name: "Venusaur",
        type: ["grass", "poision"],
        weakness: ["fire", "flying", "bug", "steel"],
        canEvolve: false,
        finalEvolution: true,
        evolutions: [ "Venusaur"]
    },
    {
        name: "Charmander",
        type: ["fire"],
        weakness: ["water", "ground", "rock"],
        canEvolve: true,
        finalEvolution: false,
        evolutions: [ "Charmeleon", "Charzard"]
    },
    {
        name: "Charmeleon",
        type: ["fire"],
        weakness: ["water", "ground", "rock"],
        canEvolve: true,
        finalEvolution: false,
        evolutions: [ "Charzard"]
    },
    {
        name: "Charzard",
        type: ["fire", "flying"],
        weakness: ["water", "electric", "rock"],
        canEvolve: false,
        finalEvolution: true
    },
    {
        name: "Squirtle",
        type: ["water"],
        weakness: ["electric", "grass"],
        canEvolve: true,
        finalEvolution: false,
        evolutions: [ "Wartortle", "Blastoise"]
    },
    {
        name: "Wartortle",
        type: ["water"],
        weakness: ["electric", "grass"],
        canEvolve: true,
        finalEvolution: false,
        evolutions: ["Blastoise"]
    },
    {
        name: "Blastoise",
        type: ["water"],
        weakness: ["electric", "grass"],
        canEvolve: false,
        finalEvolution: true
    }
]

const grassStarters = starterPokemon.filter((types) => {
    return types.type[0] === "grass"
}) 

const fireStarters = starterPokemon.filter(({type}) => {
    return type[0] === "fire";
})

const waterStarters = starterPokemon.filter((types) => {
    return types.type[0] === "water";
})

const fullyEvolved = starterPokemon.filter(({finalEvolution}) =>{
    return finalEvolution === true;
})

const myFavoriteStarter = fireStarters.filter(({name}) =>{
    return name === "Charmander";
})

const myStarter = myFavoriteStarter.map(({name}, {type}, {evolutions}) => {
    let msg = `My favorite starter in gen 1 is ${name}. ${name} is a ${fireStarters[0].type} type.`
    return msg;
})

console.log(myStarter);