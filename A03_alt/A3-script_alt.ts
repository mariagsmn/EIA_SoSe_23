namespace A03 {

    window.addEventListener("load", handleLoad)

    function handleLoad():void{
        let task = document.querySelector(".task")
        task.addEventListener("change", handleTask)
        
        let date: HTMLElement = document.querySelector("#date")
        date.addEventListener("change", handleDate)
      
        let time: HTMLElement = document.querySelector(".time")
        time.addEventListener("change", handleTime)
       
        let finished: HTMLElement = document.querySelector(".finished")
        finished.addEventListener("change", handleFinished)

        let not_finished: HTMLElement = document.querySelector(".not_finished")
        not_finished.addEventListener("change", handleNotFinished)        
       
        let who: HTMLElement = document.querySelector(".who")
        who.addEventListener("click", handleWhoDitIt)

        let comment: HTMLElement = document.querySelector(".comment")
        comment.addEventListener("change", handleComment)
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

    function handleFinished(): void{
        console.log("Aufgabe wurde erledigt");
    }

    function handleNotFinished(): void{
        console.log("Aufgabe wurde nicht erledigt");
    }

    function handleWhoDitIt(): void{
        console.log("Es wurde ausgewählt, von wem die Aufgabe bearbeitet wird");
    }
    
    function handleComment():void{
        console.log("Kommentar wurde hinzugefügt");
    }

}