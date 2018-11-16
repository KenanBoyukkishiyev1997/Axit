// $(".btn-drop").on("click", function(){ 
// 	$(".btn-drop").removeClass("active");
// 	$(this).addClass("active"); 
// });

let buttons = document.querySelectorAll(".btn-drop")

for (let i = 0;i<buttons.length;i++) {
	

	buttons[i].addEventListener("click",function(e) {
		
		var targetEventValueLength = e.target.className.split(" ").length;
		var targetEventValue = e.target.className.split(" ");
		
		if(targetEventValueLength == 1)
		{
			e.target.classList.add('active')

		}

		for(let j = 0;j<buttons.length;j++){
			if(buttons[j] != buttons[i])
			{
				buttons[j].classList.remove('active')
			}
		}
		e.preventDefault();
	})
}




 var scrollLink = $('.scroll');
  
  // Smooth scrolling
  scrollLink.click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 3000 );
  });
  
  // Active link switching
  $(window).scroll(function() {
    var scrollbarLocation = $(this).scrollTop();
    
    scrollLink.each(function() {
      
      var sectionOffset = $(this.hash).offset();
      
      if ( sectionOffset <= scrollbarLocation ) {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }
    })
    
  })







//////////////////////////TAB///////////////////////////////


// let  drops = document.querySelectorAll(".drop");

// for (let drop of drops) {
// 	drop.addEventListener("click",function(){
// 		document.querySelector(".dropdown.active").classList.remove("active");
// 		let btnId = this.getAttribute('data-btnId');

// 		document.querySelector(`[data-divId = "${btnId}"]`).classList.add('active')
// 		console.log('s')
// 	})
// }




// //////////////////////////////////////Nav//////////////////////////////////////

$(document).ready(window)
	$('.click_btn').click(function(){
		$('.fa-bars').toggleClass(" fa-times");
		$(".fa-times").css("font-size","20px");
		$('.open_ul').toggleClass('active_ul');
		$('.active_ul').css("transition","all 0.5s ease-in-out");
	});






	


$(".items-slider .owl-carousel").owlCarousel({
		nav:false,
		mouseDrag:true,
		loop:true,
		autoplay:true
		

	});
