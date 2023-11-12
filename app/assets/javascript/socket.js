socket = (function() {
$(function () {
    let demo = $('#demo-img');
    let demoBack = $('#demo-img-back');
    let offset = demo.offset();
    
    $(window).on('scroll', function () {
        if($(window).width() < 480){
            position = 75;
        } else {
            position = 100;
        }
        if ($(window).scrollTop() > offset.top - position) {
            demo.addClass('fixed');
            demoBack.addClass('appear');
        } else {
            demo.removeClass('fixed');
            demoBack.removeClass('appear');
        }
    });
});

//RGBの取得
let rgb_select = ''; //現在選択されている色を格納

//プリセットカラーをクリック->取得->スイッチオン(送信)cまで
$('.preset_color').on('click', function(e) {
    rgb_select = e.target.value;
    command = changeColor(rgb_select);
    color_code.value = rgb_select;
    postData(command);
});
const colors = document.getElementsByClassName('preset_color');
for(let i = 0; i < colors.length; i++){
    colors[i].addEventListener('change', function(e) {
        rgb_select = e.target.value;
        command = changeColor(rgb_select);
        color_code.value = rgb_select;
        postData(command);
    });
}

//カラーコードを入力->取得->スイッチオン(送信)まで
const color_code = document.getElementById('led_color');
color_code.addEventListener('change', function(e) {
    rgb_select = e.target.value;
    command = changeColor(rgb_select);
    if(command){
        postData(command);
    }
});


//カラーの変換・変更(送信用コマンドを返す)
function changeColor(rgb_select){
    rgb_select = hex2rgb(rgb_select);
    if(rgb_select.includes(NaN)){
        alert('入力されたカラーコードは正しくありません。再入力をお願いします。');
        rgb_select = '';
        return '';
    } else {
        command = 'R:xxx,G:xxx,B:xxx';
        for(let i = 0; i < rgb_select.length; i++){
            command = command.replace('xxx', rgb_select[i]);
        }
        return 'COLOR,' + command;
    }
}


//カラーコードからRGBに変換する処理
function hex2rgb ( hex ) {
    if ( hex.slice(0, 1) == "#" ) hex = hex.slice(1);
    if ( hex.length == 3 ) hex = hex.slice(0,1) + hex.slice(0,1) + hex.slice(1,2) + hex.slice(1,2) + hex.slice(2,3) + hex.slice(2,3);

    return [ hex.slice(0, 2), hex.slice(2, 4), hex.slice(4, 6) ].map( function (str) {
        return parseInt(str, 16);
    } ) ;
}

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//画像のアップロード
$('#photo_switch').on('click', function() {
    if($('#mp4_switch').prop('checked')){
        $('#mp4_switch').click();
        $('#robot_mp4').css('display', 'none');
        if($('#photo_switch').prop('checked')){
            $('#robot_photo').css('display', 'block');
        } else {
            $('#robot_photo').css('display', 'none');
        }
    } else {
        if($('#photo_switch').prop('checked')){
            $('#robot_photo').css('display', 'block');
        } else {
            $('#robot_photo').css('display', 'none');
        }
    }
});

const pdf_file = document.getElementById('pdf_file');
const sizeLimit = 1024 * 1024 * 2; // 制限サイズ
// changeイベントで呼び出す関数
function handleFileSelect(){
    let file = pdf_file.files[0];
    let pdf_filename = file.name;
    if (file && file.size > sizeLimit) {
        // ファイルサイズが制限以上
        alert('ファイルサイズは2MB以下にしてください'); // エラーメッセージを表示
        pdf_file.value = ''; // inputの中身をリセット
        return; // この時点で処理を終了する
    }
    previewFile(file);
}
// ファイル選択時にhandleFileSelectを発火
pdf_file.addEventListener('change', handleFileSelect);

function previewFile(file) {
    // プレビュー画像を追加する要素
    const preview = document.getElementById('preview');
    // FileReaderオブジェクトを作成
    const reader = new FileReader();

    // URLとして読み込まれたときに実行する処理
    reader.onload = function (e) {
        
    }
    // いざファイルをURLとして読み込む
    reader.readAsDataURL(file);
}


// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//動画のアップロード

$('#mp4_switch').on('click', function() {
    if($('#photo_switch').prop('checked')){
        $('#photo_switch').click();
        $('#robot_photo').css('display', 'none');
        if($('#mp4_switch').prop('checked')){
            $('#robot_mp4').css('display', 'block');
        } else {
            $('#robot_mp4').css('display', 'none');
        }
    } else {
        if($('#mp4_switch').prop('checked')){
            $('#robot_mp4').css('display', 'block');
        } else {
            $('#robot_mp4').css('display', 'none');
        }
    }
});

const movie_file = document.getElementById('movie_file');
const mv_sizeLimit = 1024 * 1024 * 5; // 制限サイズ
// changeイベントで呼び出す関数
function handle_mv_FileSelect(){
    let file = movie_file.files[0];
    let movie_filename = file.name;

    if (file && file.size > mv_sizeLimit) {
        // ファイルサイズが制限以上
        alert('ファイルサイズは5MB以下にしてください'); // エラーメッセージを表示
        movie_file.value = ''; // inputの中身をリセット
        return; // この時点で処理を終了する
    }
    
    preview_mv_File(file);
}
// ファイル選択時にhandleFileSelectを発火
movie_file.addEventListener('change', handle_mv_FileSelect);

function preview_mv_File(file) {
    // プレビュー画像を追加する要素
    const preview = document.getElementsByClassName('preview_file_video')[0];
    // FileReaderオブジェクトを作成
    const reader = new FileReader();

    // URLとして読み込まれたときに実行する処理
    reader.onload = function (e) {
        const videoUrl = e.target.result; // URLはevent.target.resultで呼び出せる
        $('#mp4_preview_dummy').css('display', 'none');
        $('#mp4_preview_video').remove();
        const video = document.createElement("video"); // video要素を作成
        video.src = videoUrl; // URLをvideo要素にセット
        video.id = 'mp4_preview_dummy';
        preview.appendChild(video); // #previewの中に追加
    }
    // いざファイルをURLとして読み込む
    reader.readAsDataURL(file);
}



// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //音楽のアップロード

const audio_file = document.getElementById('audio_file');
let audio_name = document.getElementById('audio_name');
// const sizeLimit = 1024 * 1024 * 1; // 制限サイズ
// changeイベントで呼び出す関数
function handle_audio_FileSelect(){
    let file = audio_file.files[0];
    let audio_filename = file.name;
    audio_name.value = audio_filename;
    let audio_filesize = file.size;
    preview_audio_File(file);
}
// ファイル選択時にhandleFileSelectを発火
audio_file.addEventListener('change', handle_audio_FileSelect);

function preview_audio_File(file) {
    // FileReaderオブジェクトを作成
    const reader = new FileReader();
    // URLとして読み込まれたときに実行する処理
    reader.onload = function (e) {
        const audioUrl = e.target.result; // URLはevent.target.resultで呼び出せる
    }
    // いざファイルをURLとして読み込む
    reader.readAsDataURL(file);
}

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////



//ajaxでコマンドのテキストデータを渡す
function postData(command){
    let request_cmd =  command;
    console.log('コマンド: ' + request_cmd + ' を送信');
    // 実機送信時の通信
    // $.ajax({
    //     url: '/send_msg',
    //     type: 'GET',
    //     dataType: 'text',
    //     async: true,
    //     data: {
    //         cmd: request_cmd
    //     },
    // });
    if(command.includes('COLOR')){
        rgb = command.split(":").slice(1).map(item => parseInt(item, 10));
        hex = "rgb(" + rgb.join(",") + ")";
        $('.robot-eyes').css('background-color', hex);
        $("#demo-img img").css("boxShadow", "1px 1px 50px " + hex);
    }
}



let ctx = document.getElementsByClassName('ex_chart');
// let myCharts = [];
let chart_num = document.getElementsByClassName('graph_value');

chart_data = [];
for(let i = 0; i < ctx.length; i++){
    chart_data.push([0,0,0,0,0,0,0,0,0,0]);
}

let data = {'BATTERY': '5.635', 'TEMPERATURE': '19.75', 'FAN': 'OFF', 'DISPLAY': 'OFF', 'POSITION': 'LAT:36.383:LON:136.381', 'LED': 'OFF', 'COLOR': 'R:0:G:0:B:0', 'AUDIO': 'OFF', 'MP3': 'OFF', 'MP4': 'OFF', 'USB5V': 'OFF', 'WIFIUSE': '1', 'MESSAGE': 'none', 'GTEMPERATURE': '23.64', 'HUMIDITY': '58.02', 'LIGHT': '26', 'PRESS': '1025.856', 'NOISE': '52.29', 'ETVOC': '45', 'CO2': '700', 'DISCOMFORT': '70.73', 'HEAT': '21.13'}
let chart_check = false;

// setIntervalのIDを格納する変数
let intervalID;

// setIntervalの実行
function startInterval() {
    intervalID = setInterval(function() {
        updateData();
        console.log('Interval is running...');
    }, 1000);
}

// setIntervalの停止
function stopInterval() {
    clearInterval(intervalID);
}

startInterval();
console.log('Interval started.');

function updateData(){
    // submit();
    // let data = document.getElementById('data').textContent.replace(/(\\|\/)/g,'');
    // data = JSON.parse(data.replaceAll('=>', ':'));
    // if(data["DATA"]){
    //     document.getElementById('error_msg').textContent = 'スマートIoT機器からのデータを受信していません。IoT機器を起動してください。';
    // } else {
    //     document.getElementById('error_msg').textContent = '';
    // }

    destroyChart();

    //下記pushed_dataは、HTMLと順番合わせる + グラフ描画の順番も合わせる
    // IoT機器のバッテリー残量
    // IoT機器の基盤温度
    // IoT機器周辺の外気温
    // IoT機器の着席情報
    // Wi-Fi接続台数
    // IoT機器周辺の湿度
    // IoT機器周辺の照度
    // IoT機器周辺の気圧
    // IoT機器周辺のノイズ
    // IoT機器周辺の揮発性有機化合物濃度
    // IoT機器周辺のCO2濃度
    // IoT機器周辺の不快指数
    // IoT機器周辺の熱中症警戒度
    // データ通信使用量
    pushed_data = [
        // Number(data["BATTERY"]),
        // Number(data["TEMPERATURE"]),
        // Number(data["GTEMPERATURE"]),
        // Number(data["WIFIUSE"]),
        // Number(data["HUMIDITY"]),
        // Number(data["LIGHT"]),
        // Number(data["PRESS"]),
        // Number(data["NOISE"]),
        // Number(data["ETVOC"]),
        // Number(data["CO2"]),
        // Number(data["DISCOMFORT"]),
        // Number(data["HEAT"]),
        (Math.random() * (5.785 - 4.987) + 4.987).toFixed(3),
        (Math.random() * (19.76 - 19.73) + 19.73).toFixed(2),
        (Math.random() * (23.67 - 23.64) + 23.64).toFixed(2),
        Math.floor(Math.random() * 3),
        (Math.random() * (58.05 - 58.02) + 58.02).toFixed(2),
        Math.floor(Math.random() * (27 - 25) + 25),
        (Math.random() * (1025.856 - 1025.756) + 1025.756).toFixed(3),
        (Math.random() * (52.49 - 52.29) + 52.29).toFixed(2),
        Math.floor(Math.random() * (47 - 45) + 45),
        Math.floor(Math.random() * (704 - 700) + 700),
        (Math.random() * (70.83 - 70.73) + 70.73).toFixed(2),
        (Math.random() * (21.33 - 21.23) + 21.23).toFixed(2)
    ];
    for(let i = 0; i < ctx.length; i++){
        chart_data[i].shift();
        chart_data[i].push(pushed_data[i]);
        chart_num[i].querySelector('span').textContent = pushed_data[i];
    }

    chart_check = true;

    // document.getElementById("fan").textContent = "FAN: " + data["FAN"];
    // document.getElementById("display").textContent = "DISPLAY: " + data["DISPLAY"];
    // document.getElementById("position").textContent = "POSITION: " + data["POSITION"];
    // document.getElementById("led").textContent = "LED: " + data["LED"];
    // document.getElementById("color").textContent = "COLOR: " + data["COLOR"];
    // document.getElementById("audio").textContent = "AUDIO: " + data["AUDIO"];
    // document.getElementById("mp3").textContent = "MP3: " + data["MP3"];
    // document.getElementById("mp4").textContent = "MP4: " + data["MP4"];
    // document.getElementById("usb").textContent = "USB5V: " + data["USB5V"];
    // document.getElementById("message").textContent = "MESSAGE: " + data["MESSAGE"];


    ///////////// 以下グラフ描画 ///////////////
    // IoT機器のバッテリー残量
    window.myChart1 = new Chart(ctx[0], {
        type: 'line',
        data: {
            labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            datasets: [{
                pointRadius: 0,
                borderWidth: 2,
                label: '',
                data: chart_data[0],
                // データライン
                borderColor: 'lightseagreen',
                xAxisID: 'x',
                yAxisID: 'y'
            }],
        },
        options: {
            animation: false,
            scales: {  // 軸設定
                x: {  // Ｘ軸設定
                    ticks: {  // 目盛り
                        display: false
                        // min: 0,            // 最小値
                        // max: 25,           // 最大値
                        // stepSize: 5,       // 間隔
                    },
                    grid: {
                        display: false,
                        drawBorder: false
                    }
                },
                y: { // Ｙ軸設定
                    ticks: {  // 目盛り
                        display: false
                    },
                    grid: {  // グリッド線
                        display: false,
                        drawBorder: false
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
    
    // IoT機器の基盤温度
    window.myChart2 = new Chart(ctx[1], {
        type: 'line',
        data: {
            labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            datasets: [{
                pointRadius: 0,
                borderWidth: 2,
                label: '',
                data: chart_data[1],
                // データライン
                borderColor: 'lightseagreen',
                xAxisID: 'x',
                yAxisID: 'y'
            }],
        },
        options: {
            animation: false,
            scales: {  // 軸設定
                x: {  // Ｘ軸設定
                    ticks: {  // 目盛り
                        display: false
                        // min: 0,            // 最小値
                        // max: 25,           // 最大値
                        // stepSize: 5,       // 間隔
                    },
                    grid: {
                        display: false,
                        drawBorder: false
                    }
                },
                y: { // Ｙ軸設定
                    ticks: {  // 目盛り
                        display: false
                    },
                    grid: {  // グリッド線
                        display: false,
                        drawBorder: false
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
    

    // IoT機器周辺の外気温
    window.myChart3 = new Chart(ctx[2], {
        type: 'line',
        data: {
            labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            datasets: [{
                pointRadius: 0,
                borderWidth: 2,
                label: '',
                data: chart_data[2],
                // データライン
                borderColor: 'lightseagreen',
                xAxisID: 'x',
                yAxisID: 'y'
            }],
        },
        options: {
            animation: false,
            scales: {  // 軸設定
                x: {  // Ｘ軸設定
                    ticks: {  // 目盛り
                        display: false
                        // min: 0,            // 最小値
                        // max: 25,           // 最大値
                        // stepSize: 5,       // 間隔
                    },
                    grid: {
                        display: false,
                        drawBorder: false
                    }
                },
                y: { // Ｙ軸設定
                    ticks: {  // 目盛り
                        display: false
                    },
                    grid: {  // グリッド線
                        display: false,
                        drawBorder: false
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
    
    // Wi-Fi接続台数
    window.myChart4 = new Chart(ctx[3], {
        type: 'line',
        data: {
            labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            datasets: [{
                pointRadius: 0,
                borderWidth: 2,
                label: '',
                data: chart_data[3],
                // データライン
                borderColor: 'lightseagreen',
                xAxisID: 'x',
                yAxisID: 'y'
            }],
        },
        options: {
            animation: false,
            scales: {  // 軸設定
                x: {  // Ｘ軸設定
                    ticks: {  // 目盛り
                        display: false
                        // min: 0,            // 最小値
                        // max: 25,           // 最大値
                        // stepSize: 5,       // 間隔
                    },
                    grid: {
                        display: false,
                        drawBorder: false
                    }
                },
                y: { // Ｙ軸設定
                    ticks: {  // 目盛り
                        display: false
                    },
                    grid: {  // グリッド線
                        display: false,
                        drawBorder: false
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
    
    // IoT機器周辺の湿度
    window.myChart5 = new Chart(ctx[4], {
        type: 'line',
        data: {
            labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            datasets: [{
                pointRadius: 0,
                borderWidth: 2,
                label: '',
                data: chart_data[4],
                // データライン
                borderColor: 'lightseagreen',
                xAxisID: 'x',
                yAxisID: 'y'
            }],
        },
        options: {
            animation: false,
            scales: {  // 軸設定
                x: {  // Ｘ軸設定
                    ticks: {  // 目盛り
                        display: false
                        // min: 0,            // 最小値
                        // max: 25,           // 最大値
                        // stepSize: 5,       // 間隔
                    },
                    grid: {
                        display: false,
                        drawBorder: false
                    }
                },
                y: { // Ｙ軸設定
                    ticks: {  // 目盛り
                        display: false
                    },
                    grid: {  // グリッド線
                        display: false,
                        drawBorder: false
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
    
    // IoT機器周辺の照度
    window.myChart6 = new Chart(ctx[5], {
        type: 'line',
        data: {
            labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            datasets: [{
                pointRadius: 0,
                borderWidth: 2,
                label: '',
                data: chart_data[5],
                // データライン
                borderColor: 'lightseagreen',
                xAxisID: 'x',
                yAxisID: 'y'
            }],
        },
        options: {
            animation: false,
            scales: {  // 軸設定
                x: {  // Ｘ軸設定
                    ticks: {  // 目盛り
                        display: false
                        // min: 0,            // 最小値
                        // max: 25,           // 最大値
                        // stepSize: 5,       // 間隔
                    },
                    grid: {
                        display: false,
                        drawBorder: false
                    }
                },
                y: { // Ｙ軸設定
                    ticks: {  // 目盛り
                        display: false
                    },
                    grid: {  // グリッド線
                        display: false,
                        drawBorder: false
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
    
    // IoT機器周辺の気圧
    window.myChart7 = new Chart(ctx[6], {
        type: 'line',
        data: {
            labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            datasets: [{
                pointRadius: 0,
                borderWidth: 2,
                label: '',
                data: chart_data[6],
                // データライン
                borderColor: 'lightseagreen',
                xAxisID: 'x',
                yAxisID: 'y'
            }],
        },
        options: {
            animation: false,
            scales: {  // 軸設定
                x: {  // Ｘ軸設定
                    ticks: {  // 目盛り
                        display: false
                        // min: 0,            // 最小値
                        // max: 25,           // 最大値
                        // stepSize: 5,       // 間隔
                    },
                    grid: {
                        display: false,
                        drawBorder: false
                    }
                },
                y: { // Ｙ軸設定
                    ticks: {  // 目盛り
                        display: false
                    },
                    grid: {  // グリッド線
                        display: false,
                        drawBorder: false
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
    
    // IoT機器周辺のノイズ
    window.myChart8 = new Chart(ctx[7], {
        type: 'line',
        data: {
            labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            datasets: [{
                pointRadius: 0,
                borderWidth: 2,
                label: '',
                data: chart_data[7],
                // データライン
                borderColor: 'lightseagreen',
                xAxisID: 'x',
                yAxisID: 'y'
            }],
        },
        options: {
            animation: false,
            scales: {  // 軸設定
                x: {  // Ｘ軸設定
                    ticks: {  // 目盛り
                        display: false
                        // min: 0,            // 最小値
                        // max: 25,           // 最大値
                        // stepSize: 5,       // 間隔
                    },
                    grid: {
                        display: false,
                        drawBorder: false
                    }
                },
                y: { // Ｙ軸設定
                    ticks: {  // 目盛り
                        display: false
                    },
                    grid: {  // グリッド線
                        display: false,
                        drawBorder: false
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
    
    // IoT機器周辺の揮発性有機化合物濃度
    window.myChart9 = new Chart(ctx[8], {
        type: 'line',
        data: {
            labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            datasets: [{
                pointRadius: 0,
                borderWidth: 2,
                label: '',
                data: chart_data[8],
                // データライン
                borderColor: 'lightseagreen',
                xAxisID: 'x',
                yAxisID: 'y'
            }],
        },
        options: {
            animation: false,
            scales: {  // 軸設定
                x: {  // Ｘ軸設定
                    ticks: {  // 目盛り
                        display: false
                        // min: 0,            // 最小値
                        // max: 25,           // 最大値
                        // stepSize: 5,       // 間隔
                    },
                    grid: {
                        display: false,
                        drawBorder: false
                    }
                },
                y: { // Ｙ軸設定
                    ticks: {  // 目盛り
                        display: false
                    },
                    grid: {  // グリッド線
                        display: false,
                        drawBorder: false
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
    
    // IoT機器周辺のCO2濃度
    window.myChart10 = new Chart(ctx[9], {
        type: 'line',
        data: {
            labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            datasets: [{
                pointRadius: 0,
                borderWidth: 2,
                label: '',
                data: chart_data[9],
                // データライン
                borderColor: 'lightseagreen',
                xAxisID: 'x',
                yAxisID: 'y'
            }],
        },
        options: {
            animation: false,
            scales: {  // 軸設定
                x: {  // Ｘ軸設定
                    ticks: {  // 目盛り
                        display: false
                        // min: 0,            // 最小値
                        // max: 25,           // 最大値
                        // stepSize: 5,       // 間隔
                    },
                    grid: {
                        display: false,
                        drawBorder: false
                    }
                },
                y: { // Ｙ軸設定
                    ticks: {  // 目盛り
                        display: false
                    },
                    grid: {  // グリッド線
                        display: false,
                        drawBorder: false
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
    
    // IoT機器周辺の不快指数
    window.myChart11 = new Chart(ctx[10], {
        type: 'line',
        data: {
            labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            datasets: [{
                pointRadius: 0,
                borderWidth: 2,
                label: '',
                data: chart_data[10],
                // データライン
                borderColor: 'lightseagreen',
                xAxisID: 'x',
                yAxisID: 'y'
            }],
        },
        options: {
            animation: false,
            scales: {  // 軸設定
                x: {  // Ｘ軸設定
                    ticks: {  // 目盛り
                        display: false
                        // min: 0,            // 最小値
                        // max: 25,           // 最大値
                        // stepSize: 5,       // 間隔
                    },
                    grid: {
                        display: false,
                        drawBorder: false
                    }
                },
                y: { // Ｙ軸設定
                    ticks: {  // 目盛り
                        display: false
                    },
                    grid: {  // グリッド線
                        display: false,
                        drawBorder: false
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });

    // IoT機器周辺の熱中症警戒度
    window.myChart12 = new Chart(ctx[11], {
        type: 'line',
        data: {
            labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            datasets: [{
                pointRadius: 0,
                borderWidth: 2,
                label: '',
                data: chart_data[11],
                // データライン
                borderColor: 'lightseagreen',
                xAxisID: 'x',
                yAxisID: 'y'
            }],
        },
        options: {
            animation: false,
            scales: {  // 軸設定
                x: {  // Ｘ軸設定
                    ticks: {  // 目盛り
                        display: false
                        // min: 0,            // 最小値
                        // max: 25,           // 最大値
                        // stepSize: 5,       // 間隔
                    },
                    grid: {
                        display: false,
                        drawBorder: false
                    }
                },
                y: { // Ｙ軸設定
                    ticks: {  // 目盛り
                        display: false
                    },
                    grid: {  // グリッド線
                        display: false,
                        drawBorder: false
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });

}
updateData();

function destroyChart(){
    if (chart_check) {
        for(let i = 0; i < ctx.length; i++){
            myChart1.destroy();
            myChart2.destroy();
            myChart3.destroy();
            myChart4.destroy();
            myChart5.destroy();
            myChart6.destroy();
            myChart7.destroy();
            myChart8.destroy();
            myChart9.destroy();
            myChart10.destroy();
            myChart11.destroy();
            myChart12.destroy();
        }
    }
}

return {
    intervalID: intervalID,
    stopInterval: stopInterval
};

})();
console.log(socket.intervalID);

$(document).on('turbolinks:before-visit', function() {
    socket.stopInterval();
    Turbolinks.clearCache();
});