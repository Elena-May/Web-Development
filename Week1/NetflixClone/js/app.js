$(function() {
    var tabs = $('#features > nav a');
    var tabsContent = $('#features > article > section');

    tabs.click(function(e) {
      e.preventDefault();

      var that = $(this);

      tabs.removeClass('is-selected');
      that.addClass('is-selected');
      tabsContent.removeClass('is-selected');

      tabsContent
        .filter((i, tab) => $(tab).data('id') === that.data('id'))
        .addClass('is-selected');
    });
  });

  // Compare the IDs of feature navigation elements and the ocntent, if they match,
  // add the is-slected class while also removing it from other elements

  