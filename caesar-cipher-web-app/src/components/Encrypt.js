const encrypt = (plainText, shift) => {
  var outputText = "";
  for (var i = 0; i < plainText.length; i++) {
    var charAscii = plainText.charCodeAt(i);
    if (charAscii === 32) {
      outputText += " ";
    } else if (
      (charAscii <= 90 - shift && charAscii >= 65) ||
      (charAscii <= 122 - shift && charAscii >= 97)
    ) {
      outputText += String.fromCharCode(charAscii + shift);
    } else if (
      plainText[i] === plainText[i].toLowerCase() &&
      charAscii >= 122 - shift
    ) {
      outputText += String.fromCharCode(((charAscii - (96 - shift)) % 26) + 96);
    } else if (
      plainText[i] === plainText[i].toUpperCase() &&
      charAscii >= 90 - shift
    ) {
      outputText += String.fromCharCode(((charAscii - (64 - shift)) % 26) + 96);
    } else {
      console.error(
        `Sorry i can't handle ${plainText[i]} yet. Should be able to so tho :)`
      );
    }
  }
  console.log(outputText);
  return outputText;
};

export default encrypt;

/*
def encrypt():
    input_text = input("\nInput your plain text to encrypt: ")
    shift = int(input("\nWhat do you want the shift to be? "))
    plain_text = ""
    for char in input_text:
        charAscii = ord(char)
        if charAscii == 32:
            plain_text += " "
        elif charAscii <= (90-shift) and charAscii >= 65 or charAscii <= (122-shift) and charAscii >= 97:
            charAscii = charAscii + shift
            plain_text += chr(charAscii)
        elif char.islower() and charAscii >= (122-shift):
            plain_text += chr(((charAscii-(96-shift))%26)+96)
        elif char.isupper() and charAscii >= (90-shift):
            plain_text += chr(((charAscii-(64-shift))%26)+64)
        else:
            return f"Sorry i can't handle {char} yet. Should be able to so tho :)"
    return plain_text

*/
