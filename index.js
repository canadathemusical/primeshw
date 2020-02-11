const getNumNums = () => {
    let m = prompt("number?");
    if (!m.match(/^[0-9]+$/)) {
        alert("Use only integers. Please try again.");
    }
    return m;
}

const isPrime = (n) => {
    if (n < 2) return false;
    for (i = 2; i <= Math.sqrt(n); i = i + 1) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}

const printConstituentPrimes = (target) => {
    let m = getNumNums();
    for (n = 2; n <= m; n = n + 1) {
        if (isPrime(n)) {
            let element = document.createElement("p");
            element.textContent = `prime: ${n} `;
            document.getElementById(`${target}`).appendChild(element);
        }
    }
}