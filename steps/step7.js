class Step7 extends Step {

    start(path_image) {
        this.html.setAttribute("status",1);

        var xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange = () => {
            if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
                if (xmlhttp.status == 200 || xmlhttp.status == 201 || xmlhttp.status == 202 || xmlhttp.status == 203) {
                    this.exempleContainer[0].innerHTML += "Réponse: <pre>"+xmlhttp.responseText+"</pre>";
                    this.id = xmlhttp.responseText
                    this.timer = setInterval(() => this.checkStatus(), 10000)
               }
               else if (xmlhttp.status == 400) {
                    this.html.setAttribute("status",0)
                    clearTimeout(this.timer)
               }
               else {
                    this.html.setAttribute("status",0)
                    this.exempleContainer[0].innerHTML += "Réponse: <pre> error"+xmlhttp.status+"</pre>";
                    clearTimeout(this.timer)
               }
            }
        };

        let url = "http://127.0.0.1:12402/file?path="+path_image
        
        this.exempleContainer[0].innerHTML = "GET " +url+ "<br/>"

        xmlhttp.open("GET", url, true);
        xmlhttp.send();
    }

    checkStatus() {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = () => {
            if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
               if (xmlhttp.status == 200 || xmlhttp.status == 201 || xmlhttp.status == 202 || xmlhttp.status == 203) {
                    this.exempleContainer[1].innerHTML += "Réponse: <pre>"+xmlhttp.responseText+"</pre><br/>";
                    let res = JSON.parse(xmlhttp.responseText)
                    if(res.error == "1")
                    {
                        clearTimeout(this.timer)
                        this.html.setAttribute("status",0)
                    }
                    else if (res.cmd == "ssh hadoop" && res.running == "0")
                    {
                        clearTimeout(this.timer)
                        this.html.setAttribute("status",2)
                        let data = st5.imageData
                        data.url = res.url
                        this.next(data) 
                    }
               }
               else if (xmlhttp.status == 400) {
                    this.html.setAttribute("status",0)
               }
               else {
                    this.html.setAttribute("status",0)
               }
            }
        };
        let url = "http://127.0.0.1:12402/status?pid="+this.id
        
        this.exempleContainer[1].innerHTML = "GET " +url+ "<br/>"
        xmlhttp.open("GET", url, true);
        xmlhttp.setRequestHeader("Content-Type", "application/json");
        xmlhttp.send();
    }

}