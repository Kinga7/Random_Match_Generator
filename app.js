let team1 = ['exit', 'ranged', 'aot', 'Ahzi']
let team2 = ['keen', 'nomad', 'unco', 'J1']


function randomPlayer(team1) {
    const randomIndex = Math.floor(Math.random() * team1.length);
    return team1[randomIndex];
}