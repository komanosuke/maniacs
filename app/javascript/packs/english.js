//字義
const quiz0 = [
    {
            question:'私は',
            answer:'I',
            pronunciation:'アィ'
    },
    {
            question:'あなたは・あなたたちは',
            answer:'you',
            pronunciation:'ユー'
    },
    {
            question:'彼は',
            answer:'he',
            pronunciation:'ヒー'
    },
    {
            question:'彼女は',
            answer:'she',
            pronunciation:'シー'
    },
    {
            question:'私たちは',
            answer:'we',
            pronunciation:'ウイー'
    },
    {
            question:'彼らは',
            answer:'they',
            pronunciation:'ゼィ'
    },
    {
            question:'これは',
            answer:'this',
            pronunciation:'ディス'
    },
    {
            question:'あれは',
            answer:'that',
            pronunciation:'ザット'
    }
];

const quiz1 = [
    {
            question:'1月',
            answer:'January',
            pronunciation:'ジャニュアリー'
    },
    {
            question:'2月',
            answer:'February',
            pronunciation:'フェブルアリー'
    },
    {
            question:'3月',
            answer:'March',
            pronunciation:'マーチ'
    },
    {
            question:'4月',
            answer:'April',
            pronunciation:'エイプリル'
    },
    {
            question:'5月',
            answer:'May',
            pronunciation:'メイ'
    },
    {
            question:'6月',
            answer:'June',
            pronunciation:'ジューン'
    },
    {
            question:'7月',
            answer:'July',
            pronunciation:'ジュライ'
    },
    {
            question:'8月',
            answer:'August',
            pronunciation:'オーガスト'
    },
    {
            question:'9月',
            answer:'September',
            pronunciation:'セプテンバー'
    },
    {
            question:'10月',
            answer:'October',
            pronunciation:'オクトウバー'
    },
    {
            question:'11月',
            answer:'November',
            pronunciation:'ノウベンバー'
    },
    {
            question:'12月',
            answer:'December',
            pronunciation:'ディッセンバー'
    }
];

const quiz2 = [
    {
            question:'月曜日',
            answer:'Monday',
            pronunciation:'マンディ'
    },
    {
            question:'火曜日',
            answer:'Tuesday',
            pronunciation:'チューズディ'
    },
    {
            question:'水曜日',
            answer:'Wednesday',
            pronunciation:'ウェンズディ'
    },
    {
            question:'木曜日',
            answer:'Thursday',
            pronunciation:'サーズディ'
    },
    {
            question:'金曜日',
            answer:'Friday',
            pronunciation:'フライディ'
    },
    {
            question:'土曜日',
            answer:'Saturday',
            pronunciation:'サタディ'
    },
    {
            question:'日曜日',
            answer:'Sunday',
            pronunciation:'サンディ'
    }
];

const quiz3 = [
    {
            question:'春',
            answer:'spring',
            pronunciation:'スプリング'
    },
    {
            question:'夏',
            answer:'summer',
            pronunciation:'サマー'
    },
    {
            question:'秋',
            answer:'fall',
            pronunciation:'フォール'
    },
    {
            question:'冬',
            answer:'winter',
            pronunciation:'ウィンター'
    }
];

const quiz4 = [
    {
            question:'午前・朝',
            answer:'morning',
            pronunciation:'モーニング'
    },
    {
            question:'午後',
            answer:'afternoon',
            pronunciation:'アフタヌーン'
    },
    {
            question:'夕方',
            answer:'evening',
            pronunciation:'イーブニング'
    },
    {
            question:'夜',
            answer:'night',
            pronunciation:'ナイト'
    },
    {
            question:'年',
            answer:'year',
            pronunciation:'イヤー'
    },
    {
            question:'月',
            answer:'month',
            pronunciation:'マンス'
    },
    {
            question:'日',
            answer:'day',
            pronunciation:'デイ'
    },
    {
            question:'週',
            answer:'week',
            pronunciation:'ウィーク'
    },
    {
            question:'時間・時',
            answer:'time',
            pronunciation:'タイム'
    },
    {
            question:'分',
            answer:'minute',
            pronunciation:'ミニット'
    }
];

const quiz5 = [
    {
            question:'家族',
            answer:'family',
            pronunciation:'ファミリー'
    },
    {
            question:'父',
            answer:'father',
            pronunciation:'ファーザー'
    },
    {
            question:'母',
            answer:'mother',
            pronunciation:'マザー'
    },
    {
            question:'兄・弟',
            answer:'brother',
            pronunciation:'ブラザー'
    },
    {
            question:'姉・妹',
            answer:'sister',
            pronunciation:'シスター'
    }
];

const quiz6 = [
    {
            question:'動物',
            answer:'animal',
            pronunciation:'アニマル'
    },
    {
            question:'犬',
            answer:'dog',
            pronunciation:'ドーグ'
    },
    {
            question:'猫',
            answer:'cat',
            pronunciation:'キャット'
    }
];

const quiz7 = [
    {
            question:'朝食・朝ごはん',
            answer:'breakfast',
            pronunciation:'ブレックファースト'
    },
    {
            question:'昼食・昼ごはん',
            answer:'lunch',
            pronunciation:'ランチ'
    },
    {
            question:'夕食・晩ごはん',
            answer:'dinner',
            pronunciation:'ディナー'
    }
];

const quiz8 = [
    {
            question:'家',
            answer:'house',
            pronunciation:'ハウス'
    },
    {
            question:'台所',
            answer:'kitchen',
            pronunciation:'キッチン'
    },
    {
            question:'窓',
            answer:'window',
            pronunciation:'ウィンドゥ'
    },
    {
            question:'部屋',
            answer:'room',
            pronunciation:'ルーム'
    },
    {
            question:'コンピューター',
            answer:'computer',
            pronunciation:'コンピューター'
    },
    {
            question:'机',
            answer:'desk',
            pronunciation:'デスク'
    },
    {
            question:'テーブル',
            answer:'table',
            pronunciation:'テイブル'
    },
    {
            question:'いす',
            answer:'chair',
            pronunciation:'チェアー'
    },
    {
            question:'ドア',
            answer:'door',
            pronunciation:'ドーァ'
    },
    {
            question:'ベッド',
            answer:'bed',
            pronunciation:'ベッド'
    },
    {
            question:'庭',
            answer:'garden',
            pronunciation:'ガーデン'
    }
];

const quiz9 = [
    {
            question:'車',
            answer:'car',
            pronunciation:'カー'
    },
    {
            question:'自転車',
            answer:'bike',
            pronunciation:'バイク'
    },
    {
            question:'列車・電車',
            answer:'train',
            pronunciation:'トゥレイン'
    },
    {
            question:'バス',
            answer:'bus',
            pronunciation:'バㇲ'
    }
];

const quiz10 = [
    {
            question:'スポーツ',
            answer:'sport',
            pronunciation:'スポート'
    },
    {
            question:'野球',
            answer:'baseball',
            pronunciation:'ベイスボーㇽ'
    },
    {
            question:'ボール',
            answer:'ball',
            pronunciation:'ボール'
    },
    {
            question:'バスケットボール',
            answer:'basketball',
            pronunciation:'バスキットボーㇽ'
    },
    {
            question:'サッカー',
            answer:'soccer',
            pronunciation:'サカー'
    },
    {
            question:'テニス',
            answer:'tennis',
            pronunciation:'テニス'
    },
    {
            question:'水泳',
            answer:'swimming',
            pronunciation:'スウィミング'
    }
];

const quiz11 = [
    {
            question:'音楽',
            answer:'music',
            pronunciation:'ミュージック'
    },
    {
            question:'ピアノ',
            answer:'piano',
            pronunciation:'ピアノゥ'
    },
    {
            question:'ギター',
            answer:'guitar',
            pronunciation:'ギター'
    },
    {
            question:'オルガン',
            answer:'organ',
            pronunciation:'オーガン'
    }
];

const quiz12 = [
    {
            question:'リンゴ',
            answer:'apple',
            pronunciation:'アプル'
    },
    {
            question:'オレンジ',
            answer:'orange',
            pronunciation:'オーリンジ'
    },
    {
            question:'卵',
            answer:'egg',
            pronunciation:'エッグ'
    },
    {
            question:'ブドウ',
            answer:'grape',
            pronunciation:'グレイプ'
    }
];

const quiz13 = [
    {
            question:'国',
            answer:'country',
            pronunciation:'カントリー'
    },
    {
            question:'アメリカ合衆国',
            answer:'America',
            pronunciation:'アメリカ'
    },
    {
            question:'オーストラリア',
            answer:'Australia',
            pronunciation:'オゥストレイリア'
    },
    {
            question:'日本',
            answer:'Japan',
            pronunciation:'ジャパン'
    }
];

const quiz14 = [
    {
            question:'学校',
            answer:'school',
            pronunciation:'スクール'
    },
    {
            question:'クラス・授業',
            answer:'class',
            pronunciation:'クラス'
    },
    {
            question:'先生',
            answer:'teacher',
            pronunciation:'ティーチャー'
    },
    {
            question:'生徒',
            answer:'student',
            pronunciation:'スチューデント'
    },
    {
            question:'数学',
            answer:'math',
            pronunciation:'マス'
    },
    {
            question:'日本語',
            answer:'Japanese',
            pronunciation:'ジャパニーズ'
    },
    {
            question:'英語',
            answer:'English',
            pronunciation:'イングリッシュ'
    },
    {
            question:'かばん',
            answer:'bag',
            pronunciation:'バッグ'
    },
    {
            question:'カメラ',
            answer:'camera',
            pronunciation:'キャムラ'
    },
    {
            question:'帽子',
            answer:'cap',
            pronunciation:'キャップ'
    },
    {
            question:'ノート',
            answer:'notebook',
            pronunciation:'ノゥトブック'
    },
    {
            question:'ペン',
            answer:'pen',
            pronunciation:'ペン'
    },
    {
            question:'絵・写真',
            answer:'picture',
            pronunciation:'ピクチャー'
    },
    {
            question:'木',
            answer:'tree',
            pronunciation:'トゥリー'
    },
    {
            question:'誕生日',
            answer:'birthday',
            pronunciation:'バースディ'
    },
    {
            question:'町',
            answer:'town',
            pronunciation:'タウン'
    },
    {
            question:'市・都市',
            answer:'city',
            pronunciation:'シティ'
    },
    {
            question:'公園',
            answer:'park',
            pronunciation:'パーク'
    },
    {
            question:'人々',
            answer:'people',
            pronunciation:'ピープル'
    },
    {
            question:'友人',
            answer:'friend',
            pronunciation:'フレンド'
    },
    {
            question:'女性',
            answer:'woman',
            pronunciation:'ウマン'
    },
    {
            question:'男性',
            answer:'man',
            pronunciation:'マン'
    }
];

const quizList = {
	'「わたしは」「あなたは」などの代名詞':quiz0,
	'1月〜12月':quiz1,
	'曜日を表す英語':quiz2,
	'季節を表す英語':quiz3,
	'時間に関する言葉':quiz4,
	'家族に関する英語':quiz5,
	'動物に関する英語':quiz6,
	'ごはんに関する英語':quiz7,
	'家に関する英語':quiz8,
	'乗り物に関する英語':quiz9,
	'スポーツに関する英語':quiz10,
	'音楽に関する英語':quiz11,
	'食べ物に関する英語':quiz12,
	'国に関する英語':quiz13,
	'学校・生活に関する英語':quiz14
};


const makeAddButton = document.getElementById("nextButton");
makeAddButton.addEventListener("click", () => { nextQuiz() });


let counter = 0;
for(let i = 0; i < Object.keys(quizList).length-1; i++){
	let wordsListClone = document.getElementsByClassName('category_copy');
	let cloneElement = wordsListClone[i].cloneNode(true);
	wordsListClone[i].after(cloneElement);
	let count = Object.values(quizList)[i].length-1;
	setWordsCopy(count, counter);
	counter += Object.values(quizList)[i].length;
	if(i == Object.keys(quizList).length-2){
		let lastLength = Object.values(quizList).length-1;
		count = Object.values(quizList)[lastLength].length-1;
		setWordsCopy(count, counter);
	}
}

function setWordsCopy(count, counter){
	for(let j = 0; j < count; j++){
		let wordsClone = document.getElementsByClassName('words_copy');
		let wordsCloneElement = wordsClone[counter].cloneNode(true);
		wordsClone[counter].after(wordsCloneElement);
	}
}

counter = 0
for(let i = 0; i < Object.keys(quizList).length; i++){
	document.getElementsByClassName('categories')[i].textContent = Object.keys(quizList)[i];
	for(let j = 0; j < Object.values(quizList)[i].length; j++){
		document.getElementsByClassName('japanese_word')[counter].textContent = Object.values(quizList)[i][j].question;
		document.getElementsByClassName('english_word')[counter].textContent = Object.values(quizList)[i][j].answer;
		document.getElementsByClassName('english_pronunciation')[counter].textContent = Object.values(quizList)[i][j].pronunciation;
		counter ++;
	}
}

for(let i = 0; i < Object.keys(quizList).length-1; i++){
	let categoryClone = document.getElementsByClassName('categoryContainer');
	let cloneElement = categoryClone[i].cloneNode(true);
	categoryClone[i].after(cloneElement);
}

for(let i = 0; i < Object.keys(quizList).length; i++){
	document.getElementsByClassName('categoryButton')[i].textContent = Object.keys(quizList)[i];
	document.getElementsByClassName('categoryButton')[i].value = i;
}


function chooseCategory(e){
    let quizNum = e.target.value;
	quiz = Object.values(quizList)[quizNum];
	quizLength = quiz.length;
	quizIndex = 0;
	setUpQuiz();
}

for(let i = 0; i < Object.keys(quizList).length; i++){
	document.getElementsByClassName('categoryButton')[i].addEventListener('click', chooseCategory, false);
	document.getElementsByClassName('categoryButton')[i].addEventListener('click', function() {
		let windowSize = window.innerWidth;
		if (windowSize < 500) {
			$('html, body').animate({scrollTop:300},400);
		} else {
			$('html, body').animate({scrollTop:400},400);
		}
	});
}


let quiz = quiz0;
let quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByClassName('quiz_button');
const buttonLength = $button.length

const setUpQuiz = () => {
    document.getElementById('quiz').textContent = '[ ' + quiz[quizIndex].question + ' ]';
    document.getElementById('quiz_count').textContent = '（' + (quizIndex+1) + '問目/' + quizLength + '問中）';
        document.getElementById('correct_message').textContent = '';
    let buttonList = [];
    buttonList.push(quiz[quizIndex].answer);
	let randomList = [];
	for(let i = 0; i < quizLength; i++){
		randomList.push(i);
	}
	randomList = randomList.filter(n => n !== quizIndex);

	for(let i = 0; i < quizLength-1; i++){
		randomNum = randomList[Math.floor(Math.random() * randomList.length)];
		buttonList.push(quiz[randomNum].answer);
		randomList = randomList.filter(n => n !== randomNum);
	}

    let numberList = [0,1,2];
    for(let i = 0; i < buttonLength; i++){
        let shuffledNumber = numberList[Math.floor(Math.random() * numberList.length)];
        $button[i].textContent = buttonList[shuffledNumber];
        numberList = numberList.filter(n => n !== shuffledNumber);
    }
}
setUpQuiz();


function judge(e){
    if(quiz[quizIndex].answer === e.target.textContent){
        document.getElementById('correct_message').textContent = '正解です！！';
        document.getElementById('correct_message').style.color = 'pink';
    } else {
        document.getElementById('correct_message').textContent = 'ちがうよ！！';
        document.getElementById('correct_message').style.color = 'lightblue';
    }
}

let handlerIndex = 0;
while(handlerIndex < buttonLength){
    $button[handlerIndex].addEventListener('click', judge, false);
    handlerIndex++;
}


function nextQuiz() {
	if (quizIndex < quizLength-1) {
		quizIndex++;
		setUpQuiz();
	} else {
		quizIndex = 0;
        setUpQuiz();
	}
}

const speakButton = document.getElementsByClassName("voiceButton");
for(let i = 0; i < speakButton.length; i++){
        speakButton[i].addEventListener("click", () => { speak(i) });
}


function speak(i){
	speechSynthesis.cancel();
	let text = document.getElementsByClassName('english_word')[i].textContent;
	let uttr = new SpeechSynthesisUtterance();
	uttr.text = text;
	uttr.lang = 'en-US';
	let voice = speechSynthesis.getVoices().find(function(voice){
		return voice.name === 'Google US English';
	});
	if(voice){
		uttr.voice = voice;
	}
	speechSynthesis.speak(uttr);
}


const quizButton = document.getElementsByClassName("quiz_button");
for(let i = 0; i < quizButton.length; i++){
        quizButton[i].addEventListener('click', speakQuiz, false);
}

function speakQuiz(e){
	speechSynthesis.cancel();
	let text = e.target.textContent;
	let uttr = new SpeechSynthesisUtterance();
	uttr.text = text;
	uttr.lang = 'en-US';
	let voice = speechSynthesis.getVoices().find(function(voice){
		return voice.name === 'Google US English';
	});
	if(voice){
		uttr.voice = voice;
	} else {
		voice = speechSynthesis.getVoices().find(function(voice){
			return voice.name === 'Alex';
		});
		uttr.voice = voice;
	}
	speechSynthesis.speak(uttr);
}



speechSynthesis.getVoices();