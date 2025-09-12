
document.querySelector('body')

document.querySelectorAll('.nav-bar').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      let target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({
        behavior: "smooth"
      });
    });
  });

  document.querySelector('.up-icon').addEventListener('click',function(e){
     e.preventDefault()
     document.querySelector('.header').scrollIntoView({
        behavior: "smooth"
     })
  })
  document.querySelector('.nav-barr').addEventListener('click',function(e){
     e.preventDefault()
     document.querySelector('.contact-pagees').scrollIntoView({
        behavior: "smooth"
     })
  })

  document.querySelector('.btn-1').addEventListener('click', function(e){
    e.preventDefault()
    document.querySelector('.contact-pagees').scrollIntoView({
        behavior: "smooth"
    })
  })
  document.querySelector('.btn-3').addEventListener('click', function(e){
    e.preventDefault()
    document.querySelector('.contact-pagees').scrollIntoView({
        behavior: "smooth"
    })
  })

  document.querySelector('.btn-2').addEventListener('click', function(e){
    e.preventDefault()
    window.open("https://www.instagram.com/luxeglobalhosting?igsh=NjdiYnJ1bmk2bGEy", "_blank")
  })