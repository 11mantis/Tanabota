const tbody = document.querySelector('#tbl tbody');

const data = [
    ["項目", "優先度", "費用", "メモ"]
    ["電気・ガス・水道開通", "★★★", "", "入居初日に使えるよう手続き必須"]
    ["ネット回線", "★★★", "", "工事日を事前予約すると安心"]
    ["ベッド / 布団", "★★★", "", "快眠最重要。初日に必須"]
    ["テーブル・デスク", "★★", "", "食事・作業両用なら効率的"]
    ["椅子", "★★", "", "床座りが苦手なら必須"]
    ["収納棚・ラック", "★★", "", "クローゼットが小さい部屋は要検討"]
    ["冷蔵庫", "★★★", "", "玄関通過サイズ＆容量要確認"]
    ["洗濯機", "★★★", "", "コインランドリー代より早期導入がお得"]
    ["電子レンジ", "★★★", "", "自炊派・時短派の相棒"]
    ["照明器具", "★★★", "", "備え付けがない物件多し。初日必須"]
    ["炊飯器", "★★", "", "米派なら必須。パン派は不要かも"]
    ["電気ケトル", "実家から", "", ""]
    ["掃除機 or クイックルワイパー", "★★", "", "床掃除の頻度に合わせて選択"]
]


for (let r = 0; r <= 14; r++) {
    const tr = document.createElement('tr');

    const tdCheckbox = document.createElement('td'); //td(表の１つのマス)の能力を持った空の箱(tdCheckbox)を作る
    const checkbox = document.createElement('input'); //チェックボックスというスイッチを作る
    checkbox.type = 'checkbox'; //type='checkbox' でチェックできるボタンに設定
    tdCheckbox.appendChild(checkbox); //チェックボックスを空の箱に入れる
    tr.appendChild(tdCheckbox); //箱をセルに入れる

    for (let c = 0; c <= 4; c++) {
        const td = document.createElement('td');
        td.textContent = data[r][c]; 
        tr.appendChild(td); // この行(table row)の中に、新しいセル(table data)を置く
    }
    tbody.appendChild(tr); // tbodyの中に、行(table row)を置く
}