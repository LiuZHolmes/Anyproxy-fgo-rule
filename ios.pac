function FindProxyForURL(url, host) {
   if (shExpMatch(url,"*biligame.net*")) 
   {
     return "PROXY 192.168.199.128:8001";
   }
   return "DIRECT"; 
}
