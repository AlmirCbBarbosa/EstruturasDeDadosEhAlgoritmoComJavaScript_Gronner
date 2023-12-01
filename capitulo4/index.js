import ArrayStack from "./ArrayStack.js";//importando a pilha com base em array
import ObjectStack from "./ObjectStack.js"; //importando a pilha com base em object

//teste ArrayStack
/*const pilha = new ArrayStack();

pilha.push(45);
pilha.push(90);
console.log(pilha.size());

pilha.pop();
console.log(pilha.size());

pilha.clear();
console.log(pilha.isEmpty()); */


const pilhaTeste = new ObjectStack();

pilhaTeste.push(23);
pilhaTeste.push(46);
pilhaTeste.push(69);
console.log(`Os elementos da pilha são: ${pilhaTeste.listItems()}`);
console.log(`O tamanho da pilha é: ${pilhaTeste.size()}`);

console.log("\n");

pilhaTeste.clear();
console.log(`A pilha esta vazia? ${pilhaTeste.isEmpty()}`);
console.log(`Os elementos da pilha são: ${pilhaTeste.listItems()}`);
console.log(`O tamanho da pilha é: ${pilhaTeste.size()}`); 