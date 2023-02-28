function change(){
    const cd_ar = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];

    let clor_cd = '';

    for(let i = 0; i < 6; i++){
        let rd_idx = Math.floor(Math.random() * cd_ar.length);
        clor_cd += cd_ar[rd_idx];
    }
    document.getElementById("changer").innerHTML = clor_cd;
    document.getElementsByTagName("body")[0].style.background = "#"+clor_cd;
}
