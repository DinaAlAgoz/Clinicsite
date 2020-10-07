




$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    center: true,
    dots:false,
    rtl:true,
    animateIn: true,
    
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3
        },
        1000: {
          items: 3
        }
      }
    });
    
  
    
  let homeoffset = $("#home").offset().top;
  //alert(aboutoffset) 
  
  $(window).scroll(function(){
  
      let wScroll = $(window).scrollTop();
  
      if(wScroll > homeoffset)
      {
  
          $("#btnUp").fadeIn(500);
          $("#navbar").css("backgroundColor","#099AD0") 
  
      
      }
  
      else {
          
          $("#btnUp").fadeOut(500);
          $("#navbar").css("backgroundColor","transparent") 
      }
      
  });
  
  
  
  
  $("a").click(function(){
      
    let aHref = $(this).attr("href");
  
  let Sectionoffset = $(aHref).offset().top;
  
  $("html,body").animate( {scrollTop: Sectionoffset} , 1000)
  });
  
  
  $("#btnUp").click(function(){
     
    $("html,body").animate( {scrollTop:'0'} , 3000)
  
  })