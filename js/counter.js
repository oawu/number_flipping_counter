/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2016 OA Wu Design
 */

$(function () {

  function setCounter (count) {
    var $digital = $('.counter span');

    for (var i = $digital.length - 1; i >= 0; i--) {
      var val = parseInt (count / Math.pow (10, i), 10);
      count = count % Math.pow (10, i);
      $digital.eq ($digital.length - 1 - i).attr ('class', 'n' + (val % 10));
    }
  }
  
  $('#num').keyup (function () {
    setCounter ($(this).val ());
  });

});