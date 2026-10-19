"""
あなたは花の種を蒔こうと思っています。

花は n ヶ月後に開花します。 m 月に蒔いた種が何月に開花するかを出力してください。
"""

# 撒いた月と、開花するのに必要な期間を定義する
seed = int(input())
month = int(input())


# 開花する月を計算し、出力する
flowering = seed + month
print(flowering)