"""
頂点 1 からスタートし、あなたは一直線であるグラフを後戻りせずに、
各頂点に置かれたりんごを拾いながらたどります。

グラフの頂点・辺・各頂点のりんごの数についての情報が与えられるので、
あなたが頂点 1 から i 頂点分進んだ時に持っているりんごの数 S_i を求めてください。


入力される値
N   
a_1 b_1  
...     
a_(N-1) b_(N-1)     
A_1     
...     
A_N


・ 1 行目には、グラフの頂点の数 N が与えられます。
・ 続く N-1 行では、各辺の両端の頂点 a_i , b_i が与えられます。(1 ≦ i ≦ N-1)
・ 続く N 行では、各頂点にあるりんごの数 A_j が与えられます。 (1 ≦ j ≦ N)


期待する出力
N 行の出力

・ 頂点 1 から k 頂点分進んだ時に持っているりんごの数 S_k を出力してください。(0 ≦ k ≦ N-1)
S_0
...
S_(N-1)

"""
vertex = int(input())

# 隣接リストを作成
vertexs = [[] for i in range(vertex + 1)]
for i in range(vertex - 1):
    A, B = map(int, input().split())
    vertexs[A].append(B)
    vertexs[B].append(A)


# リンゴの量を作成
apples = [0 for j in range(vertex + 1)]
for j in range(vertex):
    apple = int(input())
    apples[j + 1] = apple


# 訪問済みかチェックする。キューを活用して、行ける場所から調査。
visited = [False for j in range(vertex + 1)]
queue = []
total_apple = 0
history_apple = [] # これを最終的に出力する


# 初期状態を作成する
current = 1
total_apple += apples[current]
history_apple.append(total_apple)
visited[current] = True
queue.append(current)


# キューを活用して調査する
dx = 0
while dx < len(queue):
    # 隣接リストを活用して、指定した頂点の全てを調査する。
    for step in vertexs[current]:
        # 移動できるか調査
        if visited[step] == True:
            continue
        
        # 移動できる時 = りんご拾う、記録する、移動済みにする、現在地を変更する
        total_apple += apples[step]
        history_apple.append(total_apple)
        visited[current] = True
        current = step
        
        
        # キューに追加する
        queue.append(step)
    
    # インデックスの位置を進めて、while文を操作する。
    dx += 1


# 結果を出力する
for H in history_apple:
    print(H)

        
        