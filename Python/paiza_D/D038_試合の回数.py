# あなたは1対1で戦う競技の大会を開くことにしました。
# N 人の選手で総当り対戦を行う場合、何回の対戦が行われるか出力して下さい。
number = int(input())

total = number * (number - 1) / 2
print(int(total))