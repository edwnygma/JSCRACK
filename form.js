function fillForm() {
    $('input[name=GIVEN_NAME]').val('Robert');
    $('input[name=SURNAME]').val('Gravelle');
    $('input[name=EMAIL]').val('rgconsulting@robgravelle.com');
    $('input[type=radio][name=REF][value=Y]').attr('checked', 'checked')
    $('input[name=REF_NAME]').val('John Bush');
}
