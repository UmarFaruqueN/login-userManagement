const async = require('hbs/lib/async');
var db = require('../config/connections')
var objectId= require('mongodb').ObjectId

module.exports={
    doLogin:(userData)=>{
        console.log(userData);
        return new Promise (async (resolve,reject)=>{
            let loginStatus = false
            let response = {}
            let user = await db.get().collection('admins').findOne({user_email:userData.user_email})
            console.log(user);
            if (user){
                if(userData.user_password===user.user_password){
                    console.log("login sucesss");
                    response.user=user;
                    response.status=true;
                    resolve(response)
                }else{
                   
                    console.log("login failed 1");
                    resolve({status:false})
                }
                
            }else{
                console.log("login failed");
                resolve({status:false}
                )
            }
        })
    },
deleteUser:(userId)=>{
    return new Promise( (resolve , reject)=>{
        db.get().collection('users').deleteOne({_id:objectId(userId)}).then((response)=>{
            resolve(response)
            console.log('deleted');
        })
    })
},
getUserDetail:(userId)=>{
    return new Promise((resolve,reject)=>{
        db.get().collection('users').findOne({_id:objectId(userId)}).then((userDat)=>{
            resolve(userDat)
            console.log('finded');
        })
    })
    },
    
    updateUserDetail:(userId,userData)=>{
    return new Promise((resolve,reject)=>{
        db.get().collection('users').updateOne({_id:objectId(userId)},{
            $set:{ user_name:userData.user_name,
                user_number:userData.user_number,
                user_email:userData.user_email,
                user_password:userData.user_password,

            }
        }).then((response)=>{
            resolve()
        })
    })
},
    
}