import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CustomerProductQueryEntity} from './models/CustomerProductQueryEntity';

var customerLocalURL ="http://localhost:8099/customerQuery/prodQueryList.html";

@Injectable({
    providedIn: 'root'
})
export class CustomerProductQueryService {

    constructor(private http: HttpClient) {
    }

    fetchCustomerDetails() {
        return this.http.get<CustomerProductQueryEntity[]>('customerLocalURL');
    }

    deleteCustomer(id: number) {
        return this.http.delete(`customerLocalURL/${id}`);
    }

    addCustomer(payload: CustomerProductQueryEntity) {
        return this.http.post<CustomerProductQueryEntity>('customerLocalURL', payload);
    }

    updateCustomer(payload: CustomerProductQueryEntity, id: number) {
        return this.http.put<CustomerProductQueryEntity>(`customerLocalURLs/${id}`, payload);
    }
}