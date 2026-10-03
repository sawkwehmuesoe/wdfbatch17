// UI 

let display = document.getElementById("display"),
    getfileinput = document.getElementById("fileinput");

let newimg = null;


getfileinput.addEventListener('change',function(e){
    // console.log("hi");

    const file = e.target.files[0];
    // console.log(file);

    if(!file) return;

    const imageurl = URL.createObjectURL(file); // it create a tempory object () store in memory ram
    console.log(imageurl); // blob:http://127.0.0.1:5500/ae922794-d064-4a1c-a9d5-0bbe1722ab8e

    // newimg = document.createElement('img'); // method 1 

    newimg = new Image(); // method 2
    newimg.src = imageurl;

    newimg.onload = ()=>{
        URL.revokeObjectURL(imageurl);
    }
    
    // console.log(newimg);

    display.src = imageurl;
    
});


function pdfloader(){
    
    // 1. Check if image exists or not 
    if(!newimg){
        window.alert("Please upload an image first!.");
        return;
    }

    // console.log("pdf is working");

    // 2. Import package and instance 

    const { jsPDF } = window.jspdf;
    // Default export is a4 paper, portrait, using millimeters for units
    const doc = new jsPDF({
            orientation: "landscape", // portrait
            unit: "mm",            
    });

    // 3. Create canvas as image dimenstions

    const canvas = document.createElement('canvas');
    canvas.width = newimg.naturalWidth; // width
    canvas.height = newimg.naturalHeight; // height

    console.log(canvas);

    // 4. Draw image on canvas 
    // drawing context 
    const ctx = canvas.getContext("2d");

    // ctx.drawImage(image,DOMException,dy) , dx = destination x, dy = destination y
    ctx.drawImage(newimg,0,0.);
    console.log(ctx); 

    // 5. Convert canvas to JPEG (Quality 0 to 1)
    const imgdata = canvas.toDataURL("image/jpeg",0.85);


    // 6. Download IMG to PDF
    // pdfObj.addImage(image,x-GeolocationCoordinates, Y-Coordinate,Width,Height)
    doc.addImage(imgdata, 10, 10,100,80);
    doc.save("newimgfile.pdf");
}
