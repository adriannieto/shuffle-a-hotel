var baraja;
var cardStatus;

$('#beginButton').on('click',function(){
    $('#beginDiv').css('opacity','0');
    setTimeout(function(){
        $('#beginDiv').hide();
        $("body").removeClass("backImg").addClass("tapete");
        $('#baraja1').show();
        setTimeout(function(){
            setBaraja();
        },1000);
    },750);
});

function setBaraja(){
    if(baraja && cardStatus=="closed"){
        toggleBaraja();
    }
    baraja = $('#baraja-el').baraja();
    fanBaraja();
    cardStatus = "open";
    $('#toggleBaraja').css('display','inline-block');
    $('#toggleBaraja').off();
    $('#toggleBaraja').on('click',toggleBaraja);
    $('#nextBaraja').css('display','inline-block');
    $('#baraja1').off();
    $('#baraja1').on('click',function(){
        $('ul.baraja-container').removeClass("baraja-container").addClass("baraja-big-container");
        $('.hoteldescription').show();
        $('#nav-prev').css('display','inline-block');
        $('#nav-next').css('display','inline-block');
        $('#toggleBaraja').html("Abrir baraja");
        cardStatus="closed";
    });
    $('#nav-prev').off();
    $('#nav-prev').on('click', function(event) {
        baraja.previous();
    });
    $('#nav-next').off();
    $('#nav-next').on('click', function(event) {
        baraja.next();
    });
}

function fanBaraja(){
    baraja.fan( {
        speed : 500,
        easing : 'ease-out',
        range : 10,
        direction : 'right',
        origin : { x : 50, y : 2000 },
        center : true
    } );
}

function toggleBaraja(){
    if(cardStatus=="closed"){
        $('ul.baraja-big-container').removeClass("baraja-big-container").addClass("baraja-container");
        $('.hoteldescription').hide();
        fanBaraja();
        $('#nav-prev').hide();
        $('#nav-next').hide();
        $('#toggleBaraja').html('Cerrar baraja');
        cardStatus="open";
    }else if(cardStatus=="open"){
        baraja.close();
        $('ul.baraja-container').removeClass("baraja-container").addClass("baraja-big-container");
        $('.hoteldescription').show();
        $('#nav-prev').css('display','inline-block');
        $('#nav-next').css('display','inline-block');
        $('#toggleBaraja').html("Abrir baraja");
        cardStatus="closed";
    }
}

$('#maptoggle').click(function(){
    if($("#maptoggle").is(':checked')) {  
        $('#cardsview').hide();
        $('#mapview').show();
    } else {
        $('#mapview').hide();
        $('#cardsview').show();
    }
});