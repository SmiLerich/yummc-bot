const fs = require("fs")

const file = "./userdata.json"

function loadData(){
if(!fs.existsSync(file)){
fs.writeFileSync(file,"{}")
}
return JSON.parse(fs.readFileSync(file))
}

function saveData(data){
fs.writeFileSync(file, JSON.stringify(data,null,2))
}

module.exports = {
loadData,
saveData
}