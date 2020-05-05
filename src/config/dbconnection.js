import mysql from 'mysql'
import dotenv from 'dotenv'

dotenv.config()
const connection = 
 mysql.createConnection({
        host: process.env.host,
        user: process.env.user,
        password: process.env.password,
        database: process.env.Db_Name,
    
} );

connection.connect(error =>{
if(error)
console.log(error)
else
console.log('Connected successfully');
}
)

export default connection ;