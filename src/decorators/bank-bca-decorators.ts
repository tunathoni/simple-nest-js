class Bank {
    public name: string = '';
}

class BCA extends Bank{
    public name: string = 'BCA';

    constructor() {
        super();
    }
}

type Constructor = new (...args: any[]) => {};

export function BcaDec<T extends Constructor>(superClass: T) {
    const bca = new BCA();

    const { name } = bca;
    
    return class extends superClass {
        name = name
    }
}