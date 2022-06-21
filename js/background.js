 const images = ["1.jpg","3.jpg","2.jpg"];
 const chosenImage = images[Math.floor(Math.random() * images.length)];
 const bdImage = document.createElement("img");
 
 bdImage.src = `img/${chosenImage}`
 
 document.body.appendChild(bdImage);