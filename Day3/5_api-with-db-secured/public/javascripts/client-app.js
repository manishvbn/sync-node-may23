$(document).ready(function () {
    $.post('/account/getToken', { username: 'manishs', password: 'manishs' }, function (data, status) {
        if (data.success) {
            window.sessionStorage.setItem('tk', data.token);
        } else {
            console.error(data.message);
        }
    });

    $('#btnLoad').click(function () {
        // alert("Button was clicked...");

        $('#tBody').empty();

        $.ajax({
            url: 'http://localhost:3000/api/employees',
            type: 'GET',
            dataType: 'json',
            success: function (resData) {
                if (resData.data.length > 0) {
                    var tmpl = $.templates('#employeeRowTemplate');
                    var html = tmpl.render(resData.data);
                    $('#tBody').append(html);
                }
            }, error: function (err) {
                console.error(err);
            }, beforeSend: function (xhr) {
                xhr.setRequestHeader('x-access-token', window.sessionStorage.getItem('tk'));
            }
        });
    });
});