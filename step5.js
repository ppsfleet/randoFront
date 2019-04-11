class Step5 extends Step {
    constructor(element,logs) {
        super(element,logs);
        this.html.setAttribute("name","Récupération d'une liste d’images satellites sentinelle");
    }

    start(coords,date1,date2) {
        this.html.setAttribute("status",1);
        var xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange = () => {
            if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
               if (xmlhttp.status == 200) {
                    this.exempleContainer[0].innerHTML += "Réponse: <pre>"+xmlhttp.responseText+"</pre>";
                    let images = JSON.parse(xmlhttp.responseText)
                    let firstUrl = images['img'][0]['url']
                    this.html.setAttribute("status",2)
                    this.next(firstUrl)
               }
               else if (xmlhttp.status == 400) {
                    this.html.setAttribute("status",0)
               }
               else {
                    this.html.setAttribute("status",0)
               }
            }
        };
        console.log(coords)
        let c = coords.replace('"','').replace('"','')
        console.log(c)
        let url = "http://127.0.0.1:12401/satelliteimage/"+c+"?dateBegin="+date1+"&dateEnd="+date2
        console.log(url)
        this.exempleContainer[0].innerHTML = "GET "+url+"<br/>"
        xmlhttp.open("GET", url, true);
        xmlhttp.send();
    }


}