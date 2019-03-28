const Cities = [{"city":"Tokio","save":90,"price":359,"img":"img/tokyo.JPG"},
{"city":"Ciudad de Mexico","save":75,"price":729,"img":"img/ciudad_mexico.JPG"},
{"city":"Beijing","save":35,"price":519,"img":"img/beijing.JPG"},
{"city":"Buenos Aires","save":65,"price":329,"img":"img/buenos_aires.JPG"},
{"city":"Madrid","save":95,"price":199,"img":"img/madrid.JPG"},
{"city":"New York","save":50,"price":659,"img":"img/new_york.JPG"}
];

for(i=0;i<=Cities.length-1;i++){
    const rand = Math.round(Math.random()*5);
    let str;
    if(i < 3){
        str = ".card0" + i;
    }else{
        str = ".card1" + (i%3);
    }
    console.log(str + " : " + Cities[rand].city);
    const nodo = $(str);
    const imagen = nodo.find('img');
    const descuento = nodo.find('.info').find('.discount');
    const precio = nodo.find('.info').find('.price');
    const nombre = nodo.find('.name');
    $(imagen).attr('src', Cities[rand].img)    
    $(descuento).append(`<p class="discountVal">Save ${Cities[rand].save}$ pay only</p>`);
    $(precio).append(`<h5 class="priceVal">${Cities[rand].price}$ </h5>`);
    $(nombre).append(`<p>${Cities[rand].city}</p>`);
    

    //<h5 class="card-title discountVal"></h5>
    
}