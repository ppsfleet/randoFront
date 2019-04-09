class Step4 extends Step {
    constructor(element,logs) {
        super(element,logs);
        this.html.setAttribute("name","Déduction de la zone UTM majoritaire");
    }

    start(coords) {
        this.html.setAttribute("status",1);
        this.addlog("starting service 4")

        var xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange = () => {
            if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
               if (xmlhttp.status == 200) {
                    let square = xmlhttp.responseText
                    this.html.setAttribute("status",2)
                    this.next(square)
               }
               else if (xmlhttp.status == 400) {
                    this.addcustomlog("bad request")
                    this.html.setAttribute("status",0)
               }
               else {
                    this.addcustomlog("ckc")
                    this.html.setAttribute("status",0)
               }
            }
        };
    
        xmlhttp.open("POST", "http://127.0.0.1:9000/mainUTM", true);
        xmlhttp.setRequestHeader("Content-Type", "application/json");
        xmlhttp.send(JSON.stringify({geolocs:coords}));
    }

    addcustomlog(text) {
        this.addlog("Service 4:"+text)
    }

}