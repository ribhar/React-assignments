import React,{useState} from "react";
import styles from "./Card.module.css";


export default function Card() {
    const [data ,setData] = useState({})
    const [cardx, setCardx] = useState("XXXX XXXX XXXX XXXX");
    const [name,setName]  = useState("Full Name");
    const [expmm,setExpmm]  = useState("XX");
    const [expyy,setExpyy]  = useState("XX");
    const [cvv,setCvv]  = useState("XXX");


    const handleChange=(e)=>{
        const inputName = e.target.name;
        setData({
            ...data,
            [inputName]: e.target.value,
        })
    }

    const handleSubmit=(e)=>{
        
            setCardx(data.cardx)
            setName(data.name)
            setExpmm(data.expmm)
            setExpyy(data.expyy)
            setCvv(data.cvv)
        e.preventDefault()
        
    }
    return (
        <>
        <div id={styles.con}>
            <div>
                <div id={styles.carddiv}>
                    <div id={styles.visaimg}></div>
                    <div id={styles.chipimg}></div>
                    <p>{cardx}</p>
                    <div>
                        <span>
                            <p className={styles.head}>CARD HOLDER</p>
                            <p className={styles.cardstuff}>{name}</p>
                        </span>
                        
                        <span>
                            <p className={styles.head}>EXPIRY</p>
                            <p className={styles.cardstuff}>{expmm}/{expyy}</p>
                        </span>
                        
                        <span>
                            <p className={styles.head}>CVV</p>
                            <p className={styles.cardstuff}>{cvv}</p>
                        </span>
                    </div>

                </div>
            </div>
            <div>
                <div id={styles.carddetails}>
                    <h2>Card Details</h2>
                    <form onSubmit={handleSubmit}>
                        <p className={styles.head}>CARDHOLDER NAME</p>
                        <input className={styles.inputbox} type="text" name="name" onChange={handleChange}  placeholder="Full Name" />
                        <p className={styles.head}>CARD NUMBER</p>
                        <input className={styles.inputbox} type="tel" name="cardx" onChange={handleChange} maxlength="19" placeholder="XXXX XXXX XXXX XXXX" />
                        <div id={styles.spansdiv}>
                            <span>
                                <p className={styles.head}>EXPIRY MONTH</p>
                                <input className={styles.inputbox} type="tel" maxlength="2" name="expmm"  onChange={handleChange} placeholder="XX"/>
                            </span>
                            
                            <span>
                                <p className={styles.head}>EXPIRY YEAR</p>
                                <input className={styles.inputbox} type="tel" maxlength="2" name="expyy" onChange={handleChange}  placeholder="XX"/>
                            </span>
                            
                            <span>
                                <p className={styles.head}>CVV</p>
                                <input className={styles.inputbox} type="tel" name="cvv" onChange={handleChange}  maxlength="3" placeholder="XXX"/>
                            </span>
                        </div>
                        <h5>Payment amount: 12300/-</h5>
                        <input type="submit" id={styles.paybtn}/>
                    </form>
                </div>
                
            </div>
        </div>
        
        </>
    )
}

