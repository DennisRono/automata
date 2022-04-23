from operator import truediv


def iceCream(d):
    if sum(d) == 60:
        return True
    else:
        return False

print(iceCream([40, 40]))