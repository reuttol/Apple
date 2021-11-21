// let imgSets = [
//     ["assets/images/iphone__cyamwsdph26a_large.png", "assets/images/airpods__b0941p5gmwj6_large.png", "assets/images/ipad__bq6djchifrbm_large.png", "#EAF2FC"],
//     ["assets/images/airpods__b0941p5gmwj6_large.png","assets/images/watch__csqqcayzqueu_large.png", "assets/images/ipadmini__f0pd6cilwaie_large.png", "#FBEDF9" ],
//     ["assets/images/macbook__d0g7o7oqt282_large.png", "assets/images/ipadmini__f0pd6cilwaie_large.png", "assets/images/ipadair__fkr21evsr6a2_large.png", "#EEEFFE"]
// ]

function setImgs(){
    const randNum = Math.floor( Math.random() * 3 );
    // const randNum = 0;

    if(randNum === 0){
        document.getElementById("set1").style.visibility = "visible";
        document.getElementById("page1").style.backgroundColor = "#EAF2FC";
    }
         
    else if(randNum===1){
        document.getElementById("set2").style.visibility = "visible";
        document.getElementById("page1").style.backgroundColor = "#FBEDF9";
    }
        
    else if(randNum===2){
        document.getElementById("set3").style.visibility = "visible";
        document.getElementById("page1").style.backgroundColor = "#EEEFFE";
    }
    // document.getElementById("page1-img1").src = imgSets[randNum][0];
    // document.getElementById("page1-img2").src = imgSets[randNum][1];
    // document.getElementById("page1-img3").src = imgSets[randNum][2];
    // document.getElementById("page1").style.backgroundColor = imgSets[randNum][3];
}

setImgs();

