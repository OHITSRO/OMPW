var dynamiccontentloading = false;

$(document).ready(function () {
    if (!dynamiccontentloading) {
        dynamiccontentloading = true;

        $(".aspdynamiccontent").each(function () {
            var currentdiv = this;
            var url = "http://ompw.cascade.umsmed.edu/generatecontrol.aspx?type=" + encodeURIComponent($(currentdiv).attr("data-content-type"));

            $.each(this.attributes, function (i, attrib) {
                var name = attrib.name;
                var value = attrib.value;

                if (name.indexOf("data-attr-") >= 0) {
                    url += "&" + name.replace("data\-attr\-", "") + "=" + encodeURIComponent(value);
                }

            });
            if ($(currentdiv).html().trim() == "") {
                $.ajax({
                    type: "GET",
                    url: url,
                    xhrFields: {
                        withCredentials: true
                    }
                }).done(function (content) {
                    $(content).insertAfter(currentdiv);
                    $(currentdiv).remove();
                    $(document).trigger("AjaxComplete");
                });
            } else {
                $.ajax({
                    type: "POST",
                    url: url,
                    data: { postdata: $(currentdiv).html() },
                    xhrFields: {
                        withCredentials: true
                    }
                }).done(function (content) {
                    //Fixes the Cascade admin preview panel's encoded special characters by using browser's HTML parser to decode the encoded HTML content before placing it
                    var txt = document.createElement("textarea"); 
                    txt.innerHTML = content;
                    $(txt.value).insertAfter(currentdiv);
                    $(currentdiv).remove();
                    $(document).trigger("AjaxComplete");
                });
            }
        });
    }
});