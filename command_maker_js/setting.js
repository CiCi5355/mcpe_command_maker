const data = {
    title: "MCPE 指令生成器",
    subtitle: "Make By CiCilove",
    subtitles: ["(´◓Д◔`)", "(*´∀`)~♥", "(´-ι_-｀)",
                "Σヽ(ﾟД ﾟ; )ﾉ", "(☍﹏⁰。)", "(ﾟ3ﾟ)～♪",
                "(΄◞ิ౪◟ิ‵)", "（ﾟДﾟ）σ弌弌弌弌弌弌弌弌弌弌弌弌弌弌弌弌弌弌弌弌⊃"
    ],
    titleDelay: 70
}

let lastNumber = 1;

let titles = data.title.split('');

let titleRunNumber = 0;

function loaded(){
    // document.getElementById("title").innerHTML = data.title;
    // document.getElementById("subtitle").innerHTML = data.subtitle + "     (*´∀`)~♥";

    //廣告板html生成
    let ad_board_html = "";
    for(let a = 0;a < titles.length; a++){
        ad_board_html += `<h1 class="Noto-Sans-TC" id="title${a}" style="display: inline;">${titles[a]}</h1>`;
    }
    ad_board_html += `<p class="lead Noto-Sans-TC" id="subtitle">${data.subtitle + "     (*´∀`)~♥"}</p>`;
    document.getElementById("ad_board").innerHTML = ad_board_html;

    //廣告板主標題動態
    const titleRun = window.setInterval(() => {
        for(let a = 0;a < titles.length;a++){
            if(a <= titleRunNumber){
                document.getElementById(`title${a}`).style.color = `rgb(${255 - ((titleRunNumber - a) * 10)}, ${255 - ((titleRunNumber - a) * 10)} ,0)`;
            }else{
                document.getElementById(`title${a}`).style.color = "rgb(0, 0 ,0)";
            }
        }
        titleRunNumber++;
        if(titleRunNumber > ((titles.length - 1) + data.titleDelay)) titleRunNumber = 0;
    }, 25)

    //廣告板副標題動態
    const subtitleRun = window.setInterval(() => {
        let number = 0;
        do{
            number = Math.floor(Math.random() * data.subtitles.length);
        }while(number == lastNumber)
        lastNumber = number;
        let text = data.subtitle + "     " + data.subtitles[number];
        document.getElementById("subtitle").innerHTML =  text;
    }, 1000)
}