function recievesAFunction(callback){
    callback();
}
function returnsANamedFunction(){
    return function NamedFunction(){
        console.log("a named function");
     };
        
}
function returnsAnAnonymousFunction(){
return function(){
console.log("an anonymous function")
};
}