"""
あなたはパイザ大学の教授です。学生に課したレポートを評価するため、あなたは自動でレポートの評価をするプログラムを考えることにしました。

今回あなたが出題したレポートには n 問の問題があり、1 問あたりの配点はそれぞれ 100 / n 点です。ここで n は 100 の約数です。

あなたはレポートに提出期限を設けていました。
提出期限から遅れたレポートのうち、遅れた日数が 9 日以下のレポートは得点を 8 割にすることにしました。
このとき得点に小数点以下が発生した場合切り捨てます。

10 日以上遅れたレポートの評価は 0 点とすることにしました。



入力される値
入力は以下のフォーマットで与えられます。\
k n
d_1 a_1
d_2 a_2
...
d_k a_k

・1 行目に学生の人数を表す整数 k、レポートの問題数を表す整数 n がこの順に半角スペース区切りで与えられます。
・続く k 行のうちの i 行目 (1 ≦ i ≦ k) には、i 番目の学生のレポートを提出した日を表す整数 d_i、i 番目の学生が正解した問題数を表す整数 a_i がこの順に半角スペース区切りで与えられます。
・入力は合計で k + 1 行となり、入力値最終行の末尾に改行が 1 つ入ります。
それぞれの値は文字列で標準入力から渡されます。


期待する出力
・各学生のレポートの評価を以下の形式で出力してください。
e_1
e_2
...
e_k

・期待する出力は k 行からなります。
・i 行目 (1 ≦ i ≦ k) にはそれぞれ i 番目の学生のレポートの評価を表す英大文字 e_i を出力してください。出
力の最後に改行を入れ、余計な文字、空行を含んではいけません。
・出力最終行の末尾に改行を入れ、余計な文字、空行を含んではいけません。


条件
すべてのテストケースにおいて、以下の条件をみたします。
・1 ≦ k ≦ 100
・n は 100 の約数
・-14 ≦ d_i ≦ 14 (1 ≦ i ≦ k)
・0 ≦ a_i ≦ n (1 ≦ i ≦ k)


入力例1
3 25
-2 17
-7 20
2 24

出力例1
C
A
B

入力例2
1 50
10 49

出力例2
D

"""
import math
# 入力 → 変数に変換する
student, questions = map(int, input().split())
student_data = []
for i in range(student):
    day, points = map(int, input().split())
    student_data.append([day, points])


# 手順1：スコアを計算
def scoreCalculation(day, answers):
    full_points = 0
    eighty_points = 9
    points = (100 / questions) * answers

    if(day <= full_points):
        return points
    elif(day > full_points and day <= eighty_points):
        return math.floor(points * 0.8)
    else:
        return 0
   
  
   
# 手順2：評価を決定
def evaluation(score):
    evaluation_A = 80
    evaluation_B = 70
    evaluation_C = 60

    if(score >= evaluation_A):
        return "A"
    elif(score >= evaluation_B):
        return "B"
    elif(score >= evaluation_C):
        return "C"
    else:
        return "D"
    

# 生徒の数だけ評価を出力する。
for day, answers in student_data:
    # 手順1：スコアを計算
    score = scoreCalculation(day, answers)
    
    # 手順2：評価を決定
    result = evaluation(score)
    print(result)




