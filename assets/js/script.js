const bigText = document.querySelector('.rm_siria_hero_p');
const littleText = document.querySelector('.rm_siria_hero_plittle');

/* animation */

let circle = document.querySelector(".circle--rotate")
let x = 0;
let intervalId = window.setInterval(function () {
    circle.style.transform = `rotate(${x}deg)`;
    x += 120;
}, 2000);
const media = () => {
    let q = matchMedia("(max-width:530px)");
    if (q.matches) {
        bigText.style.display = "none";
        littleText.style.display = "block";
    }
    else {
        bigText.style.display = "block";
        littleText.style.display = "none";
    }
}
onload = media;
onresize = media;






const page = document.querySelectorAll(".rm_products_page");
const point1 = document.querySelector(".page-item1");
const point2 = document.querySelector(".page-item2");
const point3 = document.querySelector(".page-item3");
const point4 = document.querySelector(".page-item4");
const Previous = document.querySelector("#Previous");
const Next = document.querySelector("#Next");

Previous.addEventListener("click", (event) => {
    if (point2.style.backgroundColor == "rgb(155, 193, 86)") {
        point1.click();
    } else if (point3.style.backgroundColor == "rgb(155, 193, 86)") {
        point2.click();
    } else if (point4.style.backgroundColor == "rgb(155, 193, 86)") {
        point3.click();
    }
})
Next.addEventListener("click", (event) => {
    console.log("test")
    if (point1.style.backgroundColor == "rgb(155, 193, 86)") {
        point2.click();
    } else if (point2.style.backgroundColor == "rgb(155, 193, 86)") {
        point3.click();
    } else if (point3.style.backgroundColor == "rgb(155, 193, 86)" && document.querySelector('.page-item4').classList != "page-item4 section-none") {
        point4.click();
    }
})

point1.addEventListener('click', function () {
    page.forEach(Element => {
        Element.style.transform = 'translateX(0)';
        point1.style.backgroundColor = "#9bc156";
        point2.style.backgroundColor = "white";
        point3.style.backgroundColor = "white";
        point4.style.backgroundColor = "white";

    })
});

point2.addEventListener('click', function () {
    page.forEach(Element => {
        Element.style.transform = 'translateX(-100vw)';
        Element.style.transition = '1.5s';
        point2.style.backgroundColor = "#9bc156";
        point1.style.backgroundColor = "white";
        point3.style.backgroundColor = "white";
        point4.style.backgroundColor = "white";
    })
});
point3.addEventListener('click', function () {
    page.forEach(Element => {
        Element.style.transform = 'translateX(-200vw)';
        Element.style.transition = '1.5s';
        point3.style.backgroundColor = "#9bc156";
        point1.style.backgroundColor = "white";
        point2.style.backgroundColor = "white";
        point4.style.backgroundColor = "white";
    })
});
point4.addEventListener('click', function () {
    page.forEach(Element => {
        Element.style.transform = 'translateX(-300vw)';
        Element.style.transition = '1.5s';
        point4.style.backgroundColor = "#9bc156";
        point3.style.backgroundColor = "white";
        point1.style.backgroundColor = "white";
        point2.style.backgroundColor = "white";
    })
});

// menu product 
const menuProduct = document.querySelectorAll(".ho-menu-product ul li");
const topMenuProcuct = document.querySelector(".menu-change");

menuProduct.forEach(active => {
    active.addEventListener('click', () => {
        topMenuProcuct.textContent = active.textContent;
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
    document.querySelector('.rm_pages_container3_rose .rose').style.display = "none";
    point1.click();

    /*  document.querySelector('.ho-section-info-product').classList.remove("section-none"); */

})
menuProduct[1].addEventListener('click', () => {
    document.querySelector('.rm_pages_container2').classList.add("section-none");
    document.querySelector('.rm_pages_container3').classList.add("section-none");
    document.querySelector('.rm_pages_container').classList.remove("section-none");
    document.querySelector('#rm').classList.remove("section-none");
    document.querySelector('.page-item4').classList.add("section-none");
    document.querySelector('.rm_pages_container3_rose .rose').style.display = "none";
    point1.click();

})
menuProduct[2].addEventListener('click', () => {
    document.querySelector('.rm_pages_container2').classList.add("section-none");
    document.querySelector('.rm_pages_container').classList.add("section-none");
    document.querySelector('.rm_pages_container3').classList.remove("section-none");
    document.querySelector('#rm').classList.remove("section-none");
    document.querySelector('.page-item4').classList.remove("section-none");
    document.querySelector('.rm_pages_container3_rose .rose').style.display = "block";
    point1.click();
})



