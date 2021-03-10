def encrypt(plain_test, shift):
    plain_text = ""
    for char in plain_test:
        char_ascii = ord(char)
        if char_ascii == 32:
            plain_text += " "
        elif char_ascii <= (90-shift) and char_ascii >= 65 or char_ascii <= (122-shift) and char_ascii >= 97:
            char_ascii = char_ascii + shift
            plain_text += chr(char_ascii)
        elif char.islower() and char_ascii >= (122-shift):
            plain_text += chr(((char_ascii-(96-shift))%26)+96)
        elif char.isupper() and char_ascii >= (90-shift):
            plain_text += chr(((char_ascii-(64-shift))%26)+64)
        else:
            return f"Sorry i can't handle {char} yet. Should be able to so tho :)"
    return plain_text

def decrypt(cipher_text, shift):
    #todo
    pass


plain_test = input("\nInput your plain text to encrypt: ")
shift = int(input("\nWhat do you want the shift to be? "))

print(f"\nYour encrypted message is: {encrypt(plain_test, shift)}")