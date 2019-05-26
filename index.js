const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

// let totalBatteries = batteryBatches.reduce(batteryCounter, 0)

let totalBatteries = batteryBatches.reduce( (total, element) => total + element)

let doubledAndSummed = [1, 2, 3].reduce( (total, element) => element * 2 + total)
