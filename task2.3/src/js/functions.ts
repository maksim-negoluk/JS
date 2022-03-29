const getRandomNumber = (rangeBottom:number, rangeTop:number):number => {
    return Math.floor(Math.random() * (rangeTop - rangeBottom) + rangeBottom)
}

const generateRandomNumberArray = (arrayLength:number, rangeBottom:number, rangeTop:number):number[] => {
    let numberArray:number[] = []
    for(let index = 0; index < arrayLength; index++){
        numberArray.push(getRandomNumber(rangeBottom, rangeTop))
    }
    return numberArray
}

const getFunctionExecutionTime = (func:([...args]) => any, functionArguments:any[]):string => {
    const start = Date.now();
    func([...functionArguments]);
    return (Date.now() - start).toString()
}

export {generateRandomNumberArray, getFunctionExecutionTime}