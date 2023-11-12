const img_file = document.getElementById('img_file');
const sizeLimit = 1024 * 1024 * 1; // 制限サイズ
// changeイベントで呼び出す関数
function handleFileSelect(){
    let file = img_file.files[0];
    let img_filename = file.name;
    let img_filesize = file.size;

    if (file && file.size > sizeLimit) {
        // ファイルサイズが制限以上
        alert('ファイルサイズは1MB以下にしてください'); // エラーメッセージを表示
        img_file.value = ''; // inputの中身をリセット
        return; // この時点で処理を終了する
    }
    previewFile(file);
}
// ファイル選択時にhandleFileSelectを発火
img_file.addEventListener('change', handleFileSelect);

function previewFile(file) {
    // プレビュー画像を追加する要素
    const preview = document.getElementById('preview');
    // FileReaderオブジェクトを作成
    const reader = new FileReader();

    // URLとして読み込まれたときに実行する処理
    reader.onload = function (e) {
        const imageUrl = e.target.result; // URLはevent.target.resultで呼び出せる
        $('#preview-image').remove();
        const img = document.createElement("img"); // img要素を作成
        img.src = imageUrl; // URLをimg要素にセット
        img.id = 'preview-image';
        preview.appendChild(img); // #previewの中に追加
    }
    // いざファイルをURLとして読み込む
    reader.readAsDataURL(file);
}


// // selectの初期値に文章設定
// const select = document.getElementsByTagName('select');
// console.log(select);

// for(let i = 0;i < select.length;i++){
//     select[i].children[0].textContent = '- 選択してください -';
// }