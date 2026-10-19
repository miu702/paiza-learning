# 持っている本の幅を合計したもの n (cm)、検討している本棚の段数 d 、本が収まる幅 e (cm)がそれぞれ半角スペース区切りで与えられます。
# 概算なので本それぞれの違い1段に収まるかは考えないことにします。
numbers = input().split()

n = int(numbers[0])
d = int(numbers[1])
e = int(numbers[2])

totalSize = d * e
check = totalSize >= n
print("OK" if check else "NG")
