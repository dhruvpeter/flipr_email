import React , {useState} from 'react'
import './Compose.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import DatePicker from 'react-date-picker'
import TimePicker from 'react-time-picker'
import Month from './Monthly'
import axios from 'axios'
export default function Compose({ token }) {
    const [toSend, setToSend] = useState({
        to:'',
        cc:'',
        subject:'',
        t:'',
        mailbody:'',
        day:'',
        date:'',
        month:'',
        time: ''
      });

    const scheduleMails = async (url, schedule) => {

        const options = {
            headers: { authorization: `BEARER ${token}`}
        };

        const res = await axios.post(url, {
                recipients: `${toSend.to}, ${toSend.cc}`,
                subject: toSend.subject,
                body: toSend.mailbody,
                schedule 
            },
            options
        );

        if(res.data && res.data.success) {
            // success redirect

        } else {
            // failure redirect
        }

        console.log(res);
    }
    
     const onSubmit = (e) => {
        console.log(toSend);
        e.preventDefault();
        {/* --- METHOD TO SEND THE MAIL --- */}

        switch(toSend.t) {
            case 'recurring':
                // do the processing here
                scheduleMails('http://localhost:3000/api/emails/recurring', { timeGap: 30 });
                break;
            case 'weekly':
                scheduleMails(
                    'http://localhost:3000/api/emails/weekly', 
                    { 
                        day: toSend.day, 
                        time: toSend.time 
                    }
                );
                break;
            case 'monthly':
                scheduleMails(
                    'http://localhost:3000/api/emails/monthly', 
                    { 
                        date: toSend.date,
                        time: toSend.time 
                    }
                );
                break;
            case 'yearly':
                scheduleMails(
                    'http://localhost:3000/api/emails/yearlyy', 
                    { 
                        month: toSend.month, 
                        date: toSend.date, 
                        time: toSend.time 
                    }
                );
                break;
            default:
                console.log('Select type');
        }        
      };
    
      const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
        
      };
      const s = (t) =>{
          if(t == 'monthly'){
              console.log('hi');
              
              return(<div>
                  <label>Date</label>
                    <input type="text" name="date" onChange={handleChange} value={toSend.date}></input>


                    <label>Time</label>
                            <input type="text" name='time' onChange={handleChange} value={toSend.time}></input>
              </div>);}
           if(t == 'weekly'){
               return(
                <div>
                    <label>Day</label>
                    <input type="text" name='day' onChange={handleChange} value={toSend.day}></input>


                    <label>Time</label>
                            <input type="text" name='time' onChange={handleChange} value={toSend.time}></input>               
                </div>
               );
           } 
           if(t=='yearly'){
               return(
                   <div>
                    <label>Date</label>
                    <input type="text" name="date" onChange={handleChange} value={toSend.date}></input>

  
                    <label>Month</label>
                    <input type="text" name='month' onChange={handleChange} value={toSend.month}></input>
                    <label>Time</label>
                            <input type="text" name='time' onChange={handleChange} value={toSend.time}></input>
                   </div>
               )
           }

          
      };
    return (
        <div className="b">
        <div class="col-md-6">
            <div class="panel panel-default">
                <div class="panel-body message">
                    <p class="text-center">New Message</p>
                    <form class="form-horizontal" role="form">
                        <div class="form-group" className="input">
                            <label for="to" class="col-sm-1 control-label">To:</label>
                            <div class="col-sm-11">
                                <input type="email" class="form-control select2-offscreen" id="to" placeholder="Type email" tabindex="-1" name="to" value={toSend.to} onChange={handleChange}/>
                            </div>
                        </div>
                        <div class="form-group" className="input">
                            <label for="cc" class="col-sm-1 control-label">CC:</label>
                            <div class="col-sm-11">
                                <input type="email" class="form-control select2-offscreen" id="cc" placeholder="Type email" tabindex="-1" name="cc" value={toSend.cc}
                        onChange={handleChange}/>
                            </div>
                        </div>
                        <div class="form-group" className="input">
                            <label for="bcc" class="col-sm-1 control-label">Sub:</label>
                            <div class="col-sm-11">
                                <input type="email" class="form-control select2-offscreen" id="bcc" placeholder="Subject" tabindex="-1" name="subject" value={toSend.subject}
                        onChange={handleChange}/>
                            </div>
                        </div>
                    
                    </form>
                    
                    <div class="col-sm-11 col-sm-offset-1">
                        
                        <div class="btn-toolbar" role="toolbar">
                            
                            <div class="btn-group">
                                <button class="btn btn-default"><span class="fa fa-bold"></span></button>
                                <button class="btn btn-default"><span class="fa fa-italic"></span></button>
                                <button class="btn btn-default"><span class="fa fa-underline"></span></button>
                            </div>

                            
                            
                            
                        </div>
                        {/* <br>	 */}
                        

                        <div className="schedule">
                            <p>Schedule:</p>
                        <div class="form-group" id="w">
                            <select name ='t'  onChange={handleChange}  value={toSend.t}>
                            <option name = 't' value="----">----</option>
                            <option name = 't' value="weekly">Weekly</option>
                            <option name = 't' value="monthly">Monthly</option>
                            <option name = 't'  value="yearly">Yearly</option>
                            <option name = 't'  value="recurring">Recurring</option>
                            </select>
                        </div>
                        {s(toSend.t)}
                        </div>
                    
                        
                        <div class="form-group" className="mailbody">
                            <textarea class="form-control" id="message" name="mailbody" rows="12" placeholder="Click here to reply" value={toSend.mailbody}
                        onChange={handleChange}></textarea>
                        </div>
                        
                        <div class="form-group" className='send'>	
                            <button type="submit" class="btn btn-success" onClick={onSubmit}>Send</button>
                            
                        </div>
                    </div>	
			</div>	
		</div>	
	</div>
    </div>
    )
}
