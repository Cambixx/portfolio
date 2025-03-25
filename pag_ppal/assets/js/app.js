/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validar si las constantes existen */
if(navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}

/*===== MENU SHOW =====*/
/* Validar si las constantes existen */
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
  const navMenu = document.getElementById('nav-menu')
  //Cuando hacemos click en cada nav link, quitamos el icono menu
  navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SWIPER PROJECTS ===============*/
if(window.matchMedia('(max-width: 450px)').matches) {
let swiperProjects = new Swiper(".projects__container", {
  loop: true,
  spaceBetween: 144,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },

  effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 1,
    coverflowEffect: {
      rotate: 10,
      stretch: 0,
      depth: 300,
      modifier: 5,
      slideShadows: false,
    },

  // breakpoints: {
  //   1200: {
  //     slidesPerView: 2,
  //     spaceBetween: -56,
  //   },
  // },

  // breakpoints: {
  //   1200: {
  //     slidesPerView: "auto",
  //     spaceBetween: 30,
  //   },
  // },
});
}else{
  let swiperProjects = new Swiper(".projects__container", {
    loop: true,
    spaceBetween: 220,
  
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    //mousewheel: true,
  
  
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },
  
    effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 2,
      coverflowEffect: {
        rotate: 20,
        stretch: 0,
        depth: 200,
        modifier: 4,
        slideShadows: false,
      },
  
    // breakpoints: {
    //   1200: {
    //     slidesPerView: 2,
    //     spaceBetween: -56,
    //   },
    // },
  
    // breakpoints: {
    //   1200: {
    //     slidesPerView: "auto",
    //     spaceBetween: 30,
    //   },
    // },
  });
}

/*=============== SWIPER TESTIMONIAL ===============*/
let swiperTestimonial = new Swiper(".testimonial__container", {
  grabCursor: true,
  
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactName = document.getElementById('contact-name'),
      contactEmail = document.getElementById('contact-email'),
      contactProject = document.getElementById('contact-project'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
  e.preventDefault()

  // Check if field has a value
  if (contactName.value === '' || contactEmail.value === '' || contactProject.value === '') {
    // Add and remove color
    contactMessage.classList.remove('color-blue')
    contactMessage.classList.add('color-red')

    // Show message
    contactMessage.textContent = 'Escriba todos los campos'
  }else{
    // ServiceID - templateID - #form - publicKey
    emailjs.sendForm('service_lmtr831','template_vo9w4tl','#contact-form','qv1DFz1U1-php6Z9X')
      .then(() => {
        // Show message and add color
        contactMessage.classList.add('color-blue')
        contactMessage.textContent = 'Mensaje Enviado'

        //Remove message after 5 seconds
        setTimeout(() => {
          contactMessage.textContent = ''
        }, 5000)
      }, (error) => {
        alert('ALGO HA FALLADO...', error)
      })

      // To clear the input field
      contactName = ''
      contactEmail = ''
      contactProject = ''
  }
}

contactForm.addEventListener('submit', sendEmail)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
  const scrollY = window.pageYOffset

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 58,
          sectionId = current.getAttribute('id'),
          sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
    
    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add('active-link')
    }else{
      sectionsClass.classList.remove('active-link')
    }
  })
}

window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
  const scrollUp =document.getElementById('scroll-up')
  //When the scroll is higher than 350 vh, add the show-scroll class
  //to the a tag width the scrollup
  this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

const perfClaro = document.querySelector('.perfil__claro')
const perfOscuro = document.querySelector('.perfil__oscuro')

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme') 
const selectedIcon = localStorage.getItem('selected-icon') 

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-clear-line' : 'ri-sun-line';

// We validate if the user previously chose a topic
if(selectedTheme) {
  //If validation if fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-clear-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually width the button
themeButton.addEventListener('click', () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  perfClaro.classList.toggle('active')
  perfOscuro.classList.toggle('active')

  // We save the theme and the current icon that the user chose
  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
  const header = document.getElementById('header')

  // When the scroll is greater than 50 vh, add the scroll-header class to the header tag
  this.scrollY >= 50 ? header.classList.add('bg-header') : header.classList.remove('bg-header')
}

window.addEventListener('scroll', scrollHeader)

/*=============== CANVAS ===============*/

const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')
canvas.width = 500
canvas.height = 500
ctx.fillStyle = 'grey'

class Ball {
  constructor(effect) {
    this.effect = effect
    this.x = this.effect.width * 0.5
    this.y = this.effect.height * 0.5
    this.radius = Math.random() * 6 + 3
    this.speedX = Math.random() - 0.5
    this.speedY = Math.random() - 0.5
  }
  update(){
    if (this.x < this.radius || this.x > this.effect.width - this.radius) this.speedX *= -1
    if (this.y < this.radius || this.y > this.effect.height - this.radius) this.speedY *= -1
    this.x += this.speedX
    this.y += this.speedY
  }
  draw(context){
    context.beginPath()
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
    context.fill()
  }
  reset(){
    this.x = this.effect.width * 0.5
    this.y = this.effect.height * 0.5
  }
}

class MetaballsEffect {
  constructor(width, height){
    this.width = width
    this.height = height
    this.MetaballsArray = []
  }
  init(numberOfBalls){
    for (let i = 0; i < numberOfBalls; i++) {
      this.MetaballsArray.push(new Ball(this))
    }
  }
  update(){
    this.MetaballsArray.forEach(metaball => metaball.update())
  }
  draw(context){
    this.MetaballsArray.forEach(metaball => metaball.draw(context))
  }
  reset(newWidth, newHeight){
    this.width = newWidth
    this.height = newHeight
    this.MetaballsArray.forEach(metaball => metaball.reset())
  }
}

const effect = new MetaballsEffect(canvas.width, canvas.height)
effect.init(20)

function animate() {
  ctx.clearRect(0,0,canvas.width,canvas.height)
  effect.update()
  effect.draw(ctx)
  requestAnimationFrame(animate)
}

animate()

// window.addEventListener('resize', function(){
//   canvas.width = window.innerWidth
//   canvas.height = window.innerHeight
//   ctx.fillStyle = 'grey'
//   effect.reset(canvas.width, canvas.height)
// })

/*=============== FRASES ===============*/

let frases = [
  {
    "f":"Vive de tal manera que, cuando tus hijos piensen en justicia, cariño e integridad, piensen en ti",
    "a":"H. Jackson Brown"
  },
  {
    "f":"Si deseas ver la grandeza real de un hombre, observa la forma en que trata a sus inferiores, no a sus iguales",
    "a":"J. K. Rowling"
  },
  {
    "f":"No es héroe el que carece de miedo, lo es quien lo siente, lo enfrenta y lo supera",
    "a":"Roberto Gómez Bolaños"
  },
  {
    "f":"El ingrediente básico es mover ese trasero y empezar a actuar. Es tan simple como eso. Muchas personas tienen ideas, pero pocas deciden hacer algo al respecto hoy. No mañana. No la próxima semana. Hoy. El verdadero emprendedor no es un soñador, es un hacedor",
    "a":"Nolan Bushnell"
  },
  {
    "f":"Es mejor quemarse que apagarse lentamente",
    "a":"Kurt Cobain"
  },
  {
    "f":"Fe significa no querer saber la verdad",
    "a":"Friedrich Nietzsche"
  },
  {
    "f":"El escritor, muchas veces, es como un caballo de carreras que ha perdido su jinete y ya no sabe porque está corriendo ni dónde está la meta y, sin embargo, se le exige seguir corriendo aunque no sepa ni hacia dónde ni por qué razón",
    "a":"Antonio Gala"
  },
  {
    "f":"Los hombres son criaturas muy raras: la mitad censura lo que practica ; la otra mitad practica lo que censura ; el resto siempre dice y hace lo que debe",
    "a":"Benjamin Franklin"
  },
  {
    "f":"Hay calumnias frente a las cuales la inocencia misma se siente desfallecer",
    "a":"Napoleón Bonaparte"
  },
  {
    "f":"No se sabe quien goza más; si la mujer cuando se casa o el hombre cuando enviuda",
    "a":"Anatole France"
  },
  {
    "f":"La muerte es una vida vivida. La vida es una muerte que viene",
    "a":"Jorge Luis Borges"
  },
  {
    "f":"Sólo el médico y el dramaturgo gozan del raro privilegio de cobrar las desazones que nos dan",
    "a":"Santiago Ramón y Cajal"
  },
  {
    "f":"La ternura nace en el momento en que el hombre es escupido hacia el umbral de la madurez y se da cuenta, angustiado, de las ventajas de la infancia que, como niño, no comprendía",
    "a":"Milan Kundera"
  },
  {
    "f":"Lo primero que deben preguntarse los que aspiran al poder es si serán capaces de soportar, al mismo tiempo, la adulación, el odio y la crítica a todo lo que hagan",
    "a":"Mario Sarmiento"
  },
  {
    "f":"La vida no es significado; la vida es deseo",
    "a":"Charles Chaplin"
  },
  {
    "f":"A menudo los grandes son desconocidos o peor, mal conocidos",
    "a":"Tomás Carlyle"
  },
  {
    "f":"No hay mayor desdicha en las desdichas que haber sido dichoso un desdichado",
    "a":"Luis Vélez de Guevara"
  },
  {
    "f":"Hay una generación cuyos dientes son espadas y cuyas mandíbulas son cuchillos de degüello, para comerse a los afligidos de sobre la tierra y a los pobres de entre la humanidad",
    "a":"Sagradas Escrituras"
  },
  {
    "f":"Discúlpeme, no le había reconocido: he cambiado mucho",
    "a":"Oscar Wilde"
  },
  {
    "f":"Seremos fuertes a medida que estemos unidos, débiles a medida que estemos divididos",
    "a":"Albus Dumbledore"
  },
  {
    "f":"El único hombre que no se equivoca es el que nunca hace nada",
    "a":"Johann W. Goethe"
  },
  {
    "f":"El día que pueda tocar una estrella, ese día dejaré de vivir en un país tan injusto",
    "a":"Mahatma Gandhi"
  },
  {
    "f":"¿Que armas mas poderosas que las ideas? Ni tenemos otras, ni las hay mejores",
    "a":"Manuel Gómez Morín"
  },
  {
    "f":"En todo placer y goce de la vida hay algo ficticio, como un esfuerzo o propósito personal para conseguir que aquello nos dé de veras satisfacción. Esta es la impureza del placer y, al mismo tiempo, una ley de vida",
    "a":"Gilbert K. Chesterton"
  },
  {
    "f":"Seas quien fueres o lo que hagas, si deseas algo con firmeza, es por que ese deseo nació antes en el alma del universo, y es tu misión en esta tierra",
    "a":"Paulo Coelho"
  },
  {
    "f":"La Tierra es la cuna de la humanidad, pero no podemos vivir para siempre en la cuna",
    "a":"Konstantín Tsiolkovski"
  },
  {
    "f":"La razón, como un buen alfarero, da hermosa forma al alma",
    "a":"Demófilo"
  },
  {
    "f":"Me enamoré de la vida, es la única que no me dejará sin antes yo hacerlo",
    "a":"Pablo Neruda"
  },
  {
    "f":"Gastamos dinero que no tenemos, en cosas que no necesitamos, para impresionar a gente a la que no le importamos",
    "a":"Will Smith"
  },
  {
    "f":"Lo importante no es mantenerse vivo sino mantenerse humano",
    "a":"George Orwell"
  },
  {
    "f":"Si no tardas mucho, te espero toda la vida",
    "a":"Oscar Wilde"
  },
  {
    "f":"Si los malos supieran que buen negocio es ser bueno, serían buenos aunque sea por negocio",
    "a":"Facundo Cabral"
  },
  {
    "f":"Cuando una ley es injusta, lo correcto es desobedecer",
    "a":"Mahatma Gandhi"
  },
  {
    "f":"Entre un choque de miradas una sonrisa es el mejor accidente",
    "a":"Anónimo"
  },
  {
    "f":"Me dijeron que para enamorarla tenia que hacerla sonreír.El problema es que cada vez que sonríe, me enamoro yo",
    "a":"Bob Marley"
  },
]

const boton_frase = document.querySelector('.boton_frase')
const frase = document.querySelector('.frase')
const autor = document.querySelector('.autor')

function obtenerFrase() {
  let numero = Math.floor(Math.random() * 35)
  
  console.log(frases[numero].f)
  frase.textContent = "<< "+frases[numero].f+" >>"
  autor.textContent = frases[numero].a
}

obtenerFrase()

boton_frase.addEventListener('click', () => {  
  obtenerFrase()

  gsap.from(frase, {
    duration: 0.3, 
    opacity: 0, 
    //delay: 0.3, 
    ease: 'power1.in'
  })
  gsap.to(frase, {
    duration: 0.3, 
    opacity: 1, 
    //delay: 0.3, 
    ease: 'power1.in'
  })
  gsap.from(autor, {
    duration: 0.3, 
    opacity: 0, 
    delay: 0.3, 
    ease: 'power1.in'
  })
  gsap.to(autor, {
    duration: 0.3, 
    opacity: 1, 
    delay: 0.3, 
    ease: 'power1.in'
  })
  
  
})

/*=============== GSAP ===============*/

//gsap.fromTo('body', {opacity: 0, delay: 0.7}, {duration: 2, opacity: 1, ease:'power1.in'})
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Flip);

gsap.to('body', {
  duration: 1.4, 
  opacity: 1, 
  delay: 0.3, 
  ease: 'power1.in'
})


//Skills

gsap.from('.skills .section__title', {
  scrollTrigger: {
    trigger: '.skills',
    toggleActions: 'restart'
  },
  y: -50,
  ease: 'bounce.out',
  duration: 1
})
gsap.from('.skills .section__subtitle', {
  scrollTrigger: {
    trigger: '.skills',
    toggleActions: 'restart'
  },
  y: -50,
  ease: 'bounce.out',
  duration: 1.1
})
gsap.from('.skills__title', {
  scrollTrigger: {
    trigger: '.skills__title',
    toggleActions: 'restart'
  },
  y: -50,
  ease: 'bounce.out',
  duration: 1.1
})

gsap.from('.skills__content:nth-child(1) .skills__data', {
  scrollTrigger: {
    trigger: '.ri-code-s-slash-line',
    //start: 'bottom 200px',
    end: 'start 30%',
    //markers: true,
    scrub:1,
    toggleActions: 'restart'
  },
  x: -400,
  stagger: { 
    each: 0.1,
    from: "end",
    ease: "power2.inOut",
  },
  duration: 2
})

gsap.from('.skills__content:nth-child(2) .skills__data', {
  scrollTrigger: {
    trigger: '.ri-edit-line',
    //start: 'bottom 200px',
    end: 'start 25%',
    //markers: true,
    scrub:1,
    toggleActions: 'restart'
  },
  x: 400,
  stagger: .2,
  duration: 2
})

//Estudios

gsap.from('.qualification .section__title', {
  scrollTrigger: {
    trigger: '.qualification',
    toggleActions: 'restart'
  },
  y: -50,
  ease: 'bounce.out',
  duration: 1
})
gsap.from('.qualification .section__subtitle', {
  scrollTrigger: {
    trigger: '.qualification',
    toggleActions: 'restart'
  },
  y: -50,
  ease: 'bounce.out',
  duration: 1.1
})

gsap.from('.qualification__content .qualification__title', {
  scrollTrigger: {
    trigger: '.qualification__title',
    toggleActions: 'restart'
  },
  x: -120,
  ease: 'bounce.out',
  duration: 1
})
gsap.from('.qualification__info .qualification__name', {
  scrollTrigger: {
    trigger: '.qualification__name',
    toggleActions: 'restart'
  },
  x: -130,
  ease: 'bounce.out',
  duration: 1.1
})
gsap.from('.qualification__info .qualification__country', {
  scrollTrigger: {
    trigger: '.qualification__info .qualification__country',
    toggleActions: 'restart'
  },
  x: -140,
  ease: 'bounce.out',
  duration: 1.2
})
gsap.from('.qualification__info .qualification__year', {
  scrollTrigger: {
    trigger: '.qualification__info .qualification__year',
    toggleActions: 'restart'
  },
  x: -150,
  ease: 'bounce.out',
  duration: 1.3
})
gsap.from('.qualification__name .qualification__country', {
  scrollTrigger: {
    trigger: '.qualification__name .qualification__country',
    toggleActions: 'restart'
  },
  x: -160,
  ease: 'bounce.out',
  duration: 1.4
})
gsap.from('.qualification__name .qualification__year', {
  scrollTrigger: {
    trigger: '.qualification__name .qualification__year',
    toggleActions: 'restart'
  },
  x: -170,
  ease: 'bounce.out',
  duration: 1.5
})

//Projects

gsap.from('.projects .section__title', {
  scrollTrigger: {
    trigger: '.projects',
    toggleActions: 'restart'
  },
  y: -50,
  ease: 'bounce.out',
  duration: 1
})
gsap.from('.projects .section__subtitle', {
  scrollTrigger: {
    trigger: '.projects',
    toggleActions: 'restart'
  },
  y: -50,
  ease: 'bounce.out',
  duration: 1.1
})

//Contact

gsap.from('.contact .section__title', {
  scrollTrigger: {
    trigger: '.contact',
    toggleActions: 'restart'
  },
  y: -50,
  ease: 'bounce.out',
  duration: 1
})
gsap.from('.contact .section__subtitle', {
  scrollTrigger: {
    trigger: '.contact',
    toggleActions: 'restart'
  },
  y: -50,
  ease: 'bounce.out',
  duration: 1.1
})

gsap.from('.contact__title', {
  scrollTrigger: {
    trigger: '.contact__title',
    toggleActions: 'restart'
  },
  y: -50,
  ease: 'bounce.out',
  duration: 1.2
})
gsap.from('.contact__data', {
  scrollTrigger: {
    trigger: '.contact__data',
    toggleActions: 'restart'
  },
  x: -150,
  ease: 'bounce.out',
  stagger: .2,
  duration: 1.2
})


gsap.from('.contact__form-div', {
  scrollTrigger: {
    trigger: '.contact__form-div',
    toggleActions: 'restart'
  },
  x: 150,
  ease: 'bounce.out',
  stagger: .2,
  duration: 1
})

gsap.from('button.contact__button', {
  scrollTrigger: {
    trigger: 'button.contact__button',
    toggleActions: 'restart'
  },
  y: -50,
  ease: 'bounce.out',
  duration: 1
})
