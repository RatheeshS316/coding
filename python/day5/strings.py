# strings
name = "Ratheesh"
print(name)

#find the length of a string
print(len(name))

#print the names in lower and upper
print(name.upper())
print(name.lower())

#replace the word in a string
line = "I hate programming language"
print(line.replace("hate" , "love"))


#check the word in the string
if "love" in line:
    print("yes it is there")
else:
    print("no is there")


#example for login system
user_name = input("Enter your name:")
user_password = int(input("Enter your password:"))
if user_name == "Ratheesh" and user_password == 3107:
    print("successfully logined")
else:
    print("Invalid user")