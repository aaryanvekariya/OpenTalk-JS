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


// import ollama from "ollama";
// import fs from "fs";

// async function askQuestion() {
//   try {
//     // Read the question from the file
//     let q = await fs.promises.readFile("./A.txt", "utf8");
//     console.log(q);

//     const response = await ollama.chat({
//       model: "llama3.2:latest",
//       messages: [{ role: "user", content: q }]
//     });
//     const a = response.message.content;

//     await fs.promises.writeFile("./A.txt", a);
//     console.log("Response written to a.txt");
//   } catch (error) {
//     console.error("Error occurred:", error.message);
//   }
// }

// askQuestion();


// import ollama from "ollama";
// import fs from "fs/promises";
// import path from "path";

// async function readQuestionsAndAnswer() {
//   const questionsFolder = "./Questions";
//   const answersFolder = "./Answers";

//   try {
//     // Ensure the Answers folder exists
//     await fs.mkdir(answersFolder, { recursive: true });

//     // Read all files in the Questions folder
//     const questionFiles = await fs.readdir(questionsFolder);

//     // Process each question file
//     await Promise.all(
//       questionFiles.map(async (file) => {
//         const questionPath = path.join(questionsFolder, file);
//         const answerPath = path.join(answersFolder, file);

//         try {
//           const questionContent = await fs.readFile(questionPath, "utf-8");
//           const answerContent = await askQuestion(questionContent);
//           await fs.writeFile(answerPath, answerContent);
//           console.log(`Processed: ${file}`);
//         } catch (error) {
//           console.error(`Error processing ${file}:, error.message`);
//         }
//       })
//     );

//     console.log("All questions processed.");
//   } catch (error) {
//     console.error("Error reading questions:", error.message);
//   }
// }

// async function askQuestion(question) {
//   try {
//     const response = await ollama.chat({
//       model: "llama3.2:latest",
//       messages: [{ role: "user", content: question }],
//     });
//     return response.message.content;
//   } catch (error) {
//     console.error("Error occurred while asking question:", error.message);
//     throw error;
//   }
// }

// // Call the main function
// readQuestionsAndAnswer();



//---------------------Assignment 16------------//



import ollama from "ollama";
import fs from "fs";
let subDir = process.argv;
getQuestion(subDir)


async function getQuestion(subDir) {
  try{
      let q=Math.floor(Math.random() * 3) + 1
      let p=`./inputfor16/${subDir[2]}/q${q}.txt`
      let out=`./Outputfor16/${subDir[2]}/q${q}.txt`
      try{
        let question=fs.readFileSync(p, "utf-8");
        console.log(question)

        try {
          const response = await ollama.chat({
            model: "llama3.2:latest",
            messages: [{ role: "user", content: question }]
          });
          const a=response.message.content;
      
          await fs.writeFileSync(out, a);
          console.log(`Response written to: ${out}.txt `);
        } catch (error) {
          console.error("Error :", error.message);
        }
      }
      catch (error) {
            console.error("Error occurred:", error.message);
      }
  }
  catch (error) {
        console.error("Error occurred at:", error.message);
  }
}
