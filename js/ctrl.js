const parts = location.pathname.split("/").filter(Boolean);
const folderName = parts.length? parts[parts.length-1] : "ROOT";
if (typeof T!== "undefined" && T.init) T.init(folderName);
