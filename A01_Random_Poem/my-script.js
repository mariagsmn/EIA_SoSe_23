var RandomPoem;
(function (RandomPoem) {
    let subjects = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let predicates = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    let objects = ["Zaubertränke", "den Grimm", "Lupin", "Hogarts", "die Karte des Rumtreibers", "Dementoren"]; // Variablen, die außerhalb der Fktn deklariert wurden
    //console.log(subjects);
    //console.log(predicates);
    //console.log(objects);
    for (let i = subjects.length; i > 0; i--) { // Bedingung in runden Klammern, Ausführung in geschweiften Klammern
        //console.log(i); 
        let sentence = getVerse(subjects, predicates, objects);
        //console.log(sentence);
    }
    function getVerse(_subjects, _predicates, _objects) {
        let randNum = Math.floor(Math.random() * _subjects.length); // der Variable zugewiesen, dann kann man Wert ausgeben
        //console.log(_subjects[randNum]);
        let randSubject = _subjects.splice(randNum, 1);
        let randPredicate = _predicates.splice(randNum, 1);
        let randObject = _objects.splice(randNum, 1);
        let verse = randSubject + " " + randPredicate + " " + randObject + ".";
        console.log(verse);
        return verse;
    }
})(RandomPoem || (RandomPoem = {}));
//# sourceMappingURL=my-script.js.map