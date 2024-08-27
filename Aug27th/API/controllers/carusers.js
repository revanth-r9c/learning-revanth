const hashPassword = async (password) => {
    return await bcrypt.hash(password, 10);
};
const CarUser = require('../models/carusers');
const bcrypt = require('bcrypt');

exports.PostCarUsers = async (req, res) => {
    try {
        const { username, email, age, gender, dob, city, profession, password } = req.body;

        if (!username || !email || !age || !gender || !dob || !city || !profession || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const hashedPassword = await hashPassword(password);
        const carUser = new CarUser({
            username,
            email,
            age,
            gender,
            dob,
            city,
            profession,
            password: hashedPassword
        });

        await carUser.save();
        res.status(201).json(carUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.GetCarUsers = async (req, res) => {
    try {
        const carUsers = await CarUser.find();
        res.json(carUsers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.GetCarUsersById = async (req, res) => {
    try {
        const carUser = await CarUser.findById(req.params.id);
        if (!carUser) return res.status(404).json({ message: 'User not found' });
        res.json(carUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.EditCarUsers = async (req, res) => {
    try {
        const { username, email, age, gender, dob, city, profession, password } = req.body;
        const updateFields = { username, email, age, gender, dob, city, profession };

        if (password) {
            updateFields.password = await hashPassword(password);
        }

        const carUser = await CarUser.findByIdAndUpdate(req.params.id, updateFields, { new: true, runValidators: true });
        if (!carUser) return res.status(404).json({ message: 'User not found' });
        res.json(carUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.PatchCarUsers = async (req, res) => {
    try {
        const updates = req.body;

        if (updates.password) {
            updates.password = await hashPassword(updates.password);
        }

        const carUser = await CarUser.findByIdAndUpdate(req.params.id, updates, { new: true, runValidators: true });
        if (!carUser) return res.status(404).json({ message: 'User not found' });
        res.json(carUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.DeleteCarUsers = async (req, res) => {
    try {
        const carUser = await CarUser.findByIdAndDelete(req.params.id);
        if (!carUser) return res.status(404).json({ message: 'User not found' });
        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
