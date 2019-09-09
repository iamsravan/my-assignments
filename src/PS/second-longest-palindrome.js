function getSecondLongestPalindromeSubString(inputString) {
  const n = inputString.length;
  var result = [];
  var maxLength = 1;
  var secondMaxLength = 0;

  for (var j = 0; j < n; j++) {
    var row = [];
    for (var i = 0; i < n; i++) {
      row.push(false);
    }
    result.push(row);
    result[j][j] = true;
  }

  var start = 0;
  var secondStart = 0;
  for (var i = 0; i < n - 1; ++i) {
    if (inputString[i] == inputString[i + 1]) {
      result[i][i + 1] = true;
      secondStart = start;
      start = i;
      maxLength = 2;
      secondMaxLength = 1;
    }
  }

  for (var k = 3; k <= n; ++k) {
    for (var i = 0; i < n - k + 1; ++i) {
      var j = i + k - 1;

      if (result[i + 1][j - 1] && inputString[i] == inputString[j]) {
        result[i][j] = true;

        if (k > maxLength) {
          secondStart = start;
          start = i;
          secondMaxLength = maxLength;
          maxLength = k;
        }
      }
    }
  }

  return { maxLength, secondMaxLength, secondStart };
}

const inputString = "madam";
const {
  start,
  maxLength,
  secondMaxLength,
  secondStart
} = getSecondLongestPalindromeSubString(inputString);

if (maxLength === 0) {
  console.log("No Palindrome exits");
} else if (secondMaxLength === 0) {
  console.log("No Second Palindrome exits");
} else {
  console.log(
    `Found Palindrome : ${inputString.slice(
      secondStart,
      secondStart + secondMaxLength
    )}`
  );
}
