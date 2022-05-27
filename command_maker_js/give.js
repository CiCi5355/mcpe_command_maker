//生成
function generate(command_list){
    let cmd_text = document.getElementById("cmd_text");
    let target = document.getElementById("input_target").value;
    let item = document.getElementById("input_item_id").value;
    let data = document.getElementById("input_item_data").value;
    let nbt = document.getElementById("input_item_nbt").value;
    let count = document.getElementById("input_item_count").value;
    if (target == "") target = "@s";
    if (item == "") item = "apple";
    if (count == "") count = "1";
    if (data == "") data = "0";
    if (nbt == ""){
        cmd_text.innerHTML = "give " + target + " " + item + " " + count + " " + data;
    }else{
        cmd_text.innerHTML = "give " + target + " " + item + " " + count + " " + data + " " + nbt;
    }
}

//複製
function copy(id) {
    node = document.getElementById(id);
    if (document.body.createTextRange) {
        let range = document.body.createTextRange();
        range.moveToElementText(node);
        range.select();
        document.execCommand("copy");
        alert("(ﾉ>ω<)ﾉ\n指令複製成功!");
    } else if (window.getSelection) {
        let selection = window.getSelection();
        let range = document.createRange();
        range.selectNodeContents(node);
        selection.removeAllRanges();
        selection.addRange(range);
        document.execCommand("copy");
        alert("(ﾉ>ω<)ﾉ\n指令複製成功");
    } else {
        alert('( º﹃º )\n無法複製內容、瀏覽器不支援');       
    }
    window.getSelection().removeAllRanges();
}