print("Hi, welcome to the report card printer!")
print("This program will help you print your report card...")
print("My name is Bimo, and I will be your assistant today!")

name = input("Enter your name: ")
print("Oh, hi " + name + "!")
print("Nice to meet you, " + name + "! Let's get started with your report card...")

input_age = input("Enter your age: ")
if input_age.isdigit() and 13 <= int(input_age) <= 100:
    age_confirm = True
    print("Ur age is confirmed " + name + " is " + input_age + " years old!")
else:
    print("Invalid age entered!")

score = input("Enter your score: ")
if score.replace(".", "", 1).isdigit() and 0 <= float(score) <= 100:
    score_confirm = True
    print("Your score is confirmed! " + name + " scored " + score + "!")
else:
    print("Invalid score entered!")

exit_input = input("Do you want to exit the program? (yes/no): ")
if exit_input.lower() == "yes":
    print("Exiting the program, goodbye!")
else:
    reset_input = input("Do you want to reset the program? (yes/no): ")
    if reset_input.lower() == "yes":
        print("Resetting the program...")
