// Step 1: Check balance
function checkBalance() {
  return new Promise((resolve, reject) => {
    const balance = 500;  // example balance
    const amountToTransfer = 300;

    if (balance >= amountToTransfer) {
      resolve("Balance OK");
    } else {
      reject("Insufficient funds");
    }
  });
}

// Step 2: Deduct amount
function deductAmount() {
  return new Promise((resolve, reject) => {
    const success = true; // try making this false to test failure

    success ? resolve("Amount deducted") : reject("Deduction failed");
  });
}

// Step 3: Confirm transaction
function confirmTransaction() {
  return new Promise((resolve, reject) => {
    const confirmed = true; // try false to test failure

    confirmed ? resolve("Transaction confirmed") : reject("Confirmation failed");
  });
}

// Main function
async function transferMoney() {
  try {
    await checkBalance();
    await deductAmount();
    await confirmTransaction();
    return "Transaction complete";
  } catch (error) {
    throw error; // rethrow so .catch will handle it
  }
}

// Run
transferMoney()
  .then(result => console.log(result))
  .catch(error => console.error("Error:", error));
