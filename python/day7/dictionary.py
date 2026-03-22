#print the details using dictionary
details = {
    "name":"Ratheesh",
    "age":22,
    "email":"rath317@gmail.com",
}
print(details)


# used to display the single value in the values
print(details["name"])
print(details["email"])


#used to add the value in the dictionary
details["password"]=31706
print(details)


#update the value
details["password"]=3176
print(details)


#delete the value
del details["password"]
print(details)


# dictionary with for-loop
for key , values in details.items():
    print(key)
    print(values)
    print(key , ":" , values)


#login system using dictionary
def login():
    student = {
        "name":"Ratheesh",
        "age":19,
        "email":"ratheesh317@gmail.com",
        "password":31706
    }
    name = input("Enter your name : ")
    email = input("Enter your email : ")
    password = int(input("Enter your password : "))

    if name == student["name"] and password == student["password"] and email == student["email"]:
            print("Login successfully")
    else:
            print("Login failed")

login()