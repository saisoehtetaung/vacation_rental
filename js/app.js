$(document).ready(() => {
    // Start about section 
    $(window).scroll(() => {
        let getscrolltop = $(this).scrollTop();
        
        if (getscrolltop >= 80) {
            $("#abouts").addClass("abouts");
        } else {
            $("#abouts").removeClass("abouts");
        }
    })
    // End about section 

    // Start feedback section
    $('#lightSlider').lightSlider({
        item: 2,
        autoWidth: true,
        slideMove: 2,

        loop: true,
        controls: false,
    });
    // End feedback section 

    // Start Footer Section 
    $("#year").text(new Date().getUTCFullYear());
    //End Footer Section 

    var date = new Date();
    var getmonth = date.getMonth() + 1;
    var getyear = date.getUTCFullYear();
    var getdatenow = `${getyear}-${getmonth}`;

    //Start modal box 
    $("#checkin").flatpickr({
        minDate: getdatenow,
    });

    $("#checkout").flatpickr({
        minDate: getdatenow,
    });
    // End modal box 

    // Start scroll progress
    $(window).scroll(function () {
         var getprogress = $("#progresses");
         var getprogressval = $("#progressvalues");
        var getscrolltop = $(this).scrollTop();
        
        var getscrollheight = $(document).height();
        var getclientheight = $(window).height();

        var getfinalheight = Math.round(getscrolltop * 100 / (getscrollheight - getclientheight));
        
        getprogressval.text(`${getfinalheight}%`);
        getprogress.css({
            "background": `conic-gradient(var(--pink) ${getfinalheight}%, #eee ${getfinalheight}%)`
        });
     })
    // End scroll progress 
});