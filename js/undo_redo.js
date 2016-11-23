/*
 Original Problem:
 The purpose of this kata is to implement the undoRedo function.

 This function takes an object and returns an object that has these actions to be performed on the object passed as a parameter:

 set(key, value) Assigns the value to the key. If the key does not exist, creates it.

 get(key) Returns the value associated to the key.

 del(key) removes the key from the object.

 undo() Undo the last operation (set or del) on the object. Throws an exception if there is no operation to undo.

 redo() Redo the last undo operation (redo is only possible after an undo). Throws an exception if there is no operation to redo.

 After set() or del() are called, there is nothing to redo.

 All actions must affect to the object passed to undoRedo(object) function. So you can not work with a copy of the object.

 Any set/del after an undo should disallow new undos.
 */

// TODO Fix this

function undoRedo(object) {
	var last;
	var snapshot;
	
	var undoed = false;
	
	return {
		set: function (key, value) {
			last = [true, key];
			snapshot = object[key];
			
			object[key] = value;
		},
		get: function (key) {
			return object[key];
		},
		del: function (key) {
			last = [false, key];
			snapshot = object[key];
			
			delete object[key];
		},
		undo: function () {
			if (!last) {
				throw new Error('No undo operation');
			}
			
			this.inverse();
			undoed = true;
		},
		redo: function () {
			if (!undoed) {
				throw new Error('No redo operation');
			}

			this.inverse();
			undoed = false;
		},
		inverse: function () {
			if (!snapshot) {
				return;
			}

			this.set(last[1], snapshot);
			return snapshot = undefined;
		}
	};
}

// Testing suite
var obj = {};

var operations = undoRedo(obj);

operations.set('key', 1);
operations.del('key');

operations.undo();

operations.redo();

console.log(operations.get('key'));
console.log(obj['key']);
