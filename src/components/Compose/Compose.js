import React , {useState} from 'react'
import './Compose.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import DatePicker from 'react-date-picker'
import TimePicker from 'react-time-picker'
import Month from './Monthly'
export default function Compose() {
    const [value, onChangeDate] = useState(new Date());
    const [time, onChangeTime] = useState('10:00');
    const [toSend, setToSend] = useState({
        to:'',
        cc:'',
        subject:'',
        t:'',
        mailbody:'',
        day:'',
        date:'',
        month:'',
        
        
        
      });
    
     const onSubmit = (e) => {
        console.log(toSend);
        e.preventDefault();
        {/* --- METHOD TO SEND THE MAIL --- */}
        
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

              </div>);}
           if(t == 'weekly'){
               return(
                <div>
                    <label>Day</label>
                    <input type="text" name='day' onChange={handleChange} value={toSend.day}></input>
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
                        
                        <div class="form-group" className="check">
                        
                        <input type="checkbox"/>
                        <label for="bcc" class="col-sm-1 control-label" id="c">Recurring </label>
                        </div>
                        <div className="schedule">
                        <div class="form-group" id="w">
                            <select name ='t'  onChange={handleChange}  value={toSend.t}>
                            <option name = 't' value="weekly">Weekly</option>
                            <option name = 't' value="monthly">Monthly</option>
                            <option name = 't'  value="yearly">Yearly</option>
                            </select>
                        </div>
                        {s(toSend.t)}
                        {/* <div class="form-group" className="date">
                        
                        <DatePicker
                        id="dt"
                        onChange={onChangeDate}
                        value={value}
                        />
                        </div>
                        <div class="form-group" className="date">
                        
                        <TimePicker
                        id="dt"
                         onChange={onChangeTime}
                         value={time}
                        />
                        </div> */}
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
