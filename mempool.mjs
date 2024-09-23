class Mempool{
    constructor() {
        this.pendingTransactions = [];
    }

    addTransactions(transaction){
        this.pendingTransactions.push(transaction);
    }
}

export default Mempool;