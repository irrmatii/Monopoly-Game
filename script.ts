const startBtn = document.querySelector('.startBtn') as HTMLButtonElement;
const dice = document.querySelector('.dice') as HTMLDivElement;
const rollBtn = document.querySelectorAll('.rollBtn') as NodeListOf<HTMLButtonElement>;
const move = document.querySelector('.move') as HTMLSpanElement;
const playersMove = document.querySelector('.players') as HTMLSpanElement;
const actionInfo = document.querySelector('.action_info') as HTMLTextAreaElement;

const player_1 = document.querySelector('.player_1') as HTMLDivElement;
const player_2 = document.querySelector('.player_2') as HTMLDivElement;

const money = document.querySelectorAll('.money') as NodeListOf<HTMLSpanElement>;

const playerCards = document.querySelectorAll('.player_cards') as NodeListOf<HTMLDivElement>;
const boardHouse = document.querySelectorAll('.board_house') as NodeListOf<HTMLDivElement>;
const buyHouse = document.querySelectorAll('.buy_house') as NodeListOf<HTMLButtonElement>;
const buyHotel = document.querySelectorAll('.buy_hotel') as NodeListOf<HTMLButtonElement>;
const buyStreet = document.querySelectorAll('.buy_street') as NodeListOf<HTMLButtonElement>;

interface CardsInterface {
    id: number;
    name: string,
    type: string,
    color?: string,
    colorID?: number,
    price?: number,
    rent?: number[],
    houseCost?: number,
    hotelCost?: number,
    description?: string,
    house?: number[],
    hotel?: number[]
}

const cardsInfo: CardsInterface[] = [
    {
        "id": 0,
        "name": "GO",
        "type": "special",
        "description": "Collect 1000$ when you pass."
    },
    {
        "id": 1,
        "name": "Tallinn",
        "type": "property",
        "color": "green",
        "colorID": 0,
        "price": 200,
        "rent": [2, 10, 30, 90, 160, 250],
        "houseCost": 50,
        "hotelCost": 50,
        "house": [],
        "hotel": []
    },
    {
        "id": 2,
        "name": "Riga",
        "type": "property",
        "color": "green",
        "colorID": 0,
        "price": 210,
        "rent": [4, 20, 60, 180, 320, 450],
        "houseCost": 50,
        "hotelCost": 50,
        "house": [],
        "hotel": []
    },
    {
        "id": 3,
        "name": "Vilnius",
        "type": "property",
        "color": "green",
        "colorID": 0,
        "price": 220,
        "rent": [6, 30, 90, 270, 400, 550],
        "houseCost": 50,
        "hotelCost": 50,
        "house": [],
        "hotel": []
    },
    {
        "id": 4,
        "name": "PARKING",
        "type": "special",
        "description": "Take a rest in the parking"
    },
    {
        "id": 5,
        "name": "Lisbon",
        "type": "property",
        "color": "orange",
        "colorID": 1,
        "price": 250,
        "rent": [10, 50, 90, 290, 420, 550],
        "houseCost": 50,
        "hotelCost": 50,
        "house": [],
        "hotel": []
    },
    {
        "id": 6,
        "name": "Madrid",
        "type": "property",
        "color": "orange",
        "colorID": 1,
        "price": 260,
        "rent": [10, 60, 100, 300, 420, 550],
        "houseCost": 50,
        "hotelCost": 50,
        "house": [],
        "hotel": []
    },
    {
        "id": 7,
        "name": "Valletta",
        "type": "property",
        "color": "orange",
        "colorID": 1,
        "price": 270,
        "rent": [10, 60, 100, 320, 440, 560],
        "houseCost": 50,
        "hotelCost": 50,
        "house": [],
        "hotel": []
    },
    {
        "id": 8,
        "name": "Park",
        "type": "special",
        "description": "For cleaning the park you will get 700$"
    },
    {
        "id": 9,
        "name": "Paris",
        "type": "property",
        "color": "yellow",
        "colorID": 2,
        "price": 300,
        "rent": [15, 70, 160, 480, 650, 800],
        "houseCost": 50,
        "hotelCost": 50,
        "house": [],
        "hotel": []
    },
    {
        "id": 10,
        "name": "Roma",
        "type": "property",
        "color": "yellow",
        "colorID": 2,
        "price": 310,
        "rent": [15, 70, 160, 480, 650, 800],
        "houseCost": 50,
        "hotelCost": 50,
        "house": [],
        "hotel": []
    },
    {
        "id": 11,
        "name": "Amsterdam",
        "type": "property",
        "color": "yellow",
        "colorID": 2,
        "price": 320,
        "rent": [15, 75, 170, 490, 670, 820],
        "houseCost": 50,
        "hotelCost": 50,
        "house": [],
        "hotel": []
    },
    {
        "id": 12,
        "name": "Jail",
        "type": "special",
        "description": "You were caught for hiding taxes; pay 200$"
    },
    {
        "id": 13,
        "name": "Helsinki",
        "type": "property",
        "color": "blue",
        "colorID": 3,
        "price": 350,
        "rent": [20, 80, 200, 550, 750, 950],
        "houseCost": 50,
        "hotelCost": 50,
        "house": [],
        "hotel": []
    },
    {
        "id": 14,
        "name": "Copenhagen",
        "type": "property",
        "color": "blue",
        "colorID": 3,
        "price": 360,
        "rent": [20, 80, 220, 560, 770, 970],
        "houseCost": 50,
        "hotelCost": 50,
        "house": [],
        "hotel": []
    },
    {
        "id": 15,
        "name": "Oslo",
        "type": "property",
        "color": "blue",
        "colorID": 3,
        "price": 370,
        "rent": [25, 90, 220, 580, 800, 1000],
        "houseCost": 50,
        "hotelCost": 50,
        "house": [],
        "hotel": []
    },
]


const boardPosition: string[] = ["1/ 1/ 2/ 2", "1/ 2/ 2/ 3", "1/ 3/ 2/ 4", "1/ 4/ 2/ 5", "1/ 5/ 2/ 6", "2/ 5/ 3/ 6", "3/ 5/ 4/ 6", "4/ 5/ 5/ 6", "5/ 5/ 6/ 6", "5/ 4/ 6/ 5", "5/ 3/ 6/ 4", "5/ 2/ 6/ 3", "5/ 1/ 6/ 2", "4/ 1/ 5/ 2", "3/ 1/ 4/ 2", "2/ 1/ 3/ 2"];

let canBuyStreet_1: boolean = true;
let canBuyStreet_2: boolean = true;
let canBuyHouse_1: boolean = true;
let canBuyHouse_2: boolean = true;
let canBuyHotel_1: boolean = true;
let canBuyHotel_2: boolean = true;

let player_1Index :number = 0
let player_2Index: number = 0

let player_1Money: number = 5000
let player_2Money: number = 5000

let player_1Streets: string[] = []
let player_2Streets: string[] = []

let player_1StreetsColor: string[] = []
let player_2StreetsColor: string[] = []



money[0].innerHTML = `${player_1Money}`
money[1].innerHTML = `${player_2Money}`



// ===== START BUTTON =====
startBtn.onclick = () => {
    rollBtn[0].classList.remove('display_none')
    rollBtn[0].classList.add('display_block')
    startBtn.classList.remove('display_block')
    startBtn.classList.add('display_none')

    actionInfo.innerHTML += `Roll the dice`
}



// ===== DICE ROLL =====
let diceNum: number = 0

const diceImages:string[] = [
    "https://static.thenounproject.com/png/1341914-200.png",
    "https://static.thenounproject.com/png/1341916-200.png",
    "https://static.thenounproject.com/png/1341919-200.png",
    "https://static.thenounproject.com/png/1341913-200.png",
    "https://static.thenounproject.com/png/1341918-200.png",
    "https://static.thenounproject.com/png/1341915-200.png"
];

function action_Player1(){

    cardsInfo.forEach((card) => {
        // START function
        if (player_1Index === 0 && player_1Index === card.id) {
            actionInfo.innerHTML = ``
            actionInfo.innerHTML += `${card.description}`
            player_1Money += 1000
            money[0].innerHTML = `${player_1Money}`
        }
        // FREE PARKING function
        if (player_1Index === 4 && player_1Index === card.id) {
            actionInfo.innerHTML += ``
            actionInfo.innerHTML = `${card.description}`
        }
        // PARK function
        if (player_1Index === 8 && player_1Index === card.id){
            actionInfo.innerHTML = ``
            actionInfo.innerHTML += `${card.description}`
            player_1Money += 700
            money[0].innerHTML = `${player_1Money}`
        }
        // JAIL function
        if (player_1Index === 12 && player_1Index === card.id){
            actionInfo.innerHTML = ``
            actionInfo.innerHTML += `${card.description}`
            player_1Money -= 200
            money[0].innerHTML = `${player_1Money}`
        }
        // Streets and rent function
        if (card.type === "property" && player_1Index === card.id) {
            // ==== Pay rent ====
            // @ts-ignore
            if (player_2Streets.includes(card.name)){
                // house rent
                if (!card.house?.length){
                    // @ts-ignore
                    player_1Money -= card.rent[0]
                    money[0].innerHTML = `${player_1Money}`
                    actionInfo.innerHTML = ``
                    // @ts-ignore
                    actionInfo.innerHTML += `You need to pay ${card.rent[0]}$ for rent`
                } else if (card.house?.length === 1){
                    // @ts-ignore
                    player_1Money -= card.rent[1]
                    money[0].innerHTML = `${player_1Money}`
                    actionInfo.innerHTML = ``
                    // @ts-ignore
                    actionInfo.innerHTML += `You need to pay ${card.rent[1]}$ for house rent`
                } else if (card.house?.length === 2){
                    // @ts-ignore
                    player_1Money -= card.rent[2]
                    money[0].innerHTML = `${player_1Money}`
                    actionInfo.innerHTML = ``
                    // @ts-ignore
                    actionInfo.innerHTML += `You need to pay ${card.rent[2]}$ for house rent`
                }else if (card.house?.length === 3){
                    // @ts-ignore
                    player_1Money -= card.rent[3]
                    money[0].innerHTML = `${player_1Money}`
                    actionInfo.innerHTML = ``
                    // @ts-ignore
                    actionInfo.innerHTML += `You need to pay ${card.rent[3]}$ for house rent`
                }else if (card.house?.length === 4){
                    // @ts-ignore
                    player_1Money -= card.rent[4]
                    money[0].innerHTML = `${player_1Money}`
                    actionInfo.innerHTML = ``
                    // @ts-ignore
                    actionInfo.innerHTML += `You need to pay ${card.rent[4]}$ for house rent`
                }

                // hotel rent
                // @ts-ignore
                if (card.hotel.length >= 1){
                    // @ts-ignore
                    player_1Money -= card.rent[5] * card.hotel.length
                    money[0].innerHTML = `${player_1Money}`
                    actionInfo.innerHTML = ``
                    // @ts-ignore
                    actionInfo.innerHTML += `You need to pay ${card.rent[5] * card.hotel.length}$ for hotel rent`
                }
            }

                // ==== Buy streets / houses / hotels ====
            // @ts-ignore
            else if (card.type === "property" && player_1Index === card.id && !player_2Streets.includes(card.name)){
                // preventing from buying the same street
                // @ts-ignore
                if (player_1Streets.includes(card.name)){
                    canBuyStreet_1 = false;
                } else {
                    canBuyStreet_1 = true;
                }

                // Buy a street
                // @ts-ignore
                if (canBuyStreet_1 && player_1Money >= card.price){
                    actionInfo.innerHTML = ``
                    actionInfo.innerHTML += `You can buy a street`
                }

                buyStreet[0].onclick = () => {
                    if (canBuyStreet_1){
                        player_1Streets.push(card.name)

                        // tracking how many streets color player_1 has
                        if (card.color === "green"){
                            // @ts-ignore
                            player_1StreetsColor.push(card.color)
                        } else if (card.color === "orange"){
                            // @ts-ignore
                            player_1StreetsColor.push(card.color)
                        } else if (card.color === "yellow"){
                            // @ts-ignore
                            player_1StreetsColor.push(card.color)
                        } else if (card.color === "blue"){
                            // @ts-ignore
                            player_1StreetsColor.push(card.color)
                        }

                        // @ts-ignore
                        player_1Money -= card.price
                        money[0].innerHTML = `${player_1Money}`

                        playerCards[0].innerHTML += `
                  <div class="street_container">
                  <div class="color ${card.color}"></div>
                  <div class="street_info">
                  <div class="street_name">
                    <h3>${card.name}</h3>
                    <div class="board_house"></div>
                  </div>
                  <div class="street_price">
                    <p>${card.price}$</p>
                  </div>
                  </div>
                  </div>`

                        canBuyStreet_1 = false;
                    }
                    else {
                        return
                    }
                }

                // Buy a house
                // @ts-ignore
                if (!canBuyStreet_1 && player_1Money >= card.houseCost){

                    let checkColorLength: string [] = []
                    player_1StreetsColor.forEach((item:string) => {
                        if (item === card.color){
                            checkColorLength.push(item)
                            console.log(checkColorLength)
                            console.log(player_1StreetsColor)
                        }

                        // @ts-ignore
                        if (checkColorLength.length === 3 && card.house.length < 4){
                            actionInfo.innerHTML = ``
                            actionInfo.innerHTML += `You can buy a house`

                            buyHouse[0].onclick = () => {
                                // preventing from buying the house twice
                                if(player_1Index === card.id && canBuyHouse_1){
                                    // @ts-ignore
                                    player_1Money -= card.houseCost
                                    money[0].innerHTML = `${player_1Money}`

                                    boardHouse[card.id].innerHTML += `<div class="smallHouse"></div>`
                                    // @ts-ignore
                                    card.house.push(1)

                                    canBuyHouse_1 = false
                                } else{
                                    return;
                                }
                            }
                        }
                            // Buy a hotel
                        // @ts-ignore
                        else if (card.house.length === 4) {
                            actionInfo.innerHTML = ``
                            actionInfo.innerHTML += `You can buy a hotel`
                            buyHotel[0].onclick = () => {
                                // @ts-ignore
                                if(player_1Index === card.id && canBuyHotel_1 && card.house.includes(2)){
                                    // @ts-ignore
                                    player_1Money -= card.hotelCost
                                    money[0].innerHTML = `${player_1Money}`

                                    boardHouse[card.id].innerHTML += `<div class="smallHotel"></div>`

                                    canBuyHotel_1 = false

                                    // @ts-ignore
                                    card.house.push(2)
                                } else if (player_1Index === card.id && canBuyHotel_1){
                                    // @ts-ignore
                                    player_1Money -= card.hotelCost
                                    money[0].innerHTML = `${player_1Money}`

                                    boardHouse[card.id].innerHTML = ``
                                    boardHouse[card.id].innerHTML += `<div class="smallHotel"></div>`

                                    canBuyHotel_1 = false

                                    // @ts-ignore
                                    card.house.push(2)
                                }
                            }
                        } else {
                            actionInfo.innerHTML = ``
                            actionInfo.innerHTML += `To buy a house, collect all houses with the same color`
                        }
                    })
                }
                // ==== Not enough money ====
                // @ts-ignore
                if (player_1Money < card.price || player_1Money < card.houseCost || player_1Money < card.hotelCost){
                    actionInfo.innerHTML = ``
                    actionInfo.innerHTML += `You don't have enough money`
                }
            }
        }
    })
}


function action_Player2(){

    cardsInfo.forEach((card) => {
        // START function
        if (player_2Index === 0 && player_2Index === card.id) {
            actionInfo.innerHTML = ``
            actionInfo.innerHTML = `${card.description}`
            player_2Money += 1000
            money[1].innerHTML = `${player_2Money}`
        }
        // FREE PARKING function
        if (player_2Index === 4 && player_2Index === card.id) {
            actionInfo.innerHTML = ``
            actionInfo.innerHTML = `${card.description}`
        }
        // PARK function
        if (player_2Index === 8 && player_2Index === card.id){
            actionInfo.innerHTML = ``
            actionInfo.innerHTML = `${card.description}`
            player_2Money += 700
            money[1].innerHTML = `${player_2Money}`
        }
        // JAIL function
        if (player_2Index === 12 && player_2Index === card.id){
            actionInfo.innerHTML = ``
            actionInfo.innerHTML = `${card.description}`
            player_2Money -= 200
            money[1].innerHTML = `${player_2Money}`
        }
        // Streets and rent function
        if (card.type === "property" && player_2Index === card.id) {
            // ==== Pay rent ====
            // @ts-ignore
            if (player_1Streets.includes(card.name)){
                // house rent
                if (!card.house?.length){
                    // @ts-ignore
                    player_2Money -= card.rent[0]
                    money[1].innerHTML = `${player_2Money}`
                    actionInfo.innerHTML = ``
                    // @ts-ignore
                    actionInfo.innerHTML = `You need to pay ${card.rent[0]}$ for rent `
                } else if (card.house?.length === 1){
                    // @ts-ignore
                    player_2Money -= card.rent[1]
                    money[1].innerHTML = `${player_2Money}`
                    actionInfo.innerHTML = ``
                    // @ts-ignore
                    actionInfo.innerHTML = `You need to pay ${card.rent[1]}$ for house rent`
                } else if (card.house?.length === 2){
                    // @ts-ignore
                    player_2Money -= card.rent[2]
                    money[1].innerHTML = `${player_2Money}`
                    actionInfo.innerHTML = ``
                    // @ts-ignore
                    actionInfo.innerHTML = `You need to pay ${card.rent[2]}$ for house rent`
                }else if (card.house?.length === 3){
                    // @ts-ignore
                    player_2Money -= card.rent[3]
                    money[1].innerHTML = `${player_2Money}`
                    actionInfo.innerHTML = ``
                    // @ts-ignore
                    actionInfo.innerHTML = `You need to pay ${card.rent[3]}$ for house rent`
                }else if (card.house?.length === 4){
                    // @ts-ignore
                    player_2Money -= card.rent[4]
                    money[1].innerHTML = `${player_2Money}`
                    actionInfo.innerHTML = ``
                    // @ts-ignore
                    actionInfo.innerHTML = `You need to pay ${card.rent[4]}$ for house rent`
                }

                // hotel rent
                // @ts-ignore
                if (card.hotel.length >= 5){
                    // @ts-ignore
                    player_2Money -= card.rent[5]
                    money[1].innerHTML = `${player_2Money}`
                    actionInfo.innerHTML = ``
                    // @ts-ignore
                    actionInfo.innerHTML = `You need to pay ${card.rent[5]}$ for hotel rent`
                }
            }

                // ==== Buy streets / houses / hotels ====
            // @ts-ignore
            else if (card.type === "property" && player_2Index === card.id && !player_1Streets.includes(card.name)){
                // preventing from buying the same street
                // @ts-ignore
                if (player_2Streets.includes(card.name)){
                    canBuyStreet_2 = false;
                } else {
                    canBuyStreet_2 = true;
                }

                // Buy a street
                // @ts-ignore
                if (canBuyStreet_2 && player_2Money >= card.price){
                    actionInfo.innerHTML = ``
                    actionInfo.innerHTML = `You can buy a street`
                }

                buyStreet[1].onclick = () => {
                    if (canBuyStreet_2){
                        player_2Streets.push(card.name)

                        // tracking how many streets color player_2 has
                        if (card.color === "green"){
                            // @ts-ignore
                            player_2StreetsColor.push(card.color)
                        } else if (card.color === "orange"){
                            // @ts-ignore
                            player_2StreetsColor.push(card.color)
                        } else if (card.color === "yellow"){
                            // @ts-ignore
                            player_2StreetsColor.push(card.color)
                        } else if (card.color === "blue"){
                            // @ts-ignore
                            player_2StreetsColor.push(card.color)
                        }

                        // @ts-ignore
                        player_2Money -= card.price
                        money[1].innerHTML = `${player_2Money}`

                        playerCards[1].innerHTML += `
                  <div class="street_container">
                  <div class="color ${card.color}"></div>
                  <div class="street_info">
                  <div class="street_name">
                    <h3>${card.name}</h3>
                    <div class="board_house"></div>
                  </div>
                  <div class="street_price">
                    <p>${card.price}$</p>
                  </div>
                  </div>
                  </div>`

                        canBuyStreet_2 = false;
                    }
                    else {
                        return
                    }
                }

                // Buy a house
                // @ts-ignore
                if (!canBuyStreet_2 && player_2Money >= card.houseCost){

                    let checkColorLength: string [] = []
                    player_2StreetsColor.forEach((item:string) => {
                        if (item === card.color){
                            checkColorLength.push(item)
                            console.log(checkColorLength)
                            console.log(player_2StreetsColor)
                        }

                        // @ts-ignore
                        if (checkColorLength.length === 3 && card.house.length < 4){
                            actionInfo.innerHTML = ``
                            actionInfo.innerHTML += `You can buy a house`

                            buyHouse[1].onclick = () => {
                                // preventing from buying the house twice
                                if(player_2Index === card.id && canBuyHouse_2){
                                    // @ts-ignore
                                    player_2Money -= card.houseCost
                                    money[1].innerHTML = `${player_2Money}`

                                    boardHouse[card.id].innerHTML += `<div class="smallHouse"></div>`
                                    // @ts-ignore
                                    card.house.push(1)

                                    canBuyHouse_2 = false
                                } else{
                                    return;
                                }
                            }
                        }
                            // Buy a hotel
                        // @ts-ignore
                        else if (card.house.length === 4) {
                            actionInfo.innerHTML = ``
                            actionInfo.innerHTML += `You can buy a hotel`
                            buyHotel[1].onclick = () => {
                                // @ts-ignore
                                if(player_2Index === card.id && canBuyHotel_2 && card.house.includes(2)){
                                    // @ts-ignore
                                    player_2Money -= card.hotelCost
                                    money[1].innerHTML = `${player_2Money}`

                                    boardHouse[card.id].innerHTML += `<div class="smallHotel"></div>`

                                    canBuyHotel_2 = false

                                    // @ts-ignore
                                    card.house.push(2)
                                } else if (player_2Index === card.id && canBuyHotel_1){
                                    // @ts-ignore
                                    player_2Money -= card.hotelCost
                                    money[1].innerHTML = `${player_2Money}`

                                    boardHouse[card.id].innerHTML = ``
                                    boardHouse[card.id].innerHTML += `<div class="smallHotel"></div>`

                                    canBuyHotel_2 = false

                                    // @ts-ignore
                                    card.house.push(2)
                                }
                            }
                        } else {
                            actionInfo.innerHTML = ``
                            actionInfo.innerHTML += `To buy a house, collect all houses with the same color`
                        }
                    })
                }
                // ==== Not enough money ====
                // @ts-ignore
                if (player_2Money < card.price || player_2Money < card.houseCost || player_2Money < card.hotelCost){
                    actionInfo.innerHTML = ``
                    actionInfo.innerHTML += `You don't have enough money`
                }
            }
        }
    })
}


// ===== Roll button for player_1 =====
rollBtn[0].onclick = () => {
    let randImage: number = Math.floor(Math.random() * diceImages.length);
    let diceBackground: string = diceImages[randImage];
    dice.style.backgroundImage = `url(${diceBackground})`

    function diceNumber (){

        if (diceBackground === "https://static.thenounproject.com/png/1341914-200.png"){
            diceNum = 1
            move.innerHTML = `${diceNum}`
        } else if (diceBackground === "https://static.thenounproject.com/png/1341916-200.png"){
            diceNum = 2
            move.innerHTML = `${diceNum}`
        } else if (diceBackground === "https://static.thenounproject.com/png/1341919-200.png"){
            diceNum = 3
            move.innerHTML = `${diceNum}`
        } else if (diceBackground === "https://static.thenounproject.com/png/1341913-200.png"){
            diceNum = 4
            move.innerHTML = `${diceNum}`
        } else if (diceBackground === "https://static.thenounproject.com/png/1341918-200.png"){
            diceNum = 5
            move.innerHTML = `${diceNum}`
        } else if (diceBackground === "https://static.thenounproject.com/png/1341915-200.png"){
            diceNum = 6
            move.innerHTML = `${diceNum}`
        }
    }
    diceNumber ()

    rollBtn[0].classList.remove('display_block')
    rollBtn[0].classList.add('display_none')
    rollBtn[1].classList.remove('display_none')
    rollBtn[1].classList.add('display_block')

    if (rollBtn[0].classList.contains('display_none')){
        playersMove.innerHTML = "2"
    }

    // Player_1 move
    player_1Index += diceNum
    if (player_1Index >= boardPosition.length){
        player_1Index = player_1Index % boardPosition.length;
        player_1Money += 1000
        money[0].innerHTML = `${player_1Money}`
    }
    player_1.style.gridArea = `${boardPosition[player_1Index]}`

    // Player_1 action function
    action_Player1()

    canBuyHouse_2 = true
    canBuyHotel_2 = true

    console.log("player1")
    console.log(player_2Streets)
}


// ===== Roll button for player_2 =====
rollBtn[1].onclick = () => {
    let randImage: number = Math.floor(Math.random() * diceImages.length);
    let diceBackground: string = diceImages[randImage];
    dice.style.backgroundImage = `url(${diceBackground})`

    function diceNumber (){

        if (diceBackground === "https://static.thenounproject.com/png/1341914-200.png"){
            diceNum = 1
            move.innerHTML = `${diceNum}`
        } else if (diceBackground === "https://static.thenounproject.com/png/1341916-200.png"){
            diceNum = 2
            move.innerHTML = `${diceNum}`
        } else if (diceBackground === "https://static.thenounproject.com/png/1341919-200.png"){
            diceNum = 3
            move.innerHTML = `${diceNum}`
        } else if (diceBackground === "https://static.thenounproject.com/png/1341913-200.png"){
            diceNum = 4
            move.innerHTML = `${diceNum}`
        } else if (diceBackground === "https://static.thenounproject.com/png/1341918-200.png"){
            diceNum = 5
            move.innerHTML = `${diceNum}`
        } else if (diceBackground === "https://static.thenounproject.com/png/1341915-200.png"){
            diceNum = 6
            move.innerHTML = `${diceNum}`
        }
    }
    diceNumber ()

    rollBtn[1].classList.remove('display_block')
    rollBtn[1].classList.add('display_none')
    rollBtn[0].classList.remove('display_none')
    rollBtn[0].classList.add('display_block')

    if (rollBtn[1].classList.contains('display_none')){
        playersMove.innerHTML = "1"
    }

    // Player_2 move
    player_2Index += diceNum
    if (player_2Index >= boardPosition.length){
        player_2Index = player_2Index % boardPosition.length;
        player_2Money += 1000
        money[1].innerHTML = `${player_2Money}`
    }
    player_2.style.gridArea = `${boardPosition[player_2Index]}`

    // Player_2 action function
    action_Player2()

    canBuyHouse_1 = true
    canBuyHotel_1 = true

    console.log(player_1Streets)
    console.log("player2")
}

