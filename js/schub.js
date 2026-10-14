// schub.js - nur so viel Energie wie notwendig
const schub = {
  level: 0,
  max: 81, // pur(81) cap
  give: function(need) {
    if (this.level >= need) return; // schon genug, kein extra Schub
    this.level = Math.min(need, this.max);
    if (typeof T !== "undefined" && T.boost) T.boost(this.level);
  },
  cut: function() {
    this.level = 0;
  }
};
