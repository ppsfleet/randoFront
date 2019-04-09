class Step3 extends Step {
    constructor(element,logs) {
        super(element,logs);
        this.html.setAttribute("name","Geolocalisation des ENS ");
    }

    start(places) {
        this.html.setAttribute("status",1);
        this.addlog("starting service 3")
        console.log(places)

        var xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange = () => {
            if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
               if (xmlhttp.status == 200) {
                    let coords = JSON.parse(xmlhttp.responseText)
                    this.html.setAttribute("status",2)
                    this.next(coords)
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
    
        xmlhttp.open("POST", "http://127.0.0.1:9000/locateentities", true);
        xmlhttp.setRequestHeader("Content-Type", "application/json");
        xmlhttp.send(JSON.stringify({places:places}));
    }

    addcustomlog(text) {
        this.addlog("Service 3:"+text)
    }

}