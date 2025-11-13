import fs from "fs";
import path from "path";

const folder = "./src/assets";

fs.readdirSync(folder).forEach((file) => {
  const oldPath = path.join(folder, file);
  if (fs.lstatSync(oldPath).isFile()) {
    // make lowercase, replace spaces with _, remove parentheses
    const newName = file
      .toLowerCase()
      .replace(/\s+/g, "_")
      .replace(/[()]/g, "");
    const newPath = path.join(folder, newName);

    if (oldPath !== newPath) {
      fs.renameSync(oldPath, newPath);
      console.log(`Renamed: ${file} → ${newName}`);
    }
  }
});

console.log("✅ All asset filenames normalized.");
