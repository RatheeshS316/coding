# 1.print 1 to 10 numbers
for i in range(1,11):
    print(i)

# 2. print the name 5times
for i in range(5):
    print("Ratheesh")

# print the five tables
tables = int(input("Enter a number:"))
for i in range(1,11):
    print(tables , "x" , i , "=", tables * i)


# print 1 to 20 only even numbers
for i in range(0,20):
    if(i%2 == 0):
        print(i)