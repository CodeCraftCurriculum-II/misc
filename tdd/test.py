# test function sumAllNumbers that sums all the numbers sent as parameters to it.
# sumAllNumbers(1,2) //-> 3
# sumAllNumbers(5,5,8,2,11) //-> 31
# sumAllNumbers(1,2,3,"B") //-> 6

def sumAllNumbers(*numbers):
    sum = 0
    for n in numbers:
        if isinstance(n, (float, int, complex)):
            sum += n

    return sum


# Tests -----------------------------------------------------------------------

def testSumAllNumbersExists():
    output = ""
    try:
        if callable(sumAllNumbers):
            output = "🟢 Test success, function sumAllNumbers is defined"
    except:
        output = "🔴 Test failed, no function sumAllNumbers is defined"

    return output


def testSummAllNumbersGivenNumbers():
    output = []
    res = 0

    res = sumAllNumbers(1, 2)
    if (res != 3):
        output.append('🔴 Test failed, expected 3 got ' + res)
    else:
        output.append('🟢 Test success, 1,2 -> 3')

    res = sumAllNumbers(1, 5)
    if (res != 6):
        output.append('🔴 Test failed, expected 6 got ' + res)
    else:
        output.append('🟢 Test success, 1,5 -> 6')

    res = sumAllNumbers(1, 5, 4, 92)
    if (res != 102):
        output.append('🔴 Test failed, expected 102 got ' + res)
    else:
        output.append('🟢 Test success, 1, 5,4,92 -> 102')

    return "\n".join(output)


def testSummAllNumbersGivenNumbersAndText():
    output = []
    res = 0

    res = sumAllNumbers(1, 2, 'B')
    if (res != 3):
        output.append('🔴 Test failed, expected 3 got ' + res)
    else :
        output.append('🟢 Test success, 1,2,B -> 3')
  
    res = sumAllNumbers('*', 1, 5)
    if (res != 6) :
        output.append('🔴 Test failed, expected 6 got ' + res)
    else :
        output.append('🟢 Test success, *, 1, 5 -> 6')
  
    res = sumAllNumbers(1, 5, 4, None)
    if (res != 10) :
        output.append('🔴 Test failed, expected 10 got ' + res)
    else :
        output.append('🟢 Test success, 1, 5, 4, None -> 10')
  
    return "\n".join(output)


print(testSumAllNumbersExists())
print(testSummAllNumbersGivenNumbers())
print(testSummAllNumbersGivenNumbersAndText())
