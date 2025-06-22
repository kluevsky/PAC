function FindProxyForURL(url, host) {
    if (dnsDomainIs(host, "2ip.ru") || shExpMatch(host, "*.2ip.ru") || shExpMatch(host, "*discord*")) {
        return "SOCKS5 127.0.0.1:1080";
    }

    return "DIRECT";
}
