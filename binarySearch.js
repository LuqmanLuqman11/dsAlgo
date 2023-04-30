function binarySearch(list, value) {
    let left = 0;
    let right = list.length - 1;
    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        if (list[mid] == value) {
            return mid;
        }
        if (value < list[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return -1;
}
console.log(binarySearch([9,8,2,3,4,5],3))
