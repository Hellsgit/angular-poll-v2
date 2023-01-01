import {
  getData,
  setOid,
  saveData,
  totalVotes,
} from "../utils/helper-utils.js";

export const addOption = (req, res) => {
  const option = {};
  const data = getData();

  if (data.totalOptions === 10) {
    return res
      .status(409)
      .send({ error: true, msg: "Reached max amount of options" });
  }

  option.id = setOid(data);
  option.option = req.body.option;
  option.votes = 0;

  if (option.id == null || option.option == null) {
    return res.status(401).send({ error: true, msg: "Option data missing" });
  }

  if (data.options.find((opt) => opt.id === option.id)) {
    return res.status(409).send({ error: true, msg: "Option already exist" });
  }

  data.options.push(option);

  data.totalOptions = data.options.length;

  saveData(data);
  res.send(data);
};

export const deleteOption = (req, res) => {
  const data = getData();

  const options = data.options.filter(
    (opt) => opt.id !== Number(req.params.id)
  );

  if (data.options.length === options.length) {
    return res.status(409).send({ error: true, msg: "Option does not exist" });
  }

  data.options = options;

  data.totalVotes = totalVotes(data);
  data.totalOptions = data.options.length;

  saveData(data);
  res.send(data);
};

export const patchOption = (req, res) => {
  const data = getData();

  const option = data.options.find((opt) => opt.id === Number(req.params.id));

  if (option) {
    Object.assign(option, req.body);

    data.totalVotes = totalVotes(data);

    saveData(data);
    res.status(200).send(data);
  } else {
    return res.status(409).send({ error: true, msg: "Option does not exist" });
  }
};
