var me = new SOSEngine.Object(5, 5, 30, 30);
me.round(13);
me.setTexture('red');

main.Scene.add(me);
main.Camera.lookAt(me);

var movement = new Movement(me);

$(document).on('keypress', function(e){
    if (e.which == 'a'.charCodeAt(0) || e.which == 'A'.charCodeAt(0) || e.which == 37)
        movement.left();
    else if (e.which == 'd'.charCodeAt(0) || e.which == 'D'.charCodeAt(0) || e.which == 38)
        movement.right();
    else if (e.which == 'w'.charCodeAt(0) || e.which == 'W'.charCodeAt(0) || e.which == 39)
        movement.top();
    else if (e.which == 's'.charCodeAt(0) || e.which == 'S'.charCodeAt(0) || e.which == 40)
        movement.bottom();
	main.Camera.lookAtAnimate(me, 200);
});
