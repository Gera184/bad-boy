import React from 'react'

const HokPurchase = () => {
  return (
    <div>
      <p>עסקת הוראה לחיוב חשבון</p>
      <div>עסקה חדשה</div>
      <form>
      <div>
        <h3>פרטי עסקה</h3>
      </div>
      <div>
      <input type='text' placeholder='סכום עסקה' />
      </div>
      <div>
        <lable>תשלומים</lable>
      <select>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        </select>
      </div>
      <div>
        <input type='date' placeholder='תאריך תשלום ראשון' />
      </div>
      <div>
        <h3>פרטי לקוח</h3>
      </div>
      <div>
        <select>
            <option key='0' select>מספר ושם בנק</option>
            <option key='1'>בנק אדם</option>
            <option key='2'>בנק עמית</option>
            <option key='3'>בנק אביעד</option>
        </select>
      </div>
      <div>
        <select>
            <option key='0' select>מספר סניף</option>
            <option key='1'>סניף אדם</option>
            <option key='2'>סניף עמית</option>
            <option key='3'>סניף אביעד</option>
        </select>
      </div>
      <div>
        <input type='number' placeholder='מספר חשבון' />
      </div>
      <div>
        <input type='number' placeholder='ת.ז/ח.פ' />
      </div>
      </form>  
    </div>
    
  )
}

export default HokPurchase
