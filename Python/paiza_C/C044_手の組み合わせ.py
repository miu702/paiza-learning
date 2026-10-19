"""
じゃんけんは、2 人以上の参加者により行われるゲームです。 
各参加者は、3 種類の手(グー・チョキ・パー) のいずれかを出します。 この手 の組み合わせにより勝者が決まります。

勝敗の決定は以下の通りです。

・グーは、チョキに勝ち、パーに敗れる
・チョキは、パーに勝ち、グーに敗れる
・パーは、グーに勝ち、チョキに敗れる
・グー・チョキ・パーの 3 種類が出されている場合は引き分け
・グー・チョキ・パーのいずれか 1 種類のみが出されている場合も引き分け


勝者の手を出力してください。引き分けの場合は、"draw" と出力してください。
出力の最後に改行を入れ、余計な文字、空行を含んではいけません。

"""

# じゃんけんの人数を定義する。
number = int(input())


# 全員が出した手の様子を記録する。
hands = []
for i in range(number):
    hand = input()
    if not hand in hands:
        hands.append(hand)
        
  
# 記録した手が1、3なら、あいこ。2なら勝者の手を決める。
if len(hands) == 1 or len(hands) == 3:
    print("draw")
    
elif len(hands) == 2:
    if (hands[0] == "rock" and hands[1] == "scissors") or (hands[0] == "scissors" and hands[1] == "rock"):
        print("rock")
        
    elif (hands[0] == "rock" and hands[1] == "paper") or (hands[0] == "paper" and hands[1] == "rock"):
        print("paper")
        
    elif (hands[0] == "scissors" and hands[1] == "paper") or (hands[0] == "paper" and hands[1] == "scissors"):
        print("scissors")
        

    
    
    
    
    