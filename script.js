let backgroundImage = document.querySelector('.imageShow')
let headers = ['Discover innovative ways to decorate', 'We are available all across the globe', 
    ' Manufactured with the best materials'
]
let images = ['md:bg-[url(./images/desktop-image-hero-1.jpg)]','md:bg-[url(./images/desktop-image-hero-2.jpg)]','md:bg-[url(./images/desktop-image-hero-3.jpg)]'];

    let mobileImages =['bg-[url(./images/mobile-image-hero-1.jpg)]','bg-[url(./images/mobile-image-hero-2.jpg)]',
        'bg-[url(./images/mobile-image-hero-3.jpg)]']

        let paragraphText =[
            "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
            "With stores all over the world, it's easy for you to find furniture for your home or place of business.  Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
            "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
          ]


let header = document.querySelector('.title');
let rightButton = document.querySelector('.rightBtn')
let leftButton = document.querySelector('.leftBtn')
let paragraph = document.querySelector('.paragraph')
let hamburger = document.querySelector('.hamburger')
let mobileLeftButton = document.querySelector('.mobileleftBtn')
let mobileRightButton = document.querySelector('.mobilerightBtn')
let logo = document.querySelector('.logo')
let navBar = document.querySelector('.navbar')
let menu = document.querySelector('.menu')
let body = document.querySelector('body')
let padding = document.querySelector('.filler')
let rightValue = 0




rightButton.addEventListener('click', (e)=>{
    e.stopPropagation()
   
    backgroundImage.classList.remove(images[rightValue], mobileImages[rightValue], 'images/desktop-image-hero-1.jpg')
    if(rightValue >= 2){rightValue =0}
    else{rightValue++}
    backgroundImage.classList.add(images[rightValue] , mobileImages[rightValue])
    paragraph.innerHTML = paragraphText[rightValue]
    header.innerHTML = headers[rightValue]
   
 
})

leftButton.addEventListener('click', (e)=>{
    e.stopPropagation()
    
    backgroundImage.classList.remove(images[rightValue], mobileImages[rightValue])
    if(rightValue == 0){rightValue = 2}
    else{rightValue--}

    backgroundImage.classList.add(images[rightValue] , mobileImages[rightValue])
    paragraph.innerHTML = paragraphText[rightValue]
    header.innerHTML = headers[rightValue]
   
  
   
})

mobileLeftButton.addEventListener('click', (e)=>{
    e.stopPropagation()
    
    backgroundImage.classList.remove(images[rightValue], mobileImages[rightValue])
    if(rightValue == 0){rightValue = 2}
    else{rightValue--}

    backgroundImage.classList.add(images[rightValue] , mobileImages[rightValue])
    paragraph.innerHTML = paragraphText[rightValue]
    header.innerHTML = headers[rightValue]
   
  
   
})


mobileRightButton.addEventListener('click', (e)=>{
    e.stopPropagation()
   
    backgroundImage.classList.remove(images[rightValue], mobileImages[rightValue])
    if(rightValue >= 2){rightValue =0}
    else{rightValue++}
    backgroundImage.classList.add(images[rightValue] , mobileImages[rightValue])
    paragraph.innerHTML = paragraphText[rightValue]
    header.innerHTML = headers[rightValue]
   
 
})





hamburger.addEventListener('click', () => {
let source = hamburger.getAttribute('src')

if (source == './images/icon-hamburger.svg'){
    hamburger.setAttribute('src', './images/icon-close.svg')
}

else{
    hamburger.setAttribute('src', './images/icon-hamburger.svg')

}

logo.classList.toggle('hidden')
logo.classList.toggle('z-1')
navBar.classList.toggle('bg-white')
navBar.classList.toggle('pb-0')
navBar.classList.toggle('z-1')
navBar.classList.toggle('fixed')
navBar.classList.toggle('w-[100%]')
menu.classList.toggle('flex')
menu.classList.toggle('text-black')
menu.classList.toggle('z-1')
menu.classList.toggle('hidden')
menu.classList.toggle('gap-3')
menu.classList.toggle('justify-between')
menu.classList.toggle('pr-4')


padding.classList.toggle('hidden')
  
  
    
})
