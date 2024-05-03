document.addEventListener("DOMContentLoaded", function() {
  const filesAndTitles = {
    "introduction.html": "Introduction",
    "build-the-photon.html": "Build the Photon",
    // 他のファイルとタイトルを追加
  };

  const tocContainer = document.getElementById("toc");
  const tocList = document.createElement("ul");

  for (const file in filesAndTitles) {
    const title = filesAndTitles[file];
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.textContent = title;
    link.href = file; // リンク先をファイル名に変更

    listItem.appendChild(link);
    tocList.appendChild(listItem);

    // ファイル内のh1からh3要素を取得して目次に追加
    fetch(file) // ファイルを取得
      .then(response => response.text()) // テキストデータを取得
      .then(text => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, "text/html");
        const headings = doc.querySelectorAll("h1, h2, h3");

        headings.forEach((heading) => {
          //const headingId = "header" + (index + 1); // ユニークなIDを作成（"file1"、"file2"、...）
          
          const subListItem = document.createElement("li");
          const subLink = document.createElement("a");
          const headingId = heading.textContent;
          heading.setAttribute("id", headingId); // 見出しにIDを設定
          subLink.textContent = heading.textContent;
          subLink.href = file + "#" + headingId; // ページ内リンクを生成（ファイル名 + ヘッダーのID）
          subListItem.appendChild(subLink);
          listItem.appendChild(subListItem);
          console.log(heading.getAttribute("id"));
        });
      })
      .catch(error => {
        console.error("ファイルの読み込みに失敗しました:", error);
      });
  }

  tocContainer.appendChild(tocList);
});
