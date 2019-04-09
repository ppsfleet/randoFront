class Step1 extends Step {
    constructor(element,logs) {
        super(element,logs);
        this.html.setAttribute("name","Récupération du texte de randonnée via l’API");

    }

    start(randoName) {
        this.html.setAttribute("status",1);
        this.addlog("starting service 1")

        var xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange = () => {
            if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
               if (xmlhttp.status == 200) {
                    let text = JSON.parse(xmlhttp.responseText)[0]
                    this.addcustomlog("ok ")
                    this.html.setAttribute("status",2);
                    console.log(this.next)
                    this.next(text)
                    
               }
               else if (xmlhttp.status == 400) {
                    this.addcustomlog("bad request")
                    this.html.setAttribute("status",0);
               }
               else {
                    this.addcustomlog("ckc")
                    this.html.setAttribute("status",0);
               }
            }
        };
    
        xmlhttp.open("GET", "http://127.0.0.1:9000/rando/"+randoName, true);
        xmlhttp.send();
    }

    addcustomlog(text) {
        this.addlog("Service 1:"+text)
    }
}