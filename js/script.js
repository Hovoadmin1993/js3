
let yK = 1;
let lastFactorial =1;
let f = 1;
let s =0;
let nFactorial = 1;
for (let k = 1; k <= n; k++) {
   
    yK *= (-1);
    let currentFactorial = 2 * k * k + 1;
    for (let i = lastFactorial +1; i <= currentFactorial; i++) {
        f = f * 1;
        
    }
    
 s= s + f * yK;
 nFactorial = nFactorial *k;
  lastFactorial = currentFactorial;

}

s = (1 / nFactorial) * s;