var A03;
(function (A03) {
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        let task = document.querySelector(".task");
        task.addEventListener("change", handleTask);
        let date = document.querySelector(".date");
        date.addEventListener("change", handleDate);
        let time = document.querySelector(".time");
        time.addEventListener("change", handleTime);
        let finished = document.querySelector(".in_process");
        finished.addEventListener("change", handleFinished);
        let not_finished = document.querySelector(".not_in_process");
        not_finished.addEventListener("change", handleNotFinished);
        let who = document.querySelector(".who");
        who.addEventListener("click", handleWhoDitIt);
        let comment = document.querySelector(".comment");
        comment.addEventListener("change", handleComment);
    }
    function handleTask() {
        console.log("Aufgabe wurde hinzugefügt");
    }
    function handleDate() {
        console.log("Datum wurde geändert");
    }
    function handleTime() {
        console.log("Zeit wurde geändert");
    }
    function handleFinished() {
        console.log("Aufgabe wird erledigt");
    }
    function handleNotFinished() {
        console.log("Aufgabe noch nicht erledigt");
    }
    function handleWhoDitIt() {
        console.log("Es wurde ausgewählt, von wem die Aufgabe bearbeitet wird");
    }
    function handleComment() {
        console.log("Kommentar wurde hinzugefügt");
    }
})(A03 || (A03 = {}));
//# sourceMappingURL=A3.js.map