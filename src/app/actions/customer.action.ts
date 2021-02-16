import {CustomerProductQueryEntity} from '../models/CustomerProductQueryEntity';

export class AddCustomer {
    static readonly type = '[CustomerProductQueryEntity] Add';

    constructor(public payload: CustomerProductQueryEntity) {
    }
}

export class GetCustomer {
    static readonly type = '[CustomerProductQueryEntity] Get';
}

export class UpdateCustomerProds {
    static readonly type = '[CustomerProductQueryEntity] Update';

    constructor(public payload: CustomerProductQueryEntity, public id: number) {
    }
}

export class DeleteCustomer {
    static readonly type = '[CustomerProductQueryEntity] Delete';

    constructor(public id: number) {
    }
}

export class SetSelectedCustomer {
    static readonly type = '[CustomerProductQueryEntity] Set';

    constructor(public payload: CustomerProductQueryEntity) {
    }
}
