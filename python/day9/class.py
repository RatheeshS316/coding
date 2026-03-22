# # create a class
# class rath:
#     pass
#
#
# # create a object and class
# class car:
#     name = "toyoto"
#     color = "black"
# c = car()
# print(c.name)
#
#
# #create a class using functions
# class student:
#     def __init__(self,name,age):
#         self.name = name
#         self.age = age
# s1 = student("Rath",19)
# print(s1.name,s1.age)
# print(s1.name)
# print(s1.age)
#

#create a login system using class
class login:
   def __init__(self,name,age):
       self.name=name
       self.age=age

   def log(self,n,a):
       if self.name==n and self.age==a:
           print("login success")
       else:
            print("login fail")

l = login("senn",22)
n = input("enter name:")
a = int(input("enter age:"))
l.log(n,a)

