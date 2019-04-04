const fs = require('fs');
const files = fs.readdirSync('../nodeClassRoomTraining');
console.log(files);

fs.readdir('../',function(err, filess){
if(err) console.log(err);
else console.log('result :'+filess);
});