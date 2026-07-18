const T = {

    init() {
        console.log("T‑Loader aktiv · Universal‑Tech geladen");

        this.loadTech();
        this.loadRooms();
        this.loadNC2();
        this.loadOcta();
        this.loadStations();
    },

    loadTech() {
        console.log("Tech‑Module geladen:");
        console.log("- 6D");
        console.log("- 12e allin/allout");
        console.log("- 6E → 6D.tech");
    },

    loadRooms() {
        console.log("Rooms aktiviert:");
        console.log("- B.room");
        console.log("- H.room");
        console.log("- Q.room");
        console.log("- T.room");
    },

    loadNC2() {
        console.log("NC²‑Module geladen:");
        console.log("- NC²");
        console.log("- NC² (1)");
        console.log("- NC²□.lock");
        console.log("- NC²□.sync");
    },

    loadOcta() {
        console.log("Octa‑Module geladen:");
        console.log("- NC²octa².dual");
        console.log("- NC²octa²□.merge");
        console.log("- NC²octa³.align");
    },

    loadStations() {
        console.log("Stationen geladen:");
        console.log("- STATIONEN.raw");
        console.log("- level‑pyramiden‑7.csv");
    }
};

T.init();
