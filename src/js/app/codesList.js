const codeForBoxes = {
    'methods-and-voids':
`
jivo_api.isCallbackEnabled(function(res){
    console.log('isCallbackEnabled', res);

    if (res.result == 'ok') {
        jivo_api.open({start: 'call'});
    }
}); 
`,
    'get-contact-info':
`
jivo_api.sendOfflineMessage(({
    "name": "John Smith",
    "email": "email@example.com",
    "phone": "+14084987855",
    "description": "Description text",
    "message": "Offline message"
});
`,
    'get-visitor-number':
`
{
    "result": "ok",
    "custom_data": [
        {
            "title": "Title",
            "content": "Content text"
        }
    ],
    "contact_info": {
        "name": "John Smith",
        "phone": "+14084987855",
        "email": "email@example.com"
    },
    "page": {
        "url": "http://example.com/",
        "title": "Page title"
    }
} 
`
}

export default codeForBoxes;