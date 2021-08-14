

function clearInput() {
    document.getElementById('a').value = '';
    document.getElementById('d').value = '';
    document.getElementById('m').value = '';
    document.getElementById('y').value = '';
}

function closeForm() {
    document.getElementById('ptContent').style.display = 'none';
    document.getElementById('m').style.display = 'none';
    document.getElementById('d').style.display = 'none';
    document.getElementById('y').style.display = 'none';
    document.getElementById('noti').innerHTML = '';
    document.getElementById('result1').innerHTML = '';
    document.getElementById('result2').innerHTML = '';
    clearInput();
}

function option() {
    var selectedValue = +document.getElementById("timeMD").value
    if (selectedValue === 1) {
        document.getElementById('m').style.display = 'block';
        document.getElementById('d').style.display = 'none';
    } else if (selectedValue === 2) {
        document.getElementById('d').style.display = 'block';
        document.getElementById('m').style.display = 'none';
    }
    else {
        document.getElementById('d').style.display = 'none';
        document.getElementById('m').style.display = 'none';
    }
}

function lai_suat_co_ky_han() {
    document.getElementById('ptContent').style.display = 'block';
    let a, l, d, m;
    a = +document.getElementById('a').value;
    d = +document.getElementById('d').value;
    m = +document.getElementById('m').value;
    if (!a) {
        document.getElementById('noti').innerHTML = 'Vui lòng nhập số tiền cần gửi';
    } else
        if (a >= 500000) {
            document.getElementById('timeMD').style.display = 'block';

            //lãi suất theo m
            if (!m) {
                document.getElementById('noti').innerHTML = 'Vui lòng nhập kỳ hạn';
            }
            else if (m > 0) {
                l = a * 6.5 / 12 * m;
                total = a + l;
                document.getElementById('result1').innerHTML = 'Tiền lãi là: ' + l + " VND";
                document.getElementById('result2').innerHTML = 'Tổng gốc + lãi là: ' + total + " VND";
            }
            else {
                document.getElementById('noti').innerHTML = 'Kỳ hạn không hợp lệ, vui lòng nhập lại';
                clearInput();
            }

            //lai suat theo day
            if (!d) {
                document.getElementById('noti').innerHTML = 'Vui lòng nhập kỳ hạn';
            }
            else if (m > 0) {
                l = a * 6.5 * d / 360;
                total = a + l;
                document.getElementById('result1').innerHTML = 'Tiền lãi là: ' + l + " VND";
                document.getElementById('result2').innerHTML = 'Tổng gốc + lãi là: ' + total + " VND";
            }

        } else {
            document.getElementById('noti').innerHTML = 'Tiền gửi phải từ 500.000 VND trở lên';
        }

}

function lai_suat_kep() {
    document.getElementById('ptContent').style.display = 'block';
    const l = 4.3; // lãi suất cố định
    const n = 4; //số lần tiền lãi được nhập gốc mỗi năm
    let a, y;
    a = +document.getElementById('a').value;
    y = +document.getElementById('y').value;
    document.getElementById('y').style.display = 'block';
    if (!a) {
        document.getElementById('noti').innerHTML = 'Vui lòng nhập số tiền cần gửi';
    } else if (a > 50000) {
        if (!y) {
            document.getElementById('noti').innerHTML = 'Vui lòng nhập kỳ hạn';
        } else
            if (y > 0) {
                total = a * Math.pow((1+l/n),(n*y));
                document.getElementById('result2').innerHTML = 'Tổng gốc + lãi là: ' + total + " VND";
            }
    }else{
        document.getElementById('noti').innerHTML = 'Tiền gửi phải từ 500.000 VND trở lên';
    }

}




