/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
// import anime from 'animejs';

// export const onClientEntry = () => {

//     document.addEventListener("DOMContentLoaded", () => {
        
//         let headerBlock = document.querySelector('.rdwn-header')
//         let footerBlock = document.querySelector('.mainFooter')
//         let heroBlock = document.querySelector('.rdwn-main-section')
//         let workBlock = document.querySelector('.rdwn-works-main')

//         const blocks = []

//         if (headerBlock){
//             blocks.push(headerBlock)
//         }

//         if (footerBlock){
//             blocks.push(footerBlock)
//         }

//         if (heroBlock){
//             blocks.push(heroBlock)
//         }

//         if (workBlock){
//             blocks.push(workBlock)
//         }


//         console.log(blocks)

//         blocks.forEach(block => {
//             block.style.opacity = '0'
//         });



//         anime({
//             targets: blocks,
//             opacity: 1,
//             duration: 600,
//             delay: anime.stagger(600),
//             easing: 'easeInOutExpo'
//         });


//     });

// }