if (window.jQuery === undefined) {
    var script    = document.createElement( 'script' );
    script.src    = 'http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js';
    script.onload = function() { fillForm; sendData; }
    document.body.appendChild(script);
}
else {
    fillForm();
    sendData();
}