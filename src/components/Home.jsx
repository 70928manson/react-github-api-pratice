import React from "react";

function Home() {
    return (
        <div className="home">
            <h3>文件說明： </h3>
            <p>1. 輸入想搜尋的用戶名稱後按下search按鈕</p>
            <p>2. 若此用戶存在，會轉換route顯示該用戶的repos；若不存在，會跳出alert提醒該用戶不存在</p>
            <p>3. 在repos列表，可點擊detail按鈕進入單一repo頁面</p>
            <p>4. 在單一repo網頁點擊 "Repo's github link"，可另開新分頁至該repo的github頁面</p>
            <p>5. 在repos列表與單一repo頁面上方有 "back to SearchBar"，點擊可以回到這裡</p>
            <h3>作業架構： </h3>
            <p>預設頁面為搜尋欄</p>
            <p>輸入有效的用戶名稱後會轉至該用戶的repos列表頁面</p>
            <p>點擊detail按鈕可看到該repo的細節內容</p>

        </div>
    )
}

export default Home