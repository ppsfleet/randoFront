class Step8 extends Step {
    constructor(element,logs) {
        super(element,logs);
        this.html.setAttribute("name","Récupération d'une liste d’images satellites sentinelle");
    }

    start(imageData) {
        this.html.setAttribute("status",1);
        var xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange = () => {
            if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
               if (xmlhttp.status == 200) {
                    this.exempleContainer[0].innerHTML += "Réponse: <pre>"+xmlhttp.responseText+"</pre>";
                    this.html.setAttribute("status",2)
                    this.next()
               }
               else if (xmlhttp.status == 400) {
                    this.html.setAttribute("status",0)
               }
               else {
                    this.html.setAttribute("status",0)
               }
            }
        };
        let args = JSON.stringify(imageData)
        let url = "http://127.0.0.1:12401/indexelastic"
        this.exempleContainer[0].innerHTML = "POST "+url+"<br/>"
        this.exempleContainer[0].innerHTML += "body: <pre>"+args+"</pre>"
        xmlhttp.open("POST", url, true);
        xmlhttp.setRequestHeader("Content-Type", "application/json");
        xmlhttp.send(args);
    }


}