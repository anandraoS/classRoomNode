const EventEmitter = require("events");
const emitter = new EventEmitter();

// with on method 
// emitter.on('messge logged' , function(){
// console.log('Listener called');
// });

emitter.addListener("messge logged", (args) => {
  console.log("Listener called"+args);
});
emitter.addListener("messge logged", ({Lid : string , url:string}) => {
    console.log("Listener called");
  });
emitter.emit("messge logged");
