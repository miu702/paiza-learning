"""
paiza 中学校ではこれまで 5 ~ 1 の数字で成績をつけていましたが、英語教育に力を入れるため今年度から A ~ E のアルファベットで成績をつけることにしました。
すでに成績を数字でつけてしまったあなたはあわててアルファベットに変換することにしました。
"""
number = int(input())
numberDict = {
    5: "A",
    4: "B",
    3: "C",
    2: "D",
    1: "E",
}

print(numberDict.get(number, "対象外"))

"""
変換前
if number == 5:
    print("A")
elif number == 4:
    print("B")
elif number == 3:
    print("C")
elif number == 2:
    print("D")
elif number == 1:
    print("E")
"""
    
    