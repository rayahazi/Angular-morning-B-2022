export default class Questions{

    // id:
    private _id:string = '';
    public get Id():string{
        return this._id;
    }
    public set Id(v: string){
        (v.length == 8 || v.length == 9) ? 
        this._id = v : null; 
    }

    // name:
    private _name:string = '';
    public get Name():string{
        return this._name;
    }
    public set Name(v: string){
        (v.length > 1) ? 
        this._name = v : null; 
    }

    // age:
    private _age:number = 0;
    public get Age():number{
        return this._age;
    }
    public set Age(v: number){
        (v >= 0 && v <= 120) ? 
        this._age = v : null; 
    }

    // favorite color:
    private _favColor:string = '';
    public get FavColor():string{
        return this._favColor;
    }
    public set FavColor(v: string){
        (v == 'green' || v == 'blue' || v == 'red') ? 
        this._favColor = v : null; 
    }

     // city:
     private _city:string = '';
     public get City():string{
         return this._city;
     }
     public set City(v: string){
         (v == 'Jerusalem' || v == 'Petah-Tikva' || v == 'Ariel') ? 
         this._city = v : null; 
     }

    // voted for:
    private _votedFor:string = '';
    public get VotedFor():string{
        return this._votedFor;
    }
    public set VotedFor(v: string){
        (v == 'AAA' || v == 'BBB' || v == 'CCC') ? 
        this._votedFor = v : null; 
    }
}