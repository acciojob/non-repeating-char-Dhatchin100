
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input));
let out = prompt("Enter A String");
let ans = firstNonRepeatingCharacter(out);
function firstNonRepeatingCharacter(out) {
  for (let i = 0; i < out.length; i++) {
    let char = out[i];
    if (out.indexOf(char) == i && out.indexOf(char, i + 1) == -1) {
      return char;
    }
  }
  return null;
};

alert(ans);
