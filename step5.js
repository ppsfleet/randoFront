class Step5 extends Step {
    constructor(element,logs) {
        super(element,logs);
        this.html.setAttribute("name","Récupération d'une liste d’images satellites sentinelle");
    }

    start(coords,date1,date2) {
        this.html.setAttribute("status",1);
        this.addlog("starting service 5")

        var xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange = () => {
            if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
               if (xmlhttp.status == 200) {
                    console.log(xmlhttp.responseText)
                    //this.html.setAttribute("status",2)
                    //this.next(square)
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
    
        xmlhttp.open("GET", "http://127.0.0.1:9000/satelliteimage/-1.17215,43.127307,1.939431,44.445408?dateBegin=2019-03-23T15:53:00Z&dateEnd=2019-03-27T15:53:00Z", true);
        xmlhttp.setRequestHeader("Content-Type", "application/json");
        xmlhttp.send(JSON.stringify({geolocs:coords}));
    }

    addcustomlog(text) {
        this.addlog("Service 5:"+text)
    }

}