import "./app.css";
// import React from "react";
import React, { Component } from "react";
import logo from "./logo.svg";
// class App extends React.Component {
export default class App extends Component {
  render() {
    return (
      <div>
        123456
        第一次更動
        First分支
        簡易
        https://www.youtube.com/watch?v=tO7XfKPAORM&ab_channel=KIDSu
        教學
        https://backlog.com/git-tutorial/tw/stepup/stepup2_3.html
        創建
        https://www.softwarelab.it/2018/10/12/adding-an-existing-project-to-github-using-the-command-line/
        參考
        https://gitbook.tw/chapters/github/push-to-github.html


        1.安裝，https://git-scm.com/
        A.創建新專案(現有專案上傳)
1.github創建新專案
2.開啟gitbash
3.用vscode開啟 專案
4.git init 初始化git
5.git add .   //將文件添加到新的本地存儲庫。這將它們暫存為第一次提交。

        B.下載專案
        2.
        <img src={logo} alt={logo}/>
      </div>
    );
  }
}

// export default App;  //跟上面的export default 挑一個寫
