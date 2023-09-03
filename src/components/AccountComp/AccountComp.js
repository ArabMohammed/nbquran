import styles from './account.module.css'
import { useState } from "react"
import Modal from 'react-modal';
import Image from "next/image";
import bgImage from '../../../public/islamic-pattern.svg'
import wilayas from './Algerian_wilayas.json'
/************ */
import { NativeSelect ,Select }from '@mantine/core'
import { IconChevronDown } from '@tabler/icons-react';
const AccountComp=({openpopup , role, icon ,traitement})=>{
  const [modalIsOpen, setIsOpen] = useState(openpopup);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }
  /****************************************** */
  /************Projet temporaires*************/
  const projets=[
    {
      value:"مشروع1",label:"مشروع1"
    },{
      value:"مشروع2",label:'مشروع2'
    },
    {
      value:"مشروع3",label:'مشروع3'
    }
  ]
  /****************State management*************************** */
  const [formData,setFormData]=useState({
    year:'',
    registre:'',
    sanadNumber:'',
    responsible:'',
    payementMethod:'',
    accountNumber:'',
    raison:'',
    raison2:'',
    date:Date.now(),
    expenses:'',
    incomes:'',
    total:''

  })
  const [wilaya,setWilaya]=useState(wilayas[0].value);
  const [projet,setProjet]=useState(projets[0].value);
  const {year,registre,sanadNumber,responsible,payementMethod,accountNumber,raison,raison2,date,expenses,incomes,total}=formData;
    
  const onChange = e => setFormData({
         ...formData,[e.target.name]:e.target.value
  });
  /*********************************** */
  const [PayementMethod,setPayementMethod]=useState(projets[0].value)
  const onSubmit = e =>{
    e.preventDefault();
    const params={wilaya,projet,year,registre,sanadNumber,responsible,payementMethod,accountNumber,raison,raison2,date,expenses,incomes,total};
    traitement(params)
    // Create a new Addition 
  };
  /************************************************************ */
  return(
        <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
            className="fixed inset-0 bg-black bg-opacity-25  backdrop-blur-sm flex justify-center items-center border-rounded-xl"
        >
        <div className="w-[1000px]">
        <div className="bg-white  rounded">
          <div className="bg-custom opacity-65 h-[70px] mb-5 text-xl font-semibold text-white rounded flex items-center justify-center">
            <Image  className={styles.image}src={bgImage} alt="footer image"/>
            <h3 className={styles.title}>{role}</h3>
          </div>
          <form>
            <div className={styles.container1}>
                <div className={styles.field}>          
                    <NativeSelect 
                    className={styles.fitContent1}
                    data={wilayas} 
                    rightSection={<IconChevronDown size="20px" />}
                    rightSectionWidth={40}
                    searchable
                    onChange={(event) => setWilaya(event.currentTarget.value)}
                    transitionProps={{ transition: 'pop-top-left', duration: 80, timingFunction: 'ease' }}
                    withinPortal
                    required
                    name="wilaya"
                    id="wilaya"
                    styles={(theme) => ({
                      item: {
                        color:'#80043c',
                        "text-align-last":"right",
                        "padding-right":"2px",
                        '&[data-selected]': {
                          '&, &:hover': {
                            backgroundColor:"#80043c"
                          },
                        },
                      }, dropdown: { color: '#80043c' },
                      itemsWrapper: { color: '#80043c' },
                      description: { color: '#80043c' },
                      separatorLabel: { color: '#80043c' } 
                    })}
                    />
                    <label for="wilaya" className={styles.fitContent}>الولاية</label>
                </div>
                 <div className={styles.field}>
                    <input id="date" className={styles.fitContent1} name="year" value={year} onChange={e => onChange(e)}  type="numeric"  required/>
                    <label for="date" className={styles.fitContent} >السنة</label>
                  </div>
                  <div className={styles.field}>
                    <input id="sanadNumber" className={styles.fitContent1} name="sanadNumber" value={sanadNumber} onChange={e => onChange(e)}  type="numeric"  required/>
                    <label for="sanadNumber" className={styles.fitContent} >رقم السند</label>
                  </div>
                  <div className={styles.field}>
                    <input id="registre" className={styles.fitContent1} name="registre" value={registre} onChange={e => onChange(e)} type="numeric"  required/>
                    <label for="registre" className={styles.fitContent} >السجل</label>
                  </div>
                  
                  <div className={styles.field}>
                    <NativeSelect 
                    className={styles.fitContent1}
                    data={projets} 
                    rightSection={<IconChevronDown size="20px" />}
                    rightSectionWidth={40}
                    onChange={(event) => setProjet(event.currentTarget.value)}
                    transitionProps={{ transition: 'pop-top-left', duration: 80, timingFunction: 'ease' }}
                    required
                    name="projet"
                    id="projet"
                    />
                    <label for="projet" className={styles.fitContent} >المشروع</label>
                  </div>

                  <div className={styles.field}>
                    <input id="responsible" className={styles.fitContent1} name="responsible" value={responsible} onChange={e => onChange(e)}  type="numeric"  required/>
                    <label for="responsible" className={styles.fitContent}>المكلف </label>
                  </div>
                  <div className={styles.field}>
                    <input id="accountNumber" className={styles.fitContent1} name="accountNumber" value={accountNumber} onChange={e => onChange(e)} type="numeric"  required/>
                    <label for="accountNumber" className={styles.fitContent}>رقم الحساب </label>
                  </div>
                  <div className={styles.field}>
                    <input id="payementMethod" className={styles.fitContent1} name="payementMethod" value={payementMethod} onChange={e => onChange(e)} type="numeric"  required/>
                    <label for="payementMethod" className={styles.fitContent}>طريقة الدفع </label>
                  </div>
                  <div className={styles.field}>
                    <input id="raison2" className={styles.fitContent1} name="raison2" value={raison2} onChange={e => onChange(e)} type="numeric"  required/>
                    <label for="raison2" className={styles.fitContent}>السبب 2</label>
                  </div>
                  <div className={styles.field}>
                    <input id="raison" className={styles.fitContent1} name="raison" value={raison} onChange={e => onChange(e)}  type="numeric"  required/>
                    <label for="raison" className={styles.fitContent}>السبب</label>
                  </div>
                  <div className={styles.field}>
                    <input id="expenses" className={styles.fitContent1} name="expenses" value={expenses} onChange={e => onChange(e)} type="numeric"  required/>
                    <label for="expenses" className={styles.fitContent}>مصاريف</label>
                  </div>
                  <div className={styles.field}>
                    <input id="date" className={styles.fitContent1} name="date" value={date} onChange={e => onChange(e)}  type="date"  required/>
                    <label for="date" className={styles.fitContent}>التاريخ</label>
                  </div>
                  <div className={styles.field}>
                    <input id="total" className={styles.fitContent1} name="total" value={total} onChange={e => onChange(e)} type="numeric"  required/>
                    <label for="total" className={styles.fitContent}>المجموع</label>
                  </div>
                  <div className={styles.field}>
                    <input id="incomes" className={styles.fitContent1} name="incomes" value={incomes} onChange={e => onChange(e)} type="numeric"  required/>
                    <label for="incomes" className={styles.fitContent}>مداخيل</label>
                  </div>
             </div>
             <div className={styles.container2}>
                  <button class className={styles.button2} type='submit' onClick={e => onSubmit(e)}>
                   {role}
                   <Image src={icon} width={15} height={15}  alt="footer image"/>
                  </button>
                 <button className={styles.button1} onClick={closeModal}>الرجوع</button>
              </div>
          </form>
        </div>
        </div>
        </Modal>
    )

}
export default AccountComp