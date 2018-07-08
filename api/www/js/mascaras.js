$('.formatted-number').mask('000,000,000', {reverse: true});
$('.time').mask('00:00', {placeholder: "__ : __"});
$('.date_time').mask('00/00/0000 00:00', {placeholder: "__ / __ / ____  __ : __"});
$('.cep').mask('00000-000', {placeholder: "_____ - ___"});
$('.phone').mask('000-0000', {placeholder: "___ - ____"});
$('.phone_with_ddd').mask('(00) 0000-0000', {placeholder: "( __ ) ____ - ____"});
$('.phone_us').mask('(000) 000-0000', {placeholder: "( ___ ) ___ - ____"});
$('.mixed').mask('AAA 000-S0S');
$('.ip_address').mask('099.099.099.099');
$('.percent').mask('##0,00%', {reverse: true});
$('.clear-if-not-match').mask("00/00/0000", {clearIfNotMatch: true});
$('.placeholder').mask("00/00/0000", {placeholder: "__/__/____"});

$('.crazy_cep').mask('00000-000', { onKeyPress: function (cep) {
  var masks = ['00000-000', '0-00-00-00'];
  mask = (cep.length>7) ? masks[1] : masks[0];
  $('.crazy_cep').mask(mask, this);
}});

$('.cpf').mask('000.000.000-00', {reverse: true});

var SaoPauloCelphoneMask = function(phone, e, currentField, options){
  return phone.match(/^(\(?11\)? ?9(5[0-9]|6[0-9]|7[01234569]|8[0-9]|9[0-9])[0-9]{1})/g) ?
    '(00) 00000-0000' : '(00) 0000-0000';
};

$(".sp_celphones").mask('(00) 00009-0000', {placeholder: "( __ ) _____ - ____"});

$(".bt-mask-it").click(function(){
  $(".mask-on-div").mask("000.000.000-00");
  $(".mask-on-div").fadeOut(500).fadeIn(500)
});

$('.money').maskMoney("$0.00");
