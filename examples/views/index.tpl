<!DOCTYPE html>
<html>
<head>
<% if(io_type == 'socket.io'){ %>
<script src="https://cdn.socket.io/socket.io-1.3.3.js"></script>
<script>
  var socket = io('http://' + window.location.hostname + ':8300');
</script>
<% }else{ %>
<script>
  var ws = new WebSocket('ws://' + window.location.hostname + ':8300');
</script>
<% } %>
</head>
<body>
    <h2><%=title%></h2>
    <p>IO type is <%=io_type%></p>
</body>
</html>
