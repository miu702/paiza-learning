# 正三角形を判別する場合、3つの辺すべての長さが等しければ正三角形と判別できます。
# 3つの辺の長さ a, b, c が改行区切りで与えられるので正三角形なら "YES", 正三角形でなければ "NO" と出力してください。

A = int(input())
B = int(input())
C = int(input())

if(A == B and A == C and B == C):
    print("YES")
else:
    print("NO")