
// ーーーーーーイベントーーーーーー
const onClickAdd = () => {
  // テキスト取得と初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // 関数2
  createIncompleteList(inputText);
};

// ーーーーーー関数ーーーーーー
// 1,未完了リストから要素削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 2,未完了リストに追加
const createIncompleteList = (text) => {
  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // tag生成
  const p = document.createElement("p");
  p.innerText = text;

  // 完了tag生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 未完了から削除 関数1
    // const deleteTarget = deleteButton.parentNode;
    // document.getElementById("incomplete-list").removeChild(deleteTarget);
    deleteFromIncompleteList(completeButton.parentNode);

    // 完了リストに要素追加
    const addTarget = completeButton.parentNode;

    // TODOテキスト取得
    const text = addTarget.firstElementChild.innerText;

    // div以下を初期化
    addTarget.textContent = null;

    // pタグ生成
    const p = document.createElement("p");
    p.innerText = text;

    // button生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // 戻すボタンのdivを削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);
      // テキスト取得
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    // div子要素追加
    addTarget.appendChild(p);
    addTarget.appendChild(backButton);

    // 完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  // 削除tag生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 未完了から削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  // divの子要素に要素設定
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-bottun")
  .addEventListener("click", () => onClickAdd());
