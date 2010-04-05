function setOrientation()
{
    var orient = Math.abs(window.orientation) === 90 ? 'landscape' : 'portrait';  
    var cl = document.body.className;  
    cl = cl.replace(/portrait|landscape/, orient);  
    document.body.className = cl;  
}

window.addEventListener('load', setOrientation, false);  
window.addEventListener('orientationchange', setOrientation, false);

/*
window.addEventListener('load', function() {
    setTimeout(scrollTo, 0, 0, 1);
}, false);
*/