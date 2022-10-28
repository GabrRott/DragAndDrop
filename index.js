const paragraph = document.querySelectorAll(".paragraph");
const section = document.querySelectorAll(".section");
const garbage = document.querySelector(".tachito");

paragraph.forEach(paragraph =>{
    paragraph.addEventListener("dragstart", event =>{
        // console.log("inicio de arrastre");
        // console.log("estoy arrastrando el párrafo"+paragraph.innerText);
        paragraph.classList.add("dragging");
        event.dataTransfer.setData("id", paragraph.id)
    })

    paragraph.addEventListener("dragend", ()=>{
        //console.log("he terminado de arrastrar");
        paragraph.classList.remove("dragging");
    })
})

section.forEach(section =>{
    section.addEventListener("dragover", event =>{
        event.preventDefault();
        //console.log("drag over");
    })
    section.addEventListener("drop", event=>{
        console.log("drop");
        const id_paragraph =event.dataTransfer.getData("id");
        const paragraph = document.getElementById(id_paragraph);
        section.appendChild(paragraph);
    })
})


eraseParagraph()
function eraseParagraph(){
    garbage.addEventListener("dragover", e =>{
         e.preventDefault();
         garbage.classList.add("dragging-over");
    })
    garbage.addEventListener("daragleave", ()=>{
        garbage.classList.remove("dragging-over")
    })
    garbage.addEventListener("drop", e =>{
        garbage.classList.remove("dragging-over");
        const id = e.dataTransfer.getData("id")
        const erase_paragraph = document.getElementById(id)
        erase_paragraph.remove();
        })
    }
