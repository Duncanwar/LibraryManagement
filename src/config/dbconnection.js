import mysql from 'mysql'
import express from 'express'


const connection = async () =>{
try {
    await mysql.createConnection({
        host: process.env.host,
        user: process.env.user,
        password: process.env.password,
        database: process.env.Db_Name
    });
} catch(error){
    console.log(error.message);
}
};

export default connection ;