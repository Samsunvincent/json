async function fetchdata(){
    try {
        const datas = await fetch('http://localhost:3000/json')
        let parsed_datas = await datas.json();
        console.log("parsed-datas",parsed_datas)

        let datacontainer = document.getElementById("data-container");
        console.log(datacontainer)
        
        let rows = " "
        for (i = 0;i<parsed_datas.length;i++){
            rows = rows+`
          
            <div>${parsed_datas[i].category}</div>
            <div>${parsed_datas[i].description}</div>


            `
        }
        datacontainer.innerHTML = rows;
        


    } catch (error) {
        console.log("error",error)
    }
}
fetchdata()