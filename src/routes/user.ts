import express from "express";
const path = require('path');


const users = async (req: express.Request, res: express.Response): Promise<void> => {
    res.sendFile(path.join(__dirname, '../template/users.htm'));
};

export default users;