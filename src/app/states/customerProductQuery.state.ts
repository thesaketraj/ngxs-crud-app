import {State, Action, StateContext, Selector} from '@ngxs/store';
import {CustomerProductQueryEntity} from '../models/CustomerProductQueryEntity';
import {AddCustomer, DeleteCustomer, GetCustomer, SetSelectedCustomer, UpdateCustomerProds} from '../actions/customer.action';
import {TodoService} from '../todo.service';
import {tap} from 'rxjs/operators';
import {CustomerProductQueryService } from '../customer.service';

export class CustomerStateModel {
    customerProd: CustomerProductQueryEntity[];
    selectedCustomerProds: CustomerProductQueryEntity;
}

@State<CustomerStateModel>({
    name: 'customerProd',
    defaults: {
        customerProd: [],
        selectedCustomerProds: null
    }
})
export class CustomerState {

    constructor(private customerService: CustomerProductQueryService) {
    }

    @Selector()
    static getTodoList(state: CustomerStateModel) {
        return state.customerProd;
    }

    @Selector()
    static getSelectedTodo(state: CustomerStateModel) {
        return state.selectedCustomerProds;
    }

    @Action(GetCustomer)
    getTodos({getState, setState}: StateContext<CustomerStateModel>) {
        return this.customerService.fetchCustomerDetails().pipe(tap((result) => {
            const state = getState();
            setState({
                ...state,
                customerProd: result,
            });
        }));
    }

    @Action(AddCustomer)
    addTodo({getState, patchState}: StateContext<CustomerStateModel>, {payload}: AddCustomer) {
        return this.customerService.addCustomer(payload).pipe(tap((result) => {
            const state = getState();
            patchState({
                customerProd: [...state.customerProd, result]
            });
        }));
    }

    @Action(UpdateCustomerProds)
    updateTodo({getState, setState}: StateContext<CustomerStateModel>, {payload, id}: UpdateCustomerProds) {
        return this.customerService.updateCustomer(payload, id).pipe(tap((result) => {
            const state = getState();
            const todoList = [...state.customerProd];
            const todoIndex = todoList.findIndex(item => item.custProductQueryId === id);
            todoList[todoIndex] = result;
            setState({
                ...state,
                customerProd: todoList,
            });
        }));
    }


    @Action(DeleteCustomer)
    deleteTodo({getState, setState}: StateContext<CustomerStateModel>, {id}: DeleteCustomer) {
        return this.customerService.deleteCustomer(id).pipe(tap(() => {
            const state = getState();
            const filteredArray = state.customerProd.filter(item => item.custProductQueryId !== id);
            setState({
                ...state,
                customerProd: filteredArray,
            });
        }));
    }

    @Action(SetSelectedCustomer)
    setSelectedTodoId({getState, setState}: StateContext<CustomerStateModel>, {payload}: SetSelectedCustomer) {
        const state = getState();
        setState({
            ...state,
            selectedCustomerProds: payload
        });
    }
}
