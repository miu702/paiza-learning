# あなたはレストランで何を注文しようか迷っています。しかしあまり時間がないので「どれにしようかな天の神様の言うとおり」で决めてしまいましょう。

# 選ばれるメニューはこの文字数 21 を迷っているメニューの数で割れば求められます。ただし余りが 0 となるときはそのメニューの中で最後のものが選ばれることに注意しましょう。

number = int(input())

standard = 21
answer = standard % number

if answer == 0:
    print(number)
else:
    print(answer)