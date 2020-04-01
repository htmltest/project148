var html = document.documentElement;

var fontsfile = document.createElement('link');
fontsfile.href = pathTemplate + 'css/fonts.css';
fontsfile.rel = 'stylesheet';
document.head.appendChild(fontsfile);

if (sessionStorage.fontsLoaded) {
    html.classList.add('fonts-loaded');
} else {
    var script = document.createElement('script');
    script.src = pathTemplate + 'js/fontfaceobserver.js';
    script.async = true;

    script.onload = function () {
        var Lato300 = new FontFaceObserver('Lato', {
            weight: '300'
        });
        var Lato300i = new FontFaceObserver('Lato', {
            weight: '300',
            style: 'italic'
        });
        var Lato400 = new FontFaceObserver('Lato', {
            weight: 'normal'
        });
        var Lato600 = new FontFaceObserver('Lato', {
            weight: '600'
        });
        var FiraSans400 = new FontFaceObserver('FiraSans', {
            weight: 'normal'
        });
        var FiraSans800 = new FontFaceObserver('FiraSans', {
            weight: '800'
        });
        var FiraSans900 = new FontFaceObserver('FiraSans', {
            weight: '900'
        });

        Promise.all([
            Lato300.load(),
            Lato300i.load(),
            Lato400.load(),
            Lato600.load(),
            FiraSans400.load(),
            FiraSans800.load(),
            FiraSans900.load()
        ]).then(function () {
            html.classList.add('fonts-loaded');
            sessionStorage.fontsLoaded = true;
        });
    };
    document.head.appendChild(script);
}