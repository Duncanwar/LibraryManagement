import sql from '../config/dbconnection'

//constructor

const Client = function(client){
    this.regNo = client.regNo;
    this.firstName = client.firstName;
    this.lastName = client.lastName;
    this.phoneNumber = client.phoneNumber;
    this.emailAddress = client.emailAddress;
    this.clientCategory = client.clientCategory;
    this.photo = client.photo; 
};

Client.getAll= result =>{
    sql.query("select * from Client", (err,res)=>{
        if(err){
            console.log("error:",err);
            result(null, err);
            return
        }
        console.log("customers :",res);
        result(null, res);
    });
};

Client.create = (newClient, result) => {
    sql.query("insert into Client set ?", newClient, (err,res)=>{
        if(err){
            result(null, err);
            return;
        }
        console.log("created customer: ", { id: res.insertId, ...newClient })
        result(null, { id: res.regNo, ...newClient });
    });
}

export default Client;