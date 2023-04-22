function showCondition(){
    condition = document.getElementById("condition").value;

    if(condition == "all"){
        document.getElementById("dox0").style.display="block";
        document.getElementById("dox001").style.display="block";
        document.getElementById("dox01").style.display="block";
        document.getElementById("dox1").style.display="block";
        document.getElementById("dox5").style.display="block";
    }

    if(condition == "dox0"){
        document.getElementById("dox0").style.display="block";
        document.getElementById("dox001").style.display="none";
        document.getElementById("dox01").style.display="none";
        document.getElementById("dox1").style.display="none";
        document.getElementById("dox5").style.display="none";
    }

    if(condition == "dox0.01"){
        document.getElementById("dox0").style.display="none";
        document.getElementById("dox001").style.display="block";
        document.getElementById("dox01").style.display="none";
        document.getElementById("dox1").style.display="none";
        document.getElementById("dox5").style.display="none";
    }

    if(condition == "dox0.1"){
        document.getElementById("dox0").style.display="none";
        document.getElementById("dox001").style.display="none";
        document.getElementById("dox01").style.display="block";
        document.getElementById("dox1").style.display="none";
        document.getElementById("dox5").style.display="none";
    }

    if(condition == "dox1"){
        document.getElementById("dox0").style.display="none";
        document.getElementById("dox001").style.display="none";
        document.getElementById("dox01").style.display="none";
        document.getElementById("dox1").style.display="block";
        document.getElementById("dox5").style.display="none";
    }

    if(condition == "dox5"){
        document.getElementById("dox0").style.display="none";
        document.getElementById("dox001").style.display="none";
        document.getElementById("dox01").style.display="none";
        document.getElementById("dox1").style.display="none";
        document.getElementById("dox5").style.display="block";
    }
}