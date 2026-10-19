"""
Paizaさんはある事件について調査していて、事件発生日を調べたところ和暦で表示された文書が見つかりました。
西暦に直して今から何年前の出来事なのか計算しようとしましたが、その和暦が何年から始まったのかど忘れしてしまいました。

和暦が昭和または平成で与えられるので、Paizaさんの代わりに和暦を西暦に戻すプログラムを作成し、西暦で言うと何年の出来事なのか出力してください。

ただし、昭和は1926年から、平成は1989年から始まります。
"""
era_name = input()
year = int(input())

syouwa_s = 1926
heisei_s = 1989
adjustment = 1

if era_name == "S":
    ad = syouwa_s + year - adjustment
    print(ad)
elif era_name == "H":
    ad = heisei_s + year - adjustment
    print(ad)
