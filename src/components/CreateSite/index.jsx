import React, {Component} from 'react'
import CreateSiteForm from './CreateSiteForm/'
class CreateSite extends Component {
    constructor(props){
        super(props)
    }

    render () {
        const{createSiteSubmit}= this.props
        return(
            <React.Fragment>
                <CreateSiteForm createSiteSubmit={createSiteSubmit}/>

            </React.Fragment>
        )
    }
}
export default CreateSite