"""
あなたはパスワードを入力させるプログラムを作成しています。
単純なパスワード入力を防ぐために手始めに
全ての文字が同じ パスワードであった場合に警告を出すことにしました。
"""

# 入力を変数に変換する。かつ、サンプルを取得
words = list(input())
sample = words[0]

# 全ての文字をチェックし、サンプルと違う文字が来たら、falseに変える。
check = True
for w in words:
    if w != sample:
        check = False
        
        
# チェック用変数によって出力を変化
print("NG" if check else "OK")