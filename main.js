function error() {
    alert("Hiện vẫn chưa có nhóm này !")
}


var dayofweek = document.querySelector("#dayofweek");
var date = document.querySelector("#date");
var time2 = document.querySelector("#time");
    var currentTime = new Date();
    var year = currentTime.getFullYear(); // Lấy năm
    var month = currentTime.getMonth(); // Lấy tháng (0-11)
    var day = currentTime.getDate(); // Lấy ngày trong tháng
    var hour = currentTime.getHours(); // Lấy giờ (0-23)
    var minute = currentTime.getMinutes(); // Lấy phút
    var second = currentTime.getSeconds(); // Lấy giây
function time() {
    
    var currentTime = new Date();
    var year = currentTime.getFullYear(); // Lấy năm
    var month = currentTime.getMonth(); // Lấy tháng (0-11)
    var day = currentTime.getDate(); // Lấy ngày trong tháng
    var hour = currentTime.getHours(); // Lấy giờ (0-23)
    var minute = currentTime.getMinutes(); // Lấy phút
    var second = currentTime.getSeconds(); // Lấy giây
    time2.innerHTML = hour + ':' + minute + ':' + second;
    date.innerHTML = '(' + day + '/' + month + '/' + year + ')';

    // Mảng lưu trữ các chuỗi thứ
    var daysOfWeek = ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'];

    // Lấy số thứ từ đối tượng Date
    var dayOfWeek = currentTime.getDay();

    // Lấy chuỗi thứ tương ứng
    var dayOfWeekString = daysOfWeek[dayOfWeek];

    // Hiển thị kết quả
    dayofweek.innerHTML = dayOfWeekString;
}
setInterval(time, 1000);

setInterval(bnMonhoc, 1000);
function bnMonhoc() {
    
    var currentTime = new Date();

    // Mảng lưu trữ các chuỗi thứ
    var daysOfWeek = ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'];

    // Lấy số thứ từ đối tượng Date
    var dayOfWeek = currentTime.getDay();

    // Lấy chuỗi thứ tương ứng
    var dayOfWeekString = daysOfWeek[dayOfWeek];


    var idtemp ='';
    var idtemp2 ='';

if (dayOfWeekString == 'Thứ hai') {
    idtemp = 't2t';
    idtemp2 = 'bct2t';
}
else if (dayOfWeekString == 'Thứ ba') {
    idtemp = 't3t';
    idtemp2 = 'bct3t';
}
else if (dayOfWeekString == 'Thứ tư') {
    idtemp = 't4t';
    idtemp2 = 'bct4t';
}
else if (dayOfWeekString == 'Thứ năm') {
    idtemp = 't5t';
}
else if (dayOfWeekString == 'Thứ sáu') {
    idtemp = 't6t';
}
else if (dayOfWeekString == 'Thứ bảy') {
    idtemp = 't7t';
}

var checkdayofweek = '#' + idtemp;
var checkdayofweek2 = '#' + idtemp2;


// check thu de xep tkb

        $(document).ready(function() {
            // Load nội dung từ tệp time
            $.get('time.html', function(data) {
                // Tìm phần tử có trong nội dung tệp time
                var paragraph = $(data).find(checkdayofweek + '1');
                // Lấy nội dung từ tệp time
                var textContent = paragraph.text();
                var outBN = document.querySelector("#bnc1");
                outBN.innerHTML = textContent;
            });
        });
        
        $(document).ready(function() {
            // Load nội dung từ tệp time
            $.get('time.html', function(data) {
                // Tìm phần tử có trong nội dung tệp time
                var paragraph = $(data).find(checkdayofweek + '2');
                // Lấy nội dung từ tệp time
                var textContent = paragraph.text();
                var outBN = document.querySelector("#bnc2");
                outBN.innerHTML = textContent;
            });
        });

        $(document).ready(function() {
            // Load nội dung từ tệp time
            $.get('time.html', function(data) {
                // Tìm phần tử có trong nội dung tệp time
                var paragraph = $(data).find(checkdayofweek + '3');
                // Lấy nội dung từ tệp time
                var textContent = paragraph.text();
                var outBN = document.querySelector("#bnc3");
                outBN.innerHTML = textContent;
            });
        });

        $(document).ready(function() {
            // Load nội dung từ tệp time
            $.get('time.html', function(data) {
                // Tìm phần tử có trong nội dung tệp time
                var paragraph = $(data).find(checkdayofweek + '4');
                // Lấy nội dung từ tệp time
                var textContent = paragraph.text();
                var outBN = document.querySelector("#bnc4");
                outBN.innerHTML = textContent;
            });
        });

        $(document).ready(function() {
            // Load nội dung từ tệp time
            $.get('time.html', function(data) {
                // Tìm phần tử có trong nội dung tệp time
                var paragraph = $(data).find(checkdayofweek + '5');
                // Lấy nội dung từ tệp time
                var textContent = paragraph.text();
                var outBN = document.querySelector("#bnc5");
                outBN.innerHTML = textContent;
            });
        });


        //Buoi chieu


        $(document).ready(function() {
            // Load nội dung từ tệp time
            $.get('time.html', function(data) {
                // Tìm phần tử có trong nội dung tệp time
                var paragraph = $(data).find(checkdayofweek2 + '1');
                // Lấy nội dung từ tệp time
                var textContent = paragraph.text();
                var outBN = document.querySelector("#bcbnc5");
                outBN.innerHTML = textContent;
            });
        });

        $(document).ready(function() {
            // Load nội dung từ tệp time
            $.get('time.html', function(data) {
                // Tìm phần tử có trong nội dung tệp time
                var paragraph = $(data).find(checkdayofweek2 + '2');
                // Lấy nội dung từ tệp time
                var textContent = paragraph.text();
                var outBN = document.querySelector("#bcbnc5");
                outBN.innerHTML = textContent;
            });
        });

        $(document).ready(function() {
            // Load nội dung từ tệp time
            $.get('time.html', function(data) {
                // Tìm phần tử có trong nội dung tệp time
                var paragraph = $(data).find(checkdayofweek2 + '3');
                // Lấy nội dung từ tệp time
                var textContent = paragraph.text();
                var outBN = document.querySelector("#bcbnc5");
                outBN.innerHTML = textContent;
            });
        });

        $(document).ready(function() {
            // Load nội dung từ tệp time
            $.get('time.html', function(data) {
                // Tìm phần tử có trong nội dung tệp time
                var paragraph = $(data).find(checkdayofweek2 + '4');
                // Lấy nội dung từ tệp time
                var textContent = paragraph.text();
                var outBN = document.querySelector("#bcbnc5");
                outBN.innerHTML = textContent;
            });
        });

        $(document).ready(function() {
            // Load nội dung từ tệp time
            $.get('time.html', function(data) {
                // Tìm phần tử có trong nội dung tệp time
                var paragraph = $(data).find(checkdayofweek2 + '5');
                // Lấy nội dung từ tệp time
                var textContent = paragraph.text();
                var outBN = document.querySelector("#bcbnc5");
                outBN.innerHTML = textContent;
            });
        });



    //On learn

    var Learning = document.querySelector("#Learning");
    var hour = currentTime.getHours(); // Lấy giờ (0-23)
    var minute = currentTime.getMinutes(); // Lấy phút

    var plusHM = hour + minute + '';
    if (dayOfWeekString == 'Chủ nhật') {
        Learning.innerHTML = 'Đang ngoài giờ học';
        Learning.style.backgroundColor = '#ddd';
    }
    else {
        if (plusHM == '715') {
            Learning.innerHTML = 'Đang học tiết 1 (Sáng)';
            Learning.style.backgroundColor = 'yellow';
        }
        if (plusHM == '80') {
            Learning.innerHTML = 'Đang học tiết 2 (Sáng)';
            Learning.style.backgroundColor = 'yellow';
        }
        if (plusHM == '845') {
            Learning.innerHTML = 'Đang học tiết 3 (Sáng)';
            Learning.style.backgroundColor = 'yellow';
        }
        if (plusHM == '930') {
            Learning.innerHTML = 'Đang giải lao (Sáng)';
            Learning.style.backgroundColor = 'yellow';
        }
        if (plusHM == '100') {
            Learning.innerHTML = 'Đang học tiết 4 (Sáng)';
            Learning.style.backgroundColor = 'yellow';
        }
        if (plusHM == '1045') {
            Learning.innerHTML = 'Đang học tiết 5 (Sáng)';
            Learning.style.backgroundColor = 'yellow';
        }
        if (plusHM == '1130') {
            Learning.innerHTML = 'Đang ngoài giờ học';
            Learning.style.backgroundColor = '#ddd';
        }
        if (dayOfWeekString == 'Thứ hai' || dayOfWeekString == 'Thứ ba' || dayOfWeekString == 'Thứ tư') {
            if (plusHM == '140') {
                Learning.innerHTML = 'Đang học tiết 3 (Chiều)';
                Learning.style.backgroundColor = 'yellow';
            }
            if (plusHM == '1445') {
                Learning.innerHTML = 'Đang giải lao (Chiều)';
                Learning.style.backgroundColor = '#ddd';
            }
            if (plusHM == '150') {
                Learning.innerHTML = 'Đang học tiết 4 (Chiều)';
                Learning.style.backgroundColor = 'yellow';
            }
            if (plusHM == '1545') {
                Learning.innerHTML = 'Đang học tiết 5 (Chiều)';
                Learning.style.backgroundColor = 'yellow';
            }
        }
    }
}

var iconLeft = document.querySelector(".fa-chevron-circle-left");
var iconRight = document.querySelector(".fa-chevron-circle-right");
var solog = document.querySelector("#solog");
var newDay = document.querySelector("#newDay");

function clickRight() {
    iconLeft.style.opacity = '0.5';
    iconRight.style.opacity = '0.125';
    solog.style.display = 'none';
    newDay.style.display = 'flex';
}
function clickLeft() {
    iconLeft.style.opacity = '0.125';
    iconRight.style.opacity = '0.5';
    solog.style.display = 'flex';
    newDay.style.display = 'none';
}

