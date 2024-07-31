import * as fs from "fs";
import saveData from "./saveData";
import config from "./config.json";

const loadData = (): {
  messages: any[]; // Replace with the appropriate type for messages
  lastTimestamp: number | null; // Adjust the type to allow for null value
} => {
  const data = fs.readFileSync("./customData.json", "utf-8"); // Update the file path as needed
  const parsedData = JSON.parse(data);

  if (!parsedData.messages[0]) {
    saveData({
      messages: [{ role: "system", content: config.prompt }],
      lastTimestamp: null,
    });

    return {
      messages: [{ role: "system", content: config.prompt }],
      lastTimestamp: null,
    };
  }

  return parsedData;
};

export default loadData;
