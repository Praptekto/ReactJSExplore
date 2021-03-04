import { ThemeContext } from './useContext';
import React, { Component } from 'react'

export class ClassCuseContext extends Component {
    themeStyles(dark){
        return{
                backgroundColor: dark? '#333':'#CCC',
                color: dark? '#CCC':'#333',
                padding : '2rem',
                margin:'2rem'
             }
        
    }
    render() {

        return (
            <ThemeContext.Consumer>
                {
                    (dark)=>{
                        return <div style={this.themeStyles(dark)}>
                            INI CLASS
                            </div>
                    }
                }
            </ThemeContext.Consumer>
        )
    }
}

