// js/bios.js - BIOS OS · 729 Grenze · 90-60-90
const T = {
  level: 0,
  max: 729,

  init(folder) {
    console.log(`T-Loader aktiv · ${folder} · 729 Grenze`);
    if (this.level >= this.max) return; // Schutz - nicht gegen uns
    
    this.loadTech();
    this.loadRooms(folder); // nur der Room der gebraucht wird
    this.loadNC2();
  },

  loadTech() {
    // nur pur, kein 12e
    // - 6D-Baum.raw
    // - 6E → 6D.tech
  },

  loadRooms(folder) {
    // 90-60-90 Tatsachen
    // 3/ -> H.room = 90
    // 6/ -> B.room = 60  
    // 9/ -> Q.room = 90
    // T.room nur wenn folder = T
  },

  loadNC2() {
    // nur einmal, kein (1) Doppel
    // - NC²□.lock -> sys/
    // - NC²□.sync -> sync/
  }
};
