function getAjax(url) {
    return fetch(url, {
        method: 'GET',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

function postAjax(url, data) {
    return fetch(url, {
        method: 'POST',        
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
    });
}

function alertShow(type, caption, message) {    
    let uiAlert = `<div class="row-fluid">
        <div class="alert alert-${type} alert-dismissible" role="alert" id="ui-alert-custom">
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">×</span>
            </button>
            <div class="alert-icon">
                <i class="far fa-fw fa-bell"></i>
            </div>
            <div class="alert-message">
                <strong>${caption}</strong> ${message ? message : ""}
            </div>
        </div>
    </div>`

    $('#root').prepend(uiAlert);  
} 

function signOut() {
    let date = new Date();
    let cookie =  
        `authToken=;` +
        ` expires=${date.toUTCString()};` +
        ` path=/;`;        
    document.cookie = cookie; 
}