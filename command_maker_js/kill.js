//生成
function generate(command_list){
    let cmd_text = document.getElementById("cmd_text");
    let target = document.getElementById("input_target").value;
    cmd_text.innerHTML = "kill " + target;
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