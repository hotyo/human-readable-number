module.exports = function toReadable(number) {
    const makeReadableBelow10 = number => {
        switch (number) {
            case 1:
                return `one`;
            case 2:
                return `two`;
            case 3:
                return `three`;
            case 4:
                return `four`;
            case 5:
                return `five`;
            case 6:
                return `six`;
            case 7:
                return `seven`;
            case 8:
                return `eight`;
            case 9:
                return `nine`;
        }
    };

    const makeReadableBelow100 = number => {
        const firstNumber = Math.floor(number / 10);
        switch (firstNumber) {
            case 1:
                switch (number) {
                    case 10:
                        return `ten`;
                    case 11:
                        return `eleven`;
                    case 12:
                        return `twelve`;
                    case 13:
                        return `thirteen`;
                    case 15:
                        return `fifteen`;
                    case 18:
                        return `${makeReadableBelow10(number % 10)}een`;
                    case 14:
                    case 16:
                    case 17:
                    case 19:
                        return `${makeReadableBelow10(number % 10)}teen`;
                };
                break;
            case 2:
                return !(number % 10) ? `twenty` : `twenty ${makeReadableBelow10(number % 10)}`;
            case 3:
                return !(number % 10) ? `thirty` : `thirty ${makeReadableBelow10(number % 10)}`;
            case 4:
                return !(number % 10) ? `forty` : `forty ${makeReadableBelow10(number % 10)}`;
            case 5:
                return !(number % 10) ? `fifty` : `fifty ${makeReadableBelow10(number % 10)}`;
            case 8:
                return !(number % 10) ? `${makeReadableBelow10(firstNumber)}y` : `${makeReadableBelow10(firstNumber)}y ${makeReadableBelow10(number % 10)}`;
            case 6:
            case 7:
            case 9:
                return !(number % 10) ? `${makeReadableBelow10(firstNumber)}ty` : `${makeReadableBelow10(firstNumber)}ty ${makeReadableBelow10(number % 10)}`
        }
    };

    const makeReadableBelow1000 = number => {
        if (number % 100 === 0)
            return `${makeReadableBelow10(Math.floor(number / 100))} hundred`;
        return number % 100 >= 10 ?
            `${makeReadableBelow10(Math.floor(number / 100))} hundred ${makeReadableBelow100(number % 100)}` :
            `${makeReadableBelow10(Math.floor(number / 100))} hundred ${makeReadableBelow10(number % 100)}`;
    }

    const numbers = String(number).split('');
    if (number === 0)
        return 'zero';
    switch (numbers.length) {
        case 1:
            return makeReadableBelow10(number);
        case 2:
            return makeReadableBelow100(number);
        case 3:
            return makeReadableBelow1000(number);
    };
}
