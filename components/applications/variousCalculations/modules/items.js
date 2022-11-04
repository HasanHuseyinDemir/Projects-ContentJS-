__thisFolder="./components/applications/variousCalculations";
__selected="Hesaplamalar";
__selectedCategory="date";
__items=[
    {
        title:"Tarih",
        color:"purple",
        src:`${__thisFolder}/date/index.html`,
        image:`${__thisFolder}/icons/time.png`,
        selected:false,
        detail:"date"
    },
    {
        title:"Boyut",
        color:"cyan",
        src:`${__thisFolder}/size/index.html`,
        image:`${__thisFolder}/icons/height.png`,
        selected:false,
        detail:"height",
    },
    {
        title:"Matematik",
        color:"orange",
        src:`${__thisFolder}/math/index.html`,
        image:`${__thisFolder}/icons/math.png`,
        selected:false,
        detail:"math"
    },
    {
        title:"Finans",
        color:"gold",
        src:`${__thisFolder}/finance/index.html`,
        image:`${__thisFolder}/icons/finance.png`,
        selected:false,
        detail:"finance"
    },
    {
        title:"Metin",
        color:"yellowgreen",
        src:`${__thisFolder}/finance/index.html`,
        image:`${__thisFolder}/icons/string.png`,
        selected:false,
        detail:"string"
    },
]
__selectItem=(index)=>{
    __items.map((item)=>{
        item.selected=false;
    })
    __items[index].selected=true;
    __selected=__items[index].title+" Hesaplamaları";
    __selectedCategory=__items[index].detail;
    set();
}
__getItems=()=>{
    return (__items.map((item,index)=>{
        return`
        <div class="__item ${item.selected?"__itemSelected":''} bg${item.color}" onclick="__selectItem(${index}),set('page')">
        <img  src="${item.image}"/>
        <br>
        <span>${item.title}</span>
        </div>
        
        `
    }).join(""))
}

load.script(`${__thisFolder}/modules/list.js`,"$$");