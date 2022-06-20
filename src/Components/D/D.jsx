import React from 'react'
import { HelloContextConsumer } from '../HelloContext/HelloContext'


export default function D() {
  return (
    <div className='D'>D
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
