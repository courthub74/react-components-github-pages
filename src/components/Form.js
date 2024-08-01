import './Form.css'

export default function Form() {
    return (
        <form>

            <section id='form_section'>
                <h1>React Form</h1>
                <div className='inputs'>
                    <label>Input: 1</label>
                    <input type="text" id="input_one"/>
                </div>
                
                <div className='inputs'>
                    <label>Input: 2</label>
                    <input type="email" id="input_two"/>
                </div>

                <div className='inputs'>
                    <label>Input: 3</label>
                    <input type="email" id="input_two"/>
                </div>

                
                <button id="form_button" type="submit">Submit</button>
            </section>

        </form>
    )
}