import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataFile = path.join(__dirname, "../data/data.json");

export const saveData = (data) => {
  const stringifyData = JSON.stringify(data);
  fs.writeFileSync(dataFile, stringifyData);
};

export const getData = () => {
  const jsonData = fs.readFileSync(dataFile);
  return JSON.parse(jsonData);
};

export const totalVotes = (dataObj) => {
  return dataObj.options
    .map((obj) => obj.votes)
    .reduce((acc, n) => (acc += n), 0);
};

export const setOid = (data) => {
  const idArr = [...Array(10).keys()].map((x) => ++x);
  const idExist = [];

  for (const elem of data.options) {
    idExist.push(elem.id);
  }

  const idFiltered = idArr.filter((e) => {
    return !idExist.includes(e);
  });

  let [first] = idFiltered;
  return first;
};
