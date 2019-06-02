$('#myModal').on('shown.bs.modal', function() {
    $('#myInput').trigger('focus')
})

/*if (document.getElementById() == "modalbtn") {*/


$(document).mousemove(function(e) {
    animateCircles(e);

});

$("#modalbtn").mouseenter(function() {
    $(document).off("mousemove");
});

$("#modalbtn").mouseout(function(e) {
    func(e);

});

function func(event) {
    document.addEventListener('mousemove', function(e) {
        animateCircles(e);
    });
}


$("#closer").on("click", function() {
    $(document).on("mousemove", function() {
        animateCircles(e);
    })

});

function animateCircles(event) {
    /*if (document.getElementById("modalbtn").hover == "modalbtn") {

        e.stopPropagation();
    }*/
    $("#modalbtn").mouseover(function() {
        $(document).off("mousemove");
    });
    var circle = document.createElement("div");
    circle.setAttribute("class", "circle");
    document.body.appendChild(circle);


    circle.style.left = event.clientX + 'px';
    circle.style.top = event.clientY + 'px';

    circle.style.transition = "all 0.5s linear 0s";


    circle.style.left = circle.offsetLeft - 20 + 'px';
    circle.style.top = circle.offsetTop - 20 + 'px';

    circle.style.width = "50px";
    circle.style.height = "50px";
    circle.borderWidth = "5px";
    circle.style.opacity = 0;




}