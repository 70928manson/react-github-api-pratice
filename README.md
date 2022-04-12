# 2022 react-github-api

## 專案講解

### 使用環境及工具: 採用axios串接api、並以bootstrap 5 (footer)、bootstrap-icons (search-icon)協助美觀設計

axios: npm install axios

bootstrap 5: npm install bootstrap

bootstrap-icons: npm i bootstrap-icons

### 檢視專案

可透過下面連結觀看專案demo

Github page: https://70928manson.github.io/react-github-api-pratice/

為了上傳至Github page，原本的brouserRouter改成使用HashRouter，網址會有#字號 QQ

### 文件說明：
1. 輸入想搜尋的用戶名稱後按下search按鈕
2. 若此用戶存在，會轉換route顯示該用戶的repos；若不存在，會跳出該用戶不存在的提醒訊息
3. 在repos列表，可點擊detail按鈕進入單一repo頁面
4. 在單一repo網頁點擊 "Repo's github link"，可另開新分頁至該repo的github頁面
5. 在repos列表與單一repo頁面上方有 "back to SearchBar"，點擊可以回到這裡


#### 如何實現Infinite scroll

若要達成Infinite scroll，必須先判斷使用者是否滾到底部才能發送api

因此先建立window.addEventListener監聽使用者scroll

取得使用者的scrollTop (在有滾動條時，滾動條向下滾動的距離也就是元素頂部被遮住部分的高度)、innerHeight (window內部高度)

將兩者相加並與scrollHeight (元素內容高度，包括由於scroll後看不見的內容)比大小，判斷是否到達底部

到達底部後發送api請求

為了避免因為停在底部符合條件，導致程式被執行多次

scroll監聽會在到達底部後被removeEventListener

