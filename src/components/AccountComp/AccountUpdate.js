import AccountComp from "./AccountComp"
const AccountUpdate=({openpopup})=>{
function trait(params){
    console.log("welcome in trait")
    //params={wilaya,projet,year,registre,sanadNumber,responsible,payementMethod,accountNumber,raison,raison2,date,expenses,incomes,total};
    console.log(params)
    //traitements
}
return(
    <AccountComp icon="/TickSquare.svg" role="تعديل" openpopup={openpopup} traitement={trait} />
)
}
export default AccountUpdate