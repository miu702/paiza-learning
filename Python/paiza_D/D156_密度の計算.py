"""
あなたは人が集まる施設の人の密度の計算をしています。
一定の面積を確保するために以下のような計算をすることにしました。
1 人あたりに必要な面積 N と人数 M が与えられるので総面積がいくつ必要かを出力してください。
"""

area = int(input())
people = int(input())

# 計算を実施する
total_area = area * people
print(total_area)