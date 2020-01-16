////////////////
///// MAIN /////
////////////////

// All slideshows current index displayed
// Only need to add a new index "slideshowIndex["MyNewProject_Slideshow_Class"] to handle a new slideshow
var slideshowIndex = {};
slideshowIndex["slideshowSRTD"] = 0;
slideshowIndex["slideshowCataclimax"] = 0;
slideshowIndex["slideshowOrbs"] = 0;
slideshowIndex["slideshow0GUST"] = 0;
slideshowIndex["slideshowLP"] = 0;
slideshowIndex["slideshowZipline"] = 0;
slideshowIndex["slideshowZombieRunner"] = 0;

// initialization of the displays
for(var key in slideshowIndex) 
{
  showSlide(key, slideshowIndex[key]);
}


///////////////
// FUNCTIONS //
///////////////

function showSlide(slideshowClass, slideId)
{
  // retrieve the slideshow and the dots
  var slides = document.getElementsByClassName(slideshowClass);
  var dots = document.getElementsByClassName("dot_"+slideshowClass);

  // back to the beginning of the slideshow
  if(slideId > (slides.length - 1)) slideshowIndex[slideshowClass] = 0;

  // go to the end
  else if(slideId < 0) slideshowIndex[slideshowClass] = (slides.length - 1);

  else slideshowIndex[slideshowClass] = slideId;

  var i;
  for(i = 0; i < slides.length; i++)
  {
    // if the current slide is to be hidden
    if(i != slideshowIndex[slideshowClass])
    {
      slides[i].style.display = "none";
      dots[i].className = dots[i].className.replace(" active ", "");
    }
    else // this is the slide we want to show
    {
      slides[i].style.display = "contents";
      dots[i].className = dots[i].className.replace("", " active ");
    }
  }

  // pause videos
  pauseAllVideos();
}

// direction should be "-1" or "1"
function changeSlide(slideshowClass, direction)
{
  showSlide(slideshowClass, slideshowIndex[slideshowClass] + direction)
}

// applies the image to the provided fullscreen div and displays the div
function showFullscren(fullscreenClass, img)
{
    $('.'+fullscreenClass+' img').attr('src', img.src);
    $('.'+fullscreenClass).fadeIn();   
    $('.'+fullscreenClass).css("display","flex").css("opacity","1").css("pointer-events","auto");
}

function hideFullscreen(fullscreenClass)
{
  $('.'+fullscreenClass).fadeOut(); 
  $('.'+fullscreenClass).css("display","flex").css("opacity","0").css("pointer-events","none");
}

function pauseAllVideos()
{
  var videos = document.getElementsByClassName("slideShowVideo");
  for(i = 0; i < videos.length; i++)
    videos[i].src = videos[i].src; // trigger a src reload
}