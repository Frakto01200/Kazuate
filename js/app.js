document.addEventListener('DOMContentLoaded', function () {
    // ランダムな数値を生成して、変数randomNumberに代入する
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    
    // 残りの試行回数を初期化して、変数remainingAttemptsに代入する
    let remainingAttempts = 10;

    // 予想ボタンとメッセージ要素を取得して、それぞれ変数guessButtonとmessageに代入する
    const guessButton = document.getElementById('guessButton');
    const message = document.getElementById('message');

    // 予想ボタンがクリックされたときの処理を追加する
    guessButton.addEventListener('click', function () {
        // 入力された予想を取得して、変数guessに代入する
        const guessInput = document.getElementById('guessInput');
        const guess = parseInt(guessInput.value);

        // 入力が無効な場合のエラーメッセージを追加する
        if (isNaN(guess) || guess < 1 || guess > 100) {
            message.textContent = '1から100までの有効な数値を入力してください。';
            return;
        }

        // 残りの試行回数を減らす処理を追加する
        remainingAttempts--;

        // 予想が正解の場合の処理を追加する
        if (guess === randomNumber) {
            message.textContent = `おめでとうございます！正解です！${10-remainingAttempts}回の挑戦でした。`;
            guessButton.disabled = true; // 予想ボタンを無効にする
        } 
        // 残りの試行回数が0の場合、ゲームオーバーの処理を追加する
        else if (remainingAttempts === 0) {
            message.textContent = `ゲームオーバーです。正解は${randomNumber}でした。もう一度挑戦してください！`;
            guessButton.disabled = true; // 予想ボタンを無効にする
        } 
        // 不正解の場合のヒントを表示する処理を追加する
        else {
            const hint = guess > randomNumber ? 'もっと小さい数です。' : 'もっと大きい数です。';
            message.textContent = `${hint} あと${remainingAttempts}回の挑戦があります。`;
        }
        // 入力欄をクリアしてフォーカスする処理を追加する
        guessInput.value = '';
        guessInput.focus();
    });
});