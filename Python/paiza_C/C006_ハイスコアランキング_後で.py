items, users, top = map(int, input().split())
items_points = input().split()

point_list = []
for i in range(users):
    user = input().split()
    point = 0
    
    for j in range(items):
        # 少数を避けるために10倍する
        coefficient = float(items_points[j]) * 10
        point += int(coefficient) * int(user[j])
    
    
    # Pythonの四捨五入は5の時に偶数に丸めてしまうので、+5することで疑似的に四捨五入する。4.5→4になってしまう。
    point = (point + 5) // 10
    point_list.append(round(point))
    

point_list_desc = point_list[::1]
point_list_desc.sort(reverse = True)


for k in range(top):
    print(point_list_desc[k])
