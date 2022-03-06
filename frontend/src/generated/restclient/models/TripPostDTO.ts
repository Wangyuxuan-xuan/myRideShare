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

/**
 * @export
 * @interface TripPostDTO
 */
export interface TripPostDTO {
    /**
     * @type {string}
     * @memberof TripPostDTO
     */
    startLocation?: string;
    /**
     * @type {string}
     * @memberof TripPostDTO
     */
    endLocation?: string;
    /**
     * @type {string}
     * @memberof TripPostDTO
     */
    startTime?: string;
    /**
     * @type {string}
     * @memberof TripPostDTO
     */
    endTime?: string;
    /**
     * @type {number}
     * @memberof TripPostDTO
     */
    price?: number;
    /**
     * @type {number}
     * @memberof TripPostDTO
     */
    maxNumOfPassengers?: number;
    /**
     * @type {string}
     * @memberof TripPostDTO
     */
    description?: string;
    /**
     * @type {number}
     * @memberof TripPostDTO
     */
    driverId?: number;
    /**
     * @type {number}
     * @memberof TripPostDTO
     */
    carId?: number;
}
