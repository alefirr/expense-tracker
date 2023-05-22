"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.post('/', addPlace);
router.put('/:id', updatePlace);
router.get('/', getAllPlaces);
router.get('/:id', getPlaceById);
router.delete('/:id', removePlace);
exports.default = router;
