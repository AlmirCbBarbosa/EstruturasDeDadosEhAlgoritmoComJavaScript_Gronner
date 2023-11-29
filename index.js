import ArrayStack from "./capitulo4/ArrayStack.js";//importando a pilha com base em array


//teste ArrayStack
const pilha = new ArrayStack();

pilha.push(45);
pilha.push(90);
console.log(pilha.size());

pilha.pop();
console.log(pilha.size());

pilha.clear();
console.log(pilha.isEmpty());
