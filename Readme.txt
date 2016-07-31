jsLocal - Writen by M. Nealon, 2016.

Provides a set of functions for storing and retrieving values to/from
localStorage.


Object:

To provide a set of functions that allows you to quickly set and retrieve
values from localStorage. The functions provided use a prefix (LS_PREFIX)
string when storing/recovering values. The purpose of this is twofold:


	1. To allow you to avoid storing values that could possibly
	   conflict with previously saved values.

	2. To allow you to easily manage data sets - by changing the
	   value of LS_PREFIX we can switch between different sets of
	   date.


Functions:

A number of functions are provided, as well as provide a functional
system for handling localStorage they allow for cleaner and more readable
code.


lsSet(strName, strValue)

	Quickly set a value in localStorage - the strName is prepended
	with the LS_PREFIX string to generate the key for a specific value.

	For example, if the LS_PREFIX string is the default:

		LS_PREFIX = "jsLocal_prefix_";

	And we call:

		lsSet("valueName", "Some data");

	The lsSet() function will call:

		localStorage.setItem(LS_PREFIX + "valueName", "Some data");

	This function returns nothing.


lsGet(strName)

	Returns a value stored in localStorage, if we call:

		lsGet("valueName");

	The function will return:

		localStorage.getItem(LS_PREFIX + "valueName");

	Will return whatever the call to localStorage returns.



lsIsset(strName)

	Will return true if the specified value exists in localStorage,
	otherwise will return false.

	It really just calls lsGet(strName) and checks the returned value,
	if the returned value is 'undefined' lsIsset() will return false,
	otherwise it will return true.


lsInit(strName, strValue)

	Initialise a value. In other words, if the value isn't currently set
	then lsInit() will set it and return true.

	If the value is already set then lsInit() will do nothing and
	return false.

	The function works quite simply:

		Calls lsIsset(strName) to check whether the value is already
		set.

		If lsIsset() returns true, the value is already set and
		lsInit() will bail retrning false.

		If lsIsset() returns false, the value is not set, so lsInit()
		will call lsSet(strName, strValue) then return true.


lsUpdate(strName, strValue)

	An inversion of lsInit() - if it already exists it will be updated
	with the new value and true will be returned.

	Otherwise, if the value doesn't currently exist, lsUpdate() does
	nothing and returns false.


Written by M. Nealon, 2016.


