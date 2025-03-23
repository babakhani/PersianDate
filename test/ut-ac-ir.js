// https://calendar.ut.ac.ir/documents/2139738/7092644/Kabise+Shamsi+1206-1498.pdf/fbc45bf4-df46-c298-381c-2bff2c57f0e0?t=1719740029743

let PersianDate = require('../dist/persian-date.js');
// Import the persian-date library (for Node.js)

// Function to find leap years in the Persian calendar
function findPersianLeapYears(startYear, endYear) {
    const leapYears = [];
    for (let year = startYear; year <= endYear; year++) {
        const isLeap = new PersianDate([year, 1, 1]).isLeapYear();
        if (isLeap) {
            leapYears.push(year);
        }
    }
    return leapYears;
}

// Define the range of years
const startYear = 1206;
const endYear = 1498;

// Get the list of leap years
const leapYears = findPersianLeapYears(startYear, endYear);

// Provided leap years from the data (extracted from the text)
const providedLeapYears = [
    1210, 1214, 1218, 1222, 1226, 1230, 1234, 1238, 1243, 1247, 1251, 1255, 1259, 1263, 1267, 1271, 1276, 1280, 1284, 1288, 1292, 1296, 1300, 1304, 1309, 1313, 1317, 1321, 1325, 1329, 1333, 1337, 1342, 1346, 1350, 1354, 1358, 1362, 1366, 1370, 1375, 1379, 1383, 1387, 1391, 1395, 1399, 1403, 1408, 1412, 1416, 1420, 1424, 1428, 1432, 1436, 1441, 1445, 1449, 1453, 1457, 1461, 1465, 1469, 1474, 1478, 1482, 1486, 1490, 1494, 1498
];

// Function to find differences between two arrays
function findDifferences(array1, array2) {
    const diff1 = array1.filter(year => !array2.includes(year)); // In array1 but not in array2
    const diff2 = array2.filter(year => !array1.includes(year)); // In array2 but not in array1
    return { diff1, diff2 };
}

// Find differences
const { diff1, diff2 } = findDifferences(leapYears, providedLeapYears);

// Output the results
console.log("Leap years calculated by persian-date:", leapYears);
console.log("Provided leap years:", providedLeapYears);

if (diff1.length === 0 && diff2.length === 0) {
    console.log("The lists match perfectly.");
} else {
    console.log("Discrepancies found:");
    if (diff1.length > 0) {
        console.log("Years in calculated list but not in provided list:", diff1);
    }
    if (diff2.length > 0) {
        console.log("Years in provided list but not in calculated list:", diff2);
    }
}
