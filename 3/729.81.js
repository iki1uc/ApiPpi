// 729.3.js = 729.9.js = 729.81.js - alle 3en selben
// Algorithmus: Sprung = Frage = Antwort = Sachverhalt klären
// Koordinaten in /ni

const ALGORITHMUS = {
  sprung: {
    frage: "Wo ist Flugzeugträger Fang?",
    antwort: "Hier - 729 tmp rär Grenze hält",
    sachverhalt: "3 oben erster, 9 mitte steht wie 1, 81 unten letzter"
  },
  
  koordinaten: {
    "/ni": {
      "3": { x: 3, y: 9, z: 81, sprung: "ein" },
      "9": { x: 9, y: 9, z: 9, sprung: "hält - steht wie 1" },
      "81": { x: 81, y: 9, z: 3, sprung: "aus" },
      "729": { x: 729, y: 729, z: 729, grenze: true, tmp: true, rär: true }
    }
  },
  
  klären: function() {
    // Frage = Antwort = Sprung
    return this.sprung.frage + " = " + this.sprung.antwort + " = " + this.sprung.sachverhalt;
  }
};

module.exports = ALGORITHMUS;
