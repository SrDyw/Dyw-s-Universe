let x = document.querySelectorAll('.toggle');
let small = document.querySelector('.small-nav')
let games = document.querySelectorAll('.game');

let game_index = -1;

games_info = {
    name : ["Athur", "Out Stress", "Quick Hands", "Deep Mind"],
    description : [
        "Un pequeño ser se le concede la mision de aventurarse por un mundo lleno de retos y dificultades para salvarlo de un terrible ser que le asecha",
        "¿Podras sobrevivir multiples oleadas de enemigos sin estresarte?",
        "¡Rapido! Tienes que organizar tu habitacion antes que tus padres llegen y vean el desastre",
        "Vive los horripilantes sueños de una pequeña, que sufre de multiples horribles acontecimientos."
    ],
    image_url : [
        `
            <img src="src/arthur.png" alt="">

        `,
        `
            <img src="src/out-s.png" alt="">

        `,
        `
            <img src="src/quick.png" alt="">

        `,
        `
            <img src="src/deep.png" alt="">
        `
    ]
}


x.forEach(element => { 
    element.addEventListener('click', () => {
        element.parentNode.parentNode.classList.toggle('active');
    })
});

small.addEventListener('click', () => {
    small.classList.toggle('nav-activate');
})

games.forEach(element => {
    element.addEventListener('click', () => {
        game_index = parseInt(element.classList[1]);
        
        UpdateGameData(game_index - 1);

        document.querySelector('.game-info').classList.remove('disable');
    })
});


const UpdateGameData = (index) => {
    const title = document.querySelector('.game-title');
    const description = document.querySelector('.game-description');
    const image = document.querySelector('.game-image');

    
    title.textContent = games_info.name[index];
    description.textContent = games_info.description[index];
    image.innerHTML = games_info.image_url[index];

    console.log(image.innerHTML);


}
