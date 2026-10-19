class computer:
    # 基本の情報を定義する
    def __init__(self):
        self.variable_1 = 0
        self.variable_2 = 0
    
    
    # 条件分岐をして、別の関数を動かす。
    def execute(self, data):
        command, *rest = data
        if command == "SET":
            calc.set_number(rest[0], rest[1])
            
        elif command == "ADD":
            calc.add_number(rest[0])
            
        elif command == "SUB":
            calc.sub_number(rest[0])
        else:
            print(f"{command}は不正なコマンドです。")
            
    
    # 数値をセットする
    def set_number(self, target, number):
        if target == "1": self.variable_1 = int(number)
        if target == "2": self.variable_2 = int(number)
    
    # 変数2 = 変数1 + 数値とする
    def add_number(self, number):
        self.variable_2 = self.variable_1 + int(number)
    
    
    # 変数2 = 変数1 - 数値とする
    def sub_number(self, number):
        self.variable_2 = self.variable_1 - int(number)
        
    
    # 結果を出力する
    def output(self):
        print(self.variable_1, self.variable_2)


# クラスをインスタンス化する
calc = computer()

times = int(input())
for i in range(times):
    data = input().split()
    # データベースの関数をいじるときは、インスタンス名.関数名とする
    calc.execute(data)
        
    
# 最終結果を出力する
calc.output()
