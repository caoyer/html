/**
 * Created by caoy on 2018/4/1.
 */

function login() {
    document.getElementById("snlogin").classList.add("hidden");
    document.getElementById("slogin").classList.remove("login-choice2");
    document.getElementById("zlogin").classList.add("login-choice2");
    document.getElementById("znlogin").classList.remove("hidden");
}

function loginname() {
    user = document.getElementById("loginname").value.trim();
    pwd = document.getElementById("loginpwd").value.trim();
    if(user.length == 0 || pwd.length == 0 ){
        alert("用户名、密码不能为空")
    }else{
        tag = document.getElementsByClassName("pg-header")[0].firstElementChild;
        tag.innerText = user;
    }
}

function procto() {
    document.getElementById("m-procto").classList.add("hidden");
    document.getElementById("procto").classList.add("hidden");
}

function SelectAll() {
    var tag1 = document.getElementById("sa1").checked;
    var tag2 = document.getElementById("sa2").checked;
    if(tag1 || tag2){
        for (var i in document.getElementsByClassName("select")){
            document.getElementsByClassName("select")[i].checked = true
        }
    }else{
        for (var i in document.getElementsByClassName("select")){
            document.getElementsByClassName("select")[i].checked = false
        }
    }
}

function SelectKinds() {
    var status = document.getElementsByName("jdzy")[0].checked;
    if(status == true){
        for(var i in document.getElementsByName("jdzy-product")){
            document.getElementsByName("jdzy-product")[i].checked = true;
        }
    }else{
        for(var i in document.getElementsByName("jdzy-product")){
            document.getElementsByName("jdzy-product")[i].checked = false;
        }
    }
}

function ClosingCost(cost) {
    if(document.getElementsByName("jdzy-product")[0].checked == true){
        if(parseFloat(cost.toFixed(2))>159){
            var r_total = parseFloat(cost.toFixed(2)) - 60;
            document.getElementById("cutdown").innerText = "- " + "¥ " + parseFloat(60.00);

        }else{
            var r_total = parseFloat(cost.toFixed(2));
            document.getElementById("cutdown").innerText = "- " + "¥ " + parseFloat(0.00);
        }
        document.getElementById("cost").innerText = "¥" + parseFloat(r_total.toFixed(2));
    } else {
        document.getElementById("cost").innerText = "¥" + "0.00";
        document.getElementById("cutdown").innerText = "- " + "¥ " + parseFloat(0.00);
    }
}


function PlusPrice() {
    var price = document.getElementById("price").innerText;
    var cur_num = document.getElementById("num").value;
    var plus_num = parseInt(cur_num) + 1;
    var total = parseFloat(price) * parseInt(plus_num);
    var weight = parseFloat(0.3) * parseInt(plus_num);
    document.getElementById("num").value = plus_num;
    document.getElementById("total").innerText = "¥" + parseFloat(total.toFixed(2));
    document.getElementById("total").nextElementSibling.innerText = weight.toFixed(1) + "kg";
    ClosingCost(total);

}

function MinuPrice() {
    var price = document.getElementById("price").innerText;
    var cur_num = document.getElementById("num").value;
    var minu_num = parseFloat(cur_num) - 1;
    if(minu_num >= 0){
        var total = parseFloat(price) * parseInt(minu_num);
        var weight = parseFloat(0.3) * parseInt(minu_num);
        document.getElementById("num").value = minu_num;
        document.getElementById("total").innerText = "¥" + parseFloat(total.toFixed(2));
        document.getElementById("total").nextElementSibling.innerText = weight.toFixed(1) + "kg";
        ClosingCost(total);
    }
}