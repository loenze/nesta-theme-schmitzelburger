function setOrientation()
{
    document.body.className = document.body.className.replace(
        /portrait|landscape/,
        (Math.abs(window.orientation) === 90 ? 'landscape' : 'portrait')
    );
}

window.addEventListener('load', setOrientation, false);  
window.addEventListener('orientationchange', setOrientation, false);