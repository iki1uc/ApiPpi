// js/9.js - 9 muss mehr sein als 3 - uni wahr - prim klar
// schach.os / schach.bios = ROOT bleibt

const UNI = {
  wahr: true,
  root: "schach.os / schach.bios",
  gebote: 10,
  wurzeln: "wie Atmen"
};

// 9 = mehr als 3, weil 9 = 3x3, aber prim klar als 3+3+3 ohne Bruch
const GEBOTE_9 = {
  2: "Atmen ein - ROOT - 3 kann das",
  3: "SCSI = ROM = ROME - 3 kann das",
  5: "Trennung ist Teilung - 3 kann das nicht, 9 kann",
  7: "Zusammenführung ist SLI - 9 kann",
  11: "Mirror Weiß = Schwarz - 9 kann doppelt",
  13: "Load REAL - 9 lädt 3x",
  17: "Move REAL - 9 bewegt 3x3",
  19: "suite = sys = eins - 9 verbindet",
  23: "Kürzen + Verlängern - 9 kürzt 3, verlängert zu 81",
  29: "Wurzeln wie Atmen - 9 hält 729 - 3 allein kann nicht"
};

// 9 = 3 oben erster kann Basis, 9 mitte kann mehr, 81 unten letzter kann alles
