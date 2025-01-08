// import ollama from "ollama";

// async function runChat() {
//   try {
//     const response = await ollama.chat({
//       model: "llama3.2:latest",
//       messages: [{ role: 'user', content: "Generate a research abstract" }]
//     });

//     console.log("Chatbot Response:", response.message.content);
//   } catch (error) {
//     console.error("Error occurred:", error.message);
//   }
// }

// runChat();


// 2ND STAGE


import ollama from "ollama";
import fs from "fs";

let q= fs.readFileSync("./A.txt", "utf-8");
console.log(q)

askQuestion()
async function askQuestion() {
  try {
    const response = await ollama.chat({
      model: "llama3.2:latest",
      messages: [{ role: 'user', content: q }]
    });

    console.log(response.message.content);

  } catch (error) {
    console.error("Error occurred:", error.message);
  }
}