var i:number =1;

var result:number = 2+4 + i++; 
var result:number = 2+4 + ++i; 

var x:number = 1;

while(x<6){
    console.log('index is',{x},'world');
    x++;
}
let sum:number = 2;
for(let i=1; i<=100; i++){
    if( i%2 == 0){
        console.log({i},"EVEN")
        sum = sum + i ;
    }
else{
    console.log({i},"ODD")
}

}
console.log('Total value of sum is ', sum,);