function isFibonacci(num) {
    if (num < 0) return false;
    let a = 0;
    let b = 1;
  
    
    if (num === a || num === b) return true;
  
   
    let next = a + b;
    while (next <= num) {
      if (next === num) return true; 
      a = b;
      b = next;
      next = a + b;
    }
  
    return false; 
  }
  
  
  const inputNumber = parseInt(prompt("Informe um número para verificar se pertence à sequência de Fibonacci:"));
  
 
  if (isFibonacci(inputNumber)) {
    console.log(`${inputNumber} pertence à sequência de Fibonacci.`);
  } else {
    console.log(`${inputNumber} não pertence à sequência de Fibonacci.`);
  }
  