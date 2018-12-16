import React, {Component} from 'react'
import CreateSiteForm from './CreateSiteForm/'
class CreateSite extends Component {
    constructor(props){
        super(props)
    }

    render () {
        
        return(
            <React.Fragment>
                <CreateSiteForm/>

            </React.Fragment>
        )
    }
}
export default CreateSite