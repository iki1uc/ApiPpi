// schub.js - iki1uc / 360 + ctrl in einem, pur 81
(function(){
  const parts = location.pathname.split("/").filter(Boolean);
  let folderName = location.pathname.split("/").slice(-2)[0]; // A = expand Energie

  if (!folderName) { // wenn A leer ist, B Energie dazu
    folderName = parts.length? parts[parts.length-1] : "ROOT";
  }

  // nur so viel Schub wie nötig
  if (typeof T!== "undefined" && T.init) {
    T.init(folderName); // einmal, nicht zweimal
  }
})();
