export default function CompB() {
  return (
    <div>
        <h1>Form</h1>
        <form action="">
            <fieldset>
                First Name <input type="text" />
                <br />
                Last Name <input type="text" />
                <br />
                Email : <input type="email" />
                <br />
                Date : <input type="datetime-local" />
                <br />
                Work Exp : 0<input type="range" min="0" max="100" step="10" value="10" />10
                <br />
                Gender : 
                <input type="radio" name="Gender" value="Male" /> Male
                <input type="radio" name="Gender" value="Female" /> Female
                <input type="radio" name="Gender" value="Other" /> Other
                <br />
                State : 
                <select >
                    <option value=""></option>
                    <option value="UP">UP</option>
                    <option value="UK">UK</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Nodia">Nodia</option>
                </select>
                <br />
                <textarea name="Message" rows="4" cols="50" placeholder="Message"></textarea>
                <br />
                <br />
                <input type="checkbox" value="Filled" /> Filled
                <input type="checkbox" value="UnFilled" /> UnFilled
                <br />
                <input type="submit" value="SUBMIT" />
            </fieldset> 
        </form>
    </div>
  )

}


