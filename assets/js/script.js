const bigText = document.querySelector('.rm_siria_hero_p');
const littleText = document.querySelector('.rm_siria_hero_plittle');


const media = () => {
    let q = matchMedia("(max-width:530px)");
    if(q.matches){
        bigText.style.display = "none";
        littleText.style.display ="block";
    }
    else{
        bigText.style.display = "block";
        littleText.style.display ="none";
    }
}
onload = media ;
onresize = media ;






const page =document.querySelectorAll(".rm_products_page");
const point1 = document.querySelector(".page-item1");
const point2 = document.querySelector(".page-item2");
const point3 = document.querySelector(".page-item3");
const point4 = document.querySelector(".page-item4");

point1.addEventListener('click' , function(){
  page.forEach(Element =>{
      Element.style.transform='translateX(0)';
      point1.style.backgroundColor = "#9bc156";
      point2.style.backgroundColor = "white"; 
      point3.style.backgroundColor = "white"; 
      point4.style.backgroundColor = "white"; 

}) });

point2.addEventListener('click' , function(){
  page.forEach(Element =>{
    Element.style.transform='translateX(-100vw)';
    Element.style.transition='1.5s';
    point2.style.backgroundColor = "#9bc156";
    point1.style.backgroundColor = "white";
    point3.style.backgroundColor = "white";
    point4.style.backgroundColor = "white"; 
}) });
point3.addEventListener('click' , function(){
  page.forEach(Element =>{
    Element.style.transform='translateX(-200vw)';
    Element.style.transition='1.5s';
    point3.style.backgroundColor = "#9bc156";
    point1.style.backgroundColor = "white";
    point2.style.backgroundColor = "white";
    point4.style.backgroundColor = "white"; 
}) });
point4.addEventListener('click' , function(){
  page.forEach(Element =>{
    Element.style.transform='translateX(-300vw)';
    Element.style.transition='1.5s';
    point4.style.backgroundColor = "#9bc156"; 
    point3.style.backgroundColor = "white";
    point1.style.backgroundColor = "white";
    point2.style.backgroundColor = "white";
}) });




/* animation */
/* (function(e) {
    e.fn.circle = function(t) {
        var n = e.extend({
            speed: "5000"
        }, t);
        return this.each(function() {
            function t() {
                var e = i.find("li.block.active").index();
                c.removeClass("active"), c.eq(e).addClass("active")
            }

            function o() {
                var n;
                i.addClass("disable-hover"), i.stop(!0, !0).animate({
                    rotatedeg: p.deg += p.step
                }, {
                    duration: 400,
                    step: function(t) {
                        t >= 360 ? t -= 360 : t <= -360 && (t += 360), e(this).css("transform", "rotate(" + t + "deg)"), e(this).css("-webkit-transform", "rotate(" + t + "deg)")
                    },
                    complete: function() {
                        p.active = i.find("li.active").removeClass("active"), "right" == p.direction && p.step == d && (p.active.prev() && p.active.prev().length ? (n = p.active.prev().index(), p.active.prev().addClass("active")) : (p.active.siblings(":last-child").addClass("active"), n = 9)), "left" == p.direction && p.step == u && (p.active.next() && p.active.next().length ? (n = p.active.next().index(), p.active.next().addClass("active")) : (p.active.siblings(":first-child").addClass("active"), n = 0)), i.is(":animated"), i.removeClass("disable-hover"), t()
                    }
                }, "ease")
            }

            function r() {
                i.addClass("disable-hover"), 
                  i.stop(!0, !0).animate(
                  {
                    rotatedeg: p.deg += p.step
                  }, 
                  {
                    duration: 400,
                    step: function(t) {
                        t >= 360 ? t -= 360 : t <= -360 && (t += 360), 
                          e(this).css("transform", "rotate(" + t + "deg)"), 
                          e(this).css("-webkit-transform", "rotate(" + t + "deg)")
                    },
                    complete: function() {
                        p.active = i.find("li.active"), 
                          i.is(":animated"), 
                          i.removeClass("disable-hover")
                    }
                }, "ease")
            }
            var i = e(this),
                s = i.find("li").length,
                a = i.find(" > li .icon"),
                l = "count" + s,
                u = 0,
                c = i.next().find(".animate"),
                p = {
                    duration: n.speed,
                    deg: 0,
                    step: u,
                    active: i.find("li.active"),
                    direction: "left"
                };
            switch (s) {
                case 10:
                    u = -36;
                    break;
                case 9:
                    u = -40;
                    break;
                case 8:
                    u = -45;
                    break;
                case 7:
                    u = -51.5;
                    break;
                case 6:
                    u = -60;
                    break;
                case 5:
                    u = -72;
                    break;
                case 4:
                    u = -90;
                    break;
                case 3:
                    u = -120;
                    break;
                case 2:
                    u = -180;
                    break;
                case 1:
                    u = -360
            }
            i.addClass(l);
            var d = u - 2 * u;
            i.find("> li").first().addClass("active"),
              i.find("> li").first().find("a").attr("href"),
              c.eq(0).addClass("active"), 
              e(a).on("click", function() {
                var n = e(this).parent().index() - i.find("li.active").index();
                i.children("li").removeClass("active"), 
                  e(this).parent().addClass("active"), 
                  p.step = -n * d, n * d >= 288 && (p.step = -n * d + 360), 
                  n * d <= -288 && (p.step = -n * d - 360), 
                  r(), p.step = u, p.direction = "left", t()
            });
            var f = i.parent().find("div.next"),
                h = i.parent().find("div.prev");
            f.on("click", function() {
                i.is(":animated") || (p.direction = "left", p.step = u, o())
            }), h.on("click", function() {
                i.is(":animated") || (p.direction = "right", p.step = d, o())
            })
        })
    }
}(jQuery));
$(function () {
//Background image
$('div').each(function () {
    var url = $(this).attr('data-image');
    if (url) {
        $(this).css('background-image', 'url(' + url + ')');
    }
});
$('section').each(function () {
    var url = $(this).attr('data-image');
    if (url) {
        $(this).css('background-image', 'url(' + url + ')');
    }
}); 
function autoHeightCircle() {
    var circle = $('.circle--rotate'),
        circleInner = $('.animate-wrapper'), 
        circleH = circle.width(),
        circleInnerH = circleInner.width();
    circle.height(circleH);
    circleInner.height(circleInnerH);
}
$("#circle--rotate").circle();
autoHeightCircle();
$(window).resize(function () {
    autoHeightCircle();
});
});
 */














// menu product 
const menuProduct=document.querySelectorAll(".ho-menu-product ul li");
const topMenuProcuct=document.querySelector(".menu-change");

menuProduct.forEach(active => {
    active.addEventListener('click', () => {
        topMenuProcuct.textContent=active.textContent;
        document.querySelector('.ho-menu-product ul .active').classList.remove('active')
        active.classList.add('active');
        document.querySelector('.border').classList.remove('border');
        active.querySelector('span').classList.add('border');
      });

    })  
 
  //section display
menuProduct[0].addEventListener('click', () => {
 document.querySelector('.rm_pages_container').classList.add("section-none");
 document.querySelector('.rm_pages_container3').classList.add("section-none");
 document.querySelector('.rm_pages_container2').classList.remove("section-none");
 document.querySelector('#rm').classList.add("section-none");

/*  document.querySelector('.ho-section-info-product').classList.remove("section-none"); */

}) 
menuProduct[1].addEventListener('click', () => {
    document.querySelector('.rm_pages_container2').classList.add("section-none");
    document.querySelector('.rm_pages_container3').classList.add("section-none");
    document.querySelector('.rm_pages_container').classList.remove("section-none");
    document.querySelector('#rm').classList.remove("section-none");
    document.querySelector('.page-item4').classList.add("section-none");

}) 
menuProduct[2].addEventListener('click', () => {
    document.querySelector('.rm_pages_container2').classList.add("section-none");
    document.querySelector('.rm_pages_container').classList.add("section-none");
    document.querySelector('.rm_pages_container3').classList.remove("section-none");
    document.querySelector('#rm').classList.remove("section-none");
    document.querySelector('.page-item4').classList.remove("section-none");
   }) 
