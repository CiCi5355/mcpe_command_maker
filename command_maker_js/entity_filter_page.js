//變數
let model = "";

//對照表
const gameMode = {
	
}

function reset(){
    document.getElementById("common_layer").style.display = 'none';
    document.getElementById("location_layer").style.display = 'none';
    document.getElementById("spatial_range_layer").style.display = 'none';
    document.getElementById("distance_layer").style.display = 'none';
    document.getElementById("angle_layer").style.display = 'none';
    document.getElementById("lv_layer").style.display = 'none';

    return true;
}

//參數層展開
function common_layer_display(){
	let target_layer = document.getElementById("common_layer");
	let display_switch = document.getElementById("common_layer_display").checked;
	if(display_switch){
		target_layer.style.display = '';
	}else{
		target_layer.style.display = 'none';
	}
}
function location_layer_display(){
	let target_layer = document.getElementById("location_layer");
	let display_switch = document.getElementById("location_layer_display").checked;
	if(display_switch){
		target_layer.style.display = '';
	}else{
		target_layer.style.display = 'none';
	}
}
function spatial_range_layer_display(){
	let target_layer = document.getElementById("spatial_range_layer");
	let display_switch = document.getElementById("spatial_range_layer_display").checked;
	if(display_switch){
		target_layer.style.display = '';
	}else{
		target_layer.style.display = 'none';
	}
}
function distance_layer_display(){
	let target_layer = document.getElementById("distance_layer");
	let display_switch = document.getElementById("distance_layer_display").checked;
	if(display_switch){
		target_layer.style.display = '';
	}else{
		target_layer.style.display = 'none';
	}
}
function angle_layer_display(){
	let target_layer = document.getElementById("angle_layer");
	let display_switch = document.getElementById("angle_layer_display").checked;
	if(display_switch){
		target_layer.style.display = '';
	}else{
		target_layer.style.display = 'none';
	}
}
function lv_layer_display(){
	let target_layer = document.getElementById("lv_layer");
	let display_switch = document.getElementById("lv_layer_display").checked;
	if(display_switch){
		target_layer.style.display = '';
	}else{
		target_layer.style.display = 'none';
	}
}

//模式選擇
function model_change(){
    model = document.getElementById("model_change").value;
    let place = document.getElementById("replace_action");
    if (model == "replace"){
        place.innerHTML = ('<p class="from_big_title">被取代方塊(不填全部取代):</p><div><p class="from_sm_title">ID</p><input class="input" type="text" id="input_block_id2" value=""></div><div><p class="from_sm_title">DATA</p><input class="input" type="text" id="input_block_data2" onkeyup="value=value.replace(/[^\\d\\-]/g,\'\')"></div>')
    }else{
        place.innerHTML = ('');
    }
}

//

//生成
function generate(command_list){
    let cmd_text = document.getElementById("cmd_text");
    let x1 = document.getElementById("input_pos_x").value;
    let y1 = document.getElementById("input_pos_y").value;
    let z1 = document.getElementById("input_pos_z").value;
    let x2 = document.getElementById("input_pos_x2").value;
    let y2 = document.getElementById("input_pos_y2").value;
    let z2 = document.getElementById("input_pos_z2").value;
    let block1 = document.getElementById("input_block_id").value;
    let data1 = document.getElementById("input_block_data").value;

    if(x1 == "") x1 = "~";
    if(x2 == "") x2 = "~";
    if(y1 == "") y1 = "~";
    if(y2 == "") y2 = "~";
    if(z1 == "") z1 = "~";
    if(z2 == "") z2 = "~";
    if(block1 == "") block1 = "stone";
    if(data1 == "") data1 = "0";

    if (model == "replace" || model == ""){
        let block2 = document.getElementById("input_block_id2").value;
        let data2 = document.getElementById("input_block_data2").value;
        if(data2 == "") data2 = "0";
        
        if (block2 == ""){
            cmd_text.innerHTML = "fill " + x1 + " " + y1 + " " + z1 + " " + x2 + " " + y2 + " " + z2 + " " + block1 + " " + data1;
        }else{
            cmd_text.innerHTML = "fill " + x1 + " " + y1 + " " + z1 + " " + x2 + " " + y2 + " " + z2 + " " + block1 + " " + data1 + " replace " + block2 + " " + data2;
        }
    }
    else{
        cmd_text.innerHTML = "fill " + x1 + " " + y1 + " " + z1 + " " + x2 + " " + y2 + " " + z2 + " " + block1 + " " + data1 + " " + model;
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
        alert('(ﾉ>ω<)ﾉ\n選擇器複製成功!');
    } else if (window.getSelection) {
        let selection = window.getSelection();
        let range = document.createRange();
        range.selectNodeContents(node);
        selection.removeAllRanges();
        selection.addRange(range);
        document.execCommand("copy");
        alert('(ﾉ>ω<)ﾉ\n選擇器複製成功!');
    } else {
        alert('( º﹃º )\n無法複製內容、瀏覽器不支援');       
    }
    window.getSelection().removeAllRanges();
}