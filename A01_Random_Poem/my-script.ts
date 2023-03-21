namespace RandomPoem {

    let subjects: string[] = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let predicates: string[] = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    let objects: string[] = ["Zaubertränke", "den Grimm", "Lupin", "Hogarts", "die Karte des Rumtreibers", "Dementoren"]; // Variablen, die außerhalb der Fktn deklariert wurden

    //console.log(subjects);
    //console.log(predicates);
    //console.log(objects);

    for (let i = subjects.length; i > 0; i--) { // Bedingung in runden Klammern, Ausführung in geschweiften Klammern
        //console.log(i); 
        let sentence: string = getVerse(subjects, predicates, objects);
        //console.log(sentence);
    }


    function getVerse(_subjects: string[], _predicates: string[], _objects: string[]): string { // Funktion wird aufgerufen, erwartet 3 Parameter vom Typ string[], zurück gibt sie einen string (nach Doppelpunkt)
        let randNum: number = Math.floor(Math.random() * _subjects.length); // der Variable zugewiesen, dann kann man Wert ausgeben
        //console.log(_subjects[randNum]);
        let randSubject: string[] = _subjects.splice(randNum, 1);
        let randPredicate: string[] = _predicates.splice(randNum, 1);
        let randObject: string[] = _objects.splice(randNum, 1);
        let verse: string = randSubject + " " + randPredicate + " " + randObject + ".";
        console.log(verse);

        return verse;
    }
}
