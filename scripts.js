document.addEventListener('DOMContentLoaded', function() {
    let balance = 2000;

    const homeSection = document.getElementById('home');
    const gamesSection = document.getElementById('games');
    const accountSection = document.getElementById('account');

    const homeLink = document.getElementById('home-link');
    const gamesLink = document.getElementById('games-link');
    const accountLink = document.getElementById('account-link');

    const playButton = document.getElementById('play-button');
    const resultDiv = document.getElementById('result');
    const balanceDiv = document.getElementById('balance');
    const accountBalanceSpan = document.getElementById('account-balance');

    homeLink.addEventListener('click', function() {
        homeSection.style.display = 'block';
        gamesSection.style.display = 'none';
        accountSection.style.display = 'none';
    });

    gamesLink.addEventListener('click', function() {
        homeSection.style.display = 'none';
        gamesSection.style.display = 'block';
        accountSection.style.display = 'none';
        updateBalance();
    });

    accountLink.addEventListener('click', function() {
        homeSection.style.display = 'none';
        gamesSection.style.display = 'none';
        accountSection.style.display = 'block';
        accountBalanceSpan.textContent = balance;
    });

    playButton.addEventListener('click', function() {
        if (balance <= 0) {
            resultDiv.textContent = 'У вас больше нет денег для игры.';
            return;
        }

        const bet = 100; // Стоимость одной игры
        const win = Math.random() > 0.5;

        balance += win ? bet : -bet;
        resultDiv.textContent = win ? 'Вы выиграли!' : 'Вы проиграли!';
        updateBalance();
    });

    function updateBalance() {
        balanceDiv.textContent = `Баланс: ${balance} RUB`;
        accountBalanceSpan.textContent = balance;
    }

    updateBalance();
});
