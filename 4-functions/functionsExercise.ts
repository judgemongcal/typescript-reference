// Part 1

const twoFer = (name : string = 'you') : string => {
    return `one for ${name}, one for me.`;
}
console.log(twoFer('Kevin'));

// Part 2

const isLeapyear= (year : number) : boolean => {
    if(year%4 == 0 && year%100 != 0){
        return true;
    } else if(year%400 == 0){
        return true;
    }else{
        return false;
    }
};


const isLeapyear2 = (year : number) : boolean => {
   return (year%4 == 0 && year%100 != 0) || (year%400 == 0);
};


console.log(isLeapyear(2012));
console.log(isLeapyear(2013));
console.log(isLeapyear2(2012));
console.log(isLeapyear2(2013));