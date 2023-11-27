
    const colors = $('#colors').find('span')
    
    colors.css('display', 'none')
    
    for (let i = 0; i < colors.length; i++) {
      const currentColor = $(colors[i]).attr('data-color')
      const colorText = $(colors[i]).text()
      const newPicker = $('<div>').addClass('picker').css('background-color', currentColor).text(colorText)
      
      newPicker.click(function() {
        const clickedColor = $(this).css('background-color')
        $('.box').css('background-color', clickedColor)
      })
      
      $('#colors').append(newPicker)
    }

  