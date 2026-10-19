"""
ある学校には数が絶対に偶数である N 人の生徒がいます、
全生徒が 2 人ずつのグループに分かれたとき、いくつグループができますか？
"""


whole = int(input())

# 計算し、出力する
divide = 2
group = whole / divide
print(int(group))