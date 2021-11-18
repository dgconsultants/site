$(function () {

    // init the validator
    // validator files are included in the download package
    // otherwise download from http://1000hz.github.io/bootstrap-validator

    $('#keytore-form').validator();


    // when the form is submitted
    $('#keytore-form').on('submit', function (e) {
        e.preventDefault()
        console.log(
            $(this).serialize()
        )
    })
});