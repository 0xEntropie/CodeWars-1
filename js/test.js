'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var Interpreter = function Interpreter() {
  return {
    read: function read(input) {
      var stack = [];
      var i = 0;
      var out = '';

      var whileClose = void 0,
          whileOpen = void 0;

      var numRegex = /^([0-9]+).+$/g;

      var getNext = function getNext(up) {
        return up ? i > 2 ? 0 : i + 1 : i < 0 ? 2 : i - 1;
      };

      input = [].concat(_toConsumableArray(input));

      for (var j = 0; j < input.length; j++) {
        console.log(input[j] + ' @ ' + i + ' = ' + stack[i]);

        switch (input[j]) {
          case '+':
            stack[i] !== undefined ? stack[i]++ : stack[i] = 0;
            break;
          case '-':
            stack[i] !== undefined ? stack[i]-- : stack[i] = 0;
            break;
          case '<':
            stack[getNext()] = stack[i];
            delete stack[i];
            break;
          case '>':
            stack[getNext(true)] = stack[i];
            delete stack[i];
            break;
          case '*':
            stack[i] = 0;
            break;
          case '^':
            // TODO Set for 0?
            delete stack[i];
            break;
          case '#':
            i = getNext(true);
            break;
          case ',':
            var num = numRegex.exec(input.slice(j + 1).join(''))[1];
            console.log(num + ' is added');

            j += num.length;
            stack[i] = parseInt(num);
            break;
          case '.':
            out += stack[i];
            break;
          case '[':
            if (stack[i] <= 0) {
              if (!whileClose) {
                whileClose = input.indexOf(']');
              }

              j = whileClose + 1;
              whileClose = undefined;
            }

            whileOpen = j;
            break;
          case ']':
            //console.log('Going back to ' + whileOpen + ' ' + input[whileOpen] + ' @ ' + i + ' with ' + stack[i]);
            whileClose = j;
            j = whileOpen;
            break;
        }
      }

      return out;
    }
  };
};

const instance = Interpreter();

//',9[.-]'),'987654321' ,10>*#[-##.+#]
//,9[.--]'),'97531

console.log(instance.read(',10>*#[-##.+#]'));

//console.log(instance.read(',10>*#[-##.+#]'));
//console.log('97531');