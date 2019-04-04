var url="";
function log(message)
{
    console.log('we are logging : '+message);
}
function printing(message){
    console.log('we are printing : '+message);
}
module.exports.print= printing;
module.exports.log = log;