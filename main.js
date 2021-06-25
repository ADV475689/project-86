
var canvas=  new fabric.Canvas("myCanvas")
var player_x= 10;
var player_y= 10;
var player_object="spi.jfif";
var block_height=30;
var block_width=30;


function upload_player(){
    fabric.Image.fromURL("spi.jfif",function(Img){
    player_object=Img;
    player_object.scaleToWidth(120);
    player_object.scaleToHeight(110);
    player_object.set({
        top:player_y,
        left:player_x
    });
    canvas.add(player_object);
    });
}
window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    var keypress= e.keyCode;
      

    if (keypress=="37") {
        left();
        console.log("left");
    }

    if (keypress=="38") {
        up();
        console.log("up");
    }

    if (keypress=="40") {
        down();
        console.log("down");
    }

    if (keypress=="39") {
        right();
        console.log("right");
    }


function up(){

    if (player_y>=0) {
        player_y= player_y-block_height;
        console.log("player x= "+player_x+ " player y= "+player_y);
        console.log(block_height);
        canvas.remove(player_object);
        upload_player();
    }
}

function down(){

    if (player_y<=500) {
        player_y= player_y+block_height;
        console.log("player x= "+player_x+ " player y= "+player_y);
        console.log(block_height);
        canvas.remove(player_object);
        upload_player();
    }
}

function  right(){

    if (player_x<=700) {
        player_x= player_x+block_width;
        console.log("player x= "+player_x+ " player y= "+player_y);
        console.log(block_width);
        canvas.remove(player_object);
        upload_player();
    }
}

function  left(){

    if (player_x>0) {
        player_x= player_x-block_width;
        console.log("player x= "+player_x+ " player y= "+player_y);
        console.log(block_width);
        canvas.remove(player_object);
        upload_player();
    }
}
}