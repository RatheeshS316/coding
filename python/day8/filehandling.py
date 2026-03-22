# write the file
# w is used to write/overwrite and create the file
file = open("student.txt","w")
file.write("Hello World")
file.close()


# read the file
# r is used to read the file
file = open ("student.txt" , "r")
print(file.read())
file.close()


# append the file
file = open("student.txt","a")
file.write("hey what's up")
file.close()


# example for filehandling registration example
name = "Ratheesh"
age = 19
file = open("database.txt","a")
file.write(f"my name is {name} and my age is {age}")
file = open("database.txt","r")
file.close()