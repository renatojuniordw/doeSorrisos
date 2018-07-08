$('.phone_with_ddd').mask('(00) 0000-0000', {placeholder: "( __ ) ____ - ____"});
$('.phone_us').mask('(000) 000-0000', {placeholder: "( ___ ) ___ - ____"});

var SaoPauloCelphoneMask = function(phone, e, currentField, options){
  return phone.match(/^(\(?11\)? ?9(5[0-9]|6[0-9]|7[01234569]|8[0-9]|9[0-9])[0-9]{1})/g) ?
    '(00) 00000-0000' : '(00) 0000-0000';
};

$(".sp_celphones").mask('(00) 00009-0000', {placeholder: "( __ ) _____ - ____"});
