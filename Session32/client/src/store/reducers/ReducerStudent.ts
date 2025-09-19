const initialState={
    users:[
        {
            id:1,
            userName:"luong",
            gender:"nam",
            dateBirth:"11/11/2011",
            address:"hanoi"
        },
         {
            
            id:2,
            userName:"trong",
            gender:"nam",
            dateBirth:"10/10/2010",
            address:"hanoi"
        }
        ,
         {
            
            id:3,
            userName:"dat",
            gender:"nam",
            dateBirth:"12/12/2012",
            address:"hanoi"
        }
    ]
}

export const reducerStudent=(state=initialState,action:any)=>{
    switch (action.type) {
        case "ADD":
            return state;
            break;
      case "EDIT":
              return state;
            break;
              case "DELETE":
              return state;
            break;
        default:
              return state;
            break;
    }
}