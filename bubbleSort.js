function bubbleSort(arr){
    let temp;
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                temp=arr[j];
                arr[j]=arr[i]
                arr[i]=temp
                 }
            }
            
    }
    return arr
   
}
console.log(bubbleSort([90,7,6,4,-1,1]))