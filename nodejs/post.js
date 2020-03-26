function post(varchar user_ID,varchar tile,varchar content,varchar hashtag){
    return bool, post_ID;
}

function contentChange(varchar content,varchar post_id, varchar user_id){
    return bool success;
}

function updateJoin(varchar user_ID, post_id){
     return bool success;
}  

function commentPost(string comment, varchar post_id, varchar user_id){ 
    return bool success;
}
    
function deletePost(varchar post_ID,varchar user_ID){
    return bool success;
} 
    
function searchPost(varchar post_id){
    input: post_id
    output: detailed information of the post
    return varchar detail_info;
};