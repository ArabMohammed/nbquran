"use client"
import Link from "next/link"
import { useState } from "react"
import Modal from 'react-modal';
import Image from "next/image";
import { Select }from '@mantine/core'
import Styles from './masrouf.module.css'
const MasroufForm=({openpopup})=>{
    if(!openpopup) return null ;
    /************************** */
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
  /****************Form traitement**********************/
  const PayementOptions1=[
    {
      value:"Manual",label:"Manual",name:"PayementMethod"
    },{
      title:"Carte Dahabia",label:'Carte Dahabia',name:"PayementMethod"
    }
  ]
  const PayementOptions=[
    {
      title:"Manual"
    },{
      title:"Carte Dahabia"
    }
  ]
  const [formData,setFormData]=useState({
    SanadNumber:'',
    Sum:'',
    PayementMethod:PayementOptions[0].title,
    date:Date.now(),
    raison:'',
    mean:'',
  })
  const {SanadNumber,Sum,PayementMethod,date,raison,mean}=formData;
    
  const onChange = e => setFormData({
         ...formData,[e.target.name]:e.target.value
  });
  const onSubmit = e =>{
    e.preventDefault();
    console.log(SanadNumber,Sum,PayementMethod,date,raison,mean);
    // Create a new Addition 
  };
  
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

            <form>
              <div className="bg-custom opacity-65 h-[70px] mb-5 text-xl font-semibold text-white rounded flex items-center justify-center">
                <Image  className={Styles.image}src="/islamic-pattern.svg"  height={70} width={1000} alt="footer image"/>
                <h3 className={Styles.title}>اضافة </h3>
              </div>
              <div className={Styles.container}>
                <div className={Styles.container1}>
                  <div className={Styles.field}>
                    <input id="date" className={Styles.fitContent1} name="SanadNumber" value={SanadNumber} type="numeric" onChange={e => onChange(e)} required/>
                    <label for="date" className={Styles.fitContent} >رقم السند</label>
                  </div>
                  <div className={Styles.field}>
                    <input id="date" className={Styles.fitContent1} name="Sum" value={Sum} type="numeric" onChange={e => onChange(e)} required/>
                    <label for="date" className={Styles.fitContent}>المبلغ</label>
                  </div>
                  <div className={Styles.field}>
        
                    <Select 
                      className={Styles.fitContent1}
                      data={PayementOptions1} 
                      onChange={e => onChange(e)}
                      name="PayementMethod"
                    />
                    <label for="date" className={Styles.fitContent}>طريقة الدفع</label>
                  </div>
                </div>
                <div className={Styles.container1}>
                  <div className={Styles.field}>
                    <input className={Styles.fitContent1} id="date" name="date" value={date} type="date" onChange={e => onChange(e)} required/>
                    <label className={Styles.fitContent } for="date">التاريخ</label>
                  </div>
                  <div className={Styles.field}>
                    <input className={Styles.fitContent1} id="date" name="raison" value={raison} type="text" onChange={e => onChange(e)} required/>
                    <label className={Styles.fitContent} for="date">السبب</label>
                  </div>
                  <div className={Styles.field}>
                    <input className={Styles.fitContent1} id="date" name="mean" value={mean} type="text" onChange={e => onChange(e)} required/>
                    <label className={Styles.fitContent} for="date">بواسطة</label>
                  </div>
                </div>
              </div>
              <div className={Styles.container2}>
                 <button className={Styles.button1} onClick={closeModal}>الرجوع</button>
                 <button class className={Styles.button2} type='submit' onClick={e => onSubmit(e)}>
                   اضافة
                   <Image src="/Vector.svg" width={15} height={15}  alt="footer image"/>
                  </button>
              </div>
            </form>
            </div>
            </div>
            </Modal>
   )
}
export default MasroufForm