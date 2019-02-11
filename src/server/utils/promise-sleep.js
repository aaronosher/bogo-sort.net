export default (duration) => {
    return new Promise(function(resolve){
      setTimeout(function(){
        resolve();
      }, duration)
    });
}
