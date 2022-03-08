// tslint:disable
/**
 * OpenAPI definition
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Observable } from 'rxjs';
import { BaseAPI, HttpHeaders, throwIfNullOrUndefined, encodeURI, OperationOpts, RawAjaxResponse } from '../runtime';
import {
    CustomerDTO,
    CustomerTripDTO,
    CustomerTripPostDTO,
    CustomerUpdateDTO,
} from '../models';

export interface CreateCustomerRequest {
    name?: string;
    email?: string;
    password?: string;
    phone?: string;
}

export interface CreateCustomerTripRequest {
    customerTripPostDTO: CustomerTripPostDTO;
}

export interface DeleteCustomerByIdRequest {
    customerId: number;
}

export interface GetAllCustomerTripsByCustomerIdRequest {
    customerId: number;
}

export interface GetCustomerByIdRequest {
    customerId: number;
}

export interface UpdateCustomerRequest {
    customerUpdateDTO: CustomerUpdateDTO;
}

/**
 * no description
 */
export class CustomerControllerApi extends BaseAPI {

    /**
     */
    createCustomer({ name, email, password, phone }: CreateCustomerRequest): Observable<CustomerDTO>
    createCustomer({ name, email, password, phone }: CreateCustomerRequest, opts?: OperationOpts): Observable<RawAjaxResponse<CustomerDTO>>
    createCustomer({ name, email, password, phone }: CreateCustomerRequest, opts?: OperationOpts): Observable<CustomerDTO | RawAjaxResponse<CustomerDTO>> {

        const formData = new FormData();
        if (name !== undefined) { formData.append('name', name as any); }
        if (email !== undefined) { formData.append('email', email as any); }
        if (password !== undefined) { formData.append('password', password as any); }
        if (phone !== undefined) { formData.append('phone', phone as any); }

        return this.request<CustomerDTO>({
            url: '/api/customers/create',
            method: 'POST',
            body: formData,
        }, opts?.responseOpts);
    };

    /**
     */
    createCustomerTrip({ customerTripPostDTO }: CreateCustomerTripRequest): Observable<void>
    createCustomerTrip({ customerTripPostDTO }: CreateCustomerTripRequest, opts?: OperationOpts): Observable<void | RawAjaxResponse<void>>
    createCustomerTrip({ customerTripPostDTO }: CreateCustomerTripRequest, opts?: OperationOpts): Observable<void | RawAjaxResponse<void>> {
        throwIfNullOrUndefined(customerTripPostDTO, 'customerTripPostDTO', 'createCustomerTrip');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
        };

        return this.request<void>({
            url: '/api/customers/new/customerTrip',
            method: 'POST',
            headers,
            body: customerTripPostDTO,
        }, opts?.responseOpts);
    };

    /**
     */
    deleteCustomerById({ customerId }: DeleteCustomerByIdRequest): Observable<void>
    deleteCustomerById({ customerId }: DeleteCustomerByIdRequest, opts?: OperationOpts): Observable<void | RawAjaxResponse<void>>
    deleteCustomerById({ customerId }: DeleteCustomerByIdRequest, opts?: OperationOpts): Observable<void | RawAjaxResponse<void>> {
        throwIfNullOrUndefined(customerId, 'customerId', 'deleteCustomerById');

        return this.request<void>({
            url: '/api/customers/{customerId}'.replace('{customerId}', encodeURI(customerId)),
            method: 'DELETE',
        }, opts?.responseOpts);
    };

    /**
     */
    getAllCustomerTripsByCustomerId({ customerId }: GetAllCustomerTripsByCustomerIdRequest): Observable<Array<CustomerTripDTO>>
    getAllCustomerTripsByCustomerId({ customerId }: GetAllCustomerTripsByCustomerIdRequest, opts?: OperationOpts): Observable<RawAjaxResponse<Array<CustomerTripDTO>>>
    getAllCustomerTripsByCustomerId({ customerId }: GetAllCustomerTripsByCustomerIdRequest, opts?: OperationOpts): Observable<Array<CustomerTripDTO> | RawAjaxResponse<Array<CustomerTripDTO>>> {
        throwIfNullOrUndefined(customerId, 'customerId', 'getAllCustomerTripsByCustomerId');

        return this.request<Array<CustomerTripDTO>>({
            url: '/api/customers/customerTrip/{customerId}'.replace('{customerId}', encodeURI(customerId)),
            method: 'GET',
        }, opts?.responseOpts);
    };

    /**
     */
    getAllCustomers(): Observable<Array<CustomerDTO>>
    getAllCustomers(opts?: OperationOpts): Observable<RawAjaxResponse<Array<CustomerDTO>>>
    getAllCustomers(opts?: OperationOpts): Observable<Array<CustomerDTO> | RawAjaxResponse<Array<CustomerDTO>>> {
        return this.request<Array<CustomerDTO>>({
            url: '/api/customers/customers',
            method: 'GET',
        }, opts?.responseOpts);
    };

    /**
     */
    getCustomerById({ customerId }: GetCustomerByIdRequest): Observable<CustomerDTO>
    getCustomerById({ customerId }: GetCustomerByIdRequest, opts?: OperationOpts): Observable<RawAjaxResponse<CustomerDTO>>
    getCustomerById({ customerId }: GetCustomerByIdRequest, opts?: OperationOpts): Observable<CustomerDTO | RawAjaxResponse<CustomerDTO>> {
        throwIfNullOrUndefined(customerId, 'customerId', 'getCustomerById');

        return this.request<CustomerDTO>({
            url: '/api/customers/{customerId}'.replace('{customerId}', encodeURI(customerId)),
            method: 'GET',
        }, opts?.responseOpts);
    };

    /**
     */
    updateCustomer({ customerUpdateDTO }: UpdateCustomerRequest): Observable<void>
    updateCustomer({ customerUpdateDTO }: UpdateCustomerRequest, opts?: OperationOpts): Observable<void | RawAjaxResponse<void>>
    updateCustomer({ customerUpdateDTO }: UpdateCustomerRequest, opts?: OperationOpts): Observable<void | RawAjaxResponse<void>> {
        throwIfNullOrUndefined(customerUpdateDTO, 'customerUpdateDTO', 'updateCustomer');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
        };

        return this.request<void>({
            url: '/api/customers/update',
            method: 'PUT',
            headers,
            body: customerUpdateDTO,
        }, opts?.responseOpts);
    };

}
