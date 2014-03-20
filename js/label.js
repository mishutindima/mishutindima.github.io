    // Функция для отображения лейбла
    function ShowLabel ( label, input ) {
    if ( document.getElementById( input ).value == '' )
    document.getElementById( label ).style.display = '';
    }
    // Функция для скрытия лейбла
    function HideLabel ( label, input ) {
    document.getElementById( label ).style.display = 'none';
    document.getElementById( input ).focus(); // Если кликали по лейблу, фокус на поле не перейдет. Надо поставить вручную
    }