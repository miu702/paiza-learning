#5個の数字 n_1, n_2, n_3, n_4, n_5 が改行区切りで与えられます。
#それらの数字の最大の数字、最小の数字を改行区切りで出力してください。


#始めの配列を作成し、ループ処理で入力を末尾に追加する
numberList = []
for i in range(5):
    number = int(input())
    numberList.append(number)


#mathを使用して、最大値と最小値を出力する
print(max(numberList))
print(min(numberList))