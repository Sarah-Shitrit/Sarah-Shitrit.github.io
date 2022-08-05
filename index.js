function hello () {
        for (i = 1; i < 10; i++) {
                document.write("<h1 id=xxx_" + i + " >Hello again</h1>");
        }
        document.write("<script>alert('Hello Sarah');</script>");
        document.getElementById("xxx_3").style.backgroundColor = "red";
}
hello();
