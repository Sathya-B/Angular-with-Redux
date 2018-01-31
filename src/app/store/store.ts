import { tassign } from 'tassign';
import * as Const from './actions';

export interface IAppState {
 vehicleInfo: Array<any>;
 vehicleMaintenanceInfo: Array<any>; 
 vendorInfo: Array<any>;
 officeInfo: Array<any>;
 tripInfo: Array<any>;
 tripInfoLine: Array<any>;
 driverInfo: Array<any>;
 pendingInfo: Array<any>;
 expiryInfo: {};
 modal: string;
}

export const INITIAL_STATE: IAppState = {
 vehicleInfo: [],
 vehicleMaintenanceInfo: [],
 vendorInfo: [],
 officeInfo: [],
 tripInfo: [],
 tripInfoLine: [],
 driverInfo: [],
 pendingInfo: [],
 expiryInfo: {},
 modal: 'CLOSE'
}

function getVehicles(state, action) {
    return tassign(state, { vehicleInfo: action.vehicleInfo});
}
function getVehicleMaintenance(state, action) {
    console.log(action.vehicleMaintenanceInfo);
    return tassign(state, { vehicleMaintenanceInfo: action.vehicleMaintenanceInfo});
}
function getVendors(state, action) {
    return tassign(state, { vendorInfo: action.vendorInfo});
}
function getOffice(state, action) {
    return tassign(state, { officeInfo: action.officeInfo});
}
function getTrips(state, action) {
    return tassign(state, { tripInfo: action.tripInfo});
}
function getTripLine(state, action) {
    return tassign(state, { tripInfoLine: action.tripInfoLine});
}
function getDrivers(state, action) {
    return tassign(state, { driverInfo: action.driverInfo});
}

function getPending(state, action) {
    return tassign(state, { pendingInfo: action.pendingInfo});
}

function getExpiry(state, action) {
    return tassign(state, { expiryInfo: action.expiryInfo});
}

function updateVehicle(state, action) {
   var updatedItem = state.vehicleInfo.find(i => i.vehicleId === action.vehicleInfo.vehicleId);
    var index = state.vehicleInfo.indexOf(updatedItem);
    var beforeItems = state.vehicleInfo.slice(0, index);
    var afterItems = state.vehicleInfo.slice(index + 1);    
    var newarray = [...beforeItems, action.vehicleInfo, ...afterItems];
    return tassign(state, { vehicleInfo: newarray, modal: Const.UPDATED_CLOSE_MODAL});
}
function updateVehicleMaintenance(state, action) {
   var updatedItem = state.vehicleMaintenanceInfo.find(i => i.vehicleId === action.vehicleMaintenanceInfo.vehicleId);
    var index = state.vehicleMaintenanceInfo.indexOf(updatedItem);
    var beforeItems = state.vehicleMaintenanceInfo.slice(0, index);
    var afterItems = state.vehicleMaintenanceInfo.slice(index + 1);    
    var newarray = [...beforeItems, action.vehicleMaintenanceInfo, ...afterItems];
    return tassign(state, { vehicleMaintenanceInfo: newarray, modal: Const.UPDATED_CLOSE_MODAL});
}

function updateVendor(state, action) {
    var updatedItem = state.vendorInfo.find(i => i.vendorId === action.vendorInfo.vendorId);
    var index = state.vendorInfo.indexOf(updatedItem);
    var beforeItems = state.vendorInfo.slice(0, index);
    var afterItems = state.vendorInfo.slice(index + 1);    
    var newarray = [...beforeItems, action.vendorInfo, ...afterItems];
    return tassign(state, { vendorInfo: newarray, modal: Const.UPDATED_CLOSE_MODAL});
}

function updateOffice(state, action) {
    var updatedItem = state.officeInfo.find(i => i.officeId === action.officeInfo.officeId);
    var index = state.officeInfo.indexOf(updatedItem);
    var beforeItems = state.officeInfo.slice(0, index);
    var afterItems = state.officeInfo.slice(index + 1);    
    var newarray = [...beforeItems, action.officeInfo, ...afterItems];
    return tassign(state, { officeInfo: newarray, modal: Const.UPDATED_CLOSE_MODAL});
}

function updateTrip(state, action) {
    var updatedItem = state.tripInfo.find(i => i.tripId === action.tripInfo.tripId);
    var index = state.tripInfo.indexOf(updatedItem);
    var beforeItems = state.tripInfo.slice(0, index);
    var afterItems = state.tripInfo.slice(index + 1);    
    var newarray = [...beforeItems, action.tripInfo, ...afterItems];
    return tassign(state, { tripInfo: newarray, modal: Const.UPDATED_CLOSE_MODAL});
}

function deleteTrip(state, action) {
    var newarray = state.tripInfo.filter(t => t.tripId != action.tripId);
    var newlinearray = state.tripInfoLine.filter(t => t.tripId != action.tripId);
    return tassign(state, { tripInfo: newarray, tripInfoLine: newlinearray, modal: Const.UPDATED_CLOSE_MODAL});
}

function updateTripLine(state, action) {
    var updatedItem = state.tripInfoLine.find(i => i.tripId === action.tripInfoLine.tripId);
    var index = state.tripInfoLine.indexOf(updatedItem);
    var beforeItems = state.tripInfoLine.slice(0, index);
    var afterItems = state.tripInfoLine.slice(index + 1);    
    var newarray = [...beforeItems, action.tripInfoLine, ...afterItems];
    return tassign(state, { tripInfoLine: newarray, modal: Const.UPDATED_CLOSE_MODAL});
}

function updateDriver(state, action) {
    var updatedItem = state.driverInfo.find(i => i.driverId === action.driverInfo.driverId);
    var index = state.driverInfo.indexOf(updatedItem);
    var beforeItems = state.driverInfo.slice(0, index);
    var afterItems = state.driverInfo.slice(index + 1);    
    var newarray = [...beforeItems, action.driverInfo, ...afterItems];
    return tassign(state, { driverInfo: newarray, modal: Const.UPDATED_CLOSE_MODAL});
}
function updatePending(state, action) {
    var updatedItem = state.pendingInfo.find(i => i.tripId === action.pendingInfo.tripId);
    var index = state.pendingInfo.indexOf(updatedItem);
    var beforeItems = state.pendingInfo.slice(0, index);
    var afterItems = state.pendingInfo.slice(index + 1);    
    var newarray = [...beforeItems, action.pendingInfo, ...afterItems];
    return tassign(state, { pendingInfo: newarray, modal: Const.UPDATED_CLOSE_MODAL});
}

export function appReducer(state: IAppState, action): IAppState {

switch(action.type) {
    case Const.FETCH_ALL_VECHICLES_SUCCESS: return getVehicles(state, action);
    case Const.ADD_VECHICLE_SUCCESS:
    var addedToList = state.vehicleInfo.concat(action.vehicleInfo);
    return tassign(state, { vehicleInfo: addedToList, modal: Const.UPDATED_CLOSE_MODAL});
    case Const.UPDATE_VECHICLE_SUCCESS: return updateVehicle(state, action);
 
    case Const.FETCH_ALL_MAINTENANCE_SUCCESS: return getVehicleMaintenance(state, action);
    case Const.ADD_MAINTENANCE_SUCCESS:
    var addedToList = state.vehicleMaintenanceInfo.concat(action.vehicleMaintenanceInfo);
    return tassign(state, { vehicleMaintenanceInfo: addedToList, modal: Const.UPDATED_CLOSE_MODAL});
    case Const.UPDATE_MAINTENANCE_SUCCESS: return updateVehicleMaintenance(state, action);

    case Const.FETCH_ALL_VENDORS_SUCCESS: return getVendors(state, action);
    case Const.ADD_VENDOR_SUCCESS:
    var addedToList = state.vendorInfo.concat(action.vendorInfo);
    return tassign(state, { vendorInfo: addedToList, modal: Const.UPDATED_CLOSE_MODAL});
    case Const.UPDATE_VENDOR_SUCCESS: return updateVendor(state, action);

    case Const.FETCH_ALL_OFFICE_SUCCESS: return getOffice(state, action);
    case Const.ADD_OFFICE_SUCCESS:
    var addedToList = state.officeInfo.concat(action.officeInfo);
    return tassign(state, { officeInfo: addedToList, modal: Const.UPDATED_CLOSE_MODAL});
    case Const.UPDATE_OFFICE_SUCCESS: return updateOffice(state, action);

    case Const.FETCH_ALL_TRIP_SUCCESS: return getTrips(state, action);
    case Const.UPDATE_TRIP_SUCCESS: return updateTrip(state, action);
    case Const.ADD_TRIP_SUCCESS:
    var addedToList = state.tripInfo.concat(action.tripInfo);
    return tassign(state, { tripInfo: addedToList, modal: Const.UPDATED_CLOSE_MODAL});
    case Const.DELETE_TRIP_SUCCESS: return deleteTrip(state, action);

    case Const.FETCH_ALL_TRIPLINE_SUCCESS: return getTripLine(state, action);
    case Const.UPDATE_TRIPLINE_SUCCESS: return updateTripLine(state, action);
    case Const.ADD_TRIPLINE_SUCCESS:
    var addedToList = state.tripInfoLine.concat(action.tripInfoLine);
    return tassign(state, { tripInfoLine: addedToList, modal: Const.UPDATED_CLOSE_MODAL});


    case Const.FETCH_ALL_DRIVER_SUCCESS: return getDrivers(state, action);
    case Const.UPDATE_DRIVER_SUCCESS: return updateDriver(state, action);
    case Const.ADD_DRIVER_SUCCESS:
    var addedToList = state.driverInfo.concat(action.driverInfo);
    return tassign(state, { driverInfo: addedToList, modal: Const.UPDATED_CLOSE_MODAL});

    case Const.FETCH_ALL_PENDING_SUCCESS: return getPending(state, action);
    case Const.UPDATE_PENDING_SUCCESS: return updatePending(state, action);

    case Const.FETCH_ALL_EXPIRY_SUCCESS: return getExpiry(state, action);
}

return state;

}
