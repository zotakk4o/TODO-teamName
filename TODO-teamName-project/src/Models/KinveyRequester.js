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
function createAd(title,description){
    let data = {
        date:Date.now(),
        title,
        description,
        author:sessionStorage.getItem('username')
    };
    return $.ajax({
        method:"POST",
        url:baseUrl+'appdata/'+appKey+'/adverts',
        headers:{
            Authorization:'Kinvey ' + sessionStorage.getItem('authToken')
        },
        data:data
    })
}
function listAds(){
    return $.ajax({
        method:"GET",
        url:baseUrl+'appdata/'+appKey+'/adverts',
        headers:{
            Authorization:'Kinvey ' + sessionStorage.getItem('authToken')
        },
    })
}
function readAd(adId){
    return $.ajax({
        method:"GET",
        url:baseUrl+'appdata/'+appKey+'/adverts/'+ adId,
        headers:{
            Authorization:'Kinvey ' + sessionStorage.getItem('authToken')
        },
    })
}
function deleteAd(adId){
    return $.ajax({
        method:"DELETE",
        url:baseUrl+'appdata/'+appKey+'/adverts/'+ adId,
        headers:{
            Authorization:'Kinvey ' + sessionStorage.getItem('authToken')
        },
    })
}
export{registerUser,loginUser,logoutUser,createAd,listAds,readAd}