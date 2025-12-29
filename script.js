let innerUploadImage = document.querySelector(".inner-upload-image")
let input = innerUploadImage.querySelector("input");
let image = document.querySelector("#image")

const Api_url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=AIzaSyChvHNOOjKPeRSmCVNo3l_SCQtBCh3Zfn8"
let fileDetails={
    mime_type:null,
    data:null
}


input.addEventListener("change",()=>{
    const file = input.files[0]
if(!file)return
let reader = new FileReader();
reader.onload=(e)=>{
    let base64data = e.target.result.split(",")[1]
fileDetails.mime_type = file.type;
fileDetails.data = base64data
image.src = `data:${fileDetails.mime_type};base64,${fileDetails.data}`;
}
innerUploadImage.querySelector("span").style.display="none "
 reader.readAsDataURL(file)
})









innerUploadImage.addEventListener("click",()=>{
    input.click()
})

