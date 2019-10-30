/* Add your script here */
$('#list-btn').click(function(){
    $.ajax({
        method: 'GET',
        url: 'http://skeleton.mernbook.com/api/users'
    }).done(function(response){
        console.log(response)
        response.forEach(element => {
            let user = $('<p></p>').text(element.name)
            $('#users').append(user)
        });
    }).fail(function(response){
        console.log(response)
    })
})