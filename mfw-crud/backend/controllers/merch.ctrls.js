const db = require("../models");

const index = (req, res) => {
  db.Merch.find({}, (error, merch) => {
    if (error) return res.status(400).json({ error: error.message });

    return res.status(200).json({
      merch,
      requestedAt: new Date().toLocaleString(),
    });
  });
};

const show = (req, res) => {
  db.Merch.findById(req.params.id, (error, merch) => {
    if (error) return res.status(400).json({ error: error.message });

    return res.status(200).json({
      merch,
      requestedAt: new Date().toLocaleString(),
    });
  });
};

const create = (req, res) => {
  db.Merch.create(req.body, (err, createdMerch) => {
    if (err) return res.status(404).json({ error: err.message });
    return res.status(200).json(createdMerch);
  });
};

const destroy = (req, res) => {
  db.Merch.findByIdAndDelete(req.params.id, (error, deletedMerch) => {
    if (!deletedMerch)
      return res.status(400).json({ error: "Dashboard not found" });
    if (error) return res.status(400).json({ error: error.message });
    return res.status(200).json({
      message: `Merch ${deletedMerch.name} was successfully deleted`,
    });
  });
};

const update = (req, res) => {
  db.Merch.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    { new: true },
    (err, updatedMerch) => {
      if (err) return res.status(400).json({ error: err.message });
      return res.status(200).json(updatedMerch);
    }
  );
};

module.exports = { index, show, create, destroy, update };
