import { tassign } from 'tassign';
import * as Const from './actions';

export interface IAppState {
 vehicleInfo: Array<any>; 
 vendorInfo: Array<any>;
 officeInfo: Array<any>;
 modal: string;
}

export const INITIAL_STATE: IAppState = {
 vehicleInfo: [],
 vendorInfo: [],
 officeInfo: [],
 modal: 'CLOSE'
}

function getVehicles(state, action) {
    return tassign(state, { vehicleInfo: action.vehicleInfo});
}
function getVendors(state, action) {
    return tassign(state, { vendorInfo: action.vendorInfo});
}
function getOffice(state, action) {
    return tassign(state, { officeInfo: action.officeInfo});
}
function updateVehicle(state, action) {
   var updatedItem = state.vehicleInfo.find(i => i.id === action.vehicleInfo.id);
    var index = state.vehicleInfo.indexOf(updatedItem);
    var beforeItems = state.vehicleInfo.slice(0, index);
    var afterItems = state.vehicleInfo.slice(index + 1);    
    var newarray = [...beforeItems, action.vehicleInfo, ...afterItems];
    return tassign(state, { vehicleInfo: newarray, modal: Const.UPDATED_CLOSE_MODAL});
}

function updateVendor(state, action) {
    var updatedItem = state.vendorInfo.find(i => i.id === action.vendorInfo.id);
    var index = state.vendorInfo.indexOf(updatedItem);
    var beforeItems = state.vendorInfo.slice(0, index);
    var afterItems = state.vendorInfo.slice(index + 1);    
    var newarray = [...beforeItems, action.vendorInfo, ...afterItems];
    return tassign(state, { vendorInfo: newarray, modal: Const.UPDATED_CLOSE_MODAL});
}

function updateOffice(state, action) {
    var updatedItem = state.officeInfo.find(i => i.id === action.officeInfo.id);
    var index = state.officeInfo.indexOf(updatedItem);
    var beforeItems = state.officeInfo.slice(0, index);
    var afterItems = state.officeInfo.slice(index + 1);    
    var newarray = [...beforeItems, action.officeInfo, ...afterItems];
    return tassign(state, { officeInfo: newarray, modal: Const.UPDATED_CLOSE_MODAL});
}

export function appReducer(state: IAppState, action): IAppState {

switch(action.type) {
    case Const.FETCH_ALL_VECHICLES_SUCCESS: return getVehicles(state, action);
    case Const.ADD_VECHICLE_SUCCESS:
    var addedToList = state.vehicleInfo.concat(action.vehicleInfo);
    return tassign(state, { vehicleInfo: addedToList, modal: Const.UPDATED_CLOSE_MODAL});
    case Const.UPDATE_VECHICLE_SUCCESS: return updateVehicle(state, action);
 
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
}


return state;

}
