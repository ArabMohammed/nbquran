import AccountComp from "./AccountComp"
const AccountAdd=({openpopup})=>{
function trait(params){
    console.log("welcome in trait")
    //params={wilaya,projet,year,registre,sanadNumber,responsible,payementMethod,accountNumber,raison,raison2,date,expenses,incomes,total};
    console.log(params)
    //traitements
}
return(
    <AccountComp icon="/Addition.svg" role="اضافة" openpopup={openpopup} traitement={trait} />
)
}
export default AccountAdd