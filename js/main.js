// Start Banner

// const slides = document.querySelectorAll(".slide");
// let move = 0;
// setInterval(()=> {
//         move += 100;
//         if (move >= 300) move = 0;
//         slides.forEach(slide => {
//             slide.style.cssText = `transform: translateX(${-move}%)`;
//         })
    
// }, 1000);

// End Banner


const el = document.querySelector(".scrolling");
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

console.log(height);
console.log(el);


window.addEventListener("scroll", () => {
    const scroll = document.documentElement.scrollTop;
    el.style.width = `${(scroll / height) * 100}%`;
});


/**
 * Model NewsLetter
*/
const closeBtn = document.querySelectorAll(".close");
const modelNewsLetter = document.querySelector("#newsLetter");

function closeNewsLetter(ele) {
    ele.classList.add("hideModelNewsLetter");
}
closeBtn[0].addEventListener("click", ()=> {
    closeNewsLetter(modelNewsLetter);
});


/**
 * Notifiaction
*/
const notification = document.getElementById("notification");
closeBtn[1].addEventListener("click", ()=> {
    closeNewsLetter(notification);
})

// to make auto count for cols section categories
// const categories = document.getElementsByClassName('category');
// const content_cate = document.querySelector("#categories .content_cate");
// var cols = categories.length;
// // content_cate.style.cssText = `grid-template-columns: repeat(${cols}, minmax(calc(25% - 8px), 1fr));`;


// ======================================= Start Sign In / Sign Up =======================
// const sign_in_btn = document.querySelector("#sign-in-btn");
// const sign_up_btn = document.querySelector("#sign-up-btn");
// const container = document.querySelector(".container");
// const closeBtnLog = document.getElementById("close");
// const secLog = document.getElementById("signIn_Up");

// closeBtnLog.addEventListener("click", ()=> {
//     secLog.classList.add("close_log");
//     secLog.classList.re("close_log");
// });

// sign_up_btn.addEventListener("click", () => {
//   container.classList.add("sign-up-mode");
// });

// sign_in_btn.addEventListener("click", () => {
//   container.classList.remove("sign-up-mode");
// });

/* using cdnjs type for text animation this for you know abou it */
// var typed5 = new Typed('.type', {
//     strings: ['1 Some <i>strings</i> with', '2 Some <strong>HTML</strong>', '3 Chars &times; &copy;'],
//     typeSpeed: 30,
//     backSpeed: 30,
//     cursorChar: '_',
//     shuffle: true,
//     smartBackspace: false,
//     loop: true
//   });


// Sidebar navigation

const btn_bars = document.querySelector(".fa-bars");
const btn_close = document.querySelector(".fa-xmark");

const aside = document.querySelector("#sidebar .overlay");
const asideNav = document.querySelector("#sidebar aside");

function showHideItem() {
    asideNav.classList.toggle("show");
    aside.classList.toggle("show");
}

btn_bars.addEventListener("click", ()=> {
    showHideItem();
});

btn_close.addEventListener("click", ()=> {
    showHideItem();
});


const lis_drop_menu = [...document.getElementsByClassName("btn_inside")];
// const menus = [...document.querySelectorAll("ul.inside")];

lis_drop_menu.forEach((li)=> {
    const btnDropMenu1 = li.querySelector("i.first");
    const btnDropMenu2 = li.querySelector("i.secand");
    const btnDropMenuLink = li.querySelector("li a");
    function toRmoveClass () {
        lis_drop_menu.forEach((liItem)=> {
            if(liItem !== li) {
                liItem.classList.remove("show_inside");
            }
        })
        li.classList.toggle("show_inside");
    }
    btnDropMenu1.addEventListener("click", toRmoveClass);
    btnDropMenu2.addEventListener("click", toRmoveClass);
    btnDropMenuLink.addEventListener("click", toRmoveClass);
})

// for (let i = 0; i < btn_inside.length; i++) {
//     btn_inside[i].addEventListener("click", ()=> {
//         for (let j = 0; j < btn_inside.length; j++) {
//             list_inside[j].classList.remove("show_inside");
//         }
//         list_inside[i].classList.toggle("show_inside");
        
//         btn_inside[i].addEventListener("click", ()=> {
//             list_inside[i].classList.toggle("show_inside");
//         });
//     })
// }


const lis_drop_menu_category = [...document.getElementsByClassName("btn_inside_category")];
// const menus = [...document.querySelectorAll("ul.inside")];

lis_drop_menu_category.forEach((li)=> {
    const btnDropMenuLink = li.querySelector("li p");
    function toRmoveClass () {
        lis_drop_menu_category.forEach((liItem)=> {
            if(liItem !== li) {
                liItem.classList.remove("show_inside");
            }
        })
        li.classList.toggle("show_inside");
        
    }
    li.addEventListener("click", toRmoveClass);
})