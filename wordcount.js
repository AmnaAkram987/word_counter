import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        type: "input",
        name: "sentence",
        message: "Write a paragraph.."
    }
]);
const words = answers.sentence.trim().split(" ");
console.log(words);
console.log(`Number of words  ${words.length}`);
const char = answers.sentence.trim().split("");
console.log(char);
console.log(`Number of characters including spaces  in a sentence are: ${char.length}`);
