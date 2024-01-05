import React from "react";

class FormHWtask extends React.Component {
    state = {
        email: '',
        agree: false
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    validateEmail = () => {
        if(!(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).
        test(this.state.email)) {
            alert("Your email isn't correct")
        }
    }

    handleCheckBoxChange = (event) => {
        this.setState({[event.target.name]: event.target.checked})
    }

    hendleSubmit = () => {
        if(this.state.agree === true && this.state.email !== '') {
            alert("Форма успешно отправлена")
            this.setState({
                email: "",
                agree: false
            })
            return
        } else {
            alert('Заполните корректно все поля')
        }
    }

    render() {
        const {email, agree} =this.state
        return <div>
            <input 
                type="email" 
                name="email" 
                placeholder="email"
                value={email}
                onChange={this.handleChange}
                onBlur={this.validateEmail}
            />
            <br />
            <br />
            <label>
                <input 
                    type="checkbox" 
                    name="agree" 
                    checked={agree}
                    onChange={this.handleCheckBoxChange}
                />
                I agree with therms and conditions
            </label>
            <button onClick={this.hendleSubmit}>Отправить</button>
        </div>
    }
}

export {FormHWtask}