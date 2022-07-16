$('pre.source-code').each(function() {
  var s = $( this );
  var firstLineNode = s.find("code>table>tbody>tr>td>pre>span")[0];
  var firstLine = firstLineNode.innerText;
  firstLineNode.innerText = '';
  // remove comments
  if(firstLine.startsWith("#")){
    firstLine = firstLine.substring(1, firstLine.length);
  }
  else if(firstLine.startsWith("//")){
    firstLine = firstLine.substring(2, firstLine.length);
  }

  firstLine = firstLine.trim();

  var windowTitleBar = "<div class=\"top\">\n" +
      "        <div class=\"btns\">\n" +
      "            <span class=\"circle red\"></span>\n" +
      "            <span class=\"circle yellow\"></span>\n" +
      "            <span class=\"circle green\"></span>\n" +
      "        </div>\n" +
      "        <div class=\"title\">" + firstLine + "</div>\n" +
      "    </div>";

  s.parent().prepend(windowTitleBar);
s.parent().addClass("terminal space shadow");
  // $( this ).addClass( "foo" );
});

//
//     .parent()
// .prepend( "<p>Test</p>" );

$("article  img").each(function() {
  var s = $( this );
  if(!s.hasClass("emoji")){
    s.addClass("ui fluid image");
  }
});