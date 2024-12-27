jQuery.fn.forceInteger = function (allownegative) {
    return this.each(function () {
        jQuery(this).keydown(function (e) {
            var key = e.which || e.keyCode;

            if (e.ctrlKey) {
                return true;
            } else {
                if (!e.shiftKey && !e.altKey && !e.ctrlKey &&
                    // numbers   
                    key >= 48 && key <= 57 ||
                    // Numeric keypad
                    key >= 96 && key <= 105 ||
                    // comma, minus
                    key == 188 || (allownegative && key == 109) ||
                    // Backspace and Tab and Enter
                    key == 8 || key == 9 || key == 13 ||
                    // Home and End
                    key == 35 || key == 36 ||
                    // left and right arrows
                    key == 37 || key == 39 ||
                    // Del and Ins
                    key == 46 || key == 45) {
                    return true;
                }
            }
            return false;
        });
        jQuery(this).change(function () {
            var str = jQuery(this).val();
            jQuery(this).val(str.replace(/\D/g, ''));
        });
    });
}
jQuery.fn.forceDecimal = function (allownegative) {
    return this.each(function () {
        jQuery(this).keydown(function (e) {
            var key = e.which || e.keyCode;

            if (e.ctrlKey) {
                return true;
            } else {
                if (!e.shiftKey && !e.altKey && !e.ctrlKey &&
                    // numbers   
                    key >= 48 && key <= 57 ||
                    // Numeric keypad
                    key >= 96 && key <= 105 ||
                    // comma, period and minus, . on keypad
                    key == 190 || key == 188 || (allownegative && key == 109) || key == 110 ||
                    // Backspace and Tab and Enter
                    key == 8 || key == 9 || key == 13 ||
                    // Home and End
                    key == 35 || key == 36 ||
                    // left and right arrows
                    key == 37 || key == 39 ||
                    // Del and Ins
                    key == 46 || key == 45) {
                    return true;
                }
            }
            return false;
        });
        jQuery(this).change(function () {
            var str = jQuery(this).val();
            jQuery(this).val(str.replace(/[^0-9\.]+/g, ''));
        });
    });
}
jQuery.fn.forceDate = function () {
    return this.each(function () {
        jQuery(this).keydown(function (e) {
            var key = e.which || e.keyCode;

            if (e.ctrlKey) {
                return true;
            } else {
                if (!e.shiftKey && !e.altKey && !e.ctrlKey &&
                    // numbers   
                    key >= 48 && key <= 57 ||
                    // Numeric keypad
                    key >= 96 && key <= 105 ||
                    // Backspace and Tab and Enter
                    key == 8 || key == 9 || key == 13 ||
                    // Home and End
                    key == 35 || key == 36 ||
                    // left and right arrows
                    key == 37 || key == 39 ||
                    // Del and Ins
                    key == 46 || key == 45 ||
                    //forward slash
                    key == 191 || key == 111) {
                    return true;
                }
            }
            return false;
        });
        jQuery(this).change(function () {
            var str = jQuery(this).val();
            jQuery(this).val(str.replace(/[^0-9\/]+/g, ''));
        });
    });
}