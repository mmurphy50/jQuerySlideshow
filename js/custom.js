  var currentSlide = $('.active-slide');
        var nextSlide = currentSlide.next();

        var currentNumber = $('.active-number');
        var nextNumber = currentNumber.next();

//ONE TO FIVE BUTTONS

$("#btn0").on("click", function() {
        
        $(".slide").hide();
        
        $("#image-1").fadeIn(1300);
    
    });
    
$("#btn1").on("click", function() {
        
        $(".slide").hide();
        
        $("#image-2").fadeIn(1300);

    });

$("#btn2").on("click", function() {
        
        $(".slide").hide();
        
        $("#image-3").fadeIn(1300);
    
    });
    
$("#btn3").on("click", function() {
        
        $(".slide").hide();
        
        $("#image-4").fadeIn(1300);
    
    });
    
$("#btn4").on("click", function() {
        
        $(".slide").hide();
        
        $("#image-5").fadeIn(1300)();
    
    });

$("#btn5").on("click", function() {
        
        $(".slidewrapper").hide();
        
        $("#image-6").fadeIn(1300);
    
    });


//PREVIOUS/NEXT

var main = function () {

    $('.arrow-next').click(function () {
        currentSlide = $('.active-slide');
        nextSlide = currentSlide.next();

        currentNumber = $('.active-number');
        nextNumber = currentNumber.next();

        if (nextSlide.length === 0) {
            nextSlide = $('.slide').first();
            nextNumber = $('.number').first();
        }

        currentSlide.fadeToggle(1300).removeClass('active-slide');
        nextSlide.fadeToggle(1300).addClass('active-slide');

        currentNumber.removeClass('active-number');
        nextNumber.addClass('active-number');
    });


    $('.arrow-prev').click(function () {
        currentSlide = $('.active-slide');
        prevSlide = currentSlide.prev();

        currentNumber = $('.active-number');
        prevNumber = currentNumber.prev();

        if (prevSlide.length === 0) {
            prevSlide = $('.slide').last();
            prevNumber = $('.number').last();
        }

        currentSlide.fadeOut(600).removeClass('active-slide');
        prevSlide.slideToggle(600).addClass('active-slide');

        currentNumber.removeClass('active-number');
        prevNumber.addClass('active-number');
    });

}

$(document).ready(main);