# using functions to print the name
def name():
    print("Ratheesh")
name()


# Add two number using functions
def add(a , b):
    return a + b
print(add(23,45))


# print the calculator using function
def cal(a , b):
    print(a + b)
    print(a - b)
    print(a * b)
    print(a / b)
    print(a % b)
    print(a < b)
    print(a > b)

cal(23,45)


# login system using function
def login():
    name = input("Enter your name: ")
    password = int(input("Enter your password: "))

    if name == "Ratheesh" and password == 3107:
        print("Logged in successfully")

    else:
        print("Invalid User")

login()