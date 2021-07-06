function cookieParser(cookie) {
    const cookieArr = cookie.split(/=|;\s/g);
    const len = cookieArr.length;
    const parseCookie = {};

    for (let i = 0; i < len; i += 2) {
        parseCookie[cookieArr[i]] = cookieArr[i + 1];
    }

    return parseCookie;
}
