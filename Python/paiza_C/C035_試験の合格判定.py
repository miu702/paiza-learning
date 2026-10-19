"""
総合力を重視する paiza 大学の入試では 1 次試験 (英語、数学、理科、国語、地理歴史の 5 科目で
各 100 点満点) の成績で2段階選抜を行います。
2段階選抜を通過する条件は以下のようになっています。

全科目の合計得点が 350 点以上
理系の受験者の場合は理系 2 科目 (数学、理科) の合計得点が 160 点以上
文系の受験者の場合は文系 2 科目 (国語、地理歴史) の合計得点が 160 点以上
受験者それぞれの各科目の点数が入力されるので、何人2段階選抜を通過できるかを求めてください。
"""

# 受験者数を定義する
examinee = int(input())


# 受験者の情報を定義する
points = []
for i in range(examinee):
    section, *rest = input().split()
    points.append([section, *rest])
    
    
# 合計の得点を調査
def totalPoints(rest):
    totalPoint = 0
    for j in range(len(rest)):
        totalPoint += int(rest[j])
    return totalPoint
    
# 理系の調査  
def Science(math, science):
    total_science = math + science
    return total_science

# 文系の調査    
def Humanities(japanese, socialstudies):
    total_humanities = japanese + socialstudies
    return total_humanities
  
    
# 処理に必要な変数
passed = 0
total_limit = 350
total_course = 160


# 受験者を1人ずつ取り出し、処理を行う。 
for section, *rest in points:
    # 合計の得点を調査
    if totalPoints(rest) < total_limit:
        continue;
    
    
    # 合計の得点が基準値以上なら、追加の計算を行う。    
    elif totalPoints(rest) >= total_limit:
        if section == "s":
            if Science(int(rest[1]), int(rest[2])) >= total_course: passed += 1
            
        elif section == "l":
            if Humanities(int(rest[3]), int(rest[4])) >= total_course: passed += 1
    
    
# 合格者の人数を出力
print(passed)


