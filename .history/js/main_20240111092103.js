// const showMenu = (toggleId, navId) => {
//     const toggle = document.getElementById(toggleId),
//             nav = document.getElementById(navId)
 
//     toggle.addEventListener('click',() => {
 
        //add show-menu class to nav menu 
//         nav.classList.toggle('show-menu')
//         toggle.classList.toggle('show-icon')
//     })    
//  }
 
 //gọi hàm & truyền giá trị
//  showMenu('nav-toggle','nav-menu')
 

 const sr = ScrollReveal({
    origin:'top',
    distance:'60px',
    duration:2500,
    delay:400,
    reset:true //Animations repeat
})
 
sr.reveal('.header')
sr.reveal('.caption',{origin:'bottom'})// đổi hướng di chuyển từ dưới lên, mặc định là top
// sr.reveal('.enjoy__card,.popular__card',{interval:100}) // chỉ lấy từ lớp có dữ liệu không lấy container
sr.reveal('.slider',{origin:'right'})
sr.reveal('.feature',{origin:'left'})

sr.reveal('.',{origin:'left'})
sr.reveal('.simple-main',{origin:'right'})

sr.reveal('.simple-img',{origin:'top'})
sr.reveal('.now-image',{origin:'top'})
sr.reveal('.img_gallery3',{origin:'top'})
sr.reveal('.img_gallery4',{origin:'top'})
sr.reveal('.img_gallery5',{origin:'top'})
sr.reveal('.img_gallery6',{origin:'top'})
