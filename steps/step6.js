class Step6 extends Step {

    start(url_image) {
        this.html.setAttribute("status",1);

        var xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange = () => {
            if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
                if (xmlhttp.status == 200 || xmlhttp.status == 201 || xmlhttp.status == 202 || xmlhttp.status == 203) {
                    this.exempleContainer[0].innerHTML += "Réponse: <pre>"+xmlhttp.responseText+"</pre>";
                    this.urlFile = xmlhttp.responseText
                    this.fileName = this.urlFile.split("/").pop();
                    this.timer = setInterval(() => this.checkStatus(), 10000)
               }
               else if (xmlhttp.status == 400) {
                    this.html.setAttribute("status",0)
               }
               else {
                    this.html.setAttribute("status",0)
                    this.exempleContainer[0].innerHTML += "Réponse: <pre> error"+xmlhttp.status+"</pre>";
               }
            }
        };
        let args = JSON.stringify({url:url_image})
        let url = "http://127.0.0.1:12403/"
        
        this.exempleContainer[0].innerHTML = "POST " +url+ "<br/>"
        this.exempleContainer[0].innerHTML += "body: <pre>"+args+"</pre>"

        xmlhttp.open("POST", url, true);
        xmlhttp.setRequestHeader("Content-Type", "application/json");
        xmlhttp.send(args);
    }

    checkStatus() {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = () => {
            if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
               if (xmlhttp.status == 200 || xmlhttp.status == 201 || xmlhttp.status == 202 || xmlhttp.status == 203) {
                    this.exempleContainer[1].innerHTML += "Réponse: <pre>"+xmlhttp.responseText+"</pre><br/>";
                    if (xmlhttp.responseText == "true")
                    {
                        this.html.setAttribute("status",2)
                        clearTimeout(this.timer)
                        this.next(this.urlFile)
                    }
               }
               else if (xmlhttp.status == 400) {
                    this.html.setAttribute("status",0)
                    clearTimeout(this.timer)
               }
               else {
                    this.html.setAttribute("status",0)
                    clearTimeout(this.timer)
               }
            }
        };
        let url = "http://127.0.0.1:12403/check-img-status?img="+this.fileName
        
        this.exempleContainer[1].innerHTML = "GET " +url+ "<br/>"
        xmlhttp.open("GET", url, true);
        xmlhttp.setRequestHeader("Content-Type", "application/json");
        xmlhttp.send();
    }

}