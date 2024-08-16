async function main(){

    async function api() {
        let a = await fetch('https://dev.deepthought.education/assets/uploads/files/files/others/ddugky_project.json')
        let response = await a.json()
        return response
    }
    
    let res = await api()
    console.log(res.tasks[0].assets[1].asset_title)
    document.querySelector(".description>div>h3").innerHTML = res.tasks[0].task_title
    document.querySelector(".description>div>p").innerHTML = res.tasks[0].task_description
    document.querySelector(".head>p").innerHTML = res.tasks[0].assets[0].asset_title
    document.querySelector(".compdesc1").innerHTML = `<b>Description: </b>`+res.tasks[0].assets[0].asset_description
    document.querySelector(".component iframe").setAttribute("src",res.tasks[0].assets[0].asset_content)
    document.querySelector("#comp2").innerHTML = res.tasks[0].assets[1].asset_title
    document.querySelector(".compdesc2").innerHTML = `<b>Description: </b>`+res.tasks[0].assets[1].asset_description
    document.querySelector("#comp3").innerHTML = res.tasks[0].assets[2].asset_title
    document.querySelector(".compdesc3").innerHTML = `<b>Description: </b>`+res.tasks[0].assets[2].asset_description
    document.querySelector("#comp4").innerHTML = res.tasks[0].assets[3].asset_title
    document.querySelector(".compdesc4").innerHTML = `<b>Description: </b>`+res.tasks[0].assets[3].asset_description


    
}
main()

function listing(){

    var list = `<div>
                <ul> 
                <li > <b>${x.tasks[0].task_title}</b></li>
                </ul>
                <ul>
                <li>${x.tasks[0].assets[0].asset_title}</li>
                <li>${x.tasks[0].assets[1].asset_title}</li>
                <li>${x.tasks[0].assets[2].asset_title}</li>
                <li>${x.tasks[0].assets[3].asset_title}</li>
                </ul>
                </div>`




    return list
}


    document.querySelector(".togglebtn").addEventListener("click",()=>{
        document.querySelector("#sidemenumain").classList.toggle("sidemenuexpand")
        document.querySelector("#upperboxs").classList.toggle("upperboxexpand")
        document.querySelector("#lowerboxs").classList.toggle("lowerboxexpand")
        document.querySelector("#containertoggle").classList.toggle("containerexpand")
        document.querySelector("#lowerboxs>div").classList.toggle("lowerboxp")
        document.querySelector("#threebtns").classList.toggle("sidebtnafter")
        // if(document.querySelector("#lowerboxs").classList.toggle("lowerboxexpand")==true){

            document.querySelector(".points").innerHTML = listing()
            document.querySelector(".points").classList.toggle("pointstoggle")
        // }
    })
