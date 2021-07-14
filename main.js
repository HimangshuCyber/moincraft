var canvas = new fabric.Canvas("myCanvas");

//Player values
player_x = 10;
player_y = 10;

//Block values
block_width = 30;
block_height = 30;

//Declaring objects
player_object = "";
block_image_object = "";

//Functions

function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
        player_object = Img();
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y, left:player_x
        });
        canvas.add(player_object);
    });
}

function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_image_object = Img;
        block_image_object.scaleToWidth(block_width);
        block_image_object.scaleToHeight(block_height);
        block_image_object.set({
            top:player_x, left:player_y
        });
        canvas.add(block_image_object);
    });
}

window.addEventListener("keydown", mykeydown);

function mykeydown(e){
    keypress = e.keyCode;
    console.log(keypress);
    if(e.shiftKey == true && keypress == "80" && block_height < 204 && block_width < 204){
        console.log("Keylog: Shift + P ")
        block_width = block_width + 6;
        block_height = block_height + 6;
        document.getElementById("current_width").innerHTML = block_width;
        document.getElementById("current_height").innerHTML = block_height;
        console.log("Width and height changed to: W=" + block_width + " H=" +block_height)
    }
    if(e.shiftKey == true && keypress == "77" && block_width >= 6 && block_height >= 6){
        console.log("Keylog: Shift + M ")
        block_width = block_width - 6;
        block_height = block_height - 6;
        document.getElementById("current_width").innerHTML = block_width;
        document.getElementById("current_height").innerHTML = block_height;
        console.log("Width and height changed to: W=" + block_width + " H=" +block_height)
    }
    if(keypress == "38"){
        console.log("--Up--");
        up();
    }
    if(keypress == "40"){
        console.log("--Down--");
        down();
    }
    if(keypress == "37"){
        console.log("--Left--");
        left();
    }
    if(keypress == "39"){
        console.log("--Right--");
        right();
    }
    if(keypress == "87"){
        console.log("W is pressed");
        new_image("wall.jpg");
    }
    if(keypress == "71"){
        console.log("G is pressed");
        new_image("ground.png");
    }
    if(keypress == "76"){
        console.log("L is pressed");
        new_image("light_green.png");
    }
    if(keypress == "84"){
        console.log("T is pressed");
        new_image("trunk.jpg");
    }
    if(keypress == "82"){
        console.log("R is pressed");
        new_image("roof.jpg");
    }
    if(keypress == "89"){
        console.log("Y is pressed");
        new_image("yellow_wall.png");
    }
    if(keypress == "68"){
        console.log("D is pressed");
        new_image("dark_green.png");
    }
    if(keypress == "85"){
        console.log("U is pressed");
        new_image("unique.png");
    }
    if(keypress == "67"){
        console.log("C is pressed");
        new_image("cloud.jpg");
    }
}