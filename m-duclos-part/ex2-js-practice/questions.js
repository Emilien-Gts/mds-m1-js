var selectElementsStartingWithA = function (array) {
  return array.filter(item => item.charAt(0) == "a");
}

var selectElementsStartingWithVowel = function (array) {
  return array.filter(item => /^[aeiouy]/i.test(item.charAt(0)));
}

var removeNullElements = function (array) {
  return array.filter(item => item !== null)
}

var removeNullAndFalseElements = function (array) {
  return array.filter(item => item !== null).filter(item => item !== false)
}

var reverseWordsInArray = function (array) {
  return array.map(item => item.split('').reverse().join(''));
}

var everyPossiblePair = function (array) {
  let arraySorted = array.sort();
  let result = [];
  for (i = 0; i < arraySorted.length - 1; i++) {
    for (j = i + 1; j < arraySorted.length; j++) {
      if (arraySorted[i] != arraySorted[j]) {
        result.push([arraySorted[i], arraySorted[j]]);
      }
    }
  }
  return result;
}

var allElementsExceptFirstThree = function (array) {
  return array.filter((item, index) => index >= 3 && item)
}

var addElementToBeginning = function (array, element) {
  array.unshift(element);
  return array;
}

var sortByLastLetter = function (array) {
  return array.sort(
    (a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1)
  );
}

var getFirstHalf = function (string) {
  const first_half = (str) => {
    return str.slice(0, Math.ceil(str.length / 2));
  }
  return first_half(string)
}

var makeNegative = function (number) {
  const setNegative = (number) => {
    return number >= 0 ? -Math.abs(number) : -Math.abs(number)
  }

  return setNegative(number)
}

var numberOfPalindromes = function (array) {
  return 'Write your method here';
}

var shortestWord = function (array) {
  let sw = array[0];
  array.forEach(item => {
    if (item.length < sw.length) {
      sw = item;
    }
  })

  return sw;
}

var longestWord = function (array) {
  let lg = array[0];
  array.forEach(item => {
    if (item.length > lg.length) {
      lg = item;
    }
  })

  return lg;
}

var sumNumbers = function (array) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return array.reduce(reducer)
}

var repeatElements = function (array) {
  array.map(item => array.push(item));
  return array;
}

var stringToNumber = function (string) {
  return parseInt(string);
}

var calculateAverage = function (array) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const res = array.reduce(reducer) / array.length;
  return res;
}

var getElementsUntilGreaterThanFive = function (array) {
  return array.filter((item, index) => index <= 5 && item)
}

var convertArrayToObject = function (array) {
  const obj = {};
  array.forEach((item, i) => {
    if (i % 2 === 0) {
      obj[item] = array[i + 1];
    }
  });
  return obj;
}

var getAllLetters = function (array) {
  let a = [];
  array.forEach(item => {
    for (let index = 0; index < item.length; index++) {
      a.push(item[index])
    }
  })

  const removeDuplicateData = (array) => {
    return Array.from(new Set(array))
  }

  return removeDuplicateData(a).sort()
}

var swapKeysAndValues = function (object) {
  const swap = (json) => {
    var ret = {};
    for (var key in json) {
      ret[json[key]] = key;
    }
    return ret;
  }

  return swap(object)
}

var sumKeysAndValues = function (object) {
  return 'Write your method here';
}

var removeCapitals = function (string) {
  return string.replace(/[^a-z- ]/g, '');
}

var roundUp = function (number) {
  return Math.ceil(number)
}

var formatDateNicely = function (date) {
  const newdate = ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate())) + '/' + ((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '/' + date.getFullYear()
  return newdate
}

var getDomainName = function (string) {
  return 'Write your method here';
}

var titleize = function (string) {
  return 'Write your method here';
}

var checkForSpecialCharacters = function (string) {
  return 'Write your method here';
}

var squareRoot = function (number) {
  return 'Write your method here';
}

var factorial = function (number) {
  return 'Write your method here';
}

var findAnagrams = function (string) {
  return 'Write your method here';
}

var convertToCelsius = function (number) {
  return 'Write your method here';
}

var letterPosition = function (array) {
  return 'Write your method here';
}
