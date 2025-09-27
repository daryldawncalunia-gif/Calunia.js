
function checkBalance() {
  return new Promise((resolve, reject) => {
    const balance = 500;  
    const amountToTransfer = 300;

    if (balance >= amountToTransfer) {
      resolve("Balance OK");
    } else {
      reject("Insufficient funds");
    }
  });
}


function deductAmount() {
  return new Promise((resolve, reject) => {
    const success = true; 

    success ? resolve("Amount deducted") : reject("Deduction failed");
  });
}


function confirmTransaction() {
  return new Promise((resolve, reject) => {
    const confirmed = true;
    confirmed ? resolve("Transaction confirmed") : reject("Confirmation failed");
  });
}

async function transferMoney() {
  try {
    await checkBalance();
    await deductAmount();
    await confirmTransaction();
    return "Transaction complete";
  } catch (error) {
    throw error;
  }
}


transferMoney()
  .then(result => console.log(result))
  .catch(error => console.error("Error:", error));
