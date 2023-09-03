"use client"
import styles from './suppressionPopup.module.css'
import { useState } from "react"
import Modal from 'react-modal';
import Image from "next/image";

const SuppressionPopup=({openpopup})=>{

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
  return(
<Modal
    isOpen={modalIsOpen}
    onAfterOpen={afterOpenModal}
    onRequestClose={closeModal}
    contentLabel="Example Modal"
    className="fixed inset-0 bg-black bg-opacity-25  backdrop-blur-sm flex justify-center items-center border-rounded-xl"
>
<div className="w-[600px]">
    <div className="bg-white  rounded">
        <div className="bg-custom opacity-65 h-[70px]  text-xl font-semibold text-white rounded flex items-center justify-center">
            <Image  className={styles.image}src="/islamic-pattern.svg"  height={70} width={600} alt="footer image"/>
                <h3 className={styles.title}>الحدف </h3>
       </div>
       <div className='flex items-center justify-center'>
       <Image  src="/Questions.svg"  height={200} width={200} alt="footer image"/>
       </div>
       <div className="h-[100px] items-center justify-center flex flex-col mt-5 mb-5 ">
        <h1 className={styles.h1}>هل أنت متأكد من حدف هاته العناصر ؟ </h1>
        <h2 className={styles.h2}>ان قمت بحدفها فلن تتمكن من الوصول اليها مرة أخرى  </h2>
       </div>
       <div className={styles.container2}>
                 <button className={styles.button1} onClick={closeModal}>العودة</button>
                 <button class className={styles.button2} type='submit' onClick={e => onSubmit(e)}>
                   تأكيد الحدف
                   <Image src="/Delete.svg" width={25} height={25}  alt="footer image"/>
                  </button>
        </div>
  </div>
</div>
</Modal>
  )
}
export default SuppressionPopup