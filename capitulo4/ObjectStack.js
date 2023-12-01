{//Descrição da atividade
/*Implementação de estrutura de dados Stack (pilha) com base em um Object.

Será criado a classe stack com os seguintes métodos: 
    -push -> Adiciona um elemento no topo da pilha; (funcionalidade básica)
    -pop -> remove o elemento do topo da pilha; (funcionalidade básica)
    -peek -> Informa o elemento que esta no topo da pilha;
    -isEmpty -> verifica se a pilha esta vazia;
    -size -> informa a quantidade de elementos da pilha;
    -clear -> remove todos os elementos da pilha.
*/
}

class ObjectStack{
    constructor(){
        this.count = 0;
        this.items = {};
    }

    //métodos básico de uma Stack
    push(element){//ok
        this.items[this.count] = element;
        ++this.count;
    }

    isEmpty(){ //ok -- necessário para implementar o método pop
        return this.count === 0;
    }

    pop(){ //ok
        if(this.isEmpty()){
            return undefined;
        };
        const removedElement = this.items[this.count];

        --this.count;
        delete this.items[this.count];

        return removedElement;
    }

    //outro métodos
    peek(){
        return this.items[this.count -1];
    }

    size(){//ok
        return this.count;
    }

    clear(){//ok
        this.items = {};
        this.count = 0;
    }

    listItems(){//ok
        return JSON.stringify(this.items);
    }
}

export default ObjectStack;
