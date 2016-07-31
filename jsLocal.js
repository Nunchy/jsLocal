/////////////////////////////////////////////////////////////////////
// jsLocal.js, written by M. Nealon, 2016.
//
// Some functions for working with javascript localStorage.
//

// This is the prefix string used to reference values in localStorage,
// for example if we do:
//
//	lsSet("key", "value");
//
// The lsSet() function will call:
//
//	localStorage.setItem(lLS_PREFIX + "key", "value");
//
var	LS_PREFIX = "jsLocal_prefix_";

// Set a value, returns nothing.
//
function lsSet(
	strName,
	strValue
) {
	localStorage.setItem(LS_PREFIX + strName, strValue);
}

// Returns a value.
//
function lsGet(
	strName
) {
	return localStorage.getItem(LS_PREFIX + strName);
}

// Returns true if the specified value exists in localStorage,
// otherwise returns false.
//
function lsIsset(
	strName
) {
	if (typeof lsGet(strName) === 'undefined')
		return false;
	return true;
}

// Initialise a value.
//
// If the value is currently unset it will be initialised with the
// fiven value and true is returned.
//
// If the value is already set it is not changed and false is
// returned.
//
function lsInit(
	strName,
	strValue
) {
	if (lsIsset(strName) == true)
		return false;
	lsSet(strName, strValue);
	return true;
}

// Update a value.
//
// If the value is already set, nothing is done and false is returned.
//
// If the value is already set then it is updated with the new value
// and true is returned.
//
function lsUpdate(
	strName,
	strValue
) {
	if (lsIsset(strName) == false)
		return false;
	lsSet(strName, strValue);
	return true;
}

