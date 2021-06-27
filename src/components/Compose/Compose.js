import React , {useState} from 'react'
import './Compose.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import DatePicker from 'react-date-picker'
import TimePicker from 'react-time-picker'
import Month from './Monthly'
export default function Compose() {
    const [input, setinput] = useState({
        to:'',
        cc:[],
        subject:'',
        type:'',
        mailbody:'',
        day:'',
        date:'',
        month:'',
        time:''
        
      });
    
     const onSubmit = (e) => {
        console.log(input);
        e.preventDefault();
        {/* --- METHOD TO SEND THE MAIL --- */}
        
      };
    
      const handleChange = (e) => {
        setinput({ ...input, [e.target.name]: e.target.value });
        
      };
    //   const handleChangecc = (e) =>{
    //     setinput({ ...input, [e.target.name]: e.target.value.split(',').map(s => s.trim()) });

    //   };
      const s = (t) =>{
          if(t == 'monthly'){
              console.log('hi');
              
              return(<div>
                  <label>Date</label>
                    <input type="text" name="date" onChange={handleChange} value={input.date}></input>


                    <label>Time</label>
                            <input type="text" name='time' onChange={handleChange} value={input.time}></input>
              </div>);}
           if(t == 'weekly'){
               return(
                <div>
                    <label>Day</label>
                    <input type="text" name='day' onChange={handleChange} value={input.day}></input>


                    <label>Time</label>
                            <input type="text" name='time' onChange={handleChange} value={input.time}></input>               
                </div>
               );
           } 
           if(t=='yearly'){
               return(
                   <div>
                    <label>Date</label>
                    <input type="text" name="date" onChange={handleChange} value={input.date}></input>

  
                    <label>Month</label>
                    <input type="text" name='month' onChange={handleChange} value={input.month}></input>
                    <label>Time</label>
                            <input type="text" name='time' onChange={handleChange} value={input.time}></input>
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
                                <input type="email" class="form-control select2-offscreen" id="to" placeholder="Type email" tabindex="-1" name="to" value={input.to} onChange={handleChange}/>
                            </div>
                        </div>
                        <div class="form-group" className="input">
                            <label for="cc" class="col-sm-1 control-label">CC:</label>
                            <div class="col-sm-11">
                                <input type="email" class="form-control select2-offscreen" id="cc" placeholder="Type email" tabindex="-1" name="cc" value={input.cc}
                        onChange={handleChange}/>
                            </div>
                        </div>
                        <div class="form-group" className="input">
                            <label for="bcc" class="col-sm-1 control-label">Sub:</label>
                            <div class="col-sm-11">
                                <input type="email" class="form-control select2-offscreen" id="bcc" placeholder="Subject" tabindex="-1" name="subject" value={input.subject}
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
                            <select name ='t'  onChange={handleChange}  value={input.t}>
                            <option name = 't' value="----">----</option>
                            <option name = 't' value="weekly">Weekly</option>
                            <option name = 't' value="monthly">Monthly</option>
                            <option name = 't'  value="yearly">Yearly</option>
                            <option name = 't'  value="recurring">Recurring</option>
                            </select>
                        </div>
                        {s(input.t)}
                        </div>
                    
                        
                        <div class="form-group" className="mailbody">
                            <textarea class="form-control" id="message" name="mailbody" rows="12" placeholder="Click here to reply" value={input.mailbody}
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
