var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Guests = require('../model/guests.js');

/* GET /Guests listing. */
router.get('/', function(req, res, next) {
    Guests.find(function (err, guests) {
        if (err) return next(err);
        res.json(guests);
    });
});

/* POST /guests */
router.post('/', function(req, res, next) {
    Guests.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* GET /guests/id */
router.get('/:id', function(req, res, next) {
    Guests.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* PUT /guests/:id */
router.put('/:id', function(req, res, next) {
    Guests.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* DELETE /guests/:id */
router.delete('/:id', function(req, res, next) {
    Guest.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;