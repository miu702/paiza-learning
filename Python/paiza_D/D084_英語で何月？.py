"""
英語が堪能な Paiza 君ですが、唯一月の名前だけ覚えることができませんでした。
 
そこで、いつでも調べることができるように数字を入れるとその月を表す
英語が表示されるアプリを開発してください。
"""
 
# 入力 → 変数に変換する。同時に数値に変換する
month = int(input())


# 月のリストを作成する
monthDict = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December",
}


# 結果を出力する
print(monthDict[month])

