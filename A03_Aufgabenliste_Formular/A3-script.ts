namespace A03 {

    window.addEventListener("load", handleLoad)

    function handleLoad():void{
        let task: HTMLElement = document.querySelector(".task")
        task.addEventListener("change", handleTask)
        let date: HTMLElement = document.querySelector("#date")
        date.addEventListener("change", handleDate)
        let time: HTMLElement = document.querySelector("#time")
        date.addEventListener("change", handleTime)
    }

    function handleTask():void{
        console.log("Aufgabe wurde hinzugefügt");
    }

    function handleDate():void{
        console.log("Datum wurde geändert"); 
    }

    function handleTime():void{
        console.log("Zeit wurde geändert");    
    }






}