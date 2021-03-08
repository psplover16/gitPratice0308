import "./app.css";
// import React from "react";
import React, { Component } from "react";
import logo from "./logo.svg";
// class App extends React.Component {
export default class App extends Component {
  render() {
    return (
      <div>
        //這是master
        // 完整教學
        // https://backlog.com/git-tutorial/tw/stepup/stepup2_2.html
        
        常用指令：
        // https://blog.puckwang.com/post/2018/my_git_command_cheat_sheet/
        git init  //初始化git專案
        git add . //將多個文件變成待提交
        git status //查看檔案目前狀態
        git log //查看提交歷史紀錄
        git branch //查看分支清單
        git branch "name"  //建立分支
          -d, --delete: 刪除已合併的分支。
          -D: 刪除分支，即使他未合併。
          -m, --move: 更名分支。
          -M: 更名分支，即使目標分支已存在。
        git checkout "name" //切換分支
          -b "name": 建立新分支並切換過去。
          -B "name": 建立新分支或重置已存在的分支並切換過去。
        git merge "name"...  #將指定 Commit 合併到目前所在分支

        //
        1.安裝，https://git-scm.com/
        A.創建新專案(現有專案上傳)
        1.github創建新專案
        2.開啟gitbash
        3.用vscode開啟 專案
        4.git init 初始化git
        5.git add .   //將文件添加到新的本地存儲庫。這將它們暫存為第一次提交。
        6.git commit -m "initial commit" //提交您在本地存儲庫中暫存的文件
        7.git remote add origin github上的https或SSH
        8.git remote -v
        9.git push -f origin master 推送到github
        
        B.下載專案,(原本專案就有再git
        1.vscode按下F1，輸入git clone 
        貼上，github上的https或SSH
        2.git Bash 登入
        git config --global user.name "帳號"   //要加""
        git config --global user.email "信箱"   //要加""


      //參考
        1.git clone
          https://www.youtube.com/watch?v=tO7XfKPAORM&ab_channel=KIDSu
        2.創建
          https://www.softwarelab.it/2018/10/12/adding-an-existing-project-to-github-using-the-command-line/
      **3.完整教學
          https://backlog.com/git-tutorial/tw/stepup/stepup2_3.html
        
       

        
        <img src={logo} alt={logo} />
      </div>
    );
  }
}

// export default App;  //跟上面的export default 挑一個寫
