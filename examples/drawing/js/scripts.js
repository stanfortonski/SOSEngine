SOSEngine.scale = 10;
var main = SOSEngine.make($('#SOSEngine')),
	preview = SOSEngine.make($('#preview')),
	previewBlock = new SOSEngine.Object(1, 1, 3, 3),
	mousedown = false;

$('#color-picker').val('#ff0000');
preview.Scene.add(previewBlock);
showPreview();

$('#rubber').click(function(){
	$('#color-picker').val('#ffffff');
	$('#rotate').val(0);
	$('#round').val(0);
});

$('#clear').click(function(){
    main.Camera.effects.vibration(5, 2);
    setTimeout(function(){
        main.Camera.effects.isVibration = false;
        main.Scene.clear();
    }, 500);
});

$('input').change(function(){
	showPreview();
});

function showPreview(){
	setBlockValues(previewBlock);
	preview.Camera.lookAt(previewBlock);
}

main.Scene.obj.on('contextmenu', function(e){
	e.preventDefault();
});

main.Scene.obj.mousedown(function(){
	mousedown = true;
});

$(document).mouseup(function(){
	mousedown = false;
});

main.Scene.obj.mousemove(function(e){
	if (mousedown)
        draw(e);
});

main.Scene.obj.click(draw);

function draw(e){
    let pos = targetOnScene(e),
        block = new SOSEngine.Object(1, 1, pos.x, pos.y);

	setBlockValues(block);
	main.Scene.add(block);
}

function targetOnScene(e){
	return{
		x: parseInt((e.pageX - main.Scene.obj.offset().left)/SOSEngine.scale)+1,
		y: parseInt((e.pageY - main.Scene.obj.offset().top)/SOSEngine.scale)+1
	}
}

function setBlockValues(block){
	let sizeX = parseInt($('#sizeX').val()),
		sizeY = parseInt($('#sizeY').val());

	block.setSize(sizeX, sizeY);
	block.setTexture($('#color-picker').val());
	block.round(parseFloat($('#round').val()));
	block.rotate(parseInt($('#rotate').val()));
}
