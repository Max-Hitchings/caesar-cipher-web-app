def encrypt(plain_test, shift):
    plain_text = ""
    for char in plain_test:
        char_ascii = ord(char)
        if char_ascii == 32:
            plain_text += " "
        elif char_ascii <= (90-shift) and char_ascii >= 65 or char_ascii <= (122-shift) and char_ascii >= 97:
            char_ascii = char_ascii + shift
            plain_text += chr(char_ascii)
        else:
            pass
    return plain_text



plain_test = input("Input your plain text to encrypt: ")
shift = int(input("\nWhat do you want the shift to be? "))

print(f"\nYour encrypted message is: {encrypt(plain_test, shift)}")