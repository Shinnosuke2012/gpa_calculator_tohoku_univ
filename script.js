function cal(){
    // 2単位の成績のデータ
    var SAA2 = document.getElementById("SAA2").value;
    score_SAA2 = SAA2*8;
    var SA2 = document.getElementById("SA2").value;
    score_SA2 = SA2*6;
    var SB2 = document.getElementById("SB2").value;
    score_SB2 = SB2*4;
    var SC2 = document.getElementById("SC2").value;
    score_SC2 = SC2*2;
    var SD2 = document.getElementById("SD2").value;
    score_SD2 = SD2*0;

    // 1単位の成績データ
    var SAA1 = document.getElementById("SAA1").value;
    var score_SAA1 = SAA1*4;
    var SA1 = document.getElementById("SA1").value;
    var score_SA1 = SA1*3;
    var SB1 = document.getElementById("SB1").value;
    var score_SB1 = SB1*2;
    var SC1 = document.getElementById("SC1").value;
    var score_SC1 = SC1*1;
    var SD1 = document.getElementById("SD1").value;
    var score_SD1 = SD1*0;

    //GPAを計算する
    var num = SAA2*2 + SA2*2 + SB2*2 + SC2*2 + SD2*2 + SAA1*1 + SA1*1 + SB1*1 + SC1*1 + SD1*1; //単位数の合計
    var score = score_SAA2 + score_SA2 + score_SB2 + score_SC2 + score_SD2 + score_SAA1 + score_SA1 + score_SB1 + score_SC1 + score_SD1; 
    var GPA = score/num; 
    GPA = "貴方のGPAは" + score/num + "です。"

    document.getElementById("result").innerHTML = GPA;
}