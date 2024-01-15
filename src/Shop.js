import React from 'react'
import { useDispatch } from 'react-redux'
import {actionCreators} from './state/index'
import { bindActionCreators } from 'redux'
import { useSelector } from 'react-redux'


const Shop = () => {
  const dispatch = useDispatch();
  const balance = useSelector(state => state.amount)
  const actions=  bindActionCreators(actionCreators,dispatch);
  return (
      <div>
    <h2>Deposit/Withdraw</h2>
    {/*<button className='btn btn-primary mx-2'onClick={()=>{dispatch(actionCreators.withdrawMoney(100))}}>-</button>
    Update Balance

  <button className='btn btn-primary mx-2'onClick={()=>{dispatch(actionCreators.depositMoney(100))}}>+</button> */}

    <button className='btn btn-primary mx-2' onClick={()=>{actions.withdrawMoney(100)}}>-</button>
    Update Balance({balance})
    <button className='btn btn-primary mx-2'onClick={()=>{actions.depositMoney(100)}}>+</button>
    </div>
  )
}

export default Shop