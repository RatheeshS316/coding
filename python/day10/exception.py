#intro to exception
try:
    a = int(input("a:"))
    b = int(input("b:"))
    print(a/b)
except Exception as e:
    print(e)



# login system


try:
    class LoginSystem:
        def __init__(self, name, age):
            self.name = name
            self.age = age

        def login(self, n, a):
            if self.name == n and self.age == a:
                print("Login Success ✅")
            else:
                print("Login Failed ❌")

    # User input
    n = input("Enter name: ")
    a = int(input("Enter age: "))

    # Object creation
    ls = LoginSystem("ratheesh", 19)

    # Method call
    ls.login(n, a)

except ValueError:
    print("Age must be a number ❌")
except Exception as e:
    print("Error:", e)
