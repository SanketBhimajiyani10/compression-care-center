// document.addEventListener("DOMContentLoaded", () => {
//     if (window.innerWidth > 989) {
//       document.querySelectorAll('[id^="Details-"] summary').forEach((summary) => {
//         if (summary.closest('menu-drawer, header-drawer')) return;
  
//         summary.setAttribute('role', 'button');
//         summary.setAttribute('aria-expanded', summary.parentNode.hasAttribute('open'));
  
//         if (summary.nextElementSibling?.id) {
//           summary.setAttribute('aria-controls', summary.nextElementSibling.id);
//         }
  
//         summary.addEventListener('click', (event) => {
//           const detailsElement = event.currentTarget.closest('details');
//           const isOpen = detailsElement.hasAttribute('open');
  
//           // Close all open details
//           document.querySelectorAll('[id^="Details-"]').forEach((details) => {
//             details.removeAttribute('open');
//             const otherSummary = details.querySelector('summary');
//             if (otherSummary) {
//               otherSummary.setAttribute('aria-expanded', 'false');
//             }
//           });
  
//           // Toggle the clicked summary: If already open, close it; otherwise, open it
//           if (!isOpen) {
//             detailsElement.setAttribute('open', 'true');
//             event.currentTarget.setAttribute('aria-expanded', 'true');
//           } else {
//             detailsElement.removeAttribute('open');
//             event.currentTarget.setAttribute('aria-expanded', 'false');
//           }
//         });
  
//         summary.addEventListener('mouseenter', () => {
//           // Close all other open details elements
//           document.querySelectorAll('[id^="Details-"]').forEach((details) => {
//             if (details !== summary.parentNode) {
//               details.removeAttribute('open');
//               const otherSummary = details.querySelector('summary');
//               if (otherSummary) {
//                 otherSummary.setAttribute('aria-expanded', 'false');
//               }
//             }
//           });
  
//           summary.parentNode.setAttribute('open', 'true');
//           summary.setAttribute('aria-expanded', 'true');
//         });
  
//         summary.parentElement.addEventListener('keyup', (event) => {
//           if (event.key === "Escape") {
//             summary.parentNode.removeAttribute('open');
//             summary.setAttribute('aria-expanded', 'false');
//           }
//         });
//       });
  
//       // Close details when hovering over top-level menu links
//       document.querySelectorAll('.header__inline-menu > ul > li > a').forEach((link) => {
//         link.addEventListener('mouseenter', () => {
//           document.querySelectorAll('[id^="Details-"]').forEach((details) => {
//             details.removeAttribute('open');
//             const summary = details.querySelector('summary');
//             if (summary) {
//               summary.setAttribute('aria-expanded', 'false');
//             }
//           });
//         });
//       });
//     }
//   });
  

$('.homefilter').on('click',function(){
    var gender=$('.gender-link.selected').data('link');
    var style=$('.style-link.selected').data('link')
    var compression=$('.compression-link.selected').data('link')
    var germent=$('.germent-link.selected').data('link')
    console.log(gender)
    console.log(style)
    var startl=0;
    var url='collections/all/';
    if(gender !=undefined){
          url +=gender;
          startl=1;
    }
    if(style !=undefined){
          url +=((startl)?'+':'')+style;
          startl=1;
    }
    if(compression !=undefined){
          url +=((startl)?'+':'')+compression;
          startl=1;
    }
    if(germent !=undefined){
          url +=((startl)?'+':'')+germent;
          startl=1;
    }
   console.log(url)
   window.location.href=url;
  })
  $('.gender-link').on('click',function(){
      if($(this).hasClass('selected')){
          $('.gender-link').removeClass('selected');
      }else{
          $('.gender-link').removeClass('selected');
            $(this).addClass('selected')
      }
          
  })
  $('.style-link').on('click',function(){
      if($(this).hasClass('selected')){
          $('.style-link').removeClass('selected');
      }else{
          $('.style-link').removeClass('selected');
            $(this).addClass('selected')
      }
          
  })
  $('.compression-link').on('click',function(){
      if($(this).hasClass('selected')){
          $('.compression-link').removeClass('selected');
      }else{
          $('.compression-link').removeClass('selected');
            $(this).addClass('selected')
      }
          
  })
  $('.germent-link').on('click',function(){
      if($(this).hasClass('selected')){
          $('.germent-link').removeClass('selected');
      }else{
          $('.germent-link').removeClass('selected');
            $(this).addClass('selected')
      }
          
  })