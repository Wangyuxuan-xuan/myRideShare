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
    DriverDTO,
    DriverUpdateDTO,
} from '../models';

export interface CreateDriverRequest {
    name?: string;
    email?: string;
    password?: string;
    address?: string;
    phone?: string;
    driverLicenseNo?: string;
    avatar?: Blob;
}

export interface DeleteByDriverIdRequest {
    driverId: number;
}

export interface GetDriverByIdRequest {
    driverId: number;
}

export interface UpdateDriverRequest {
    driverUpdateDTO: DriverUpdateDTO;
}

/**
 * no description
 */
export class DriverControllerApi extends BaseAPI {

    /**
     */
    createDriver({ name, email, password, address, phone, driverLicenseNo, avatar }: CreateDriverRequest): Observable<DriverDTO>
    createDriver({ name, email, password, address, phone, driverLicenseNo, avatar }: CreateDriverRequest, opts?: OperationOpts): Observable<RawAjaxResponse<DriverDTO>>
    createDriver({ name, email, password, address, phone, driverLicenseNo, avatar }: CreateDriverRequest, opts?: OperationOpts): Observable<DriverDTO | RawAjaxResponse<DriverDTO>> {

        const formData = new FormData();
        if (name !== undefined) { formData.append('name', name as any); }
        if (email !== undefined) { formData.append('email', email as any); }
        if (password !== undefined) { formData.append('password', password as any); }
        if (address !== undefined) { formData.append('address', address as any); }
        if (phone !== undefined) { formData.append('phone', phone as any); }
        if (driverLicenseNo !== undefined) { formData.append('driverLicenseNo', driverLicenseNo as any); }
        if (avatar !== undefined) { formData.append('avatar', avatar as any); }

        return this.request<DriverDTO>({
            url: '/api/drivers/create',
            method: 'POST',
            body: formData,
        }, opts?.responseOpts);
    };

    /**
     */
    deleteByDriverId({ driverId }: DeleteByDriverIdRequest): Observable<void>
    deleteByDriverId({ driverId }: DeleteByDriverIdRequest, opts?: OperationOpts): Observable<void | RawAjaxResponse<void>>
    deleteByDriverId({ driverId }: DeleteByDriverIdRequest, opts?: OperationOpts): Observable<void | RawAjaxResponse<void>> {
        throwIfNullOrUndefined(driverId, 'driverId', 'deleteByDriverId');

        return this.request<void>({
            url: '/api/drivers/{driverId}'.replace('{driverId}', encodeURI(driverId)),
            method: 'DELETE',
        }, opts?.responseOpts);
    };

    /**
     */
    getAllDrivers(): Observable<Array<DriverDTO>>
    getAllDrivers(opts?: OperationOpts): Observable<RawAjaxResponse<Array<DriverDTO>>>
    getAllDrivers(opts?: OperationOpts): Observable<Array<DriverDTO> | RawAjaxResponse<Array<DriverDTO>>> {
        return this.request<Array<DriverDTO>>({
            url: '/api/drivers/drivers',
            method: 'GET',
        }, opts?.responseOpts);
    };

    /**
     */
    getDriverById({ driverId }: GetDriverByIdRequest): Observable<DriverDTO>
    getDriverById({ driverId }: GetDriverByIdRequest, opts?: OperationOpts): Observable<RawAjaxResponse<DriverDTO>>
    getDriverById({ driverId }: GetDriverByIdRequest, opts?: OperationOpts): Observable<DriverDTO | RawAjaxResponse<DriverDTO>> {
        throwIfNullOrUndefined(driverId, 'driverId', 'getDriverById');

        return this.request<DriverDTO>({
            url: '/api/drivers/{driverId}'.replace('{driverId}', encodeURI(driverId)),
            method: 'GET',
        }, opts?.responseOpts);
    };

    /**
     */
    updateDriver({ driverUpdateDTO }: UpdateDriverRequest): Observable<void>
    updateDriver({ driverUpdateDTO }: UpdateDriverRequest, opts?: OperationOpts): Observable<void | RawAjaxResponse<void>>
    updateDriver({ driverUpdateDTO }: UpdateDriverRequest, opts?: OperationOpts): Observable<void | RawAjaxResponse<void>> {
        throwIfNullOrUndefined(driverUpdateDTO, 'driverUpdateDTO', 'updateDriver');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
        };

        return this.request<void>({
            url: '/api/drivers/update',
            method: 'PUT',
            headers,
            body: driverUpdateDTO,
        }, opts?.responseOpts);
    };

}