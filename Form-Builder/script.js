const addBtn=document.getElementById("btn")

const preview = document.getElementById("preview")

addBtn.addEventListener("click", function() {
    const fieldType = document.getElementById("fieldInput").value
    const fieldLabel = document.getElementById("fieldLabel").value
    
    if(fieldType === "text") {
        preview.innerHTML += `
            <div>
                <label>${fieldLabel} :</label>
                <input type="text" placeholder="Enter valid details">
            </div>
        `
    }
    if(fieldType==="checkbox"){
        preview.innerHTML += `
          <div>
             <label>${fieldLabel} :</label>
             <input type="checkbox">
             </div>
        `
    }

    if(fieldType==="radio"){
        preview.innerHTML +=`
         <div>
             <label>${fieldLabel} :</label>
             <input type="radio" name="option">
             </div>
        `
    }
})