import React from 'react'
import { HelloContextConsumer } from '../HelloContext/HelloContext'


export default function F() {
  return (
    <div className='F'>
        <HelloContextConsumer>
            {
                (contextVal)=>{
                    return <div>hello {contextVal}</div>
                }
            }
        </HelloContextConsumer>
    </div>
  )
}
