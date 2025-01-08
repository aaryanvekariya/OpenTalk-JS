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

async function askQuestion() {
  try {
    // Read the question from the file
    let q = await fs.promises.readFile("./A.txt", "utf8");
    console.log(q);

    const response = await ollama.chat({
      model: "llama3.2:latest",
      messages: [{ role: "user", content: q }]
    });
    const a = response.message.content;

    await fs.promises.writeFile("./A.txt", a);
    console.log("Response written to a.txt");
  } catch (error) {
    console.error("Error occurred:", error.message);
  }
}

askQuestion();



