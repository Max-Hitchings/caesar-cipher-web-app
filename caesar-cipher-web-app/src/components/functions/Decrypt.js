const decrypt = (cipherText) => {
  var allPossibilities = [];
  for (var shift = 0; shift < 26; shift++) {
    var plainText = "";
    for (var i = 0; i < cipherText.length; i++) {
      const charAscii = cipherText.charCodeAt(i);
      if (charAscii === 32) {
        plainText += " ";
      } else if (
        (charAscii <= 90 - shift && charAscii >= 65) ||
        (charAscii <= 122 - shift && charAscii >= 97)
      ) {
        plainText += String.fromCharCode(charAscii + shift);
      } else if (
        cipherText[i] === cipherText[i].toLowerCase() &&
        charAscii >= 122 - shift
      ) {
        plainText += String.fromCharCode(
          ((charAscii - (96 - shift)) % 26) + 96
        );
      } else if (
        cipherText[i] === cipherText[i].toUpperCase() &&
        charAscii >= 90 - shift
      ) {
        plainText += String.fromCharCode(
          ((charAscii - (64 - shift)) % 26) + 96
        );
      } else {
        console.error(
          `Sorry i can't handle ${cipherText[i]} yet. Should be able to so tho :)`
        );
      }
    }
    allPossibilities.push(plainText);
  }
  console.log(allPossibilities);
  return allPossibilities;
};

export default decrypt;

/*
def decrypt():
    cipher_text = input("\nInput what you want to decrypt: ")
    all_possibilities = []
    for shift in range(26):
        plain_text = ""
        for char in cipher_text:
            char_ascii = ord(char)
            if char_ascii == 32:
                plain_text += " "
            elif char_ascii <= (90-shift) and char_ascii >= 65 or char_ascii <= (122-shift) and char_ascii >= 97:
                plain_text += chr(char_ascii + shift)
            elif char.islower() and char_ascii >= (122-shift):
                plain_text += chr(((char_ascii-(96-shift))%26)+96)
            elif char.isupper() and char_ascii >= (90-shift):
                plain_text += chr(((char_ascii-(64-shift))%26)+64)
            else:
                return f"Sorry i can't handle {char} yet. Should be able to so tho :)"
        all_possibilities.append(plain_text)
    return all_possibilities
*/
