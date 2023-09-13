// STAR RATING
/////////////////////////////
var stars = document.querySelectorAll('.stars a');
stars.forEach((item, index1) => {
    item.addEventListener('click', () => {
        stars.forEach((star, index2) => {
            index1 >= index2 ? star.classList.add('active') : star.classList.remove('active')
        })
    })
})
/////////////////////////////
// SLIDER
var indexValue = 1;
ShowImg(indexValue);
function Slide(e){ShowImg(indexValue = e);}
function SideSlide(e){ShowImg(indexValue += e);}
function ShowImg(e){
    var i;
    const img = document.querySelectorAll(".slider_img");
    const sliders = document.querySelectorAll(".btn-sliders span");
    if (e > img.length) {indexValue = 1;}
    if (e < 1) {indexValue = img.length;}
    for (let i = 0; i < img.length; i++) {
        img[i].style.display = 'none';
    }
    for (let i = 0; i < sliders.length; i++) {
        sliders[i].style.background = 'white';
    }
    img[indexValue-1].style.display = 'block';
    sliders[indexValue-1].style.background = '#03ADAA';
}


/////////////////////////////
// MENU
var btn_about = document.querySelector("#AboutBtn");
var btn_promotion = document.querySelector("#PromotionBtn");
var btn_before_after = document.querySelector("#Before-AfterBtn");
var btn_comment = document.querySelector("#CommentBtn");
var about = document.querySelector("#About");
var promotion = document.querySelector("#Promotion");
var before_after = document.querySelector("#BeforeAfter");
var comment = document.querySelector("#Comment");


btn_about.addEventListener('click', (e) =>{
    e.target.style.color = "#03ADAA";
    btn_promotion.style.color = "#555555";
    btn_before_after.style.color = "#555555";
    btn_comment.style.color = "#555555";
    about.style.display='block';
    promotion.style.display='none';
    before_after.style.display='none';
    comment.style.display='none';
})
btn_promotion.addEventListener('click', (e) =>{
    e.target.style.color = "#03ADAA";
    btn_about.style.color = "#555555";
    btn_before_after.style.color = "#555555";
    btn_comment.style.color = "#555555";
    about.style.display='none';
    promotion.style.display='block';
    before_after.style.display='none';
    comment.style.display='none';
})
btn_before_after.addEventListener('click', (e) =>{
    e.target.style.color = "#03ADAA";
    btn_promotion.style.color = "#555555";
    btn_about.style.color = "#555555";
    btn_comment.style.color = "#555555";
    about.style.display='none';
    promotion.style.display='none';
    before_after.style.display='block';
    comment.style.display='none';
})
btn_comment.addEventListener('click', (e) =>{
    e.target.style.color = "#03ADAA";
    btn_promotion.style.color = "#555555";
    btn_before_after.style.color = "#555555";
    btn_about.style.color = "#555555";
    about.style.display='none';
    promotion.style.display='none';
    before_after.style.display='none';
    comment.style.display='block';
})
