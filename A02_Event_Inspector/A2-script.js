var A02_EventInspector;
(function (A02_EventInspector) {
    /*
    Aufgabe: L02_EventInspector
    Name: Maria Gassmann
    Matrikel: 272226
    Datum: 02.04.2023
    Quellen: Nico Pfrengle, Jona Ruder, udemy.com
    */
    window.addEventListener("load", handleLoad);
    let div0 = document.getElementById("div0");
    let div1 = document.getElementById("div1");
    let button0 = document.getElementById("button0");
    let buttonClickCount = 0;
    let infoLogCount = 0;
    function handleLoad() {
        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
        document.body.addEventListener("click", logInfo);
        document.body.addEventListener("keyup", logInfo);
        div0.addEventListener("click", logInfo);
        div0.addEventListener("keyup", logInfo);
        div1.addEventListener("click", logInfo);
        div1.addEventListener("keyup", logInfo);
        button0.addEventListener("click", setCustomEvent);
        document.addEventListener("customBttnclick", getCustomEvent);
    }
    function setInfoBox(_event) {
        let spanElement = document.getElementById("span0");
        let mouseX = _event.clientX;
        let mouseY = _event.clientY;
        let offsetX = mouseX + 10;
        let offsetY = mouseY + 10;
        spanElement.innerHTML = "MouseX: " + mouseX + "; MouseY: " + mouseY + "; Target: " + _event.target;
        spanElement.style.left = offsetX + "px";
        spanElement.style.top = offsetY + "px";
    }
    function logInfo(_event) {
        infoLogCount++;
        console.log("--- " + infoLogCount + " start ---");
        console.log("- Event -");
        console.log(_event);
        console.log("- Typ -");
        console.log(_event.type);
        console.log("- Target -");
        console.log(_event.target);
        console.log("- CurrentTarget -");
        console.log(_event.currentTarget);
        console.log("--- " + infoLogCount + " end ---");
    }
    function setCustomEvent(_event) {
        let customEvent0 = new CustomEvent("customBttnclick", {
            bubbles: true
        });
        button0.dispatchEvent(customEvent0);
    }
    function getCustomEvent(_event) {
        buttonClickCount++;
        if (buttonClickCount > 1) {
            console.log("Mein Event" + buttonClickCount + "Button erfolgreich geklickt");
        }
        else {
            console.log("Mein Event" + buttonClickCount + "Button erfolgreich geklickt");
        }
        console.log("- Button Path -");
        console.log(_event.composedPath());
    }
})(A02_EventInspector || (A02_EventInspector = {}));
//# sourceMappingURL=A2-script.js.map