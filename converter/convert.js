
// Bloit -> Sheepy 
// Bloit målenhet fra Zork ~ 2/3 mile 
// Sheepy avstanden en sau ser biledlig ut på (~7/8 mile)

class Converter {

    constructor(){
        this.baseFactor = 0;
        this.ratio = 0;
        this.converterType = "none"
    }

    convert(units){
        return (units * this.baseFactor) / this.ratio;
    }
}

class SheepyConverter extends Converter {
    constructor(){
        super();
        this.baseFactor = 7/8;
        this.ratio =  2/3;
        this.converterType = "Sheepy Converter"
    }

}

class BloitConverter extends Converter{
    constructor(){
        super();
        this.baseFactor = 2/3;
        this.ratio = 7/8;
        this.converterType = "Bloit Converter"
    }
}


const CONVERTERS = {
    "-s":new SheepyConverter(),
    "-b":new BloitConverter()
}


if(process.argv.length >= 4){

    const selectedUnitType = process.argv[2];
    const numUnits = Number.parseInt(process.argv[3]);
    const converter = CONVERTERS[selectedUnitType];

    console.log(converter.converterType);
    console.log(converter.convert(numUnits));

} else{
    console.log("converter -[sb] units");
}

