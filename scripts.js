document.addEventListener('DOMContentLoaded', function() {
    let balance = 2000;

    const homeSection = document.getElementById('home');
    const slotsSection = document.getElementById('slots');
    const rouletteSection = document.getElementById('roulette');
    const minesSection = document.getElementById('mines');
    const accountSection = document.getElementById('account');

    const homeLink = document.getElementById('home-link');
    const slotsLink = document.getElementById('slots-link');
    const rouletteLink = document.getElementById('roulette-link');
    const minesLink = document.getElementById('mines-link');
    const accountLink = document.getElementById('account-link');

    const playSlotButton = document.getElementById('play-slot-button');
    const slotResultDiv = document.getElementById('slot-result');

    const playRouletteButton = document.getElementById('play-roulette-button');
    const rouletteResultDiv = document.getElementById('roulette-result');

    const playMinesButton = document.getElementById('play-mines-button');
    const minesResultDiv = document.getElementById('mines-result');

    const accountBalanceSpan = document.getElementById('account-balance');

    function showSection(section) {
        homeSection.style.display = 'none';
        slotsSection.style.display = 'none';
        rouletteSection.style.display = 'none';
        minesSection.style.display = 'none';
        accountSection.style.display = 'none';
        section.style.display = 'block';
    }

    homeLink.addEventListener('click', () => showSection(homeSection));
    slotsLink.addEventListener('click', () => showSection(slotsSection));
    rouletteLink.addEventListener('click', () => showSection(rouletteSection));
    minesLink.addEventListener('click', () => showSection(minesSection));
    accountLink.addEventListener('click', () => {
        accountBalanceSpan.textContent = balance;
        showSection(accountSection);
    });

    playSlotButton.addEventListener('click', function() {
        if (balance < 100) {
            slotResultDiv.textContent = 'Недостаточно средств для игры.';
            return;
        }
        balance -= 100;
        const win = Math.random() > 0.5;
        balance += win ? 200 : 0;
        slotResultDiv.textContent = win ? 'Вы выиграли 200 RUB!' : 'Вы проиграли!';
        updateAccountBalance();
    });

    playRouletteButton.addEventListener('click', function() {
        if (balance < 100) {
            rouletteResultDiv.textContent = 'Недостаточно средств для игры.';
            return;
        }
        balance -= 100;
        const win = Math.random() > 0.5;
        balance += win ? 150 : 0;
        rouletteResultDiv.textContent = win ? 'Вы выиграли 150 RUB!' : 'Вы проиграли!';
        updateAccountBalance();
    });

    playMinesButton.addEventListener('click', function() {
        if (balance < 100) {
            minesResultDiv.textContent = 'Недостаточно средств для игры.';
            return;
        }
        balance -= 100;
        const win = Math.random() > 0.5;
        balance += win ? 250 : 0;
        minesResultDiv.textContent = win ? 'Вы выиграли 250 RUB!' : 'Вы проиграли!';
        updateAccountBalance();
    });

    function updateAccountBalance() {
        accountBalanceSpan.textContent = balance;
    }

    showSection(homeSection);
    updateAccountBalance();
});
