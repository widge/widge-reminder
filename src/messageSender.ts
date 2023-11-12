import axios from 'axios';
import * as process from 'process';

export const sendReminder = async (recipient: string) => {
  
  const message = {
    messaging_product: 'whatsapp',
    to: recipient,
    type: 'template',
    template: {
      name: 'reminder',
      language: {
        code: 'en_GB'
      }
    }
  };
  
  try {
    const response = await axios.post(
      `https://graph.facebook.com/${process.env.VERSION}/`+
      `${process.env.ACCOUNT_PHONE_ID}/messages`,
      message,
      {
        'headers': {
          'Authorization': `Bearer ${process.env.ACCESS_TOKEN}`,
          'Content-Type': 'application/json'
        }
      }
    );
     
    const consoleMsg = response.status === 200 ?
      'Reminder Sent Successfully' :
      `An Error occurred sending reminder ${response.data}`;
     
    console.log(consoleMsg);
    
    return response;
   
  }catch (error){
    console.log(error);
  }
  
  return '';
};