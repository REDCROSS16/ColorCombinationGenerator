const colors = [
    'РРСЖ',
    'ЖСГР',
    'СГРС',
    'РСГР',
    "ГЖРЖ",
    "ЖСЖГ",
    "РЖРГ",
    "ГРРГ",
    "РГСГ",
    "СРЖГ",
    "РЖГС",
    "ГСЖР",
    "ГГСЖ",
    "СРГЖ",
    "РЖРС",
    "ГГСР"
];

const color = ['Г', 'Ж', 'С', 'Р'];

function generatecolor() {
    let result = '';
    for (let i = 0; i <= 3; i++) {
        result+= getRandomColor();
    }
    
   return result;
}

function getRandomColor() {
    return color[Math.round(Math.random() * (color.length - 1))];
}

function getColor() {
    let color = generatecolor();
    if (colors.includes(color)) {
        color = getColor();
    }

    let arr = color.split("");
    
    if (arr[0] === arr[1] && arr[0] === arr[2]
        || arr[1] === arr[2] && arr[1] === arr[3]
    ) {
       color = getColor();
    }

    let count = {};

    for (let elem of arr) {
        if (count[elem] === undefined) {
        count[elem] = 1;
        } else {
        count[elem]++;
        }
    }
    

    for (key in count) {
       if (count[key] > 2) {
            color = getColor();
       };
    }
    
    return color;
}

function mainGeneration() {
    for (let i = 0; i < 52; i++) {
        let color = getColor();
        colors.push(color);
    }
}

mainGeneration();

let table = document.getElementById("table");

colors.forEach(element => {
    let row = table.insertRow()
    let cell = row.insertCell(0)

    cell.innerHTML = element;
    // switch(element) {
    //     case 'Г': cell.setAttribute('style', 'color:lightblue; border: 1px solid blue;');
    //     default: '';
    // }
});
