def encrypt():
    input_text = input("\nInput your plain text to encrypt: ")
    shift = int(input("\nWhat do you want the shift to be? "))
    plain_text = ""
    for char in input_text:
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
    
def user_input():
    functions = [[encrypt, "Encrypt"], [decrypt, "Decrypt"]]
    print("Please pick one of the following functions to use:")
    for f in range(len(functions)):
        print(str(f) + ".", functions[f][1])
    while True:
        try:
            user_pick = int(input())
            break
        except:
            print("Please enter a number")
    print(functions[user_pick][0]())


#plain_test = input("\nInput your plain text to encrypt: ")
#shift = int(input("\nWhat do you want the shift to be? "))

#print(f"\nYour encrypted message is: {encrypt(plain_test, shift)}")
while True:
    user_input()