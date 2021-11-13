import React, {ChangeEvent, FormEvent} from 'react';

class SearchBar extends React.Component<any, any>{

    state = {term:"Initial value!"}

    onInputChange(event: ChangeEvent<HTMLInputElement>){

        console.log(event.target.value);
    }
    onFormSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // console.log(this.state.term);
        this.props.onClickSubmit(this.state.term);
    }

    render(){
        return (
            <div className="ui segment">
                <form  onSubmit={(event)=>this.onFormSubmit(event)} className="ui form">
                    <div className="field">
                        <label htmlFor="inputBox">Image search</label>
                        {/*<input type="text" id="inputBox" onChange={this.onInputChange}/>*/}
                        <input type="text"
                               id="inputBox"
                               value={this.state.term}
                               onChange={(e => this.setState({term:e.target.value.toUpperCase()}) )}
                        />
                    </div>
                </form>
            </div>
        );
    }

}

export default SearchBar;