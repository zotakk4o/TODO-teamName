import $ from 'jquery';
const appKey = 'kid_SJLXPUy7l';
const appSecret = 'd6cf224f5c104654adee90f5ca078729';
const baseUrl = 'https://baas.kinvey.com/';
function registerUser(username,password){
    let userData = {
        username,
        password
    };
    return $.ajax({
        method:"POST",
        url:baseUrl+'user/'+appKey,
        headers:{
            Authorization:'Basic '+btoa(appKey+':'+appSecret)
        },
        data:userData
    })
}
export{registerUser}