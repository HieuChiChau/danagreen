const parseDecodedData = (data) => {
    const result = {
        paper: 0,
        metal: 0,
        plastic: 0,
        randomNumber: 0,
    };

    // Regex để tách phần số ngẫu nhiên ra khỏi chuỗi
    const randomNumberMatch = /ra(\d+)$/;
    const randomNumberResult = randomNumberMatch.exec(data);

    if (randomNumberResult) {
        result.randomNumber = parseInt(randomNumberResult[1], 10);
        // Loại bỏ phần số ngẫu nhiên khỏi chuỗi
        data = data.replace(randomNumberMatch[0], '');
    }

    // Regex để tách các phần còn lại và lấy số lượng
    const itemRegex = /(pa\d+)|(pl\d+)|(me\d+)/g;
    let itemMatch;

    while ((itemMatch = itemRegex.exec(data)) !== null) {
        const [fullMatch] = itemMatch;
        const type = fullMatch.substring(0, 2);
        const quantity = parseInt(fullMatch.substring(2), 10);

        switch (type) {
            case 'pa': // "paper"
                result.paper = quantity;
                break;
            case 'pl': // "plastic"
                result.plastic = quantity;
                break;
            case 'me': // "metal"
                result.metal = quantity;
                break;
            default:
                console.warn(`Unknown type: ${type}`);
                break;
        }
    }

    return result;
};

// Test cases
// Ví dụ mở rộng
const extendedTestCases = [
    'pa5pl3me2ra10001',   // Expected: { paper: 5, metal: 2, plastic: 3, randomNumber: 10001 }
    'pl4me7pa9ra5678',    // Expected: { paper: 9, metal: 7, plastic: 4, randomNumber: 5678 }
    'me10pl20pa30ra9999', // Expected: { paper: 30, metal: 10, plastic: 20, randomNumber: 9999 }
    'ra00001',            // Expected: { paper: 0, metal: 0, plastic: 0, randomNumber: 1 }
    'pa1ra123456',        // Expected: { paper: 1, metal: 0, plastic: 0, randomNumber: 123456 }
    'me5ra123',           // Expected: { paper: 0, metal: 5, plastic: 0, randomNumber: 123 }
    'pl8pa4ra0001',       // Expected: { paper: 4, metal: 0, plastic: 8, randomNumber: 1 }
    'pa100ra12345',       // Expected: { paper: 100, metal: 0, plastic: 0, randomNumber: 12345 }
    'pl3pa2me1ra6789',    // Expected: { paper: 2, metal: 1, plastic: 3, randomNumber: 6789 }
    'pa4me3ra777',        // Expected: { paper: 4, metal: 3, plastic: 0, randomNumber: 777 }
    'pl6ra01234',         // Expected: { paper: 0, metal: 0, plastic: 6, randomNumber: 1234 }
    'pa9me6pl7ra321'      // Expected: { paper: 9, metal: 6, plastic: 7, randomNumber: 321 }
];

extendedTestCases.forEach(testCase => {
    const result = parseDecodedData(testCase);
    console.log(`Result: ${JSON.stringify(result)}`);
});

