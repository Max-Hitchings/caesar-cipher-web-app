def step(input_text, shift):
    plain_text = ""
    for char in input_text:
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
            return f"Sorry i can't handle {char} yet. Should be able to soon tho :)"
    return plain_text

def encrypt():
    input_text = input("\nInput your plain text to encrypt: ")
    shift = int(input("\nWhat do you want the shift to be? "))
    return step(input_text, shift)

def decrypt():
    cipher_text = input("\nInput what you want to decrypt: ")
    all_possibilities = []
    for shift in range(26):
        all_possibilities.append(step(cipher_text, shift))
    return all_possibilities
    
def user_input():
    functions = [[encrypt, "Encrypt"], [decrypt, "Decrypt"]]
    print("Please pick one of the following functions to use:")
    for f in range(len(functions)):
        print(str(f) + ".", functions[f][1])
    while True:
        try:
            user_pick = int(input())
            if user_pick <= len(functions):
                break
            print(f"Please a number between 0 and {len(functions)-1}")
        except:
            print("Please enter a number")
    print(functions[user_pick][0]())

valid_answers = ["y", "Y", "yes", "YES"]
while True:
    user_input()
    if input("Would you like to go again?") not in valid_answers:
        break
