document.body.onload = function(){

  let preloader = document.querySelector('#cube-loader');

  setTimeout(function(){
    if(!preloader.classList.contains('.done')){
      preloader.classList.add('done');
    }
  }, 1500);


}
