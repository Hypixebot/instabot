import * as fs from "fs";

interface SaveDataProps {
  messages: any[]; // Replace with the appropriate type for messages
  lastTimestamp: number;
}

const saveData = ({ messages, lastTimestamp }: SaveDataProps) => {
  // Implement the logic to save messages and timestamps in the desired format
  // Example: Save messages and timestamps to a custom data file
  fs.writeFileSync(
    "./customData.json",
    JSON.stringify({
      messages: messages,
      lastTimestamp: lastTimestamp,
    })
  );
};

export default saveData;
