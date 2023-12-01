{//Descrição da atividade
/*Implementação de estrutura de dados Stack (pilha) com base em uma array

Será criado a classe stack com os seguintes métodos: 
    -push -> Adiciona um elemento no topo da pilha; (funcionalidade básica)
    -pop -> remove o elemento do topo da pilha; (funcionalidade básica)
    -peek -> Informa o elemento que esta no topo da pilha;
    -isEmpty -> verifica se a pilha esta vazia;
    -size -> informa a quantidade de elementos da pilha;
    -clear -> remove todos os elementos da pilha.
*/
}

class ArrayStack{
    constructor(){
        this.items =[];
    }

    //métodos
    push(element){ //ok
        this.items.push(element);
    }

    pop(){ //ok
        this.items.pop();
    }

    peek(){ //ok
        const lastElement = this.items[this.items.length - 1];
        return lastElement;
    }

    isEmpty(){ //ok
        return this.items.length == 0;
    }

    size(){ //0k
        return this.items.length;
    }

    clear(){
        this.items = [];
    }

    listItems(){
        return this.items;
    }
}

export default ArrayStack;
