import React, {Component} from 'react'
import CreatePageForm from './CreatePageForm/'
class CreatePage extends Component {
constructor(props){
    super(props);

}

render(){
    return(
        <React.Fragment>
            <CreatePageForm currentPage={this.props.currentPage}/>
        </React.Fragment>
    )
}
}
export default CreatePage