(function($){

  var $projects = $('.projects'); // project container
  var $project = $('.project'); // individual projetcs
  var $projectImageBefore = CSSRulePlugin.getRule(".project-image:before"); //get the rule
  var $projectImageAfter = CSSRulePlugin.getRule(".project-image:after"); //get the rule
  var tlProjects, tlProject = "";

  tlProject = new TimelineLite({
    repeat : -1,
    repeatDelay : 2
  });

  var projectClasses = $project.attr('class').split(' ');
  projectClasses = projectClasses[1];

  var $pixel = $project.find('.pixel');
  var $pixels = $project.find('.project-pixels');
  var $projectTitle = $project.find('.project-title');
  var $projectSubtitle = $project.find('.project-subtitle');
  var $projectImage = $project.find('.project-image');

  //**
  // Anim
  //**
  tlProject
  // On definie des options de base  (tous les elements de l'array)
  .set([$projectTitle,$projectSubtitle,$pixel],
    {
      autoAlpha: 0
    }
  )
  .fromTo(
    $projectImage, // selecteur
    0.4, // durée
    {  // from
      autoAlpha: 0, // etat de départ visibility: 0
      xPercent: '-200'
    },
    {// To
      autoAlpha: 1,
      xPercent: '-10',
      ease:Power4.easeInOut
    }
  )
  .add('imageIn') // On ajoute un label

  .staggerFromTo($pixel,0.2,{
    autoAlpha: 0,
    x: '-=10'
  },
  {
    autoAlpha: 1,
    x: '0'
  },
  0.02,'-=0.1') // Fait débuter -0.1 sec avant la fin de l'anim précédente
  .add('pixelsIn')

  .fromTo(
    $projectTitle,0.7,
    {
      autoAlpha : 0,
      xPercent: '-50'
    },
    {
      autoAlpha : 1,
      xPercent: '-5',
      ease:Power4.easeInOut
    },'-=0.4' ) // Fait débuter -0.4 sec avant la fin de l'anim précédente

    .fromTo(
      $projectSubtitle,0.7,
      {
        autoAlpha : 0,
        xPercent: '-50'
      },
      {
        autoAlpha : 1,
        xPercent: '-2',
        ease:Power4.easeInOut
      },'-=0.5' ) // Fait débuter -0.5 sec avant la fin de l'anim précédente
      .add('titleIn')

      .to( //permet de reprendre la fin de l'anim
      $projectTitle,2,
      {
        xPercent : '+=5',
        ease: Linear.easeNone
      },
      'titleIn-=0.1'
    )
    .to( //permet de reprendre la fin de l'anim
    $projectSubtitle,
    4.3,
    {
      xPercent : '+=2',
      ease: Linear.easeNone
    }
  )
  .add('titleOut')
  .to(
    $projectImage,
    4.3,
    {
      xPercent : '+=10',
      ease: Linear.easeNone
    },
    'imageIn'
  )
  .add('imageOut')
  .to(
    $pixels,
    4.1,
    {
      x : '-5',
      ease: Linear.easeNone
    },
    'pixelsIn'
  )
  .to(
    [$projectTitle,$projectSubtitle],
    0.5,
    {
      autoAlpha: 0,
      xPercent: '+=10'
    },
    'titleOut'
  )
  .to(
    $projectImage,
    0.5,
    {
      autoAlpha: 0,
      xPercent: '+=80',
      ease:Power4.easeInOut
    },
    'imageOut'
  )
  ;

})(jQuery);
