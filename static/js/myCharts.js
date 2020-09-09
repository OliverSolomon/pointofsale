let myChart = document.getElementById('myChart').getContext('2d');

let color = ['#f3c22d', '#f59e2e', '#f38729', '#f77930'];

//global options
Chart.defaults.global.defaultFontFamily ='Segoe' ;
Chart.defaults.global.defaultFontFamily = 12;
Chart.defaults.global.defaultFontColor = '#FFF';

let massPopChart = new Chart(myChart, {
    type:'bar', //pie, line, doughnut
    data:{
        labels:['2017', '2018', '2019', '2020'],
        datasets:[{
            label:'Sales',
            data:[
                120000,
                134500,
                10000,
                180000
            ],
            borderWidth:2,
            backgroundColor:color,
            // borderColor:'#777',
            hoverBorderWidth:2,
            hoverBorderColor:'#000'
        }]
    },
    options:{
        title:{
            display:true,
            text:'Sales',
            fontSize:20
        },
        legend:{
            posistion:'right'
        },
        layout:{
            // padding:{
            //     left:0,
            //     right:0,
            //     bottom:0,
            //     top:0
            // }
        }
    }
});

let profits = document.getElementById('profits').getContext('2d');

//global options
Chart.defaults.global.defaultFontFamily ='Segoe' ;
Chart.defaults.global.defaultFontFamily = 12;
Chart.defaults.global.defaultFontColor = '#FFF';

let profitsChart = new Chart(profits, {
    type:'line', //pie, line, doughnut
    data:{
        labels:['2017', '2018', '2019', '2020'],
        datasets:[{
            label:'Profits',
            data:[
                15000,
                18000,
                16000,
                16500
            ],
            borderWidth:2,
            backgroundColor:color,
            // borderColor:'#777',
            hoverBorderWidth:2,
            hoverBorderColor:'#000'
        }]
    },
    options:{
        title:{
            display:true,
            text:'Profits',
            fontSize:20
        },
        legend:{
            posistion:'right'
        },
        layout:{
            // padding:{
            //     left:0,
            //     right:0,
            //     bottom:0,
            //     top:0
            // }
        }
    }
});

let products = document.getElementById('products').getContext('2d');

//global options
Chart.defaults.global.defaultFontFamily ='Segoe' ;
Chart.defaults.global.defaultFontFamily = 12;
Chart.defaults.global.defaultFontColor = '#FFF';

let productsChart = new Chart(products, {
    type:'line', //pie, line, doughnut
    data:{
        labels:['2017', '2018', '2019', '2020'],
        datasets:[{
            label:'Products',
            data:[
                16000,
                18500,
                15000,
                20000
            ],
            borderWidth:2,
            backgroundColor:color,
            // borderColor:'#777',
            hoverBorderWidth:2,
            hoverBorderColor:'#000'
        }]
    },
    options:{
        title:{
            display:true,
            text:'Products',
            fontSize:20
        },
        legend:{
            posistion:'right'
        },
        layout:{
            // padding:{
            //     left:0,
            //     right:0,
            //     bottom:0,
            //     top:0
            // }
        }
    }
});


let growth = document.getElementById('growth').getContext('2d');

//global options
Chart.defaults.global.defaultFontFamily ='Segoe' ;
Chart.defaults.global.defaultFontFamily = 12;
Chart.defaults.global.defaultFontColor = '#FFF';

let growthChart = new Chart(growth, {
    type:'doughnut', //pie, line, doughnut
    data:{
        labels:['2017', '2018', '2019', '2020'],
        datasets:[{
            label:'Growth',
            data:[
                16000,
                14500,
                15000,
                20000
            ],
            borderWidth:2,
            backgroundColor:color,
            // borderColor:'#777',
            hoverBorderWidth:2,
            hoverBorderColor:'#000'
        }]
    },
    options:{
        title:{
            display:true,
            text:'Growth',
            fontSize:20
        },
        legend:{
            posistion:'right'
        },
        layout:{
            // padding:{
            //     left:0,
            //     right:0,
            //     bottom:0,
            //     top:0
            // }
        }
    }
});




function toggle(){
    var dropDown = document.getElementById('dropDown');
    dropDown.classList.toggle("active");

    var cartDiv = document.getElementById('cartDiv');
    cartDiv.classList.toggle("active");

    var float = document.getElementById('float');
    float.classList.toggle('floatUp');
}

function reveal(){
    var userDrop = document.getElementById('userDrop');
    userDrop.classList.toggle("reveal")

    // var liActive = document.getElementById('liActive');
    // liActive.style.border=;
}

function cashShow(){
    var cashHeld = document.getElementById("cashHeld");
    cashHeld.classList.toggle("cashShow")
}