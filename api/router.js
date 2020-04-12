const express = require('express');
const db = require('../data/dbConfig.js');
const router = express.Router();

router.get('/', (req, res) => {
    db.select()
        .from('accounts')
        .then((accounts) => {
            res.status(200).json(accounts);
        })
        .catch((err) => {
            res.status(500).json({ errorMessage: "There was an error retrieving the accounts." });
        });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;

    db.select()
        .from('accounts')
        .where({ id })
        .first()
        .then((account) => {
            if (account) {
                res.status(200).json(account);
            } else {
                res.status(404).json({ errorMessage: "That account doesn't exist." });
            }
        })
        .catch((err) => {
            res.status(500).json({ errorMessage: "There was an error retrieving the account." });
        });
});

router.post('/', (req, res) => {
    const accountData = req.body;

    db('accounts')
        .insert(accountData)
        .then((account) => {
            res.status(201).json(accountData);
        })
        .catch((err) => {
            res.status(500).json({ errorMessage: "There was an error adding the account." });
        });
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;

    db('accounts')
        .where({ id })
        .update(changes)
        .then((count) => {
            if (count > 0) {
                res.json({ count });
            } else {
                res.status(404).json({ errorMessage: "That account doesn't exist." });
            }
        })
        .catch((err) => {
            res.status(500).json({ errorMessage: "There was an error updating the account." });
        });
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    db('accounts')
        .where({ id })
        .del()
        .then((count) => {
            if (count > 0) {
                res.status(200).json({ success: true });
            } else {
                res.status(404).json({ errorMessage: "That account doesn't exist." });
            }
        })
        .catch((err) => {
            res.status(500).json({ errorMessage: "There was an error deleting the account." });
        });
});

module.exports = router;