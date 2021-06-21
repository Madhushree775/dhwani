(function(){
    $('#msbo').on('click', function(){
      $('body').toggleClass('msb-x');
    });
  }());

  $(document).ready(function () {

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

});