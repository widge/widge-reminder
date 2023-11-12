import { config } from 'dotenv';
import {sendReminder} from './messageSender';
import * as console from 'console';

config();

if(process.env.RECIPIENT_NUMBER) {
  const response = await sendReminder(process.env.RECIPIENT_NUMBER);
}

