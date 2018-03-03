B=[14,3,2,6]
A=[3,2,14,2,6]

if len(A)>len(B):
    A,B=B,A
for i in A:
    B.remove(i)
    
print(B[0])
