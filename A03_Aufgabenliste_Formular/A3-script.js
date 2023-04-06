var A03;
(function (A03) {
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        let task = document.querySelector(".task");
        task.addEventListener("change", handleTask);
        let date = document.querySelector("#date");
        date.addEventListener("change", handleDate);
        let time = document.querySelector("#time");
        date.addEventListener("change", handleTime);
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
})(A03 || (A03 = {}));
//# sourceMappingURL=A3-script.js.map