$(function(){
	/*var video = document.getElementById('video');
	var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext("2d");

    video.style.display = "none";

    video.addEventListener("playing",draw);


    canvas.addEventListener("click",function(e){
        var img = new Image;
        img.src = "./img/video_close.png";
        img.onload = function(){
            ctx.drawImage(img,850,10,36,36)
        };
        video.play();
    })

    function draw(){
    	ctx.drawImage(video,0,0,900,500);

        requestAnimationFrame(draw);
    }*/


	//回到顶部
    $(".icon_top").click(function(){
    	$("body").animate({
    		scrollTop:0
    	},2000);

    });


})





