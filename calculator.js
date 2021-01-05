var pointCount = 0;
    
    $(document).ready(function() {
        let buttons = $('button');
        $("#display").val('0');
        buttons.toArray().forEach(element => {
            $(element).on('click', () => {
                let old = $('#display').val();
                console.log(old);
                if ($(element).val() == '=') {
                    $('#display').val(eval(old));
                } else if($(element).val() == '.') {
                    let lasts = Array.from(old);
                    let last = lasts[lasts.length-1];
                    if (pointCount < 1) {
                        $('#display').val(old + $(element).val());
                    }
                    pointCount++;
                } else if ($(element).text() == 'AC') {
                    $('#display').val("0");
                    pointCount = 0;
                } else if ($(element).val() == '0') {
                    let lasts = Array.from(old);
                    let last = lasts[lasts.length-1];
                    if (lasts.length == 1 && last == '0'){
                        console.log('Zeros should not follow zeros at the start');
                    } else {
                        $('#display').val(old + $(element).val());
                    }
                } else if($(element).val() == '-') {
                    let lasts = Array.from(old);
                    let last = lasts[lasts.length-1];
                    let bLast = lasts[lasts.length-2];
                    let reg = /[+*/-]/;
                    if(last.match(reg)) {
                        if(bLast.match(reg)) {
                            let las = lasts.slice(0, lasts.length-1).toString();
                            $('#display').val(las + $(element).val());
                        } else {
                            $('#display').val(old + $(element).val());
                        }
                    } else {
                        $('#display').val(old + $(element).val());
                    }
                    pointCount = 0;
                } else if($(element).val() == '+') {
                    let lasts = Array.from(old);
                    let last = lasts[lasts.length-1];
                    let bLast = lasts[lasts.length-2];
                    let reg = /[+*/-]/;
                    if(last.match(reg)) {
                        if(bLast.match(reg)) {
                            let las = lasts.slice(0, lasts.length-2).toString();
                            $('#display').val(las + $(element).val());
                        } else {
                            let las = lasts.slice(0, lasts.length-1).toString();
                            $('#display').val(las + $(element).val());
                        }
                    } else {
                        $('#display').val(old + $(element).val());
                    }
                    pointCount = 0;
                } else if($(element).val() == '/') {
                    let lasts = Array.from(old);
                    let last = lasts[lasts.length-1];
                    let bLast = lasts[lasts.length-2];
                    let reg = /[+*/-]/;
                    if(last.match(reg)) {
                        if(bLast.match(reg)) {
                            let las = lasts.slice(0, lasts.length-2).toString();
                            $('#display').val(las + $(element).val());
                        } else {
                            let las = lasts.slice(0, lasts.length-1).toString();
                            $('#display').val(las + $(element).val());
                        }
                    } else {
                        $('#display').val(old + $(element).val());
                    }
                    pointCount = 0;
                } else if($(element).val() == '*') {
                    let lasts = Array.from(old);
                    let last = lasts[lasts.length-1];
                    let bLast = lasts[lasts.length-2];
                    let reg = /[+*/-]/;
                    if(last.match(reg)) {
                        if(bLast.match(reg)) {
                            let las = lasts.slice(0, lasts.length-2).toString();
                            $('#display').val(las + $(element).val());
                        } else {
                            let las = lasts.slice(0, lasts.length-1).toString();
                            $('#display').val(las + $(element).val());
                        }
                    } else {
                        $('#display').val(old + $(element).val());
                    }
                    pointCount = 0;
                }
                 else {
                    if($('#display').val() == '0') {
                        $('#display').val($(element).val());
                    } else {
                        $('#display').val(old + $(element).val()); 
                    }
                }
            });
        });
    });