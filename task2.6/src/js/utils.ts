interface CookieData {
    cookieId:string[]
    cookieValues:string[]
}

const removeAllChildElements = (selector:string):void => {
    const element:Element = document.querySelector(selector)
    while (element.hasChildNodes()) {
        element.removeChild(element.lastChild)
    }
}

const getUniqueId = ():string => {
    return "id_" + Math.random().toString(16).slice(2)
}

const getExpirationTime = (minutes:number):string => {
    const date = new Date
    const dataOffset = (-1 * (date.getTimezoneOffset()) + minutes) * 60000
    const expirationDate:string = (new Date(Date.now() + dataOffset)).toUTCString()
    return  `expires=${expirationDate};`
}

const getCookieString = (expirationTime:number, cookieValue:string):string => {
    return `${getUniqueId()}=${cookieValue}; ${getExpirationTime(expirationTime)}`
}

const convertCookieStringToDataObject = (cookieString:string):CookieData => {
    const isCookieKey:RegExp = /((?<= )|(?<=^))(.*?)(?==)/g
    const isCookieValue:RegExp = /(?<==)(.+?)((?=;)|(?=$)|(?= ))/g
    return {
        cookieId: cookieString.match(isCookieKey),
        cookieValues: cookieString.match(isCookieValue),
    }
}

const clearCookies = ():void => {
    document.cookie.split(";").forEach((cookie) => {
        document.cookie = cookie.replace(/^ +/, "").replace(/=.*/, "=;expires=" + (new Date().toUTCString()) + ";path=/")
    });
}

const redactCookie = (id:string, value:string, expirationDate:string):string => {
    document.cookie = `${id}=${value}; expires=${expirationDate}`
    return `${id}=${value}; expires=${expirationDate}`
}

export {getCookieString, convertCookieStringToDataObject, CookieData, clearCookies, redactCookie, removeAllChildElements}