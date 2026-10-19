"""
あなたはあるソフトウェアの開発でIPアドレスを入力してもらう機能の一部を開発しています。
入力は手入力で「.」と「数字」で構成された長さNの文字列が入力されます。

入力されているIPアドレスが書式に合っているか判定して、合っていればTrue、
違っていればFalseと標準出力で出力するプログラムを作成してください。

判別すべきIPアドレスはIPv4で定義された範囲のIPアドレスとします。書式は以下のようになります。


.で区切られた10進数の4つの数で表されます。
数の範囲は0から255までとします。
"""

# 外部機能を使って判断する
import ipaddress
def is_valid_ipv4(ip_str):
    try:# 本来やりたいこと
        # 正しくない形式だと ValueError が発生する
        ipaddress.IPv4Address(ip_str)
        return True
    except ValueError:# エラー発生時
        return False
        

number = int(input())
for i in range(number):
    check = input()
    print(is_valid_ipv4(check))
    
    