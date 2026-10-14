360 – Vollrotation · iki1uc
../T-UNIVERSAL/t.loader.js
folderName = location.pathname.split("/").slice(-2)[0]
T.init(folderName)

const parts = location.pathname.split("/").filter(Boolean);
const folderName = parts.length? parts[parts.length-1] : "ROOT";
if (typeof T!== "undefined" && T.init) T.init(folderName);
