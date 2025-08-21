import jwt from "jsonwebtoken";

const secretKey = "12345"; // ⚠ In production, store in .env

// Function to encrypt data into JWT
function encryptData() {

  const data = { name: "bhagyasree",  age: 22 };

  const token = jwt.sign(data, secretKey, { expiresIn: "10m" });

  console.log("Encrypted Token:", token);

}

encryptData()

function decryptData()
{
let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYmhhZ3lhc3JlZSIsImFnZSI6MjIsImlhdCI6MTc1NTc1Mjg5MiwiZXhwIjoxNzU1NzUzNDkyfQ.7hgg7Qi-hGGOKVgbPWIMg_RfLMBABP_eIZTTOdVrqxw"
const decoded = jwt.verify(token, secretKey);
  console.log("Decrypted Data:", decoded);

}

decryptData();