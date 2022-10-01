var sr = ScrollReveal()

sr.reveal('.getArticles',{
    interval: 300,
    distance : '50px',
    origin : 'left'
})
sr.reveal('.ArticleBike',{
    interval: 300,
    distance : '50px',
    origin : 'top'
})
var options = {
    strings: ['WEBSERVICE FOR BIKERS','FROM LA CAPSULE 🚀'],
    typeSpeed: 40
  };
   var typed = new Typed('.element', options);