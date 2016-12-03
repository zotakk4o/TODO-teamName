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
function loginUser(username,password){
    let userData = {
        username,
        password
    };
    return $.ajax({
        method:"POST",
        url:baseUrl+'user/'+appKey+'/login',
        headers:{
            Authorization:'Basic '+btoa(appKey+':'+appSecret)
        },
        data:userData
    })
}
function logoutUser(){
    return $.ajax({
        method:"POST",
        url:baseUrl+'user/'+appKey+'/_logout',
        headers:{
            Authorization:'Kinvey ' + sessionStorage.getItem('authToken')
        }
    })
}
export{registerUser,loginUser,logoutUser}