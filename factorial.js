// with recursiom
function fact(n){
    if(n==0 || n==1){
        return 1;
    }else{
        return n*fact(n-1)
    }
    
}
console.log(fact(5))


//without recursion
function factWithoutRecursion(n){
    let fact=1
    if(n==0 || n==1){
        return fact;
    }else {
         for(let i=1;i<=n;i++){
         fact=fact*i
    }
    }
    return fact
   
}
console.log(factWithoutRecursion(5))